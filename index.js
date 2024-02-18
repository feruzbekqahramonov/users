const name = document.getElementById("name");
const age = document.getElementById("age");
const desc = document.getElementById("description");
const email = document.getElementById("email");
const nat = document.getElementById("nationality");
const btn = document.getElementById("btn");
const wrapper = document.getElementById("wrapper");
const delet = document.getElementById("delet");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validate() {
  if (!name.value) {
    alert("Ismingizni kiritishingi shart!!!");
    name.style.outlineColor = "red";
    name.focus();
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }

  if (!name.value.trim()) {
    alert("Ism probellardan iborat bo`lmaydi!!!");
    name.style.outlineColor = "red";
    name.focus();
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }

  if (name.value.length <= 3) {
    alert("Ismda kamida 3 tadan ko`p ishora boladi!!!");
    name.style.outlineColor = "red";
    name.focus();
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }
  if (Number(name.value[0])) {
    alert("Ism raqamdan boshlanmaydi!!!");
    name.style.outlineColor = "red";
    name.focus();
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }

  if (!age.value) {
    alert("Yoshingizni kiritmadingiz!");
    age.style.outlineColor = "red";
    age.focus();
    return false;
  } else {
    age.style.outlineColor = "lightgray";
  }

  if (isNaN(age.value) || age.value < 1 || age.value > 100) {
    alert("Yosh bunday bo'lishi mumkin emas");
    age.style.outlineColor = "red";
    age.focus();
    age.value = "";
    return false;
  } else {
    age.style.outlineColor = "lightgray";
  }

  if (!age.value.trim()) {
    alert("Yosh probellardan iborat bo`lmaydi!!!");
    age.style.outlineColor = "red";
    age.focus();
    age.value = "";
    return false;
  } else {
    age.style.outlineColor = "lightgray";
  }

  if (!email.value) {
    alert("Emailni kiriting");
    email.style.outlineColor = "red";
    email.focus();
    return false;
  } else {
    email.style.outlineColor = "lightgray";
  }

  if (!email.value.trim()) {
    alert("Yosh probellardan iborat bo`lmaydi!!!");
    email.style.outlineColor = "red";
    email.focus();
    email.value = "";
    return false;
  } else {
    email.style.outlineColor = "lightgray";
  }

  if (!nat.value) {
    alert("Millatni tanlamadingiz!!!");
    nat.style.outlineColor = "red";
    return false;
  }

  if (!desc.value) {
    alert("Izoh kiritishni unittingiz!");
    desc.style.outlineColor = "red";
    desc.value = "";
    return false;
  } else {
    desc.style.outlineColor = "lightgray";
  }

  if (!desc.value.trim()) {
    alert("Izoh probellardan iborat bo`lmaydi!!!");
    desc.focus();
    desc.style.outlineColor = "red";
    return false;
  } else {
    desc.style.outlineColor = "lightgray";
  }

  if (desc.value.length <= 5) {
    alert("Izoh kamida 5 tadan ko`p ishora bolishi lozim boladi!!!");
    desc.focus();
    desc.style.outlineColor = "red";
    return false;
  } else {
    desc.style.outlineColor = "lightgray";
  }
  return true;
}

function clear() {
  name.value = "";
  age.value = "";
  email.value = "";
  nat.value = "";
  desc.value = "";
}

function getData() {
  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  return users;
}

btn && btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (validate(name, age, desc, email, nat)) {
      const user = {
        name: name.value,
        age: age.value,
        email: email.value,
        nat: nat.value,
        desc: desc.value,
      };

      let u = getData();
      u.push(user);

      localStorage.setItem("users", JSON.stringify(u));
      clear();

      let card = createCard(user)
      wrapper.innerHTML += card
    } else {
      console.log("O`tmadi");
    }
  });

function createCard(user) {
  return `
   <div class="users">
         <h3>${user.name}</h3>
         <h3>${user.age}</h3>
         <a href="#">${user.email}</a>
         <h3>${user.nat}</h3>
         <p>${user.desc}</p>
         <a id="delet"><i class="fa-regular fa-trash-can"></i></a>
   </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  let users = getData();
  users.forEach((user) => {
    let card = createCard(user);
    wrapper.innerHTML += card
  });
});


