"use strict";const arenamainTrigger=document.getElementById("arenamainId");arenamainTrigger.style.cursor="pointer";const data_type=arenamainTrigger.dataset.type;const data_src=arenamainTrigger.dataset.src;const data_screen_width=arenamainTrigger.dataset.screen_width;const data_screen_height=arenamainTrigger.dataset.screen_height;const data_clientkey=arenamainTrigger.dataset.clientkey;let arenamainElement;switch(data_type){case"banner":arenamainElement=document.createElement("img");arenamainElement.setAttribute("src",data_src)??arenamainElement.setAttribute("alt","attribute data-src is missing");break;case"button":arenamainElement=document.createElement("a");arenamainElement.innerHTML=arenamainTrigger.dataset.text??"Ayo Main";break;default:console.error("Arenamain Error: attribut data-type is missing");break}arenamainTrigger.appendChild(arenamainElement);arenamainTrigger.addEventListener("click",arenamainTriggerFunc);function arenamainTriggerFunc(){var style=document.createElement("style");style.innerHTML=`
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
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  `;document.head.appendChild(style);const arenamainScreen=document.createElement("iframe");arenamainScreen.width=data_screen_width;arenamainScreen.height=data_screen_height;arenamainScreen.setAttribute("src",`https://dev.arenamain.id/?key=${data_clientkey}&source=module`);arenamainScreen.setAttribute("allowfullscreen",true);const arenamainModal=document.createElement("div");arenamainModal.className="arenamain-modal";const arenamainModalContent=document.createElement("div");arenamainModalContent.className="arenamain-modal-content";arenamainModalContent.appendChild(arenamainScreen);arenamainModal.appendChild(arenamainModalContent);arenamainTrigger.parentNode.replaceChild(arenamainModal,arenamainTrigger);arenamainModal.style.display="block";arenamainTrigger.style.display="none";window.onclick=function(event){if(event.target==arenamainModal){arenamainModal.style.display="none"}}}