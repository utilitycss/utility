/**
 * template function to generate class selectors.
 * the placeholder "{}" will get substituted with str
 */
export default function template(t: string, str: string): string {
  return t.replace(/{}/g, `.${str}`).replace(/^\./, "");
}
