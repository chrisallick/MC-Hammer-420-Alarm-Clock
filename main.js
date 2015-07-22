function play() {
    $("body").prepend(img);

    var url = chrome.extension.getURL('stop.m4a');
    var myAudio = new Audio();
    myAudio.src = url;
    myAudio.play();

    setTimeout(function(){
        $(img).css({
            display: "block"
        }).animate({
            left: 0
        }, function(){
            $(this).addClass("move");
        });
    }, 500);

    $("a").each(function(){
        $(this).attr("href","").click(function(){
            return false;
        });
    });

    setTimeout(function(){
        location.reload();
    }, 33*1000);
}

function hammertime() {
    var url = chrome.extension.getURL('hammer.gif');
    
    img = document.createElement("img");
    
    $(img).attr("src", url);
    $(img).addClass("hammertime");
    $(img).load(function(){
        $(img).css({
            bottom: 0,
            left: -(img.width/2),
            position: "fixed",
            zIndex: 1000000,
            width: img.width/2,
            height: img.height/2,
            display: "none"
        });

        play();
    });
}

var img;
$(document).ready(function() {
    var now = new Date();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 20, 0, 0) - now;
    //var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 51, 10, 0) - now;
    if (millisTill10 < 0) {
        millisTill10 += 86400000;
    }
    setTimeout(function() {
        hammertime();
    }, millisTill10);
});