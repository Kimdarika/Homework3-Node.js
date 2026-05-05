const userRepository = require("../repositories/UserRepository");

class UserService {
  async getUsers() {
    return await userRepository.getAllUsers();
  }

  async getUserById(id) {
    const user = await userRepository.getUserById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  async createUser(data) {
    if (!data.name || !data.email) {
      throw new Error("Name and Email required");
    }
    return await userRepository.createUser(data);
  }

  async updateUser(id, data) {
    return await userRepository.updateUser(id, data);
  }

  async deleteUser(id) {
    return await userRepository.deleteUser(id);
  }
}

module.exports = new UserService();