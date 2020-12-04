console.log("125")
let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

console.log("12512")
let string = `
/*你好,我是前端新人
接下来我要加样式了,我叫KK
我要加的样式是*/

#div1{
    color:red;
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把 div 变成一个太极图
*注意看好了
*首先来一个圆圈
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成第
*  一黑一白
*/
#div1{
    background: linear-gradient(90deg,rgba(255,255,255,1)
    0%,rgba(255,255,255,1) 50%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100% );
}
/* 加两个神秘的球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    #div1::after{
        width: 100px;
        height: 100px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
        }
        }

`;
// string = string.replace(/\n/g,"<br>")
// let n = 0
// let f1 = () => {
//     if(n-1<string.length){
//         if(string[n]+string[n+1] === "<b"){
//             n = n + 4
//             demo.innerHTML=string.substring(0,n)
//         }else{
//             n = n + 1
//             demo.innerHTML=string.substring(0,n)
//         }
//         setTimeout(f1,1000)
//     }
// };
// setTimeout(f1,1)
let string2 = ''
let n = 0
let start = () => {
    if(n<string.length){
        console.log(n+'ne')
        //不是最后一个
    console.log(n);
    if(string[n]==="\n"){
         //如果不是回车,就不照搬
        console.log(string[n])
        string2 += "<br>"; 
       } else if(string[n]===" ") {
        string2 += "&nbsp;"; 
       }
       else{
           //如果是回车,就照搬
           string2 += string[n];
        }
    
    // string2+=(string[n]==="\n" ? "<br>" : string[n])

        n = n + 1;
    setTimeout(start,50)
    demo.innerHTML=string2;
    style.innerHTML=string.substring(0,n);
    window.scrollTo(0,99990);
    console.log(style.innerHTML)
    }
};
start()

// setTimeout(()=>{
//     style.innerHTML =`
//     body{
//         color:red;
//     }
//     `;
// },100);
