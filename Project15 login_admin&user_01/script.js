let login_btn = document.getElementById("login-button");

login_btn.addEventListener("click", () => {
    let username = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;

    if (username === "user" && password === "123456") {
        window.location.assign("index_user.html")
    } else if (username === "admin" && password === "123456"){
        window.location.assign("index_admin.html")
    } else {
        alert("Fall!! : The password or username is incorrect.\nรหัสผ่าน หรือ ชื่อผู้ใช้ ไม่ถูกต้อง | ลองใหม่อีกครั้ง |");
        window.location.reload();
    }
})