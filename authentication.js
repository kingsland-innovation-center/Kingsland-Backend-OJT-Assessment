const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "2days",
  });
};

const verifyToken = (request, response) => {
  const authHeader = request.headers["authorization"];
  console.log(request.headers);
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return response.status(401).send({ message: "No token provided" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      if (err) {
        return response.status(403).send({ message: err.message });
      }
      console.log(res);
      return { id: res.id, username: res.username };
    });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
