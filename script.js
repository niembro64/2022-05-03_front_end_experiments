function deleteElement(ele) {
    // console.log("Test");
    var b = document.querySelector("#bodyName");
    b.removeChild(ele.parentNode);
    // console.log("TEST");
}
function changeElement(ele) {
    // console.log("Test");
    var a = document.querySelector("#firstName");
    a.innerHTML = "Changed";
}

var i = 0;

// var cBoi = document.querySelector("#colorBoi");

function onMouseLeaveEventHandler(ele) {
    ele.innerHTML = "";
}
function onMouseLeaveEventHandlerEmoji(ele) {
    // ele.style.cursor = "grabbing";
    // ele.innerHTML = "";
}

var addColor = 85;
var addALpha = 0.2;
function onMouseOverEventHandlerClick(ele) {
    ele.style.cursor = "pointer";
}
function onMouseLeaveEventHandlerEmojiClick(ele) {
    // ele.style.cursor = "none";
}
function onMouseOverEventHandler(ele) {
    // ele.style.cursor = "pointer";
    // ele.style.cursor = "help";
    // document.getElementsByTagName("body")[0].style.cursor = "url('1_red.cur'), auto";

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
            // var audio_a = new Audio("audio_a.mp3");
            // audio_a.volume = bingvolume;
            // audio_a.play();
            rgb_arr[0] =
                rgb_arr[0] + addColor > 255 ? 255 : rgb_arr[0] + addColor;
            break;
        case "g":
            // ele.innerHTML = "🍃";
            // var audio_b = new Audio("audio_b.mp3");
            // audio_b.volume = bingvolume;
            // audio_b.play();
            rgb_arr[1] =
                rgb_arr[1] + addColor > 255 ? 255 : rgb_arr[1] + addColor;
            break;
        case "b":
            // ele.innerHTML = "🌊";
            // var audio_d = new Audio("audio_d.mp3");
            // audio_d.volume = bingvolume;
            // audio_d.play();
            rgb_arr[2] =
                rgb_arr[2] + addColor > 255 ? 255 : rgb_arr[2] + addColor;
            break;
        default:
            // ele.innerHTML = "🦜";
            // var audio_f = new Audio("audio_f.mp3");
            // audio_f.volume = bingvolume;
            // audio_f.play();
            rgb_arr[3] =
                rgb_arr[3] + addALpha > 0.99 ? 0.99 : rgb_arr[3] + addALpha;
    }

    // var audio_w = new Audio("pad.mp3");
    // audio_w.volume = .1;
    // audio_w.play();

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

    // var audio_a = new Audio("audio_d.mp3");
    // audio_a.volume = Math.pow(rgb_arr[3], 2);
    // audio_a.play();
    // var audio_r = new Audio("audio_f.mp3");
    // audio_r.volume = Math.pow((rgb_arr[0] * rgb_arr[3]) / 255, 2);
    // audio_r.play();
    // var audio_g = new Audio("audio_a.mp3");
    // audio_g.volume = Math.pow((rgb_arr[1] * rgb_arr[3]) / 255, 2);
    // audio_g.play();
    // var audio_b = new Audio("audio_b.mp3");
    // audio_b.volume = Math.pow((rgb_arr[2] * rgb_arr[3]) / 255, 2);
    // audio_b.play();
    // var audio_r = new Audio("audio_f.mp3");
    // var audio_g = new Audio("audio_a.mp3");
    // var audio_b = new Audio("audio_b.mp3");
    // audio_r.volume = Math.pow((rgb_arr[0] * rgb_arr[3]) / 255, 2);
    // audio_g.volume = Math.pow((rgb_arr[1] * rgb_arr[3]) / 255, 2);
    // audio_b.volume = Math.pow((rgb_arr[2] * rgb_arr[3]) / 255, 2);
    // audio_a.volume = Math.pow(
    //   rgb_arr[3] - audio_r.volume / 3 - audio_g.volume / 3 - audio_b.volume / 3,
    //   2
    // );
    // audio_r.play();
    // audio_g.play();
    // audio_b.play();

    ele.style["background-color"] = new_rgb_string;
    // cBoi.style["background-color"] = new_rgb_string;
    // cBoi.style["background-color"] = "#aabbcc";
    // cBoi.style["background-color"] = "green";
}
function onClickEventHandler(ele) {
    var audio_w = new Audio("extreme.mp3");
    audio_w.volume = 0.3;
    audio_w.play();
    // ele.innerHTML = "✖";
    ele.innerHTML = "❌";
    // ele.innerHTML = "🗑️";
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
var bingvolume = 0.5;
// document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";

document.getElementsByTagName("body")[0].style.cursor =
    "url('./aaa_white.cur'), auto";

function onClickR(ele) {
    document.getElementsByTagName("body")[0].style.cursor =
        "url('1_red.cur'), auto";
    var audio_a = new Audio("1.mp3");
    audio_a.volume = bingvolume;
    audio_a.play();
    rgba_switch = "r";
    // ele.style.cursor= url("./RED.cur')
    // document.body.style.cursor = "url('RED.cur'), auto";
}
function onClickG(ele) {
    document.getElementsByTagName("body")[0].style.cursor =
        "url('2_green.cur'), auto";
    var audio_b = new Audio("2.mp3");
    audio_b.volume = bingvolume;
    audio_b.play();
    rgba_switch = "g";
}
function onClickB(ele) {
    document.getElementsByTagName("body")[0].style.cursor =
        "url('1_blue.cur'), auto";
    var audio_d = new Audio("3.mp3");
    audio_d.volume = bingvolume;
    audio_d.play();
    rgba_switch = "b";
}
function onClickA(ele) {
    document.getElementsByTagName("body")[0].style.cursor =
        "url('aaa_white.cur'), auto";
    var audio_f = new Audio("4.mp3");
    audio_f.volume = bingvolume;
    audio_f.play();
    rgba_switch = "a";
}

function decimalToHexString(number) {
    if (number < 0) {
        number = 0xffffffff + number + 1;
    }

    return number.toString(16).toUpperCase();
}

function onMouseDownHandler(ele) {
    var audio_b = new Audio("glass1.mp3");
    audio_b.volume = 0.3;
    audio_b.play();
    ele.style.cursor = "grabbing";
}

function onMouseUpHandler(ele) {
    var audio_a = new Audio("pop1.mp3");
    audio_a.volume = 0.1;
    audio_a.play();
    ele.style.cursor = "grab";
}
function onMouseEnterHandler(ele) {
    var audio_a = new Audio("pop1.mp3");
    audio_a.volume = 0.1;
    audio_a.play();
    ele.style.cursor = "grab";
}
function onMouseLeaveHandler(ele) {
    // var audio_f = new Audio("audio_f.mp3");
    // audio_f.play();
    // ele.style.cursor = "grab";
    ele.style.cursor = "default";
}
var score_div = document.querySelector("#score");
var score_count = 0;

function onDownKill(ele) {
    var audio_d = new Audio("crash.mp3");
    audio_d.volume = 0.4;
    audio_d.play();
    ele.innerHTML = "💀";
    ele.style["text-shadow"] = "0px 0px 10px rgba(255, 0, 0, 1)";
}
function onUpKill(ele) {
    ele.innerHTML = "";
    ele.parentNode.removeChild(ele);
    score_count++;
    score_div.innerHTML = score_count;
    ele.style["text-shadow"] = "0px 0px 0px rgba(0, 0, 0, 0)";
}
function onEnterKill(ele) {
    var audio_a = new Audio("gasp.wav");
    // var audio_a = new Audio("wiggle.mp3");
    audio_a.volume = 0.05;
    audio_a.play();
    ele.innerHTML = "😲";
    ele.style.cursor = "crosshair";
    ele.style["text-shadow"] = "0px 0px 10px rgba(0,0,0, 1)";
}
function onLeaveKill(ele) {
    ele.innerHTML = "😬";
    ele.style.cursor = "default";
    ele.style["text-shadow"] = "0px 0px 0px rgba(0, 0, 0, 0)";
}

var emo = document.querySelector("#ccc");
function generateEmoji() {
    var audio_b = new Audio("wii.wav");
    audio_b.volume = 0.2;
    audio_b.play();
    for (var i = 0; i < 3; i++) {
        var clone = emo.cloneNode(true);
        var time = Math.random() * 3 + 2;
        // var x = Math.floor((Math.random() - 0.5) * 200);
        var y = Math.random();
        var x = Math.sqrt(1 - Math.pow(y, 2));

        y = y * (Math.random() >= 0.5 ? 1 : -1);
        x = x * (Math.random() >= 0.5 ? 1 : -1);

        console.log(y);
        console.log(x);

        y = Math.floor(y * 100);
        x = Math.floor(x * 100);

        var z = Math.floor(Math.random() * 2);
        var e = Math.floor(Math.random() * e_array.length);
        // console.log(x);

        clone.style.setProperty("--animation-time", time + "s");
        clone.style.setProperty("--z-level", z);
        clone.style.setProperty("--x-offset", x + "px");
        clone.style.setProperty("--y-offset", y + "px");
        clone.innerHTML = e_array[e];

        // clone.id = "ccc";
        emo.parentNode.appendChild(clone);
    }
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

//////////////

// var top = document.querySelector("#btnbtn");
function coolSlide(ele) {
    ele.parentNode.style["width"] = "170px";
    ele.parentNode.style["border-bottom-left-radius"] = "20px";
    ele.parentNode.style["border-bottom-right-radius"] = "20px";
    ele.parentNode.style["background-color"] = "rgb(13,110,253)";
    //   ele.parentNode.style["box-shadow"] = "0 0px 300px 0 rgb(255, 255, 155)";
    ele.parentNode.style["box-shadow"] = "0 0px 300px 0 rgb(13,110,253)";
}
function coolSlideOut(ele) {
    ele.parentNode.style["width"] = "100%";
    ele.parentNode.style["border-bottom-left-radius"] = "0px";
    ele.parentNode.style["border-bottom-right-radius"] = "0px";
    ele.parentNode.style["background-color"] = "black";
    ele.parentNode.style["box-shadow"] = "0 0px 20px 0 rgb(0, 0, 0)";
}

/////////////

var pongr = new Audio("z01c.wav");
pongr.volume = 0;
pongr.loop = true;

var pongl = new Audio("z01c.wav");
pongl.volume = 0;
pongl.loop = true;

var pongu = new Audio("z03c.wav");
pongu.volume = 0;
pongu.loop = true;

var maxvolume = 100;

var volx100 = 0;
var fadein_interval;
var fadein;
function playplay(ele) {
    if (ele) {
        setTimeout(() => pongr.play(), 1);
        setTimeout(() => pongl.play(), 351);
        setTimeout(() => pongu.play(), 701);
    }
}
function onMouseEnterDesign(ele) {
    var z = 1;
    playplay(z);
    ele.style.cursor = "pointer";
    // ele.style["color"] = "rgba(0,0,0, 1)";
    ele.style["color"] = "rgba(255,255,255, 1)";
    ele.style["text-shadow"] = "0px 0px 5px rgba(255, 255, 255, 1)";

    clearInterval(fadeout);
    fadeout_interval = Infinity;
    fadein_interval = 50;
    fadein = setInterval(function () {
        if (volx100 < maxvolume) {
            volx100 += 20;
            pongr.volume = volx100 / 1000;
            pongl.volume = volx100 / 1000;
            pongu.volume = volx100 / 1000;
            console.log(pongr.volume);
            console.log(pongl.volume);
            console.log(pongu.volume);
        } else {
            console.log("CLEAR FADEIN");
            fadein_interval = 100000;
            clearInterval(fadein);
        }
    }, fadein_interval);
}
var fadeout_interval;
var fadeout;
function onMouseLeaveDesign(ele) {
    ele.style.cursor = "default";
    ele.style["color"] = "rgba(255, 255, 255, 1)";
    ele.style["text-shadow"] = "0px 0px 0px rgba(255, 255, 255, 1)";

    clearInterval(fadein);
    fadein_interval = Infinity;
    fadeout_interval = 50;
    fadeout = setInterval(function () {
        if (volx100 > 0) {
            volx100 -= 2.5;
            if (volx100 - 3 < 0) {
                volx100 = 0;
            }
            pongr.volume = volx100 / 1000;
            pongl.volume = volx100 / 1000;
            pongu.volume = volx100 / 1000;
            console.log(pongr.volume);
            console.log(pongl.volume);
            console.log(pongu.volume);
        } else {
            // Stop the setInterval when 0 is reached
            console.log("CLEAR FADEOUT");
            fadeout_interval = 100000;
            clearInterval(fadeout);
        }
    }, fadeout_interval);
    // ele.style["filter"] = "inverted";
    // ele.style["transform"] = "skew(0deg)";
    // ele.style["box-shadow"] = "0 0px 20px 0 rgb(0,0,0)";
    // ele.style["text-shadow"] = "0px 0px 8px rgba(255, 255, 255, .5)";
}
function onMouseUpDesign(ele) {
    // ele.style.cursor = "pointer";
    ele.style["text-shadow"] = "0px 0px 5px rgba(255, 255, 255, 1)";
    ele.style["color"] = "rgba(255,255,255, 1)";
    // ele.style["text-shadow"] = "0px 0px 10px rgba(255, 255, 255, 1)";
    // ele.style["color"] = "rgba(255, 255, 255, 1)";
    // ele.style["filter"] = "inverted";
    // ele.style["transform"] = "skew(0deg)";
    // ele.style["box-shadow"] = "0 0px 20px 0 rgb(0,0,0)";
    // ele.style["color"] = "rgba(255, 255, 255, 1)";
    // ele.style["text-shadow"] = "rgba(255, 255, 255, 0.0)";
}
function onMouseDownDesign(ele) {
    var pong = new Audio("z00.wav");
    pong.volume = 1;
    pong.play();
    ele.style["text-shadow"] = "0px 0px 8px rgba(255, 255, 255, 1)";
    // ele.style["color"] = "rgba(0,0,0, .5)";
    ele.style["color"] = "rgba(0,0,0, .0)";
    // ele.style["filter"] = "inverted";
    // ele.style["transform"] = "skew(0deg)";
    // ele.style["box-shadow"] = "0 0px 20px 0 rgb(0,0,0)";
    // ele.style["color"] = "rgba(255, 255, 255, 0.0)";
    // ele.style["text-shadow"] = "rgba(255, 255, 255, 0.0)";
}

//////////

(function () {
    var parallax = document.querySelectorAll("body"),
        speed = 0.5;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + windowYOffset * speed + "px";

            el.style.backgroundPosition = elBackgrounPos;
        });
    };
})();

//////////////////////////////////////////////////////////////////////

function onEnterR(ele) {
    ele.style.cursor = "url('./1_red.cur'), auto";
}
function onEnterG(ele) {
    ele.style.cursor = "url('./2_green.cur'), auto";
}
function onEnterB(ele) {
    ele.style.cursor = "url('./1_blue.cur'), auto";
}
function onEnterA(ele) {
    ele.style.cursor = "url('./aaa_white.cur'), auto";
}

////////////////

var cube_line = document.querySelectorAll(".cube_side");
var cube_line_inside = document.querySelectorAll(".cube_side_inside");
var spinnerOuterOuter = document.querySelector(".spinnerOuterOuter");

function cubeColorIn(ele) {
    ele.style.cursor = "pointer";
    for (var i = 0; i < cube_line.length; i++) {
        cube_line[i].style["transition-duration"] = ".3s";
        cube_line[i].style["filter"] = "saturate(100%)";
        cube_line_inside[i].style["transition-duration"] = ".3s";
        cube_line_inside[i].style["width"] = "70%";
        cube_line_inside[i].style["height"] = "70%";
    }
}
function cubeColorOut(ele) {
    ele.style.cursor = "default";
    for (var i = 0; i < 6; i++) {
        cube_line[i].style["transition-duration"] = "3s";
        cube_line[i].style["filter"] = "saturate(0%)";
        cube_line_inside[i].style["transition-duration"] = ".3s";
        cube_line_inside[i].style["width"] = "100%";
        cube_line_inside[i].style["height"] = "100%";
    }
}
function cubeColorDown() {
    for (var i = 0; i < cube_line.length; i++) {
        cube_line[i].style["transition-duration"] = ".2s";
        cube_line[i].style["border-radius"] = "50%";
        cube_line[i].style["box-shadow"] =
            "0px 0px 3px 0px rgb(255, 255, 255), 0px 0px 50px 0px rgb(255, 255, 255), 0px 0px 100px 0px rgb(255, 255, 255)";
        cube_line_inside[i].style["transition-duration"] = ".3s";
        cube_line_inside[i].style["filter"] = "invert(1)";
        cube_line_inside[i].style["width"] = "0%"; 
        cube_line_inside[i].style["height"] = "0%"; 
        cube_line_inside[i].style["border-radius"] = "50%"; 
        cube_line_inside[i].style["border-radius"] = "50%"; 
    }
}
function cubeColorUp() {
    for (var i = 0; i < 6; i++) {
        cube_line[i].style["transition-duration"] = "3s";
        cube_line[i].style["border-radius"] = "0px";
        cube_line[i].style["box-shadow"] =
        "0px 0px 0px 0px rgb(255, 255, 255), 0px 0px 0px 0px rgb(255, 255, 255), 0px 0px 0px 0px rgb(255, 255, 255)";
        cube_line_inside[i].style["transition-duration"] = "3s";
        cube_line_inside[i].style["filter"] = "invert(0)";
        cube_line_inside[i].style["width"] = "85%"; 
        cube_line_inside[i].style["height"] = "85%"; 
        cube_line_inside[i].style["border-radius"] = "0%"; 
    }
}

///////////////////////////////////////////////
// checkboxes

var num_checks = 0;
var num_checked_ele = document.querySelector("#num_checked");
num_checked_ele.innerHTML = 0;

function checkBoxOnMouseDownHandler(ele) {
    var click_up = new Audio("click_up.wav");
    click_up.volume = 0.1;
    click_up.play();
    console.log(ele.firstElementChild.firstElementChild.checked ? "YES" : "NO");
    ele.firstElementChild.firstElementChild.checked
        ? num_checks--
        : num_checks++;
    num_checked_ele.innerHTML = num_checks;
}
function checkBoxOnMouseDownHandler2(ele) {
    // var click_up = new Audio("click_down.wav");
    // click_up.volume = 0.1;
    // click_up.play();
    console.log(ele.firstElementChild.firstElementChild.checked ? "YES" : "NO");
    ele.firstElementChild.firstElementChild.checked
        ? num_checks--
        : num_checks++;
    num_checked_ele.innerHTML = num_checks;
}

///////////////////////////////////////
// circle aniamtion

let counter = 0;

setInterval(() => {
    const el = document.querySelector(".number");
    const circle = document.querySelector(".circleee");
    const elValue = Number(el.getAttribute("data-value"));
    if (counter !== elValue) {
        counter++;
        el.innerHTML = `${Math.floor(counter)}%`;
        circle.style.strokeDashoffset -= 8.2;
    }
    if (counter == 100) {
        counter = 0;
        circle.style.strokeDashoffset = 410;
    }
}, 200);

function on_hover_menu_tweak() {
    var audio_a = new Audio("mixkit-game-ball-tap-2073.wav");
    audio_a.volume = 0.2;
    audio_a.play();
}
function on_down_menu_tweak() {
    var audio_a = new Audio("mixkit-retro-game-notification-212.wav");
    audio_a.volume = 0.2;
    audio_a.play();
}

//////////////////////////
