const express = require('express');
const app = express();

// Middleware function to check for a secret token
const authenticate = (req, res, next) => {
  const secretToken = req.headers['x-secret-token'];
  //checking if the token matches for an additional security
  if (secretToken === 'ComPonentOrienTedProgramming310') {
    // Token is valid, proceed to the next middleware or route
    next();
  } else {
    // Token is invalid, send a 403 Forbidden response
    res.status(403).send('Access Denied');
  }
};

// Appling the authentication middleware to the /key route
app.get('/key', authenticate, (req, res) => {
  const apiKey = process.env.APIKEY || '0000';
  res.status(200).send(apiKey);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
