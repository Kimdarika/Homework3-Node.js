const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// GET all
router.get("/users", (req, res) => userController.getUsers(req, res));

// GET by id
router.get("/users/:id", (req, res) =>
  userController.getUserById(req, res)
);

// POST
router.post("/users", (req, res) =>
  userController.createUser(req, res)
);

// PUT (full update)
router.put("/users/:id", (req, res) =>
  userController.updateUser(req, res)
);

// PATCH (partial update)
router.patch("/users/:id", (req, res) =>
  userController.updateUser(req, res)
);

// DELETE
router.delete("/users/:id", (req, res) =>
  userController.deleteUser(req, res)
);

module.exports = router;