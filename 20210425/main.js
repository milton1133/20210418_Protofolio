$(function(){
    $("input").on("click", function(){
        // alert("Hi");
        // $("h1").text("Hello") //控制標題顯示
        // $("h1").text($("li:first").text());
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        //找到img元件
        //設定img元件的src屬性 -> 對應元件的title值
        // $("img")
        $("img").attr("src",$("li").eq(randomChildNumber).attr("title"));
    });
    //Jquery的方法較短, on = AddEventListener
});
//$("input")=document.getElementbyTagName