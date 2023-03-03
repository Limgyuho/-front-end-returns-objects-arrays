console.clear();

function hello() {
    
    $("div").css("background-color", "gold");
    $("body").css("background-color", "green");
    $("button").css("background-color", "pink");
}


function hello2() {
    
    $("div").css("background-color", "");
    $("body").css("background-color", "");
    $("button").css("background-color", "");
}

//$('button').click(hello);
//$('button').dblclick(hello);
$('button').mouseenter(hello);
$('button').mouseleave(hello2);