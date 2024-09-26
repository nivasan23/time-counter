v1 = document.getElementById("hr");
v2 = document.getElementById("min");
v3 = document.getElementById("sec");
v4 = document.getElementById("ms");
p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
b1 = document.querySelector(".b1");
b2 = document.querySelector(".b2");
b3 = document.querySelector(".b3");
var a = 0,
  c = 0;
var hr = 0,
  min = 0,
  sec = 0;
ms = 0;
b1.addEventListener("click", () => {
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;
  v1.textContent = "0" + hr;
  v2.textContent = "0" + min;
  v3.textContent = "0" + sec;
  v4.textContent = "0" + ms;
  clearInterval(t);
  a = 0;
});
b2.addEventListener("click", () => {
  if (a == 0) {
    t = setInterval(play, 16);
    a = 1;
  }
});
b3.addEventListener("click", () => {
  clearInterval(t);
  a = 0;
});
function play() {
  ms += 1;
  if (ms < 10) {
    if (hr < 10 && min < 10 && sec < 10) {
      v1.textContent = "0" + hr;
      v2.textContent = "0" + min;
      v3.textContent = "0" + sec;
      v4.textContent = "0" + ms;
    } else if (hr < 10 && min < 10 && sec >= 10) {
      v1.textContent = "0" + hr;
      v2.textContent = "0" + min;
      v3.textContent = sec;
      v4.textContent = "0" + ms;
    } else if (hr < 10 && min >= 10 && sec < 10) {
      v1.textContent = "0" + hr;
      v2.textContent = min;
      v3.textContent = "0" + sec;
      v4.textContent = "0" + ms;
    } else if (hr < 10 && min >= 10 && sec >= 10) {
      v1.textContent = "0" + hr;
      v2.textContent = min;
      v3.textContent = sec;
      v4.textContent = "0" + ms;
    } else if (hr >= 10 && min < 10 && sec < 10) {
      v1.textContent = hr;
      v2.textContent = "0" + min;
      v3.textContent = "0" + sec;
      v4.textContent = "0" + ms;
    } else if (hr >= 10 && min >= 10 && sec < 10) {
      v1.textContent = hr;
      v2.textContent = min;
      v3.textContent = "0" + sec;
      v4.textContent = "0" + ms;
    } else if (hr >= 10 && min < 10 && sec >= 10) {
      v1.textContent = hr;
      v2.textContent = "0" + min;
      v3.textContent = sec;
      v4.textContent = "0" + ms;
    } else {
      v1.textContent = hr;
      v2.textContent = min;
      v3.textContent = sec;
      v4.textContent = "0" + ms;
    }
  } else if (ms >= 10 && ms < 60) {
    if (hr < 10 && min < 10 && sec < 10) {
      v1.textContent = "0" + hr;
      v2.textContent = "0" + min;
      v3.textContent = "0" + sec;
      v4.textContent = ms;
    } else if (hr < 10 && min < 10 && sec >= 10) {
      v1.textContent = "0" + hr;
      v2.textContent = "0" + min;
      v3.textContent = sec;
      v4.textContent = ms;
    } else if (hr < 10 && min >= 10 && sec < 10) {
      v1.textContent = "0" + hr;
      v2.textContent = min;
      v3.textContent = "0" + sec;
      v4.textContent = ms;
    } else if (hr < 10 && min >= 10 && sec >= 10) {
      v1.textContent = "0" + hr;
      v2.textContent = min;
      v3.textContent = sec;
      v4.textContent = ms;
    } else if (hr >= 10 && min < 10 && sec < 10) {
      v1.textContent = hr;
      v2.textContent = "0" + min;
      v3.textContent = "0" + sec;
      v4.textContent = ms;
    } else if (hr >= 10 && min >= 10 && sec < 10) {
      v1.textContent = hr;
      v2.textContent = min;
      v3.textContent = "0" + sec;
      v4.textContent = ms;
    } else if (hr >= 10 && min < 10 && sec >= 10) {
      v1.textContent = hr;
      v2.textContent = "0" + min;
      v3.textContent = sec;
      v4.textContent = ms;
    } else {
      v1.textContent = hr;
      v2.textContent = min;
      v3.textContent = sec;
      v4.textContent = ms;
    }
  } else {
    ms = 0;
    sec += 1;
    if (sec >= 60) {
      sec = 0;
      min += 1;
    }
    if (min >= 60) {
      min = 0;
      hr += 1;
    }
  }
  p1.style.display = "block";
  p2.style.display = "block";
  p3.style.display = "block";
  p4.style.display = "block";
  v1.appendChild(p1);
  v2.appendChild(p2);
  v3.appendChild(p3);
  v4.appendChild(p4);
}
