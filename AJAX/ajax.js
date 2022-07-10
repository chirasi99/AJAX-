//Global variable xmlHttp
var xmlHttp = createXmlHttpRequest();

// creating XMLHTTP Object
function createXmlHttpRequest(){
    var xmlHttp;
    // this xmlHttpp request incialisation is different from browser to browser
    //therefore we have check wheather user browser  
    // IE5 or IE6
    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e){
            xmlHttp = false;
        }
    }
    else{
        try{
            xmlHttp = new XMLHttpRequest();
        }
        catch(e){
            xmlHttp = false;
        }
    }
    if(!xmlHttp){
        alert("Error creating XMLHttpRequest object")
    }
    else{
        return xmlHttp;
    }
}


// processing XMLHTTP Object
function process(){
    if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0 ){
        name = encodeURIComponent (document.getElementById("username").value);
        xmlHttp.open("GET", "ajax.php?name=" + name, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }
    else{
        setTimeout('process()', 1000 );
    }
}


// Handle response of the PHP server       ctrl + k + c
function handleServerResponse(){
    if(xmlHttp.readyState == 4 ){
        if(xmlHttp.status == 200){
            var xmlResponse = xmlHttp.responseXML;
            var xmlDocumentElement = xmlResponse.documentElement;
            var helloMessage = xmlDocumentElement.firstChild.data;

            document.getElementById("message").innerHTML =
             '<strong>' + helloMessage + '</strong>';
            setTimeout('process()', 1000);

        }
        else{
            alert("There was a problem in the server!" + xmlHttp.statusText);
        }
    }
}


