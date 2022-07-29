import { Tree, height } from '../agda/build/jAgda.Tree';
console.log(Tree.leaf);
console.log(Tree.node(Tree.leaf)(Tree.leaf));
console.log(height(Tree.leaf));
