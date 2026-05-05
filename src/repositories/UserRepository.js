const db = require("../config/db");

class UserRepository {
  getAllUsers() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result[0]);
      });
    });
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [user.name, user.email],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  }

  updateUser(id, user) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [user.name, user.email, id],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

module.exports = new UserRepository();