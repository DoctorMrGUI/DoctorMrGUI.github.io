function importJs(url, callBack) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
    if (typeof callBack === "function") {
        if (! /*@cc_on!@*/ false) {
            script.onload = function() {
                callBack();
            }
        } else {
            /* For IE6, IE7 */
            script.onreadystatechange = function() {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    callBack();
                }
            }
        }
    }
    return;
}

function importJson(url, callBack) {
    return importJs(url, callBack);
}

function importCss(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}