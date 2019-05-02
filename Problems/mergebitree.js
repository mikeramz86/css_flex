// Given two binary trees and imagine that when you put one of them to cover the other, 
//some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. 
//The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

var mergeTrees = function (t1, t2) {
    if (!t1 && !t2) {
        return null;
    }

    if (!t1 || !t2) {
        return t1 || t2;
    }

    var root = new TreeNode(t1.val + t2.val);

    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);

    return root;
};

console.log(mergeTrees);

//[1,3,2,5]
//[2,1,3,null,4,null,7]