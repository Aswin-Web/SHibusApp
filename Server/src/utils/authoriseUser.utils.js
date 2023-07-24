const { JWT_KEY } = require("../config");

const jwt = require("jsonwebtoken");

async function authorizeUser(token) {
  try {
    const bearerToken=token.split(' ').pop()
    const _id = await jwt.verify(bearerToken, JWT_KEY, function (err, decoded) {
      return decoded._id //user_id
    });
    return _id
  } catch (error) {
    console.log(error);
    throw new Error("Token Verification Failed");
  }
}

module.exports=authorizeUser