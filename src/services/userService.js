export async function createUser(username, email) {
  return { user_id: 1, username, email };
}

export async function loginUser(username) {
  return { user_id: 1, username };
}
