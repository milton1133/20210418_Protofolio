let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 200; //不會再變, 用let, var也可以


$(function(){
    //初始化
    mapArray =[
        [0,1,1],
        [0,0,0,],
        [3,1,2]
        //用此九宮格對到草地的九宮格
    ]; //0-可走﹑1-障礙、 2-終點、 3-敵人
    ctx =$("#myCanvas")[0].getContext("2d");
    //指定2d繪圖方式在canvas上作畫
    //為什麼要[0]? -> 只有在canvas
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain ={
        "x":0,
        "y":0
        //屬性名稱可打雙引號也可不打
        
    }
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y, gridLength,gridLength); //將圖片繪製到canvas上
        // 兩個gridLength的位置 = 指定縮放的寬跟高
    
    }

    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";

    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength, x*gridLength, gridLength,gridLength);
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength, x*gridLength, gridLength,gridLength);
                    
                    }
                }
            }
        }

    }
});

 //鍵盤按了之後要做的動作
    //document:整份文件
    //.on -> 監聽
    // imgMain.onload = function(){
        //當鍵盤按下時，馬上載入圖片
        //https://www.w3schools.com/tags/canvas_drawimage.asp
        //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        //將某一張圖剪下來貼到Canvas上

        //以下是:從原圖的(0,0)剪下寬80,高130的區域，貼至目前的指定位置,並且縮放成指定的寬度與高度
        // ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y, gridLength,gridLength); //將圖片繪製到canvas上
        // ctx.drawImage(imgMain,0,0); 
        // ctx.drawImage(imgMain,0,0,300,300); 
    // }

$(document).on("keydown", function(event){ //按下鍵盤時
   let targetImg, targetBlock, cutImagePositionX;
   targetImg = {
       x:-1,
       y:-1
   };
   targetBlock = {
    x:-1,
    y:-1
   };

   event.preventDefault();

//    console.log(event);

   switch(event.code){
    case "ArrowLeft":
        targetImg.x = currentImgMain.x-gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX = 175;
        break;
    case "ArrowUp":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y - gridLength;
        cutImagePositionX = 355;
        break;
    case "ArrowRight":
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX = 540;
        break;
     case "ArrowDown":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y + gridLength;
        cutImagePositionX = 0;
        break;
    default:
            return;
   }

   console.log(targetImg);

   if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 & targetImg.y>=0){
       targetBlock.x = targetImg.y / gridLength;
       targetBlock.y = targetImg.x / gridLength;
    //    console.log(targetImg);
   }else{
       targetBlock.x = -1;
       targetBlock.y = -1;
   }
   ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

   if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){ //二維陣列裡第0跟第1個數字
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
             case 1:
                $("#talkBox").text("有山");
                break;    
            case 2:
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;      
            case 3:
                $("#talkBox").text("哈囉");
                break; 
                 }
   }else{
       $("#talkBox").text("邊界");
   }
   ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y, gridLength,gridLength); //將圖片繪製到canvas上
});