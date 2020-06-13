const browserKernel = {
    versions: function() {
        var NU = navigator.userAgent;
        return {
            /* IE */
            trident: NU.indexOf('Trident') > -1,
            /* Edge */
            edge: NU.indexOf('Edge') > -1,
            /* Opera */
            presto: NU.indexOf('Presto') > -1,
            /* WebKit */
            webKit: NU.indexOf('AppleWebKit') > -1,
            /* Firefox */
            gecko: NU.indexOf('Gecko') > -1 && NU.indexOf('KHTML') == -1,
            /* Mobile */
            mobile: !!NU.match(/AppleWebKit.*Mobile.*/),
            /* ios */
            ios: !!NU.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            /* Android */
            android: NU.indexOf('Android') > -1 || NU.indexOf('Adr') > -1,
            /* iPhone/QQHD */
            iPhone: NU.indexOf('iPhone') > -1,
            /* iPad */
            iPad: NU.indexOf('iPad') > -1,
            /* web app */
            webApp: NU.indexOf('Safari') == -1,
            /* WeChat */
            weixin: NU.indexOf('MicroMessenger') > -1,
            /* QQ */
            qq: NU.match(/\sQQ/i) == " qq"
        };
    }()
}

function browserUnsupported() {
    var style = document.createElement('style');
    style.innerHTML = "body{font-family:'Segoe UI',SegoeUI,'Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif;background-color:#ffc107;color:#fff;text-align:center;margin:50px;text-shadow:3px 3px 8px #141414;}";
    document.write("<h1>Your current web browser software is not supported. Please upgrade to the latest version of the browser we support, such as Chrome, Firefox, Edge or Safari.</h1>");
    document.body.appendChild(style);

    return;
}