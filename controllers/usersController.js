const { avatar } = require('../models/GravararApi')
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
  try {
    await Users.findByIdAndUpdate(id, updateUser);
    res.redirect("/");
  } catch (err) {
    console.log(err)
  }
};

exports.postDelete = async (req, res) => {
  const id = req.params.id;

  await Users.findByIdAndDelete(id);
  res.redirect("/");
};

exports.getCreateUser = (req, res) => {
  res.render("create", { title: "Create User Page" });
};

exports.postCreateUser = async (req, res) => {
  const { username, lastname, gender } = req.body;
  try {
    const avatarImage = await avatar(gender)
    const imageUrl = avatarImage.data.results[0].picture.large
    const user = new Users({
      username,
      lastname,
      image: imageUrl
    });

    await user.save()
    res.redirect("/");

  } catch (err) {
    console.log(err)
  }



};
