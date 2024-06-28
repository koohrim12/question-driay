const root = document.getElementById("root");
console.log(root);
const div1 = document.createElement("div1");
root.appendChild(div1);
console.log(div1);

// root -  style
root.style.width = "100%";
root.style.height = "100vh";
root.style.backgroundColor = "black";
root.position = "relative";

// div1 - style

div1.style.width = "500px";
div1.style.height = "500px";
div1.style.position = "absoute";
div1.style.backgroundColor = "red";
