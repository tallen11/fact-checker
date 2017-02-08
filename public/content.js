chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.fact_req == "get_sel_txt") {
    alert("FACT CHECKING: " + window.getSelection().toString());
  }
});
