
function go(link){
    alert(link + "로 이동!");
    location.href = "../html/page_" + link+".html";
}
onload = function(){
    setInterval(function(){
        document.getElementById("test").style.opacity = '1'
    }, 1000)
}