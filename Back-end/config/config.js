const jwt = require("jsonwebtoken");
const secretKey = "QLL3oiyKtYuiRClmpplDhvaFEGBrsMlame1EjZuAVPSUavyLGpbhFjtfesVLenit"; // Replace 'your_secret_key' with your own secret key for JWT

// Middleware function for token-based authentication
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Authentication token not provided" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    // You can optionally store the user object from the token in the request object for future use
    req.user = user;

    // Continue with the next middleware or route handler
    next();
  });
};

module.exports = { authenticateToken };
