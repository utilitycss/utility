import { Root, ChildNode, AtRule, Declaration, Rule } from "postcss";
import { Meta } from "../types";
type CallBack = (node: CreatedNode) => void;

export interface CreatedNode
  extends Omit<Rule, "type" | "raws" | "nodes" | "parent"> {
  nodes: Array<{ prop: string; value: string }>;
  media?: any;
  meta?: Meta;
}

const traverseObject = (node: ChildNode, cb: CallBack, media: any) => {
  const { type, raws, parent, nodes, ...rest } = node as Rule;
  const nodeToPush: CreatedNode = Object.assign(
    {},
    rest,
    {
      nodes: nodes.map((n) => ({
        prop: (n as Declaration).prop,
        value: (n as Declaration).value,
      })),
    },
    media !== undefined
      ? {
          media,
        }
      : {}
  );

  cb(nodeToPush);
};

const traverseNodes = (nodes: ChildNode[], cb: CallBack, media?: any) => {
  nodes.forEach((node) => {
    if (node.hasOwnProperty("name") && (node as AtRule).name === "media") {
      const { params: media, nodes } = node as AtRule;
      traverseNodes(nodes, cb, media);
    } else {
      traverseObject(node, cb, media);
    }
  });
};

const traverse = (root: Root, cb: CallBack): void => {
  const { nodes } = root;
  traverseNodes(nodes, cb);
};

export default traverse;
