const leadUrl = "https://dev-profile.eazytestdigital.page/lead";

const showLeadDisplay = () => {
  const agentNo = document
    .getElementById("link-script")
    .getAttribute("data-insurer-no");
  const templateNo = "";
  const styleSheet = "width: 100%; height: 620px";
  const el = "output";

  if (!document.getElementById(el)) {
    setTimeout(() => {
      console.log("Target not found");
      showLeadDisplay(agentNo, templateNo);
    }, 100);
  }

  const iframe = document.createElement("iframe");

  const isEmpty = (v) => {
    return v === undefined || v === null || v === "";
  };

  iframe.src = isEmpty(templateNo)
    ? leadUrl + "/" + agentNo
    : leadUrl + "/" + agentNo + "/" + templateNo;

  if (!isEmpty(styleSheet)) {
    iframe.style = styleSheet;
  }

  if (isEmpty(el)) {
    document.body.appendChild(iframe);
  } else {
    document.getElementById(el).innerHTML = "";
    document.getElementById(el).appendChild(iframe);
  }
};

if (typeof window !== "undefined") {
  showLeadDisplay();
}