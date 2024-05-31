const root = document.getElementById("root");
console.log(root);
const div = document.createElement("div");
root.appendChild(div);
console.log(div);
const button = document.createElement("button");
root.appendChild(button);
console.log(button);
// const input = document.createElement("input");
// root.appendChild(input);
// console.log(input);

// root -style
root.style.width = "500px";
root.style.height = "500px";
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

// input - style
// input.style.width = "300px";
// input.style.height = "300px";

function textAppear() {
  let clickBtn = document.createElement("div");
  clickBtn.innerHTML = "이건 클릭 했을 때 나오는 텍스트이다.";
  root.appendChild(clickBtn);
  clickBtn.style.width = "200px";
  clickBtn.style.height = "50px";
  clickBtn.style.backgroundColor = "gray";
  clickBtn.style.margin = "5px";
}
button.addEventListener("click", textAppear);
