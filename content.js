console.log("Hi from content script");

chrome.runtime.sendMessage({ data: document.title }, function (response) {
    console.log(document.title);
    console.log(response);
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log("load iframe--->", params);
    const searchQuery = params.q || params.oq || "default";
    console.log(searchQuery);
    if(searchQuery.indexOf("bras") !=-1 || searchQuery.indexOf("bra") !=-1 ) {
     var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://voluble-kitsune-4003ac.netlify.app/?q=bras");
    iframe.setAttribute("style", "border:solid; width:300px; height:250px; display: block; position: absolute;top: 150px;right: -30px;");
    iframe.setAttribute("scrolling", "yes");
    iframe.setAttribute("frameborder", "0");
    document.body.appendChild(iframe);
    }

});
