
import Utils from "./common/utils";

function processButtonClick() {
  console.log("processButtonClick");

  let inputElement = (<HTMLInputElement>document.getElementById("hlc-input"));
  let outputElement = (<HTMLElement>document.getElementById("hlc-output"));

  let output = Utils.kebapStyle(inputElement.value);

  outputElement.innerText = new Date().toLocaleTimeString() + " : " + output;

}

window.onload = function () {
  document.getElementById("hlc-btn-process").onclick = processButtonClick;
}



/// on using jQuery:

// import Utils from "./common/utils";
// import * as $ from "jquery";  

// function processButtonClick() {
//   let input = (<HTMLInputElement>$("#hlc-input")[0]).value;
//   let output = Utils.kebapStyle(input);
//   $("#hlc-output").text(new Date().toLocaleTimeString() + " : " + output);
// }

// window.onload = function () {
//   $("#hlc-btn-process").click(() => processButtonClick());
// }
