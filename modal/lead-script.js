const leadUrl = "https://dev-profile.eazytestdigital.page/lead";

const showFeed = (templateNo, styleSheet) => {
  const agentNo = document
  .getElementById("link-script")
  .getAttribute("data-insurer-no");

  const isEmpty = (v) => {
    return v === undefined || v === null || v === "";
  };

  const fullUrl = isEmpty(templateNo)
    ? leadUrl + "/" + agentNo
    : leadUrl + "/" + agentNo + "/" + templateNo;

    const object = document.createElement("object");
    if (!isEmpty(styleSheet)) {
      object.style = styleSheet;
    }

    let modal = document.getElementById("feed-modal");

    if (!modal) {
      const modelDialog = '<div class="modal_dialog"><header class="modal_header"><button class="close_modal" aria-label="Close" onclick="javascript: this.parentElement.parentElement.parentElement.classList.remove(\'is-visible\');" data-close>✕</button></header><section class="modal_content"><div id="feed-output" style="margin-top: 10px; width: 100%; height: 100%;"><object style="' +
      styleSheet +
      '" data="' +
      fullUrl +
      '"></object></div></section></div>'
      console.log(modelDialog)
      modal = document.createElement("div");
      modal.setAttribute("id", "feed-modal");
      modal.setAttribute("class", "feed_modal");
      modal.innerHTML = modelDialog;
      document.body.appendChild(modal);
    }
    modal.classList.add("is-visible");
  
}
