const traverseObject = (node, cb, media) => {
  const { type, raws, parent, nodes, ...rest } = node;
  const nodeToPush = Object.assign(
    {},
    rest,
    { nodes: nodes.map(n => ({ prop: n.prop, value: n.value })) },
    media !== undefined
      ? {
          media: media
        }
      : {}
  );

  cb(nodeToPush);
};

const traverseNodes = (nodes, cb, media) => {
  nodes.forEach(node => {
    if (node.hasOwnProperty("name") && node.name === "media") {
      const { params: media, nodes } = node;
      traverseNodes(nodes, cb, media);
    } else {
      traverseObject(node, cb, media);
    }
  });
};

const traverse = (root, cb) => {
  const { nodes } = root;
  traverseNodes(nodes, cb);
};

module.exports = traverse;
