chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    console.log("epic",details)
    // get payload
    const payload = details.requestBody.raw[0].bytes
    // decode payload
    const decoded = new TextDecoder("utf-8").decode(payload)
    console.log("decoded",decoded)
    const parsed = JSON.parse(decoded)
    console.log("parsed",parsed)  
    const entires= parsed.entries
    console.log("entires",entires)
    for (const entry of entires) {
      if(entry.eventName == "Lost focus" || entry.eventName == "Got focus"){
        console.log("blokirano")
        return {cancel: true}
      }
    }
  },
  {urls: ["*://*.edgar.fer.hr/*"]
  },
  ["requestBody","blocking","extraHeaders"]
);


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
