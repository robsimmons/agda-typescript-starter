module Tree where

data Nat : Set where
  z : Nat
  s : (n : Nat) → Nat 

data Tree : Set where
  leaf : Tree
  node : (l : Tree) (r :  Tree) → Tree

max : Nat → Nat → Nat
max z m = m
max n z = n
max (s n) (s m) = s (max n m)

height : Tree → Nat
height leaf = z
height (node l r) = s (max (height l) (height r))

balanced : Nat → Tree
balanced z = leaf
balanced (s n) = node (balanced n) (balanced n)

unbalanced : Nat → Tree
unbalanced z = leaf
unbalanced (s n) = node leaf (unbalanced n)
