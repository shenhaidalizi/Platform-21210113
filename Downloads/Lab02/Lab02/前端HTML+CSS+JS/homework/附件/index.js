window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    })
}

function search() {
    // TODO: 搜索触发后的行为
    var getit = document.getElementsByTagName("input")[0].value;
    if(getit == ''){
        alert("请输入搜索内容");
    }
    else{
        alert(getit);
    }
    
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    var username = Kernal.getUserName();
    
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">'+ username +'</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}