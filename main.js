/**
 * Created by Jenya on 24.09.15.
 */

function getLeveledTreeValue (tree) {
    var treeValue = [];
    function getTreeValue(tree, branchLevel) {

        //branchLevel=branchLevel;
        if (!treeValue[branchLevel]) {
            treeValue[branchLevel] = [];
        }

        treeValue[branchLevel].push(tree.value);
        if (tree.isLeaf()) {
            return treeValue
        }
        if (tree.left) {
            branchLevel += 1;
            if (!treeValue[branchLevel]) {
                treeValue[branchLevel] = [];
            }
            getTreeValue(tree.left, branchLevel)
        }
        if (tree.right) {
            if (!(tree.left)) {
                branchLevel += 1;
                if (!treeValue[branchLevel]) {
                    treeValue[branchLevel] = [];
                }
            }
            getTreeValue(tree.right, branchLevel)
        }
    }
    getTreeValue(tree,0);
    return treeValue;

}

outputTreeValuesByLevel = function (treeValues) {
    for (i=0, y=treeValues.length; i<y; i++){
        console.log ("Tree value(s) at level " + i +
            "is(are): " + treeValues[i] )
    }
};

sampleTree = {
    left: {
        left: null,
        right: {
            left: null,
            right: null,
            value: 3,
            isLeaf: function(){return true}
        },
        value: 5,
        isLeaf: function(){return false}
    },
    right: {
        left: null,
        right: {
            left: null,
            right: null,
            value: 1,
            isLeaf: function(){return true}
        },
        value: 4,
        isLeaf: function(){return false}
    },
    value: 8,
    isLeaf: function(){return false}
};

outputTreeValuesByLevel(getLeveledTreeValue(sampleTree));

