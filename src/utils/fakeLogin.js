const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

export const fakeLogin = (username, password) => {
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    return { success: true, message: 'Login successful' };
  }
  return { success: false, message: 'Invalid username or password' };
};
