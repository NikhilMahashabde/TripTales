const oauth2Config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "1a8nXyVnQ4SlcfCNqhIjuXUzRAOD4SE8",
  issuerBaseURL: "https://dev-8v4vi8wg2ppia707.us.auth0.com",
};

export { oauth2Config };
