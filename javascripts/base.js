// ACTIVE STATE for SIZE BUTTONS

var btnContainer = document.getElementById('size');
var btns = document.getElementsByClassName('size__buttons--button');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName('size-active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" size-active", "");
        }
        this.className += " size-active";
    });
}

// ACTIVE STATE for BADGES

var btnContainer = document.getElementById('badge');
var btns = document.getElementsByClassName('badge__buttons--btn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName('badge-active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" badge-active", "");
        }
        this.className += " badge-active";
    });
}


// COUNTDOWN

var countdownDate = new Date ("Mar 1, 2021 14:30:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance  = countdownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " ;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "OUT NOW";
    }
}, 1000);

