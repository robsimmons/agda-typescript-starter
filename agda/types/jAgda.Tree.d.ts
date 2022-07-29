export type Nat = <T>(x: T) => T;
export const Nat: { z: Nat; s: (n: Nat) => Nat };

export type Tree = <T>(x: T) => T;
export const Tree: { leaf: Tree; node: (l: Tree) => (r: Tree) => Tree };

export const height: (t: Tree)  => Nat;
