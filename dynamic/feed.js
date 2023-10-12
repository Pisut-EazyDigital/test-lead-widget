// Replace Lead widget link here!!
const LEAD_WIDGET_URL =
  "https://dev-profile.eazytestdigital.page/lead/230301?template_code=lead_widget";

function showFeed(agentNo, templateNo, mode, el, styleSheet) {
  console.log("----- DEBUG PARAMETERS -----");
  console.log({ agentNo, templateNo, mode, el, styleSheet });
  mode(LEAD_WIDGET_URL, styleSheet, el);
}

const _isEmpty = (v) => {
  return v === undefined || v === null || v === "";
};

const _convertStyleToObject = (styleString) => {
  const styleObject = {};
  if (_isEmpty(styleString)) {
    return styleObject;
  }
  const styleArray = styleString.split(";");
  for (let i = 0; i < styleArray.length; i++) {
    const style = styleArray[i].trim();
    if (style) {
      const [property, value] = style.split(":");
      styleObject[property] = value.trim();
    }
  }
  return styleObject;
};

function openNewWindowLeadLink(link, styleSheet) {
  const so = _convertStyleToObject(styleSheet);
  if (!window.focus) return true;

  window.open(
    link,
    "width=" + so.width + ",height=" + so.height + ",scrollbars=yes,toolbar=no"
  );
  return false;
}

function iFrameLeadLink(link, styleSheet, el) {
  const iframe = document.createElement("iframe");
  iframe.src = link;
  if (!_isEmpty(styleSheet)) {
    iframe.style = styleSheet;
  }
  if (_isEmpty(el)) {
    document.body.appendChild(iframe);
  } else {
    document.getElementById(el).innerHTML = "";
    document.getElementById(el).appendChild(iframe);
  }
}

function modalLeadLink(link, styleSheet) {
  const object = document.createElement("object");
  if (!_isEmpty(styleSheet)) {
    object.style = styleSheet;
  }
  let modal = document.getElementById("feed-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.setAttribute("id", "feed-modal");
    modal.setAttribute("class", "feed_modal");
    modal.innerHTML =
      '<div class="modal_dialog" style="width: 100%"><header class="modal_header"><button class="close_modal" aria-label="Close" onclick="javascript: this.parentElement.parentElement.parentElement.classList.remove(\'is-visible\');" data-close>✕</button></header><section class="modal_content"><div id="feed-output" style="margin-top: 10px; width: 100%; height: 100%;"><object style="' +
      styleSheet +
      '" data="' +
      link +
      '"></object></div></section><footer class="modal_footer"></footer></div>';
    document.body.appendChild(modal);
  }
  modal.classList.add("is-visible");
}

function inLineLeadList(link, styleSheet, el) {
  const object = document.createElement("object");
  if (!_isEmpty(styleSheet)) {
    object.style = styleSheet;
  }
  object.data = link;
  if (_isEmpty(el)) {
    document.body.appendChild(object);
  } else {
    document.getElementById(el).innerHTML = "";
    document.getElementById(el).appendChild(object);
  }
}

function iFramInLineWrapper(Fn) {
  return function recurive(link, styleSheet, el, orignalFN = Fn) {
    if (!document.getElementById(el)) {
      console.log("not found El");
      recurive(link, styleSheet, el, orignalFN);
    }
    console.log("found");
    orignalFN(link, styleSheet, el);
  };
}

const WrappedIFrame = iFramInLineWrapper(iFrameLeadLink);
const WrappedInLine = iFramInLineWrapper(inLineLeadList);
