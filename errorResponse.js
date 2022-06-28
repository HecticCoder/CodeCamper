class errorResponse extends Error {
  constructor(message, statusCode) {
    super(message); //can't use 'this' without super
    this.statusCode = statusCode;
  }
}

module.exports = errorResponse;
