/**
 *
 * Arenamain Web SDK JS
 * https://arenamain.id
 * @version beta 0.5
 * last modified: 16 June 2022
 *
 * Muhammad Aditya nurdin
 * aditya.nurdin@lumoshive.com
 * adityanurdin0@gmail.com
 */

"use strict";

let arenamainClass = document.getElementsByClassName("arenamainId");

for (let index = 0; index < arenamainClass.length; index++) {
  const arenamainTrigger =
    document.getElementsByClassName("arenamainId")[index];

  // Styling
  arenamainTrigger.style.cursor = "pointer";

  // Get data
  const data_debug = arenamainTrigger.dataset.debug;
  const data_type = arenamainTrigger.dataset.type;
  const data_src = arenamainTrigger.dataset.src;
  const data_width = arenamainTrigger.dataset.width;
  const data_height = arenamainTrigger.dataset.height;
  const data_clientkey = arenamainTrigger.dataset.clientkey;
  const data_userId = arenamainTrigger.dataset.user_id ?? null;
  const data_btn_color = arenamainTrigger.dataset.button_color ?? "#28264e";
  const data_text_color = arenamainTrigger.dataset.text_color;

  let siteUrl = data_debug ?? "https://arenamain.id";

  // Swtich data_type condition
  let arenamainElement;
  switch (data_type) {
    case "banner":
      arenamainElement = document.createElement("img");
      arenamainElement.setAttribute("src", data_src);
      arenamainElement.setAttribute(
        "alt",
        data_src ?? "attribute data-src is missing"
      );
      arenamainElement.style.width = data_width ?? "100%";
      arenamainElement.style.height = data_height ?? "auto";
      break;
    case "text":
      arenamainElement = document.createElement("a");
      arenamainElement.innerHTML = arenamainTrigger.dataset.text ?? "Ayo Main";
      arenamainElement.style.color = data_text_color ?? "black";
      break;
    case "icon":
      arenamainElement = document.createElement("img");
      arenamainElement.setAttribute("src", data_src);
      arenamainElement.setAttribute(
        "alt",
        data_src ?? "attribute data-src is missing"
      );
      arenamainElement.style.width = "100%";
      arenamainElement.style.height = "auto";
      break;
    case "button":
      arenamainElement = document.createElement("a");
      arenamainElement.innerHTML = arenamainTrigger.dataset.text ?? "Ayo Main";
      var btnStyle = document.createElement("style");
      btnStyle.innerHTML = `
       .arenamain-btn {
         background-color: ${data_btn_color};
         border: none;
         border-radius: 5px;
         color: ${data_text_color ?? "white"};
         padding: 15px 32px;
         text-align: center;
         text-decoration: none;
         display: inline-block;
         font-size: 16px;
         margin: 4px 2px;
         cursor: pointer;
       }
     `;
      document.head.appendChild(btnStyle);
      arenamainElement.classList.add("arenamain-btn");
      break;
    default:
      console.error("Arenamain Error: attribut data-type is missing");
      break;
  }

  arenamainTrigger.appendChild(arenamainElement);
  arenamainTrigger.addEventListener("click", arenamainTriggerFunc);

  // height in percent
  let navbar_height = 7;
  let iframe_height = 100 - navbar_height;

  // arenamain anchor
  const arenamainAnchor = document.createElement("div");
  arenamainAnchor.style.display = "none";
  arenamainAnchor.style.width = "512px";
  arenamainAnchor.style.height = "512px";
  arenamainAnchor.style.backgroundColor = "#28264e";
  arenamainAnchor.style.position = "absolute";
  arenamainAnchor.style.top = "50%";
  arenamainAnchor.style.left = "50%";
  arenamainAnchor.style.transform = "translate(-50%, -50%)";

  arenamainTrigger.appendChild(arenamainAnchor);

  function arenamainTriggerFunc() {
    // check display anchor
    if (arenamainAnchor.style.display == "none") {
      arenamainAnchor.style.display = "block";
      if (arenamainAnchor.requestFullscreen) {
        arenamainAnchor.requestFullscreen();
      } else if (arenamainAnchor.webkitRequestFullscreen) {
        arenamainAnchor.webkitRequestFullscreen();
      }
    }

    // iframe
    const arenamainIframe = arenamainAnchor.appendChild(
      document.createElement("iframe")
    );
    arenamainIframe.style.width = "100%";
    arenamainIframe.style.height = iframe_height.toString() + "%";
    arenamainIframe.frameBorder = "0";
    arenamainIframe.allow = " ";
    arenamainIframe.setAttribute(
      "src",
      `${siteUrl}/?key=${data_clientkey}&userId=${data_userId}`
    );
    // arenamainIframe.setAttribute("allowfullscreen", true);

    // arenamain anchor custom navbar
    const arenamainAnchorCustomNavbar = arenamainAnchor.appendChild(
      document.createElement("div")
    );
    arenamainAnchorCustomNavbar.style.display = "flex";
    arenamainAnchorCustomNavbar.style.width = "100%";
    arenamainAnchorCustomNavbar.style.height = navbar_height.toString() + "%";
    arenamainAnchorCustomNavbar.style.backgroundColor = "#28264e";
    arenamainAnchorCustomNavbar.style.justifyContent = "space-between";

    // arenamain anchor custom navbar back
    const arenamainAnchorCustomNavbarBack =
      arenamainAnchorCustomNavbar.appendChild(document.createElement("img"));
    arenamainAnchorCustomNavbarBack.style.height = "70%";
    arenamainAnchorCustomNavbarBack.style.width = "auto";
    arenamainAnchorCustomNavbarBack.style.padding = "2px";
    arenamainAnchorCustomNavbarBack.style.marginLeft = "20px";
    arenamainAnchorCustomNavbarBack.style.cursor = "pointer";
    arenamainAnchorCustomNavbarBack.src =
      "https://arenamain.id/portal/img/ss_left_btn.png";
    arenamainAnchorCustomNavbarBack.onclick = function () {
      history.back();
    };

    // arenamain anchor custom navbar close
    const arenamainAnchorCustomNavbarClose =
      arenamainAnchorCustomNavbar.appendChild(document.createElement("img"));
    arenamainAnchorCustomNavbarClose.style.height = "70%";
    arenamainAnchorCustomNavbarClose.style.width = "auto";
    arenamainAnchorCustomNavbarClose.style.padding = "2px";
    arenamainAnchorCustomNavbarClose.style.marginRight = "20px";
    arenamainAnchorCustomNavbarClose.style.cursor = "pointer";
    arenamainAnchorCustomNavbarClose.src =
      "https://arenamain.id/portal/img/ss_red_close_btn.png";
    arenamainAnchorCustomNavbarClose.onclick = function () {
      document.exitFullscreen();
    };

    function hide_arenamain_anchor() {
      if (!document.fullscreenElement) {
        arenamainAnchor.style.display = "none";
      }
    }

    document.documentElement.addEventListener(
      "fullscreenchange",
      hide_arenamain_anchor
    );
  }
}
