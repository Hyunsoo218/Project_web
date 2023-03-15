
function go(link){
    location.href = "../html/page_" + link+".html";
}
onload = function(){
    setInterval(function(){
        document.getElementById("test").style.opacity = '1'
    }, 1000)
}
function changPage_201(num){
    for( let i = 1; i <= 4; i++ ){
        $("#but"+i).css("background-color","white");
        $("#but"+i).css("color","black");
        $("#mid-content-3 > ul > li:nth-child("+i+")").css("display","none");
    }
    $("#but"+num).css("background-color","#194796");
    $("#but"+num).css("color","white");
    $("#mid-content-3 > ul > li:nth-child("+num+")").css("display","block");

    let he = 0;
    switch(num){
        case 1: he = 650; break;
        case 2: he = 850; break;
        case 3: he = 550; break;
        case 4: he = 800; break;
    }
    $("#mid").css("height", "" + he + "px");
}