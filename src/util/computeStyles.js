const postcss = require("postcss");

/*
  Common function to loop through modules and plugins
  to create the desired styles
*/
module.exports = ({ modules = [], config = {}, plugins = [] }) => {
  // Run through the modules and create
  // module specfic nodes
  const nodes = modules.reduce((acc, curr) => {
    return acc.concat(curr(config));
  }, []);
  // Createt he root node for the styles
  const rootNode = postcss.root({
    nodes
  });
  // Run all the plugins in the above rootNode
  const computedStyles = plugins.map(plugin => {
    // Pass the rootNode here since
    // plugins always have to run on the entire tree
    return plugin(rootNode);
  });
  return computedStyles;
};
