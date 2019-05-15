//Regular Expressions to match required fields
const firstName = /(^f).*(name$)/;
const lastName = /(^l).*(name$)/;
const email = /(^e).*((mail)|(address$))/;

module.exports = {
  firstName,
  lastName,
  email
};
