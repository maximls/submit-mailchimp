const addUser = require("./mailchimp/addUser.js");
const querystring = require("querystring");
const parseDataRedirect = require("./helpers/parseDataRedirect.js");
const config = require("../config.js");

exports.handler = function(event, context) {
  const data = querystring.parse(event.body);
  const redirectParams = parseDataRedirect(data);
  return addUser(data)
    .then(result => {
      return {
        statusCode: 303,
        body: `${result.id}`,
        headers: {
          Location: `${config.redirectURL}?first_name=${
            redirectParams.first_name
          }&last_name=${redirectParams.last_name}&email=${redirectParams.email}`
        }
      };
    })
    .catch(e => {
      console.log(e);
      return {
        statusCode: 400,
        body: `There was an error submitting your email address. It might be that you already used this email address to subscribe.`
      };
    });
};
