import path from "path";
import { promises as fsAsync } from "fs";
import _ from "lodash";

interface BuildStats {
  atomCss: string;
}

/* FIXME: Temporarily disabled due to cssstats's dependency to postcss-safe-parser, that causes issues in node 18 */
export default async function buildStats({
  atomCss,
}: BuildStats): Promise<string> {
  const {
    humanizedSize: size,
    humanizedGzipSize: gzippedSize,
    rules: { total: totalRules } = {} as any,
    selectors: {
      total: totalSelectors,
      class: selectorsClass,
      id: selectorsId,
      pseudoClass: selectorsPseudoClass,
      pseudoElement: selectorsPseudoElement,
      specificity: { average: selectorsSpecificity } = {} as any,
    } = {} as any,
    declarations: { total: totalDecls, unique: uniqueDecls } = {} as any,
    mediaQueries: { total: totalMedia } = {} as any,
  } = {} as any;

  const statsTemplate = _.template(
    await fsAsync.readFile(
      path.join(__dirname, "templates", "stats.html"),
      "utf8"
    )
  );
  const statsHtml = statsTemplate({
    overview: {
      size,
      gzippedSize,
      totalRules,
      totalDecls,
      totalMedia,
    },
    selectors: {
      total: totalSelectors,
      class: selectorsClass,
      id: selectorsId,
      pClass: selectorsPseudoClass,
      pElement: selectorsPseudoElement,
      specificity: Math.round(selectorsSpecificity),
    },
    declarations: {
      total: totalDecls,
      unique: uniqueDecls,
    },
  });
  return statsHtml;
}
