//Get regex that matches required fields
var regex = require("../helpers/regex.js");
var renameKeys = require("../helpers/renameKeys.js");
// const data = {
//   FIRST_NAME: "Max",
//   last_name: "lysakovsky",
//   email: "max@gmail.com"
// };

//Create object key mapping where the posted keys are replaced with keys required by Mailchimp
function createKeysMapMailchimp(data) {
  let newKeys = {};
  const keys = Object.keys(data);
  keys.map(key => {
    if (key.toLowerCase().match(regex.firstName)) {
      newKeys[key] = "FNAME";
    } else if (key.toLowerCase().match(regex.lastName)) {
      newKeys[key] = "LNAME";
    } else if (key.toLowerCase().match(regex.email)) {
      newKeys[key] = "email_address";
    }
  });
  return newKeys;
}

module.exports = function(data) {
  return renameKeys(createKeysMapMailchimp(data), data);
};
