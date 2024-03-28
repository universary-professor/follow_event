function login_html(){
    
    document.location.href = 'login.html';
}

function Login(){
    var nickname = document.getElementById("nickname");
    var password = document.getElementById("password");
    if(nickname == 'hightech' && password == 'hitecsht'){ //문제가있노
        document.location.href = 'storge.html';
    }
    else{
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
    
}