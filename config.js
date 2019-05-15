require("dotenv").config();

module.exports = {
  redirectURL: process.env.redirectURL,
  MAILCHIMPAPI: process.env.MAILCHIMPAPI,
  LISTID: process.env.LISTID
};
