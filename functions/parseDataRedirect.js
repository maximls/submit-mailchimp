//Get regex that matches required fields
var regex = require("./regex.js");
var renameKeys = require("./renameKeys.js");

// const data = {
//   FIRST_NAME: "Max",
//   last_name: "lysakovsky",
//   email: "max@gmail.com"
// };

//Create object key mapping where the posted keys are replaced with keys required by Redirect
function createKeysMapRedirect(data) {
  let newKeys = {};
  const keys = Object.keys(data);
  keys.map(key => {
    if (key.toLowerCase().match(regex.firstName)) {
      newKeys[key] = "first_name";
    } else if (key.toLowerCase().match(regex.lastName)) {
      newKeys[key] = "last_name";
    } else if (key.toLowerCase().match(regex.email)) {
      newKeys[key] = "email";
    }
  });
  return newKeys;
}

module.exports = function(data) {
  return renameKeys(createKeysMapRedirect(data), data);
};
