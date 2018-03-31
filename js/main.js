var linkForm = document.querySelector(".write-us-link");
var popupForm = document.querySelector(".modal-write-us");
var closeForm = popupForm.querySelector(".modal-close");
var form = popupForm.querySelector("form");
var userName = popupForm.querySelector("[name=name]");
var userEmail = popupForm.querySelector("[name=email]");
var userText = popupForm.querySelector("[name=text]");
var linkMap = document.querySelector(".contacts-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");
var isStorageSupport = true;
var storage = {
  name: "",
  email: ""
};

try {
  storage.name = localStorage.getItem("userName");
  storage.email = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

linkForm.addEventListener("click", function (e) {
  e.preventDefault();
  popupForm.classList.add("modal-show");
  if (storage.name) {
    userName.value = storage.name;
    if (storage.email) {
      userEmail.value = storage.email;
      userText.focus();
    } else {
      userEmail.focus();
    };
  } else {
    userName.focus();
  }
});

closeForm.addEventListener("click", function (e) {
  e.preventDefault();
  popupForm.classList.remove("modal-show");
  popupForm.classList.remove("modal-error");
});

form.addEventListener("submit", function (e) {
  if (!userName.value || !userEmail.value || !userText.value) {
    e.preventDefault();
    popupForm.classList.remove("modal-error");
    popupForm.offsetWidth = popupForm.offsetWidth;
    popupForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
      popupForm.classList.remove("modal-error");
    }
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});

linkMap.addEventListener("click", function (e) {
  e.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (e) {
  e.preventDefault();
  popupMap.classList.remove("modal-show");
});
