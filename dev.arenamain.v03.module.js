/**
 *
 * Arenamain Module JS
 * https://arenamain.id
 * @version 0.3
 * last modified: 9 May 2022
 */
"use strict";const arenamainTrigger=document.getElementById("arenamainId");
// Styling
arenamainTrigger.style.cursor="pointer";
// Get data
const data_type=arenamainTrigger.dataset.type;const data_src=arenamainTrigger.dataset.src;const data_screen_width=arenamainTrigger.dataset.screen_width;const data_screen_height=arenamainTrigger.dataset.screen_height;const data_clientkey=arenamainTrigger.dataset.clientkey;const data_btn_color=arenamainTrigger.dataset.button_color??"#28264e";const data_text_color=arenamainTrigger.dataset.text_color??"white";
// Swtich condition
let arenamainElement;switch(data_type){case"banner":arenamainElement=document.createElement("img");arenamainElement.setAttribute("src",data_src)??arenamainElement.setAttribute("alt","attribute data-src is missing");break;case"text":arenamainElement=document.createElement("a");arenamainElement.innerHTML=arenamainTrigger.dataset.text??"Ayo Main";break;case"icon":arenamainElement=document.createElement("a");arenamainElement.innerHTML="Icon Touchpoint not supported ";break;case"button":arenamainElement=document.createElement("a");arenamainElement.innerHTML=arenamainTrigger.dataset.text??"Ayo Main";var btnStyle=document.createElement("style");btnStyle.innerHTML=`
      .arenamain-btn {
        background-color: ${data_btn_color};
        border: none;
        border-radius: 5px;
        color: ${data_text_color};
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }
    `;document.head.appendChild(btnStyle);arenamainElement.classList.add("arenamain-btn");break;default:console.error("Arenamain Error: attribut data-type is missing");break}arenamainTrigger.appendChild(arenamainElement);arenamainTrigger.addEventListener("click",arenamainTriggerFunc);function arenamainTriggerFunc(){
// Define modal style
var style=document.createElement("style");style.innerHTML=`
  /* The Modal (background) */
  .arenamain-modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .arenamain-modal-content {
    background-color: #fefefe;
    margin: 2% auto; /* 15% from the top and centered */
    padding: 10px;
    border: 1px solid #888;
    width: 414px; /* Could be more or less, depending on screen size */
  }
  `;document.head.appendChild(style);
// Iframe
const arenamainScreen=document.createElement("iframe");arenamainScreen.width=data_screen_width??"414px";arenamainScreen.height=data_screen_height??"896px";arenamainScreen.setAttribute("src",`https://arenamain.id/?key=${data_clientkey}&source=indirect`);arenamainScreen.setAttribute("allowfullscreen",true);
// arenamain modal div
const arenamainModal=document.createElement("div");arenamainModal.className="arenamain-modal";
// arenamain modal content div
const arenamainModalContent=document.createElement("div");arenamainModalContent.className="arenamain-modal-content";arenamainModalContent.appendChild(arenamainScreen);arenamainModal.appendChild(arenamainModalContent);arenamainTrigger.parentNode.replaceChild(arenamainModal,arenamainTrigger);arenamainModal.style.display="block";
// hide trigger
arenamainTrigger.style.display="none";window.onclick=function(event){if(event.target==arenamainModal){arenamainModal.style.display="none"}}}