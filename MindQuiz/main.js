// $(function () {
//     var currentQuiz = null;
//     $("#startButton").on("click", function () {
//         if (currentQuiz == null) {
//             // currentQuiz = 0;
//             $("#question").text(questions[0].question);
//             // $("options").empty();
//             questions[0].answers.forEach(function (element, index, array) {
//                 //要數總共有幾題 -> array
//                 //element, index, array可以訂abc
//                 $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
//             });
//             $("#startButton").attr("value", "Next"); //把button改成next 
//             //$('#xxx") -> getElementById
//         } else {
//             $.each($(":radio"), function (i, val) {  //找所有type為radio的元件:JQuery i->index, val - element
//                 //看使用者選了哪個選項, 才知道下一題要去哪
//                 if (val.checked) {
//                     if (isNaN(questions[currentQuiz].answers[i][1])) {
//                         var finalResult = questions[currentQuiz].answers[i][1]; //得到final a.b.c. or d?
//                         $("#question").text(finalAnswers[finalResult][0]);
//                         $("#options").empty();
//                         $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
//                         currentQuiz = null;
//                         $("#startButton").attr("value", "重新開始")
//                     } else {
//                         currentQuiz = questions[currentQuiz].answers[i][1] - 1; //js的第二題
//                         $("#question").text([currentQuiz].question);
//                         $("#options").empty();
//                         questions[currentQuiz].answers.forEach(function (element, index, array) {
//                             $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
//                         });
//                     }
//                     return false;
//                 }

//             });
//         }
//     });
// });

$(function(){
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            $("#startButton").attr("value","Next");
        }else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });
        }
    });
});
