<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>This is test</title>
</head>
<style>
    *{
        border-style: none;
        user-select: none;
    }
    *:focus{
        outline: none;
    }
    .bodyFake{
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    }
    .mainDiv{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 400px;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 100px;
        height: 40px;
        border: 2px red solid;
        border-radius: 10px;
        margin-bottom: 30px;
        text-align: center;
    }
    button{
        width: 80px;
        height: 40px;
        cursor: default;
    }
</style>
<body>
<div class="bodyFake">
    <div class="mainDiv">
        <input type="text" placeholder="빈칸채워라" id="myInput">
        <button class="btn btn-primary" id="btn">눌러라</button>
    </div>
</div>
<script>
    var btn = document.getElementById("btn")
    var Input = document.getElementById("myInput")
    btn.addEventListener("mouseover" , main)
    setInterval(() => {
        btn.style.pointerEvents = "painted"
    }, 500);
    Input.addEventListener("keyup",main2)

    function main(){
        if(Input.value == "" && btn.style.transform == "translate(79px, 0px)"){
            btn.style.transform = "translate(80px, 0px)"
            btn.style.pointerEvents = "none"
        }
        if(Input.value == "" && btn.style.transform == "translate(-80px, 0px)"){
            btn.style.transform = "translate(79px, 0px)"
            btn.style.pointerEvents = "none"
        }
        if(Input.value == "" && btn.style.transform == "translate(80px, 0px)"){
            btn.style.transform = "translate(-80px, 0px)"
            btn.style.pointerEvents = "none"
        }
        if(Input.value == ""){
            if(btn.style.transform == 'translate(0px, 0px)' || btn.style.transform == ''){
            btn.style.transition = 'all 0.3s ease'
            btn.style.transform = "translate(80px, 0px)"
            btn.style.pointerEvents = "none"
            }
            else{
                return false
            }
        }
    }
    function main2(){
    if(Input.value != "" && btn.style.transform != 'translate(0px, 0px)' || btn.style.transform != ''){
    btn.style.transform = 'translate(0px, 0px)'
    btn.style.pointerEvents = "painted"
    }
    }
</script>
</body>
</html>