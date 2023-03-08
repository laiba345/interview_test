/* 
    使用闭包实现
*/
for(var i = 0; i < 5; i++) {
    // 其实就是通过一个立即执行函数来实现
    (function(i) {
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    })(i)
}

/* 
    使用let块级作用域实现操作
*/
// for(let i = 0; i < 5; i++) {
//     // 实现的是每隔一秒，如果是直接写的话，就是全拿下来了
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000);
// }