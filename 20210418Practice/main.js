let thisH1 = document.getElementsByTagName("h1")[0];

let timer = setInterval(showTime, 1000);
 
// thisH1.innerHTML = currenTime.toLocaleTimeString();
// innerHtml=h1的屬性

function showTime(){
    let currenTime = new Date();
    // let timer = setInterval(showTime, 1000);
    thisH1.innerHTML = currenTime.toLocaleTimeString();
}