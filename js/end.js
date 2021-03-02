var g;
var h;
var i;
var j;
var k;
function submit001() {
  b = input001.value;
  c = input002.value;
  d = input003.value;
  e = input004.value;
  f = input005.value;
  if (b == "Love" || b == "love") {
    g = 1;
    input001.value = b;
    check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
  } else {
    input001.value = b;
    check001.innerHTML = "<text class=button002>" + "✖" + "</text>";
  }

  if (c == "Here" || c == "here") {
    h = 1;
    input002.value = c;
    check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
  } else {
    input002.value = c;
    check002.innerHTML = "<text class=button002>" + "✖" + "</text>";
  }

  if (d == "With" || d == "with") {
    i = 1;
    input003.value = d;
    check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
  } else {
    input003.value = d;
    check003.innerHTML = "<text class=button002>" + "✖" + "</text>";
  }

  if (e == "Afraid" || e == "afraid") {
    j = 1;
    input004.value = e;
    check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
  } else {
    input004.value = e;
    check004.innerHTML = "<text class=button002>" + "✖" + "</text>";
  }

  if (f == "Sleep" || f == "sleep") {
    k = 1;
    input005.value = f;
    check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
  } else {
    input005.value = f;
    check005.innerHTML = "<text class=button002>" + "✖" + "</text>";
  }

  if (g == 1 && h == 1 && i == 1 && j == 1 && k == 1) {
    window.location='beginning.html'
  }
}

function repeat001() {
  location.reload();
}