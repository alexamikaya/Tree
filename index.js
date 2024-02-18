function Dates(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}
function Tree(data) {
    var node = new Dates(data);
    this._root = node;
}
Tree.prototype.reader = function(callback) {
    (function recurse(currentNode) { 
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    })(this._root);
};

var tree = new Tree(1);
tree._root.children.push(new Dates(2));
tree._root.children[0].parent = tree;
tree._root.children.push(new Dates(5));
tree._root.children[1].parent = tree;
tree._root.children.push(new Dates(6));
tree._root.children[2].parent = tree;
tree._root.children[0].children.push(new Dates(3));
tree._root.children[0].children[0].parent = tree._root.children[0];
tree._root.children[0].children.push(new Dates(4));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree.reader(function(node) {
    console.log(node.data)
});
