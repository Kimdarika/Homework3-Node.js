class BaseController {
  sendResponse(res, data, message = "Success") {
    res.json({
      status: true,
      message,
      data
    });
  }

  sendError(res, error) {
    res.status(500).json({
      status: false,
      message: error.message
    });
  }
}

module.exports = BaseController;