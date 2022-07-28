import { Tree, height } from 'jAgda.Tree';

const leaf = Tree.leaf;
const notleaf = Tree.node(Tree.leaf)(Tree.leaf);

describe('tree', () => {
  test('leaf', async () => {
    const isLeaf = { leaf: () => true, node: () => false };
    expect(leaf(isLeaf)).toEqual(true);
    expect(notleaf(isLeaf)).toEqual(false);
  });
  test('height', async () => {
    const isZ = { z: () => true, s: () => false };
    expect(height(leaf)(isZ)).toEqual(true);
    expect(height(notleaf)(isZ)).toEqual(false);
  });
});
