const oauth2Config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.OAUTH_SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
};

export { oauth2Config };
