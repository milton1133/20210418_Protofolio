// window.onload = function () {
//     document.onclick = function (i) {
//         console.log(i);
//         alert(i.target.innerHTML + "有" + i.target.innerHTML.length + "個字元")
//     }
// };



// function countLetters() {
//     document.onclick = function (e) {
//         alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元")
//     }



//     window.onload = countLetters();
// }

// let confirmAnswer = confirm("取消服務?");
// console.log(confirmAnswer);
// let thisH1=document.getElementsByTagName("h1")[0];
// if(confirmAnswer){
//     thisH1.innerHTML="服務已取消";

// }
// else{
//     thisH1.innerHTML="繼續使用本服務";
// }

// let promtAnswer = prompt("小明家裡有三個小孩，他兩個哥哥叫張一，請問第三個小孩叫什麼?","張三");
// let thisH1 = document.getElementById("Response");
// switch(promtAnswer){
//     case "張三":
//     thisH1.innerHTML = "那小明是誰?";
//     break;
//     case "小明":
//         thisH1.innerHTML="聰明";
//         break;
//     default:
//         thisH1.innerHTML="你想多了";
// } 

function showAlert() {
    thisH1.innerHTML = "Hello!";
}
let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
thisButton.onclick = function(){
    showAlert();
}
// thisButton.addEventListener("click",showAlert);







// thisButton.onclick = function () {
    // showAlert();
    // for(let i=0; i<10; i++){
    //     if(i==3){
    //         continue;
    //     }
    //     console.log(i);
    // // }
    // let person = {
    //     firstName: "Elena",
    //     lastName: "Hu",
    //     height: 180
    // };

    // for (x in window) {
    //     console.log(x + ":" + window[x]);
    // }




// };
//通常在可能有好幾個方法需要去執行時才會用上述寫法

// thisButton.onclick = showAlert; ->給他一個函數名稱
//  等到有人點的時候才會去跑該函數的內容
// thisButton.onclick = showAlert(); -> 直接執行該方法

