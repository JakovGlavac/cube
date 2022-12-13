
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'report_back') {
        sendResponse(document.all[0].outerHTML);
    }
});

console.log("content", document.getElementsByClassName("edgar-q-content"))
if(window.location.href == "https://edgar.fer.hr/exam/run/1") {
    var content = document.getElementsByClassName("edgar-q-content")[0];
    console.log("content",content);
}

const run = () => {
    console.log("content", document.getElementsByClassName("edgar-q-content"))
    if(window.location.href == "https://edgar.fer.hr/exam/run/1") {
        var content = document.getElementsByClassName("edgar-q-content")[0];
        console.log("content",content);
    }
}

document.addEventListener("DOMContentLoaded", run);