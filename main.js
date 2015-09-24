/**
 * Created by Jenya on 24.09.15.
 */

function getTreeValue (tree) {
    var treeValue=[];
    treeValue.push(tree.value);
    if (tree.isLeaf()) {
        return treeValue }
    if (tree.left) {treeValue.push(getTreeValue(tree.left))}
    if (tree.right) {treeValue.push(getTreeValue(tree.right))}
    return treeValue;
}

sampleTree = {
    left: {
        left: null,
        right: {
            left: null,
            right: null,
            value: 2,
            isLeaf: function(){return true}
        },
        value: 4,
        isLeaf: function(){return false}
    },
    right: {
        left: null,
        right: {
            left: null,
            right: null,
            value: 4,
            isLeaf: function(){return true}
        },
        value: 4,
        isLeaf: function(){return false}
    },
    value: 4,
    isLeaf: function(){return false}
};

console.log("sampleTree is:" + getTreeValue(sampleTree));