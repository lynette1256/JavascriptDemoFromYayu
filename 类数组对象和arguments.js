// arguments 和 对应参数的绑定
function foo(name, age, sex, hobbit) {
    console.log(name, arguments[0]);
    name = "new name";
    console.log(name, arguments[0]);
    arguments[1] = "new age";
    console.log(age, arguments[1]);

    console.log(sex);
    sex = "new sex";
    console.log(sex, arguments[2]);

    arguments[3] = "new hobbit";
    console.log(hobbit, arguments[3]);
}
foo("name", "age")


function foo() {
    bar.apply(this, arguments);
}

function bar(a, b, c) {
    console.log(a, b, c);
}
foo(1, 2, 3)