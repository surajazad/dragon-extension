function buildSearchKey(searchQuery) {
    if(searchQuery.indexOf("red") !=-1 || searchQuery.indexOf("redbra") !=-1 ) {
        return "redbras";
    } 
    if(searchQuery.indexOf("bras") !=-1 || searchQuery.indexOf("bra") !=-1 ) {
        return "bras";
    }
    if(searchQuery.indexOf("panty") !=-1 || searchQuery.indexOf("panties") !=-1 ) {
        return "panties";
    }
    if(searchQuery.indexOf("lingerie") !=-1 || searchQuery.indexOf("lingerie") !=-1 ) {
        return "lingerie";
    }  
    if(searchQuery.indexOf("vs") !=-1 || searchQuery.indexOf("victorias") !=-1 ) {
        return "vs";
    }  
    if(searchQuery.indexOf("pink") !=-1 || searchQuery.indexOf("PINK") !=-1 ) {
        return "pink";
    }  
    if(searchQuery.indexOf("beauty") !=-1 || searchQuery.indexOf("BEAUTY") !=-1 ) {
        return "beauty";
    }  
    if(searchQuery.indexOf("sleep") !=-1 || searchQuery.indexOf("sleepwear") !=-1 ) {
        return "sleepwear";
    }  
    if(searchQuery.indexOf("valentine") !=-1 || searchQuery.indexOf("valentines") !=-1 ) {
        return "valentine";
    }  
    if(searchQuery.indexOf("gifts") !=-1 || searchQuery.indexOf("gift") !=-1 ) {
        return "gift";
    }
    if(searchQuery.indexOf("bralette") !=-1 || searchQuery.indexOf("bralettes") !=-1 ) {
        return "bralette";
    }
    if(searchQuery.indexOf("shapewear") !=-1 || searchQuery.indexOf("shape") !=-1 ) {
        return "shapewear";
    }
    if(searchQuery.indexOf("teddy") !=-1 || searchQuery.indexOf("teddies") !=-1 ) {
        return "teddy";
    }
    if(searchQuery.indexOf("robes") !=-1 || searchQuery.indexOf("robe") !=-1 ) {
        return "robes";
    }
    if(searchQuery.indexOf("pajama") !=-1 || searchQuery.indexOf("pajamas") !=-1 ) {
        return "pajama";
    }
    if(searchQuery.indexOf("swim") !=-1 || searchQuery.indexOf("swimsuits") !=-1 ) {
        return "swim";
    }
    if(searchQuery.indexOf("leggings") !=-1 || searchQuery.indexOf("legging") !=-1 ) {
        return "leggings";
    }
    if(searchQuery.indexOf("jumpsuit") !=-1 || searchQuery.indexOf("jumpsuits") !=-1 ) {
        return "jumpsuit";
    }
    if(searchQuery.indexOf("short") !=-1 || searchQuery.indexOf("shorts") !=-1 ) {
        return "shorts";
    }
    if(searchQuery.indexOf("fragrance") !=-1 || searchQuery.indexOf("perfume") !=-1 ) {
        return "fragrance";
    }
    if(searchQuery.indexOf("mist") !=-1 || searchQuery.indexOf("mists") !=-1 ) {
        return "mist";
    }
    if(searchQuery.indexOf("lotion") !=-1 || searchQuery.indexOf("lotions") !=-1 ) {
        return "lotion";
    }
    if(searchQuery.indexOf("bags") !=-1 || searchQuery.indexOf("bag") !=-1 ) {
        return "bags";
    }
    if(searchQuery.indexOf("backpack") !=-1 || searchQuery.indexOf("backpacks") !=-1 ) {
        return "backpack";
    }
    if(searchQuery.indexOf("deodorant") !=-1 || searchQuery.indexOf("deo") !=-1 ) {
        return "deodorant";
    }
    return null;  
}

chrome.runtime.sendMessage({ data: document.title }, function (response) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const searchQuery = params.q || params.oq || "default";
    const query= buildSearchKey(searchQuery);
    if(query) {
     var iframe = document.createElement("iframe");
     iframe.id = 'vs-iframe';
    const sourceURL = 'https://voluble-kitsune-4003ac.netlify.app/?q='+query;
    iframe.setAttribute("src", sourceURL);
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("style", "width:300px; height:100%; display:block; position:absolute; top:10px; right:20px; z-index:9999;");
    iframe.setAttribute("scrolling", "yes");
    iframe.setAttribute("frameborder", "0");
    document.body.appendChild(iframe);
    }
});
