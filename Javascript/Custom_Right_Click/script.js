let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let dialogBox = document.createElement("div");
dialogBox.innerHTML = `<ul>
<li class='list-of-content' style='padding:5px; cursor:default	; list-style:none; border-bottom:1px solid #4a5568;'>Option 1</li>
<li class='list-of-content' style='padding:5px; cursor:default; list-style:none; border-bottom:1px solid #4a5568;'>Option 2</li>
<li class='list-of-content' style='padding:5px; cursor:default; list-style:none; border-bottom:1px solid #4a5568;'>Option 3</li>
<li class='list-of-content' style='padding:5px; cursor:default; list-style:none; border-bottom:1px solid #4a5568;'>Option 4</li>
</ul>`;
dialogBox.style.position = "absolute";
dialogBox.style.padding = "10px";
dialogBox.style.listStyle = "none";
dialogBox.style.width = "300px";
dialogBox.style.border = "1px solid #2d3748";
dialogBox.style.backgroundColor = "#1a202c";
dialogBox.style.color = "#e2e8f0";
dialogBox.style.borderRadius = "10px";
dialogBox.style.boxShadow = "3px 4px 6px 10px  rgba(0, 0, 0, 0.3)";
cursor: PointerEvent;
dialogBox.style.display = "none";
body.appendChild(dialogBox);
body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log(event.x);
  console.log(event.y);
  dialogBox.style.top = `${event.y}px`;
  dialogBox.style.left = `${event.x}px`;
  dialogBox.style.display = `block`;
});
body.addEventListener("click", () => {
  dialogBox.style.display = `none`;
});
