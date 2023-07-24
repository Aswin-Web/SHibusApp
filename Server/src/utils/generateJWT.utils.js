const { JWT_KEY } = require("../config");


const jwt = require("jsonwebtoken");

async function generateJWT(_id = "646a2b9eb629511a5c4c7554") {
  const token = await jwt.sign(
    {
      _id: _id,
    },
    JWT_KEY,
    { expiresIn: 60 * 60 * 60 * 60 }
  );
  return token;
}

module.exports = generateJWT;