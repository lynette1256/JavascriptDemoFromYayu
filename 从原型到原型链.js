function Person() {
}

var person = new Person();
person.name = 'kevin';
console.log(person.name) // kevin

// prototype 属性
function Person() {
}

// prototype是函数才有的属性

Person.prototype.name= 'kevin';
var person1 = new Person();
var person2 = new Person();

console.log(person1.name);
console.log(person2.name);

// 每一个javascript对象 在创建的时候，都会与之关联另一个对象，这个对象就是原型。
// 每个对象都会从原型继承属性


// __proto__ 属性
// 每个javascript对象都具有一个属性，叫做__proto__，这个属性会指向该对象的圆形
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype) 

// constructor 属性
function Person() {
}

console.log(Person === Person.prototype.constructor)

// 总结
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype) 
console.log(Person.prototype.constructor === Person) 
console.log(Object.getPrototypeOf(person) === Person.prototype)

// 实例与原型
function Person() {

}

Person.prototype.name = "kevin"
var person = new Person();

person.name = "daisy"
console.log(person.name)

delete person.name;
console.log(person.name)

// 原型的原型
var obj = new Object();
obj.name = 'kevin'
console.log(obj.name)


function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
}
var p = new Point(1, 2);



function Person() { // 构造函数

}
Person.prototype.name = 'kevin';
var person = new Person();
person.name = 'daisy';
console.log(person.name)
delete person.name;
console.log(person.name)