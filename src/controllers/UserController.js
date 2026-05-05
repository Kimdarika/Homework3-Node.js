const BaseController = require("./BaseController");
const userService = require("../services/UserService");

class UserController extends BaseController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      this.sendResponse(res, users);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      this.sendResponse(res, user);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async createUser(req, res) {
    try {
      const result = await userService.createUser(req.body);
      this.sendResponse(res, result, "User created");
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async updateUser(req, res) {
    try {
      const result = await userService.updateUser(req.params.id, req.body);
      this.sendResponse(res, result, "User updated");
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await userService.deleteUser(req.params.id);
      this.sendResponse(res, result, "User deleted");
    } catch (error) {
      this.sendError(res, error);
    }
  }
}

module.exports = new UserController();