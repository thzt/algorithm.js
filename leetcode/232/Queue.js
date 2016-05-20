/**
 * @constructor
 */
var Queue = function() {
    var q=this;
    q.stack=[];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var q=this;
    q.stack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    var q=this;
    q.stack.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var q=this;
    return q.stack[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    var q=this;
    return q.stack.length==0;
};
