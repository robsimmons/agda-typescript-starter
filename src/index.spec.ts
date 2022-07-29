import { Tree, height } from 'jAgda.Tree';

describe('test', () => {
  const x = () => height(Tree.leaf);
  test('add', async () => {
    expect(1 + 1).toEqual(2);
  });
});
