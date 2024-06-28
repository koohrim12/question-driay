const root = document.getElementById("root");
const div = document.createElement("div");
div.setAttribute("id", "wrap");
root.appendChild(div);
// root color 및 크기 지정
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "black";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";

const img = document.createElement("img");
// console.log(img);
div.appendChild(img);
img.src = "logo.png";
const h1 = document.createElement("h1");
h1.innerHTML = "DRIAY";
h1.style.color = "white";
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.alignItems = "center";
// console.log(h1);

const button = document.createElement("button");

// console.log(button);
div.appendChild(h1);

div.appendChild(button);
button.innerHTML = "질문 받으러 가기";
button.style.width = "200px";
button.style.height = "50px";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.borderRadius = "30px";
button.style.marginLeft = "530px";
