require("dotenv").config();
const redirectURL = "http://localhost:5500/redirect.html";
const LISTID = "e06d860b8f";

module.exports = {
  redirectURL,
  MAILCHIMPAPI: process.env.MAILCHIMPAPI,
  LISTID
};
