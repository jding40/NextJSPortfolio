function equalHeight(className) {
  console.log("equalHeight");
  let elements = document.getElementsByClassName(className);
  let height = 0;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].clientHeight > height) {
      height = elements[i].clientHeight;
    }
  }
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.height = height + "px";
  }
}
export default equalHeight;
