import postcss from "postcss";

/*
  Common function to loop through modules and plugins
  to create the desired styles
*/
interface Input {
  modules?: any[];
  config?: {
    [key: string]: any;
  };
  plugins?: any[];
}

export default ({ modules = [], config = {}, plugins = [] }: Input) => {
  // Run through the modules and create
  // module specfic nodes
  const nodes = modules.reduce((acc, curr) => {
    return acc.concat(curr(config));
  }, []);
  // Createt he root node for the styles
  const rootNodes = postcss.root({
    nodes
  });
  // Run all the plugins in the above rootNodes
  const computedStyles = plugins.reduce((nodes, plugin) => {
    // Pass the rootNodes here since
    // plugins always have to run on the entire tree
    return plugin(rootNodes);
  }, rootNodes);
  return computedStyles;
};
