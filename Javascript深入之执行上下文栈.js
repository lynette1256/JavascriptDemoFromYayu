var foo = function () {
    console.log('foo1')
}
foo()

var foo = function () {
    console.log('foo2')
}
foo()



function foo() {
    console.log('foo1')
}
foo()
function foo() {
    console.log('foo2')
}
foo()


// javascript 三种 全局代码、函数代码、eval代码
// 当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

// 全局上下文的变量对象初始化是全局对象
// 函数上下文的变量对象初始化只包括Arguments·对象
// 在进入执行上下文时会给变量对象添加形参，函数声明，变量声明等初始的属性值
// 在代码执行阶段，会再次修改变量对象的属性值

var scope = "global scope";

function checkscope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

var foo = checkscope();

foo();


var obj = {
    value: 1
}
function foo(o) {
    o = 2;
    console.log(o);
}
foo(obj);
console.log(obj.value);