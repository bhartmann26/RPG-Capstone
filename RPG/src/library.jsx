import { useEffect, useState } from "react";
import axios from "axios"; // or fetch API

export default function Library({ userId }) {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user library on mount
  useEffect(() => {
    async function fetchLibrary() {
      try {
        setLoading(true);
        const response = await axios.get(`/api/library/${userId}`);
        setLibrary(response.data);
      } catch (err) {
        console.error("Failed to fetch library", err);
        setError("Failed to load your library.");
      } finally {
        setLoading(false);
      }
    }

    if (userId) fetchLibrary();
  }, [userId]);

  // Handler to toggle saved/liked (example)
  const toggleLiked = async (gameId, currentLiked) => {
    try {
      const response = await axios.post("/api/library", {
        userId,
        gameId,
        liked: !currentLiked,
      });

      // Update state locally
      setLibrary((prev) =>
        prev.map((game) =>
          game.game_id === gameId ? { ...game, liked: !currentLiked } : game
        )
      );
    } catch (err) {
      console.error("Failed to toggle liked", err);
    }
  };

  if (loading) return <p>Loading your library...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Your Library</h1>
      {library.length === 0 ? (
        <p>You haven't saved any games yet.</p>
      ) : (
        <ul>
          {library.map((game) => (
            <li key={game.game_id}>
              <strong>{game.title}</strong>
              <button onClick={() => toggleLiked(game.game_id, game.liked)}>
                {game.liked ? "❤️ Liked" : "🤍 Like"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
