const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { id, email, password } = req.body;

    if (!id || !email || !password) {
      return res.status(400).send("Faltan datos");
    }

    const [user, created] = await User.findOrCreate({
      where: {
        id,
        email,
        password
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postUser;
