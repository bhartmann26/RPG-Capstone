export async function addGameToLibrary(userId, gameId) {
  return { success: true };
}

export async function getUserLibrary(userId) {
  return [{ game_id: 1, title: "Halo Infinite" }];
}
