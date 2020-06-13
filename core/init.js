(function() {
    if (browserKernel.versions.trident) {
        var reg = new RegExp("MSIE (\\d+\\.\\d+);");
        reg.test(navigator.userAgent);
        var IEVersion = parseFloat(RegExp["$1"]);
        if (!(IEVersion == 10 || navigator.userAgent.indexOf('rv:11.0') > -1)) {
            var childs = document.body.childNodes;
            while (childs[0]) {
                document.body.removeChild(childs[0]);
            }
            window.onload = null;
            browserUnsupported();
        }
    }
}());

window.onload = function() {
    render(document.body);
}