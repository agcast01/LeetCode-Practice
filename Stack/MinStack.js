class MinStack {
    constructor() {
        this.length = 0
        this.last = null
    }
}

class Node {
    constructor(val, min, prev=null) {
        this.val = val
        this.min = min
        this.prev = prev
    }
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.length === 0) {
        this.last = new Node(val, val)
    } else {
        let prev = this.last;
        this.last = new Node(val, Math.min(prev.min, val), prev)
    }
    this.length++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.length === 1) {
        this.last = null
    } else {
        this.last = this.last.prev
    }
    this.length--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.last.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.length === 0) return 0
    return this.last.min
};