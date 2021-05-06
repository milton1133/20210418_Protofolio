let thisH1 = document.getElementsByTagName("h1")[0];
thisH1.addEventListener("click", showAlert);

function showAlert(){
    alert(thisH1.innerHTML.length);
    alert(typeof(thisH1.innerHTML.split(" ")));
}