
function go(link){
    location.href = "../html/page_" + link+".html";
}
window.onload = function(){
    setInterval(function(){
        document.getElementById("test").style.opacity = '1'
    }, 1000)

    const slides = $('#Slider-1'); //전체 슬라이드 컨테이너
    const slideImg = $('#Slider-1 article'); //모든 슬라이드들
    let currentIdx = 0; //현재 슬라이드 index
    const slideCount = slideImg.length; // 슬라이드 개수
    const prev = $('#l-but'); //이전 버튼
    const next = $('#2-but'); //다음 버튼
    const slideWidth = 800; //한개의 슬라이드 넓이

    //전체 슬라이드 컨테이너 넓이 설정
    $('#Slider-1').css("width",(slideWidth  * slideCount) + 'px');

    $('#l-but').click(function(){
        if(currentIdx - 1 < 0)  currentIdx = slideCount - 1;
        else                    currentIdx--; 
        $('#Slider-1').css("left",(-currentIdx * slideWidth) + 'px');
    });

    $('#2-but').click(function(){
        if(currentIdx + 1 == slideCount) currentIdx = 0;
        else                             currentIdx++; 
        $('#Slider-1').css("left",(-currentIdx * slideWidth) + 'px');
    });
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











