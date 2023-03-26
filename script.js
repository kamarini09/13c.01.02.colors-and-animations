"use strict";
import {animate, scroll , timeline} from "https://cdn.skypack.dev/motion";

// ----------------------darkmode------------------------------------

const toggleSwitch = document.querySelector("#switch");

const body = document.querySelector("body");




toggleSwitch.addEventListener("change", switchTheme, false);




function switchTheme(event) {
  if (event.target.checked) {
   body.classList.add("darkmode");
 } else {
   body.classList.remove("darkmode");
 }

}



// ----------------------animations------------------------------------


//------animation for the rocket--------
 const myTimeline = timeline(
  [
  [".rocket",{ transform:"translateY( -70px)"}],
  [".rocket",{ transform:"translateY( 0)"}],
 ],
  {duration:3, delay: 1}
);

//------animation for the graphics--------

scroll(
  animate(".product_graphics object", {
     opacity: [1, 0]
  }),
  { target: document.querySelector(".product_graphics  object") }
);