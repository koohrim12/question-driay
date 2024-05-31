const root = document.getElementById("root");
console.log(root);
const div = document.createElement("div");
div.setAttribute("id", "wrap");
root.appendChild(div);
// console.log(div);
const button = document.createElement("button");
wrap.appendChild(button);
console.log(button);

// root -style
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "pink";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignContent = "center";
root.style.flexDirection = "column-reverse";

// 버튼 - style
button.innerHTML = "전송";
button.style.width = "100px";
button.style.height = "50px";
button.style.borderRadius = "30px";

// wrap
wrap.style.width = "50vw";
wrap.style.height = "70vh";
wrap.style.backgroundColor = "white";
wrap.style.display = "flex";
wrap.style.justifyContent = "center";
wrap.style.alignContent = "center";
wrap.style.flexDirection = "column-reverse";
wrap.style.margin = "200px";

function textAppear() {
  let clickBtn = document.createElement("div");
  clickBtn.innerHTML = "이건 클릭 했을 때 나오는 텍스트이다.";
  clickBtn.style.width = "500px";
  clickBtn.style.height = "50px";
  clickBtn.style.backgroundColor = "gray";
  clickBtn.style.margin = "5px";

  if (wrap.children.length < 11) {
    wrap.appendChild(clickBtn);
  } else {
    return;
  }
}
button.addEventListener("click", textAppear);
