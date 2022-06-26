function hashTagCounter() {
  const userInput = document.getElementById("textarea").value
  const myArray = userInput.split(" ");
  const final_list = myArray.filter(checkHasTag);
  const length = document.getElementById("count")
  length.innerHTML = final_list.length;
}

function checkHasTag(item) {
  return item[0] == "#" && item.length > 1 && item[1] != "#";
}
