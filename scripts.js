function getNumberFromInput(inputFieldName) {
  const num = parseFloat(document.getElementById(inputFieldName).value);
  if (isNaN(num)) {
    alert("ENTER NUMBER");
    return;
  } else {
    return num;
  }
}

var tf = true;
function setInnerText(fieldName, val) {
  if (isNaN(val)) {
    return;
  } else {
    document.getElementById(fieldName).innerText = val.toFixed(2);
  }
}
function convert(btnid) {
  let intexid = "aaa" + btnid;
  let meter = parseFloat(document.getElementById(intexid).innerText) / 10000;
  let cm = parseFloat(document.getElementById(intexid).innerText) * 10000;
  let ht = "hisTxta" + btnid;
  document.getElementById(ht).innerHTML = `${meter}m<sup>2</sup>`;
  //   document.getElementById(btnid).innerHTML = `To cm<sup>2</sup>`;
  document.getElementById(btnid).innerHTML = ``;
}

function setHistory(name, val) {
  if (isNaN(val)) {
    return;
  }
  val = val.toFixed(2);
  const c = document.getElementById("his").childElementCount + 1;
  document.getElementById("his").innerHTML += `
  <div class="flex items-center justify-between p-4 gap-3">
    <h3 class="font-bold">${c}. ${name}</h3>
    <h3 id="hisTxtaa${c}" class="font-bold"><span id="aaaa${c}">${val}</span>cm<sup>2</sup></h3>
    <button id="a${c}" class="p-2 text-white  bg-blue-600 hover:bg-blue-950 rounded-lg font-bold" onclick="convert(this.id)">To m<sup>2</sup></button>
  </div> `;
}
// triangle
document.getElementById("tbtn").addEventListener("click", function () {
  const val = 0.5 * getNumberFromInput("th") * getNumberFromInput("tb");
  setInnerText("taa", val);
  setHistory("Triangle", val);
});
// rectangle
document.getElementById("rbtn").addEventListener("click", function () {
  const val = getNumberFromInput("rh") * getNumberFromInput("rb");
  setInnerText("raa", val);
  setHistory("Rectangle", val);
});
// Parallelogram
document.getElementById("prbtn").addEventListener("click", function () {
  const val = getNumberFromInput("prh") * getNumberFromInput("prb");
  setInnerText("praa", val);
  setHistory("Parallelogram", val);
});
// Rhombus
document.getElementById("rmbtn").addEventListener("click", function () {
  const val = 0.5 * getNumberFromInput("rmh") * getNumberFromInput("rmb");
  setInnerText("rmaa", val);
  setHistory("Rhombus", val);
});
// Pentagon->(1/4)*pnh*pnh*Math.sqrt(5*(5+(2*Math.sqrt(5))))
document.getElementById("pnbtn").addEventListener("click", function () {
  const val =
    (1 / 4) *
    getNumberFromInput("pnh") *
    getNumberFromInput("pnh") *
    Math.sqrt(5 * (5 + 2 * Math.sqrt(5)));
  setInnerText("pnaa", val);
  setHistory("Pentagon", val);
});
// Ellipse
document.getElementById("ebtn").addEventListener("click", function () {
  const val = 3.1416 * getNumberFromInput("eh") * getNumberFromInput("eb");
  setInnerText("eaa", val);
  setHistory("Ellipse", val);
});
