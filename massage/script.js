var element = $('#inn');

element.mouseover(function () {
    element.toggleClass('fadeIn animated');
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function (e) {
            $(e.target).removeClass('fadeIn animated');
        });

});

function goBack() {
    window.history.back();
  }


function go_jump() {
    var goto = window.location.href.split('/').reverse()[0];
    var got = goto.split('p')[0];
    var gt = parseInt(got);
    gt += 2;
    var g = gt + "";
    var temp = goto.split("?");
    var data = temp[1];
    location.href = g + "p.html?" + data;
}


function move2() {
    setTimeout('go_jump()', 5000)
}

function move() {
    setTimeout('go_url()', 1000)
}

function go_url() {
    var goto = window.location.href.split('/').reverse()[0];
    var got = goto.split('p')[0];
    var gt = parseInt(got);
    gt += 1;
    var g = gt + "";
    location.href = g + "p.html";
}

function go(a) {
    location.href = "12p.html";
}

function go1(a) {
    location.href = "8_2p.html";
}

function go2(a) {
    location.href = "19p.html";
}

function go3(a) {
    location.href = "8_3p.html";
}

function go4(a) {
    location.href = "8_4p.html";
}

function go5(a) {
    location.href = "8_5p.html";
}

function go6(a) {
    location.href = "8_6p.html";
}

function go7(a) {
    location.href = "8_7p.html";
}

function go8(a) {
    location.href = "8_8p.html";
}

function go9(a) {
    location.href = "8_9p.html";
}

function go10(a) {
    location.href = "8_10p.html";
}

function go11(a) {
    location.href = "12p.html";
}

function go12(a) {
    location.href = "12-1p.html";
}

function hide_image(id){
    document.getElementById("soundon").style.display = "none";
}