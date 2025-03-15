var foo = {
    value: 1,
    bar: function () {
        console.log(this.value)
    }
}


var foo = {
    value: 1
}

function bar () {
    console.log(this.value)
}

bar.call(foo)
foo.bar()

/*
** call 的模拟实现
*/
// 第一版
Function.prototype.call2 = function (context) {
    console.log('fn', context.fn)
    context.fn = this
    context.fn()
    delete context.fn
}

var foo = {
    value: 1
}

function bar () {
    console.log(this.value)
}

bar.call2(foo)

/**
 * 
 * @param {*} context 
 */
// 第二版
Function.prototype.call2 = function (context) {
    context.fn = this
    var args = []
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    // eval('context.fn(' + args + ')');
    delete context.fn
}
var foo = {
    value: 1
}
function bar (name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

bar.call2(foo, 'kevin', 18)

// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for (var i = i; i < arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    delete context.fn;
    return result
}

// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}

var value = 2;
var obj = {
    value: 1
}
function bar (name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null);
console.log(bar.call2(obj, 'kevin', 18));

// bind 的模拟实现
Function.prototype.bind2 = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
