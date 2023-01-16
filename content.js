console.log("Hi from content script");

chrome.runtime.sendMessage({ data: document.title }, function (response) {
    console.log(document.title);
    console.log(response);
    debugger;
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log("load iframe--->", params);
    const searchQuery = params.q || params.oq || "default";
    console.log(searchQuery);
    // TODO : write user input --> valid search term
    if(searchQuery.indexOf("bras") !=-1 || searchQuery.indexOf("bra") !=-1 ) {
     var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://voluble-kitsune-4003ac.netlify.app/?q=bras");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("style", "border:solid; width:300px; height:250px; display: block; position: absolute;top: 150px;right: -30px;border-radius: 10px; transform: translate3d(0, -50%, 0);box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);z-index: 9999;");
    iframe.setAttribute("scrolling", "yes");
    iframe.setAttribute("frameborder", "0");
    document.body.appendChild(iframe);
    }

});
