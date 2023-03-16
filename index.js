let apiUser ="  http://localhost:3000/user";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector(".submit");

const getUser = async() =>{
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};
submit.addEventListener("click",(e) => {
  e.preventDefault();
  if(email.value =="" || password.value==""){
    alert("Vui lòng nhập đủ Email & mật khẩu");
  } else{
    getUser().then((data) =>{
      const user = data.find((user) =>
        user.email === email.value && user.password === password.value
      );
      if (user) {
        alert("Đăng nhập thành công");
        window.location.href="mainPage.html";
      } else {
        alert("Đăng nhập thất bại");
      }
    });
  }
});


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
