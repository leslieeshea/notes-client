import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-er4ddhmh.auth0.com',
  clientID: 'hKyI623J6E6Y50Bp7MjcUM2tsEgWaGlR',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user profile.');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not log in.');
      }
    });
  });
};
