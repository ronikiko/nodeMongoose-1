const Users = require("../models/Users");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    if (users) return res.render("users", { title: "users", users });
  } catch (error) {
    console.log(error);
    return res.render("users", { title: "users", users: [] });
  }
};

// GET passing the user info to from to update db
exports.getUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById({ _id: id });
    if (user) {
      return res.render("userInfo", {
        page: "update",
        title: "update user",
        user,
        message: "",
      });
    }
  } catch (error) {
    return res.render("userInfo", {
      page: "update",
      title: "update user",
      user: [],
      message: "No user Found",
    });
  }
};

exports.postUpdate = async (req, res) => {
  const id = req.body.id;

  const updateUser = new Users({
    _id: id,
    username: req.body.username,
    lastname: req.body.lastname,
  });

  await Users.findByIdAndUpdate(id, updateUser);
  res.redirect("/");
};

exports.postDelete = async (req, res) => {
  const id = req.params.id;

  await Users.findByIdAndDelete(id);
  res.redirect("/");
};

exports.getCreateUser = (req, res) => {
  res.render("create", { title: "Create User Page" });
};

exports.postCreateUser = (req, res) => {
  const { username, lastname } = req.body;
  const user = new Users({
    username,
    lastname,
    image: 'https://lh3.googleusercontent.com/proxy/bjI62-Aser18HS6rZs4h0wSBMp7hDLY6NC79tLLWxiMLxerNOAolqNkuFZDnaZEo834H1Yf7-Qn5Z1iZyT4NgKsC8EvC8Hu2bfabnCT-oHf6ma8vwxXv19AHEHnaX9rXf8vHfHtMU0Ooy3oOawzJBcBHETjUkU-EIPbBLaUXZrUcy7rTIvJTRE8j9HC2tSJjhpU5i8o5f_FqvSCc7xu5'
  });
  user.save().then(() => {
    res.redirect("/");
  });
};
