
function go(link){
    location.href = "../html/page_" + link+".html";
}
function getIdx(num){

    let temp = num;

    if(temp > 26) temp -= 26; 
    else if(temp < 1) temp += 26; 

    return temp;
}
window.onload = function(){
    setInterval(function(){
        document.getElementById("test").style.opacity = '1'
    }, 1000)

    const slideImg = $('#Slider-1 article'); //모든 슬라이드들
    let currentIdx = 2; //현재 슬라이드 index

    //전체 슬라이드 컨테이너 넓이 설정
    $('#Slider-1').css("width",(800  * slideImg.length) + 'px');
    $('#Slider-1').css("left",(-currentIdx * 800) + 'px');
    
    function setSubSlider(){
        for(let i = -4; i <= 4; i++){
            $('#Slider-2 > div > article:nth-child('+ (i+5) +') > img').attr('src','../image/501/'+ getIdx(currentIdx + i - 1) +'.jpg');
        }
        
    }

    setSubSlider();
    
    $('#but-1').click(function(){
        if(currentIdx - 1 <= 1)  {
            setTimeout(function(){
                $('#Slider-1').css("transition","left 0s ease-out");
                currentIdx = slideImg.length - 3;
                $('#Slider-1').css("left",(-currentIdx * 800) + 'px');
            } ,200);
        }
        currentIdx--; 
        $('#Slider-1').css("transition","left 0.2s ease-out");
        $('#Slider-1').css("left",(-currentIdx * 800) + 'px'); 

        $('#Slider-2').css("transition","left 0.2s ease-out");
        $('#Slider-2').css("left", '-160px');

        setTimeout(function(){
            $('#Slider-2').css("transition","left 0s ease-out");
            $('#Slider-2').css("left", '-320px');
            setSubSlider();
        } ,200);
    });
    $('#but-2').click(function(){
        if(currentIdx + 1 >= slideImg.length - 2) {
            setTimeout(function(){
                $('#Slider-1').css("transition","left 0s ease-out");
                currentIdx = 2;
                $('#Slider-1').css("left",(-currentIdx * 800) + 'px');
            } ,200);
        }
        currentIdx++; 
        $('#Slider-1').css("transition","left 0.2s ease-out");
        $('#Slider-1').css("left",(-currentIdx * 800) + 'px');

        $('#Slider-2').css("transition","left 0.2s ease-out");
        $('#Slider-2').css("left", '-480px');

        setTimeout(function(){
            $('#Slider-2').css("transition","left 0s ease-out");
            $('#Slider-2').css("left", '-320px');
            setSubSlider();
        } ,200);
    });
    $("#Slider-2 > div > article:nth-child(4)").click(function(){
        $('#but-1').click();
    });
    $("#Slider-2 > div > article:nth-child(6)").click(function(){
        $('#but-2').click();
    });
    $("#Slider-2 > div > article:nth-child(3)").click(function(){
        currentIdx--; currentIdx--; 
        $('#Slider-1').css("transition","left 0.2s ease-out");
        $('#Slider-1').css("left",(-currentIdx * 800) + 'px'); 

        $('#Slider-2').css("transition","left 0.2s ease-out");
        $('#Slider-2').css("left", '0');

        setTimeout(function(){
            $('#Slider-2').css("transition","left 0s ease-out");
            $('#Slider-2').css("left", '-320px');
            setSubSlider();

            if(currentIdx == 0)  {
                currentIdx = slideImg.length - 4;
            }
            else if(currentIdx == 1)  {
                currentIdx = slideImg.length - 3;
            }
            else{
                
                return;
            }
            $('#Slider-1').css("transition","left 0s ease-out");
            $('#Slider-1').css("left",(-currentIdx * 800) + 'px');
            
        } ,200);
    });
    $("#Slider-2 > div > article:nth-child(7)").click(function(){
        currentIdx++;  currentIdx++; 
        $('#Slider-1').css("transition","left 0.2s ease-out");
        $('#Slider-1').css("left",(-currentIdx * 800) + 'px');

        $('#Slider-2').css("transition","left 0.2s ease-out");
        $('#Slider-2').css("left", '-640px');

        setTimeout(function(){
            $('#Slider-2').css("transition","left 0s ease-out");
            $('#Slider-2').css("left", '-320px');
            setSubSlider();

            if(currentIdx == 29){
                currentIdx = 3;
            }
            else if(currentIdx == 28){
                currentIdx = 2;
            }
            else{
                
                return;
            }
            $('#Slider-1').css("transition","left 0s ease-out");
            $('#Slider-1').css("left",(-currentIdx * 800) + 'px');
            
        } ,200);
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



