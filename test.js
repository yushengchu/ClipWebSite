const meituanIndexPageUrl = 'https://i.meituan.com/'

function myPageLoop() {
    var allOrder = document.querySelector('.all-entry-text');
    if (allOrder != null) {
        allOrder.click();
    }
    window.webkit.messageHandlers.taskSuccess.postMessage(null);
}

function indexPageLoop() {
    var loginBtn = document.querySelector('.operate-btn');
    if (loginBtn != null) {
        loginBtn.click();
    }
}

function loginPageLoop() {
    
    setTimeout(()=>{
        var toggleType = document.querySelector('.toggle-type');
        if (toggleType != null) {
            toggleType.click()
        }
        console.log('======= toggle-type')
        
    }, 2000);
    

    setTimeout(()=>{
        // 手机号
        var accountInput = document.querySelector('#accountInput');
        if (accountInput != null) {
            accountInput.focus()
            accountInput.value = '17342074205'
            accountInput.blur()
        }
        console.log('======= accountInput')
        
    }, 4000);
    
    
    setTimeout(()=>{
        //发送按钮
        var accountPwInput = document.querySelector('#accountPwInput');
        if (accountPwInput != null) {
            accountPwInput.focus()
            accountPwInput.value = 'qq11yahoo'
            accountPwInput.blur()
        }
        console.log('======= accountPwInput')
        
    }, 6000);

    
    setTimeout(()=>{
        var pwUserConfirm = document.querySelector('#pwUserConfirm');
        if (pwUserConfirm != null) {
            pwUserConfirm.click()
        }
        
        var accountLogin = document.querySelector('#accountLogin');
        if (accountLogin != null) {
            accountLogin.click()
        }
        
    }, 8000);
}

function main() {
    var url = document.location.toString();
    console.log('======= url:' + url)
    if (url == meituanIndexPageUrl) {
        console.log('======= 首页')
        indexPageLoop();
    } else if (url.indexOf('useraccount/ilogin') != -1) {
        console.log('======= 登录页')
        loginPageLoop()
    } else if (url.indexOf('account/?userId=') != -1) {
        console.log('======= 所有账单')
        myPageLoop()
    }
}





main();
