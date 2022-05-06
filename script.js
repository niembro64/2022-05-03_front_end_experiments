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

// var cBoi = document.querySelector("#colorBoi");

function onMouseLeaveEventHandler(ele) {
  ele.innerHTML = "";
}

var addColor = 50;
var addALpha = 0.2;
function onMouseOverEventHandler(ele) {
  ele.style.cursor = "pointer";
  var rgb_string;
  try {
    rgb_string = window
      .getComputedStyle(ele, null)
      .getPropertyValue("background-color");
    // console.log(rgb_string);
  } catch (error) {
    rgb_string = "rgba(0, 0, 0, 0)";
  }
  var rgb_arr = rgb_string.split(",");
  // console.log(rgb_arr);

  rgb_arr[0] = parseInt(rgb_arr[0].substring(5, rgb_arr[0].length), 10);
  rgb_arr[1] = parseInt(rgb_arr[1].substring(1, rgb_arr[1].length), 10);
  rgb_arr[2] = parseInt(rgb_arr[2].substring(1, rgb_arr[2].length), 10);
  rgb_arr[3] = parseFloat(rgb_arr[3].substring(1, rgb_arr[3].length - 1));
  // console.log(rgb_arr);

  // rgb_arr[0] = rgb_arr[0] + addColor > 255 ? 255 : rgb_arr[0] + addColor;
  // rgb_arr[3] = rgb_arr[3] + addALpha > 0.99 ? 0.99 : rgb_arr[3] + addALpha;
  switch (rgba_switch) {
    case "r":
      // ele.innerHTML = "❤️";
      rgb_arr[0] = rgb_arr[0] + addColor > 255 ? 255 : rgb_arr[0] + addColor;
      break;
    case "g":
      // ele.innerHTML = "🍃";
      rgb_arr[1] = rgb_arr[1] + addColor > 255 ? 255 : rgb_arr[1] + addColor;
      break;
    case "b":
      // ele.innerHTML = "🌊";
      rgb_arr[2] = rgb_arr[2] + addColor > 255 ? 255 : rgb_arr[2] + addColor;
      break;
    default:
      // ele.innerHTML = "🦜";
      rgb_arr[3] = rgb_arr[3] + addALpha > 0.99 ? 0.99 : rgb_arr[3] + addALpha;
  }

  var new_rgb_string =
    "rgba(" +
    rgb_arr[0] +
    "," +
    rgb_arr[1] +
    "," +
    rgb_arr[2] +
    "," +
    rgb_arr[3] +
    ")";

  // console.log(new_rgb_string);

  ele.style["background-color"] = new_rgb_string;
  // cBoi.style["background-color"] = new_rgb_string;
  // cBoi.style["background-color"] = "#aabbcc";
  // cBoi.style["background-color"] = "green";
}
function onClickEventHandler(ele) {
  ele.innerHTML = "✖";
  // console.log("HERE");
  var rgb_string;
  try {
    rgb_string = window
      .getComputedStyle(ele, null)
      .getPropertyValue("background-color");
    // console.log(rgb_string);
  } catch (error) {
    rgb_string = "rgba(0, 0, 0, 0)";
  }
  var rgb_arr = rgb_string.split(",");
  // console.log(rgb_arr);

  rgb_arr[0] = parseInt(rgb_arr[0].substring(5, rgb_arr[0].length), 10);
  rgb_arr[1] = parseInt(rgb_arr[1].substring(1, rgb_arr[1].length), 10);
  rgb_arr[2] = parseInt(rgb_arr[2].substring(1, rgb_arr[2].length), 10);
  rgb_arr[3] = parseFloat(rgb_arr[3].substring(1, rgb_arr[3].length - 1));
  // console.log(rgb_arr);

  rgb_arr[0] = 0;
  rgb_arr[1] = 0;
  rgb_arr[2] = 0;
  rgb_arr[3] = 0;

  var new_rgb_string =
    "rgba(" +
    rgb_arr[0] +
    "," +
    rgb_arr[1] +
    "," +
    rgb_arr[2] +
    "," +
    rgb_arr[3] +
    ")";

  // console.log(new_rgb_string);

  ele.style["background-color"] = new_rgb_string;
  // cBoi.style["background-color"] = new_rgb_string;
  // cBoi.style["background-color"] = "#aabbcc";
  // cBoi.style["background-color"] = "green";
}

var rgba_switch = "a";

function onClickR(ele) {
  rgba_switch = "r";
}
function onClickG(ele) {
  rgba_switch = "g";
}
function onClickB(ele) {
  rgba_switch = "b";
}
function onClickA(ele) {
  rgba_switch = "a";
}

function decimalToHexString(number) {
  if (number < 0) {
    number = 0xffffffff + number + 1;
  }

  return number.toString(16).toUpperCase();
}

function onMouseDownHandler(ele) {
  ele.style.cursor = "none";
}
function onMouseUpHandler(ele) {
  ele.style.cursor = "grab";
}
function onMouseEnterHandler(ele) {
  ele.style.cursor = "grab";
}
function onMouseLeaveHandler(ele) {
  ele.style.cursor = "default";
}
var score_div = document.querySelector("#score");
var score_count = 0;

function onDownKill(ele) {
  ele.innerHTML = "💀";
}
function onUpKill(ele) {
  ele.innerHTML = "";
  ele.parentNode.removeChild(ele);
  score_count++;
  score_div.innerHTML = score_count;
}
function onEnterKill(ele) {
  ele.innerHTML = "😲";
  ele.style.cursor = "crosshair";
}
function onLeaveKill(ele) {
  ele.innerHTML = "😬";
  ele.style.cursor = "default";
}

var emo = document.querySelector("#ccc");
function generateEmoji() {
  var clone = emo.cloneNode(true);
  var time = Math.random() * 2 + 0.5;
  var y = Math.floor((Math.random() - 0.5) * 200);
  var x = Math.floor((Math.random() - 0.5) * 200);
  var z = Math.floor(Math.random() * 3);
  var e = Math.floor(Math.random() * e_array.length);
  console.log(x);

  clone.style.setProperty("--animation-time", time + "s");
  clone.style.setProperty("--z-level", z);
  clone.style.setProperty("--x-offset", x + "px");
  clone.style.setProperty("--y-offset", y + "px");
  clone.innerHTML = e_array[e];

  // clone.id = "ccc";
  emo.parentNode.appendChild(clone);
}

var e_array = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😇",
  "🥰",
  "😋",
  "😜",
  "😜",
  "🤔",
  "🤨",
  "😑",
  "😏",
  "🙄",
  "😌",
];

// var original = document.getElementById("duplicater");
// function duplicate() {
//   var clone = original.cloneNode(true); // "deep" clone
//   clone.id = "duplicater" + ++i;

//   // or clone.id = ""; if the divs don't need an ID
//   original.parentNode.appendChild(clone);
//   // original.parentNode.appendChild;
//   // original.appendChild(clone);
// }
