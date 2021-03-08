document.getElementById("informeCrecimiento").onclick = function(){
    if (window.webkit != undefined){
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler) {
            window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": "print"
            });
        }
    } else if (app != undefined){
        app.imprimir()
    }else{
        window.print()
    }
}