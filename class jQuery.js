class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for (let i = 0; i < length; i ++) {
            this[i] = result[i];
        }
        this.length = length;
        // 类似于数组的形式，但是是对象
        this.selector = selector
    }
    get(index) {
        return this[index];
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i];
            fn(elem);
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false);
        })
    }
}
// 使用
const $p = new jQuery('p');
$p.get(1);
$p.each((elem) => console.log(elem.nodeName));
$p.on('click', () => alert('clicked'));

// 考虑拓展性
jQuery.prototype.dialog = function(info) {
    alert(info);
}

// 复写机制
class myJQuery extends jQuery {
    constructor(selector) {
        super(selector); //  继承父类的属性和方法
    }
    // 重写
    dialog(info) {
        alert('重写' + info);
    }
    // 拓展
    addClass(className) {
        return this.each(elem => {
            elem.classList.add(className);
        })
    }
}

