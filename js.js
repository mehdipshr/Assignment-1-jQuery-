let button = $("#btn1");
let par = $("#p1")
button.click(function() {
    par.fadeOut("slow");

});
$("#btn2").click(function() {
    $("#p1").fadeIn("slwo");
});

let count = 0
$("#btn3").click(function() {
    if (count ==0){
    $( "#p2" ).append( "<p><strong>Hello Sam</strong></p>" );
    count++
    }
});


$("#btn4").click(function() {
    
    $("#p3").css("color", "red");
    
});


