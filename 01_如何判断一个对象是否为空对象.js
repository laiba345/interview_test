function checkNullObj(obj) {
    /* 
        通过Object.getOwnPropertySymbols(),
        - 作用：方法返回一个给定对象自身的所有 Symbol 属性的数组
    */
    return Object.keys(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0
}