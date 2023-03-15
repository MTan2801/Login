let apiUser ="  http://localhost:3000/user";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");

const getUser = async() =>{
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

submit.addEventListener("click",(e) => {
  e.preventDefault();
  if(email ==="" || password===""){
    alert("nhap email mk");
  } else{
    getUser().then((data) =>{
      const user = data.find((user) =>
        user.email === email && user.password === password
      );
      if (user) {
        alert("thanh cong");
        window.location.href="mainPage.html";
      } else {
        alert("that bai");
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

//   function ValidateEmail(inputText)
//   {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(inputText.value.match(mailformat))
//   {
//   alert("Valid email address!");
//   document.form1.text1.focus();
//   return true;
//   }
//   else
//   {
//   alert("You have entered an invalid email address!");
//   document.form1.text1.focus();
//   return false;
//   }
//   }
