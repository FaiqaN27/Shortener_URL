const jwt = require('jsonwebtoken');
const SECRET = "kP9#X7z!Qw2dL8m^Rt4@eGh5vBn0Ty";

function setUser(user) {
  return jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role
  }, SECRET)
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET)
  }
  catch (error) {
    return null;
  }
}

module.exports = {
  getUser, setUser
}