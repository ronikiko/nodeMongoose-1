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
  });
  user.save().then(() => {
    res.redirect("/");
  });
};
