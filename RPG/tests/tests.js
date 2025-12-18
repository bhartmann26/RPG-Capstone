// TDD testing srpits to run with "node tests/tests.js"
import { searchGames } from '../../src/services/gameService.js';
import { addGameToLibrary, getUserLibrary } from '../../src/services/libraryService.js';
import { createUser, loginUser } from '../../src/services/userService.js';


describe("Game Search", () => {
  test("returns games matching search keyword", async () => {
    const result = await searchGames("Halo");
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].title).toContain("Halo");
  });
});

describe("User Library", () => {
  test("adds a game to user library", async () => {
    const response = await addGameToLibrary(1, 1);
    expect(response.success).toBe(true);
  });

  test("retrieves saved games for user", async () => {
    const library = await getUserLibrary(1);
    expect(library.length).toBeGreaterThan(0);
  });
});

describe("User Accounts", () => {
  test("creates a new user account", async () => {
    const user = await createUser("patrick", "patrick@email.com");
    expect(user.username).toBe("patrick");
  });

  test("logs in existing user", async () => {
    const user = await loginUser("patrick");
    expect(user).not.toBeNull();
  });
});
