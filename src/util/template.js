/**
 * template function to generate class selectors.
 * the placeholder "{}" will get substituted with str
 */
module.exports = (t, str) => t.replace(/{}/g, `.${str}`).replace(".", "");
