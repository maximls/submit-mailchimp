const Mailchimp = require("mailchimp-api-v3");
const parseData = require("./parseDataMailchimp.js");
const config = require("../../config.js");
const mailchimp = new Mailchimp(config.MAILCHIMPAPI);

function addUser(data) {
  const params = parseData(data);
  console.log(params);
  return mailchimp.request({
    method: "post",
    path: `/lists/${config.LISTID}/members`,
    body: {
      email_address: params.email_address,
      merge_fields: params,
      status: "subscribed"
    }
  });
}

module.exports = addUser;
