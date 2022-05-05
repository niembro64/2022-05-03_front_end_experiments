function deleteElement(ele) {
  console.log("Test");
  var b = document.querySelector("#bodyName");
  b.removeChild(ele.parentNode);
  // console.log("TEST");
}
function changeElement(ele) {
  console.log("Test");
  var a = document.querySelector("#firstName");
  a.innerHTML = "Changed";
}

var i = 0;
var original = document.getElementById("duplicater");

function duplicate() {
  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "duplicater" + ++i;
  // or clone.id = ""; if the divs don't need an ID
  original.parentNode.appendChild(clone);
  // original.parentNode.appendChild;
  // original.appendChild(clone);
}

// var cBoi = document.querySelector("#colorBoi");
function changeColor(ele) {
  var rgb_string = window
    .getComputedStyle(ele, null)
    .getPropertyValue("background-color");
    
  var rgb_arr = rgb_string.split(",");
  rgb_arr[0] = parseInt(rgb_arr[0].substring(4, rgb_arr[0].length), 10);
  rgb_arr[1] = parseInt(rgb_arr[1].substring(1, rgb_arr[1].length), 10);
  rgb_arr[2] = parseInt(rgb_arr[2].substring(1, rgb_arr[2].length - 1), 10);
  console.log(rgb_arr);

  rgb_arr[0] = (rgb_arr[0] + 10) % 255;

  var new_rgb_string =
    "rgb(" + rgb_arr[0] + "," + rgb_arr[1] + "," + rgb_arr[2] + ")";

  console.log(new_rgb_string);

  ele.style["background-color"] = new_rgb_string;
  // cBoi.style["background-color"] = new_rgb_string;
  // cBoi.style["background-color"] = "#aabbcc";
  // cBoi.style["background-color"] = "green";
}

function decimalToHexString(number) {
  if (number < 0) {
    number = 0xffffffff + number + 1;
  }

  return number.toString(16).toUpperCase();
}
