// 第一版本 防抖
function debounce(func, wait) {
    var timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}

container.onmousemove = debounce(getUserAction, 1000);
