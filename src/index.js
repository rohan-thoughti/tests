module.exports = (router, expressApp) => {
  let returnedRouters = require("./routes")(router, expressApp);
  return returnedRouters;
};
