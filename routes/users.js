var express = require("express");
var router = express.Router();
const {
  getAllUsers,
  getUpdate,
  postUpdate,
  postDelete,
  getCreateUser,
  postCreateUser,
} = require("../controllers/usersController");

/* GET users listing. */
router.get("/", getAllUsers);

/* GET users listing. */
router.get("/update/:id", getUpdate);

/* POST users. */
router.post("/update", postUpdate);

router.get("/deleteUser/:id", postDelete);

router.get("/create", getCreateUser);
router.post("/create", postCreateUser);

module.exports = router;
