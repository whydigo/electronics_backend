const User = require("../models/Users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.usersController = {
  // Получение всех пользователей
  getAllUsers: async (req, res) => {
    const users = await User.find();

    res.json(users);
  },

  // Регистрация пользователей
  registerUser: async (req, res) => {
    const { login, password } = req.body;

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
    const user = await User.create({ login: login, password: hash });
    
    res.json(user);
  },

  // Непосредственно авторизация
  loginUser: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({ login });
    if (!candidate) {
      return res.status(401).json("Убедитесь в верности логина или пароля");
    }

    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) {
      return res.status(401).json("Убедитесь в верности логина или пароля");
    }

    const payload = {
      id: candidate._id,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });

    res.json({ token });
  },
};