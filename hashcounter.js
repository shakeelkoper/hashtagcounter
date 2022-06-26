const input = "#a bc #xyz";
function hashTagCounter() {
  const myArray = input.split(" ");
  const final_list = myArray.filter(checkHasTag);
  console.log(final_list);
  console.log(final_list.length);
  const length = document.getElementById("count")
  length.innerHTML = final_list.length

  const tags = document.getElementById("validTags")
  tags.innerHTML = final_list
}

function checkHasTag(item) {
  console.log(item);
  return item[0] == "#" && item.length > 1 && item[1] != "#";
}
