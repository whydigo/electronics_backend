
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
 
  const auth = req.headers.authorization;
  
  if (!auth) {
    res.status(401).json("Нет доступа");
  }
  const [type, token] = auth.split(" ");
  if (type !== "Bearer") {
    return res.status(401).json("Неверный тип токена");
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY);
    next();
  } catch (error) {
    return res.status(401).json("Неверный токен");
  }

};