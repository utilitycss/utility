import path from "path";
import _ from "lodash";
import { promises as fsAsync } from "fs";

const selectorReplace = (selector) => {
  return selector.replace(".", "").replace(":active", "").replace(":hover", "");
};

export default async function buildSections({
  modules,
}: {
  modules: any;
}): Promise<string[]> {
  const sectionTemplate = _.template(
    await fsAsync.readFile(
      path.join(__dirname, "templates", "section.html"),
      "utf8"
    )
  );
  const sectionsHtml = [];
  Object.keys(modules).forEach((module) => {
    const moduleName = module[0].toUpperCase() + module.slice(1);
    const rules = [];
    modules[module].forEach((rule) => {
      // console.log(JSON.stringify(rule));
      const { nodes, selector, media } = rule;
      if (/^\.[A-Za-z0-9\-\:\_]+$/.test(selector)) {
        rules.push({
          selector,
          nodes,
          media,
          class: selectorReplace(selector),
        });
      }
    });
    const sectionHtml = sectionTemplate({
      module: moduleName,
      rules,
    });
    sectionsHtml.push(sectionHtml);
  });

  return sectionsHtml;
}
