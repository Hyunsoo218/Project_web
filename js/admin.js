$(function(){

    $('#login').click(function () { 
       
        let id = $("#id").val();
        let admin = $("#admin").val();
        let pass = $("#pass").val();

        if(id.trim() == ""){
            alert("아이디 입력.");
        }
        else if(admin.trim() == ""){
            alert("관리자 아이디를 입력하세요.");
        }
        else if(pass.trim() == ""){
            alert("비밀번호를 입력하세요.");
        }
        else{
            alert("로그인 실패 했습니다. 관리자에게 문의 바랍니다.");
        }
    });

});