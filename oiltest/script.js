$(function () {
    var $select = $(".1-100");
    for (i = 1; i <= 100; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
});


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

function ageChange(num){
  var goto = window.location.href.split('/').reverse()[0];
  var got = goto.split('p')[0];
  var gt = parseInt(got);
  gt += 1;
  var g = gt+"";
  var temp = goto.split("?");
  var data = temp[1];
  var temp1 = data.split("!");
  var dt = temp1[0]*1;
  var dt2 = temp1[1];
  var final_age = dt+num;
  if(final_age < 1)final_age = 1;
  var born_age = dt2.split("$");
  var ba = born_age[0]*1;
  location.href = g+"p.html?"+final_age+"!"+ba+"$"+0+"@"+0;
}

function go_jump(a){
  var goto = window.location.href.split('/').reverse()[0];
  var got = goto.split('p')[0];
  var gt = parseInt(got);
  gt += 2;
  var g = gt+"";
  var temp = goto.split("?");
  var data = temp[1];
  var tp = 0;
  tp += a;
  location.href = g+"p.html?"+data+"#"+a;
}

function go(a){
  var goto = window.location.href.split('/').reverse()[0];
  var got = goto.split('p')[0];
  var gt = parseInt(got);
  gt += 1;
  var g = gt+"";
  var temp = goto.split("?");
  var data = temp[1];
  var tp = 0;
  tp += a;
  location.href = g+"p.html?"+data;
}

function video(){
  var goto = window.location.href.split('/').reverse()[0];
  var temp = goto.split("?");
  var data = temp[1];
  var skinage = data.split('!');
  var skag = skinage[0]*1; //피부나이
  data = skinage[1];
  var age = data.split('$');
  var agag= age[0]*1; //원래나이
  data = age[1];
  var agetype = "";
  if(skag>agag){
    agetype = "노안";
  }else {
    agetype = "동안";
  }
  var jisung = data.split('@');
  var ji = jisung[0]*1; //지성비율
  data = jisung[1];
  var gunsung = data.split('#');
  var gu = gunsung[0]*1; //건성비율
  data = gunsung[1];
  var skintype = "";
  if (ji>gu) {
    skintype = "지성";
  }else if (gu>ji) {
    skintype = "건성";
  }else {
    skintype = "복합성";
  }
  var oil = data.split('#');
  var oil_dt =  oil[0]*1; //스트레스 번호
  var oil_data = "";
  if(oil_dt==1 || oil_dt==4 || oil_dt ==6){
    oil_data = "불안증";
  }else if (oil_dt==2 || oil_dt==3 || oil_dt ==5) {
    oil_data = "기분전환";
  }
 if(skintype == "복합성" && agetype == "동안" && oil_data == "기분전환"){ //오일1번
   document.getElementById("videoPlay").src = "./video/Bijou Candy/Bijou Candy_1.mp4";
 }else if (skintype == "복합성" && agetype == "동안" && oil_data == "불안증") { //오일2번
   document.getElementById("videoPlay").src = "./video/Cozy Bud/Cozy Bud_1.mp4";
 }else if (skintype == "복합성" && agetype == "노안" && oil_data == "기분전환") {//오일3번
   document.getElementById("videoPlay").src = "./video/Jolly miracle/Jolly miracle_1.mp4";
 }else if (skintype == "복합성" && agetype == "노안" && oil_data == "불안증") {//오일4번
   document.getElementById("videoPlay").src = "./video/Warm Wish/Warm Wish_1.mp4";
 }else if (skintype == "건성" && agetype == "동안" && oil_data == "기분전환") {//오일5번
   document.getElementById("videoPlay").src = "./video/Lovely Dew/Lovely Dew_1.mp4";
 }else if (skintype == "건성" && agetype == "동안" && oil_data == "불안증") {//6
   document.getElementById("videoPlay").src = "./video/Misty Dawn/Misty Dawn_1.mp4";
 }else if (skintype == "건성" && agetype == "노안" && oil_data == "기분전환") {//7
   document.getElementById("videoPlay").src = "./video/Witty Raindrop/Witty Raindrop_1.mp4";
 }else if (skintype == "건성" && agetype == "노안" && oil_data == "불안증") {//8
   document.getElementById("videoPlay").src = "./video/Magical Pond/Magical Pond_1.mp4";
 }else if (skintype == "지성" && agetype == "동안" && oil_data == "기분전환") {//9
   document.getElementById("videoPlay").src = "./video/Pure Littlebird/Pure Littlebird_1.mp4";
 }else if (skintype == "지성" && agetype == "동안" && oil_data == "불안증") {//10
   document.getElementById("videoPlay").src = "./video/Soft Peace/Soft Peace_1.mp4";
 }else if (skintype == "지성" && agetype == "노안" && oil_data == "기분전환") {//11
   document.getElementById("videoPlay").src = "./video/Fluffy Afternoon/Fluffy Afternoon_1.mp4";
 }else if (skintype == "지성" && agetype == "노안" && oil_data == "불안증") {//12
   document.getElementById("videoPlay").src = "./video/Lucid Tea/Lucid Tea_1.mp4";
 }
}

function video2(){
  var goto = window.location.href.split('/').reverse()[0];
  var temp = goto.split("?");
  var data = temp[1];
  var skinage = data.split('!');
  var skag = skinage[0]*1; //피부나이
  data = skinage[1];
  var age = data.split('$');
  var agag= age[0]*1; //원래나이
  data = age[1];
  var agetype = "";
  if(skag>agag){
    agetype = "노안";
  }else {
    agetype = "동안";
  }
  var jisung = data.split('@');
  var ji = jisung[0]*1; //지성비율
  data = jisung[1];
  var gunsung = data.split('#');
  var gu = gunsung[0]*1; //건성비율
  data = gunsung[1];
  var skintype = "";
  if (ji>gu) {
    skintype = "지성";
  }else if (gu>ji) {
    skintype = "건성";
  }else {
    skintype = "복합성";
  }
  var oil = data.split('#');
  var oil_dt =  oil[0]*1; //스트레스 번호
  var oil_data = "";
  if(oil_dt==1 || oil_dt==4 || oil_dt ==6){
    oil_data = "불안증";
  }else if (oil_dt==2 || oil_dt==3 || oil_dt ==5) {
    oil_data = "기분전환";
  }
 if(skintype == "복합성" && agetype == "동안" && oil_data == "기분전환"){ //오일1번
   document.getElementById("videoPlay").src = "./video/Bijou Candy/Bijou Candy_2.mp4";
 }else if (skintype == "복합성" && agetype == "동안" && oil_data == "불안증") { //오일2번
   document.getElementById("videoPlay").src = "./video/Cozy Bud/Cozy Bud_2.mp4";
 }else if (skintype == "복합성" && agetype == "노안" && oil_data == "기분전환") {//오일3번
   document.getElementById("videoPlay").src = "./video/Jolly miracle/Jolly miracle_2.mp4";
 }else if (skintype == "복합성" && agetype == "노안" && oil_data == "불안증") {//오일4번
   document.getElementById("videoPlay").src = "./video/Warm Wish/Warm Wish_2.mp4";
 }else if (skintype == "건성" && agetype == "동안" && oil_data == "기분전환") {//오일5번
   document.getElementById("videoPlay").src = "./video/Lovely Dew/Lovely Dew_2.mp4";
 }else if (skintype == "건성" && agetype == "동안" && oil_data == "불안증") {//6
   document.getElementById("videoPlay").src = "./video/Misty Dawn/Misty Dawn_2.mp4";
 }else if (skintype == "건성" && agetype == "노안" && oil_data == "기분전환") {//7
   document.getElementById("videoPlay").src = "./video/Witty Raindrop/Witty Raindrop_2.mp4";
 }else if (skintype == "건성" && agetype == "노안" && oil_data == "불안증") {//8
   document.getElementById("videoPlay").src = "./video/Magical Pond/Magical Pond_2.mp4";
 }else if (skintype == "지성" && agetype == "동안" && oil_data == "기분전환") {//9
   document.getElementById("videoPlay").src = "./video/Pure Littlebird/Pure Littlebird_2.mp4";
 }else if (skintype == "지성" && agetype == "동안" && oil_data == "불안증") {//10
   document.getElementById("videoPlay").src = "./video/Soft Peace/Soft Peace_2.mp4";
 }else if (skintype == "지성" && agetype == "노안" && oil_data == "기분전환") {//11
   document.getElementById("videoPlay").src = "./video/Fluffy Afternoon/Fluffy Afternoon_2.mp4";
 }else if (skintype == "지성" && agetype == "노안" && oil_data == "불안증") {//12
   document.getElementById("videoPlay").src = "./video/Lucid Tea/Lucid Tea_2.mp4";
 }
}
function video3(){
  var goto = window.location.href.split('/').reverse()[0];
  var temp = goto.split("?");
  var data = temp[1];
  var skinage = data.split('!');
  var skag = skinage[0]*1; //피부나이
  data = skinage[1];
  var age = data.split('$');
  var agag= age[0]*1; //원래나이
  data = age[1];
  var agetype = "";
  if(skag>agag){
    agetype = "노안";
  }else {
    agetype = "동안";
  }
  var jisung = data.split('@');
  var ji = jisung[0]*1; //지성비율
  data = jisung[1];
  var gunsung = data.split('#');
  var gu = gunsung[0]*1; //건성비율
  data = gunsung[1];
  var skintype = "";
  if (ji>gu) {
    skintype = "지성";
  }else if (gu>ji) {
    skintype = "건성";
  }else {
    skintype = "복합성";
  }
  var oil = data.split('#');
  var oil_dt =  oil[0]*1; //스트레스 번호
  var oil_data = "";
  if(oil_dt==1 || oil_dt==4 || oil_dt ==6){
    oil_data = "불안증";
  }else if (oil_dt==2 || oil_dt==3 || oil_dt ==5) {
    oil_data = "기분전환";
  }
 if(skintype == "복합성" && agetype == "동안" && oil_data == "기분전환"){ //오일1번
   document.getElementById("videoPlay").src = "./video/Bijou Candy/Bijou Candy_3.mp4";
 }else if (skintype == "복합성" && agetype == "동안" && oil_data == "불안증") { //오일2번
   document.getElementById("videoPlay").src = "./video/Cozy Bud/Cozy Bud_3.mp4";
 }else if (skintype == "복합성" && agetype == "노안" && oil_data == "기분전환") {//오일3번
   document.getElementById("videoPlay").src = "./video/Jolly miracle/Jolly miracle_3.mp4";
 }else if (skintype == "복합성" && agetype == "노안" && oil_data == "불안증") {//오일4번
   document.getElementById("videoPlay").src = "./video/Warm Wish/Warm Wish_3.mp4";
 }else if (skintype == "건성" && agetype == "동안" && oil_data == "기분전환") {//오일5번
   document.getElementById("videoPlay").src = "./video/Lovely Dew/Lovely Dew_3.mp4";
 }else if (skintype == "건성" && agetype == "동안" && oil_data == "불안증") {//6
   document.getElementById("videoPlay").src = "./video/Misty Dawn/Misty Dawn_3.mp4";
 }else if (skintype == "건성" && agetype == "노안" && oil_data == "기분전환") {//7
   document.getElementById("videoPlay").src = "./video/Witty Raindrop/Witty Raindrop_3.mp4";
 }else if (skintype == "건성" && agetype == "노안" && oil_data == "불안증") {//8
   document.getElementById("videoPlay").src = "./video/Magical Pond/Magical Pond_3.mp4";
 }else if (skintype == "지성" && agetype == "동안" && oil_data == "기분전환") {//9
   document.getElementById("videoPlay").src = "./video/Pure Littlebird/Pure Littlebird_3.mp4";
 }else if (skintype == "지성" && agetype == "동안" && oil_data == "불안증") {//10
   document.getElementById("videoPlay").src = "./video/Soft Peace/Soft Peace_3.mp4";
 }else if (skintype == "지성" && agetype == "노안" && oil_data == "기분전환") {//11
   document.getElementById("videoPlay").src = "./video/Fluffy Afternoon/Fluffy Afternoon_3.mp4";
 }else if (skintype == "지성" && agetype == "노안" && oil_data == "불안증") {//12
   document.getElementById("videoPlay").src = "./video/Lucid Tea/Lucid Tea_3.mp4";
 }
}

function feeling(){
  var feel = window.location.href.split('#');
  var data = feel[1]*1;
  if(data == 1){
     document.getElementById("feel").src = "./img/22p/Stress analysis/2.gif";
     document.getElementById("feel1").src = "./img/22p/Stress analysis/2-1.png";
  }else if(data == 2){
    document.getElementById("feel").src = "./img/22p/Stress analysis/1.gif";
    document.getElementById("feel1").src = "./img/22p/Stress analysis/1-1.png";
  }else if (data ==3) {
    document.getElementById("feel").src = "./img/22p/Stress analysis/3.gif";
    document.getElementById("feel1").src = "./img/22p/Stress analysis/3-1.png";
  }else if (data ==4) {
    document.getElementById("feel").src = "./img/22p/Stress analysis/4.gif";
    document.getElementById("feel1").src = "./img/22p/Stress analysis/4-1.png";
  }else if (data ==5) {
    document.getElementById("feel").src = "./img/22p/Stress analysis/5.gif";
    document.getElementById("feel1").src = "./img/22p/Stress analysis/5-1.png";
  }else if (data ==6) {
    document.getElementById("feel").src = "./img/22p/Stress analysis/6.gif";
    document.getElementById("feel1").src = "./img/22p/Stress analysis/6-1.png";
  }
}

function skintype(number, nn){
  var goto = window.location.href.split('/').reverse()[0];
  var got = goto.split('p')[0];
  var gt = parseInt(got);
  gt += 1;
  var g = gt+"";
  var temp = goto.split("?");
  var data = temp[1];
  var temp1 = data.split("!");
  var age = temp1[0]*1;
  var dt = temp1[1].split("$");
  var aa = dt[0];
  var dt2 = dt[1].split("@");
  var j = dt2[0]*1+number;
  var gu = dt2[1]*1+nn;
  location.href = g+"p.html?"+age+"!"+aa+"$"+j+"@"+gu;
}
function type(){
  var t = document.getElementById("skin").innerHTML;
  if(t=="지성피부"){
    document.getElementById("type1").src = "./img/22p/Skin type/ji.gif";
    document.getElementById("type2").src = "./img/22p/Skin type/ji_bu.png";
  }else if (t=="건성피부") {
    document.getElementById("type1").src = "./img/22p/Skin type/dry.gif";
    document.getElementById("type2").src = "./img/22p/Skin type/dry_butt.png";
  }else if (t=="복합성피부") {
    document.getElementById("type1").src = "./img/22p/Skin type/bok.gif";
    document.getElementById("type2").src = "./img/22p/Skin type/bok_bu.png";
  }
}

function input(){
var n = document.getElementById("b_age").value;
window.location.href = "7p.html?"+n+"!"+n+"$"+0+"@"+0;
}

function output(){
  var temp =window.location.href.split("?");
  var data = temp[1];
  var dt = data.split("!");
  var d = dt[0]*1; //피부나이
  var dd = d + "세";
  var ba = dt[1].split("$");
  var baba = ba[0]*1; //실제나이
  var t = ba[1].split("@");
  var j = t[0]*1;
  var tt = t[1].split("#");
  var g = tt[0]*1;
  document.getElementById("demo").innerHTML = dd;
  document.getElementById("age").innerHTML = d;
  if(d>baba){
    var agag = d-baba;
    if (agag == 1) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/1.png";
    }else if (agag == 2) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/2.png";
    }else if (agag == 3) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/3.png";
    }else if (agag == 4) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/4.png";
    }else if (agag == 5) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/5.png";
    }else if (agag == 6) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/6.png";
    }else if (agag == 7) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/7.png";
    }else if (agag == 8) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/8.png";
    }else if (agag == 9) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/9.png";
    }else if (agag == 10) {
      document.getElementById("ageBox").src = "./img/22p/add/pl/10.png";
    }
    document.getElementById("face").src = "./img/22p/Skin age/old.gif";
  }else if (baba>d) {
    var agag = baba-d;
    if (agag == 1) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/1.png";
    }else if (agag == 2) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/2.png";
    }else if (agag == 3) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/3.png";
    }else if (agag == 4) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/4.png";
    }else if (agag == 5) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/5.png";
    }else if (agag == 6) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/6.png";
    }else if (agag == 7) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/7.png";
    }else if (agag == 8) {
      document.getElementById("ageBox").src = "./img/22p/add/ma/8.png";
    }
    document.getElementById("face").src = "./img/22p/Skin age/dong.gif";
  }else {
    document.getElementById("ageBox").src = "./img/22p/Skin age/0.png";
    document.getElementById("face").src = "./img/22p/Skin age/dong.gif";
  }
  if(j>g){
    if(j==1 && g == 0){
      document.getElementById("jisung").innerHTML = 95;
      document.getElementById("%").src = "./img/22p/add/p/p95.png";
      document.getElementById("gunsung").innerHTML = 5;
    }else if (j==2 && g == 0) {
      document.getElementById("jisung").innerHTML = 85;
      document.getElementById("%").src = "./img/22p/add/p/p85.png";
      document.getElementById("gunsung").innerHTML = 15;
    }else if (j==3 && g == 0) {
      document.getElementById("jisung").innerHTML = 75;
      document.getElementById("%").src = "./img/22p/add/p/p75.png";
      document.getElementById("gunsung").innerHTML = 25;
    }else if (j==2 && g == 1) {
      document.getElementById("jisung").innerHTML = 80;
      document.getElementById("%").src = "./img/22p/add/p/p80.png";
      document.getElementById("gunsung").innerHTML = 20;
    }else if (j==3 && g == 1) {
      document.getElementById("jisung").innerHTML = 90;
      document.getElementById("%").src = "./img/22p/add/p/p90.png";
      document.getElementById("gunsung").innerHTML = 10;
    }else if (j==3 && g == 2) {
      document.getElementById("jisung").innerHTML = 70;
      document.getElementById("%").src = "./img/22p/add/p/p70.png";
      document.getElementById("gunsung").innerHTML = 30;
    }
  }else if (j == g) {
      document.getElementById("jisung").innerHTML = 50;
      document.getElementById("%").src = "./img/22p/add/p/p50.png";
      document.getElementById("gunsung").innerHTML = 50;
  }else{
    if(j==0 && g == 1){
      document.getElementById("jisung").innerHTML = 5;
      document.getElementById("gunsung").innerHTML = 95;
      document.getElementById("%").src = "./img/22p/add/p/p95.png";
    }else if (j==0 && g == 2) {
      document.getElementById("jisung").innerHTML = 15;
      document.getElementById("gunsung").innerHTML = 85;
      document.getElementById("%").src = "./img/22p/add/p/p85.png";
    }else if (j==0 && g == 3) {
      document.getElementById("jisung").innerHTML = 25;
      document.getElementById("gunsung").innerHTML = 75;
      document.getElementById("%").src = "./img/22p/add/p/p75.png";
    }else if (j==1 && g == 2) {
      document.getElementById("jisung").innerHTML = 20;
      document.getElementById("gunsung").innerHTML = 80;
      document.getElementById("%").src = "./img/22p/add/p/p80.png";
    }else if (j==1 && g == 3) {
      document.getElementById("jisung").innerHTML = 10;
      document.getElementById("gunsung").innerHTML = 90;
      document.getElementById("%").src = "./img/22p/add/p/p90.png";
    }else if (j==2 && g == 3) {
      document.getElementById("jisung").innerHTML = 30;
      document.getElementById("gunsung").innerHTML = 70;
      document.getElementById("%").src = "./img/22p/add/p/p70.png";
    }
  }

}

function sk(){
  var jisung = document.getElementById("jisung").innerHTML;
  var j = jisung*1;
  var gunsung = document.getElementById("gunsung").innerHTML;
  var g = gunsung*1;
  if(j>g){
     document.getElementById("skin").innerHTML = "지성피부";
  }else if(j<g){
    document.getElementById("skin").innerHTML = "건성피부";
  }else{
    document.getElementById("skin").innerHTML = "복합성피부";
  }

}
function move2() {
    setTimeout('go_jump(0)', 5000)
}
function move() {
    setTimeout('go_url()', 1000)
}

function go_url() {
  var goto = window.location.href.split('/').reverse()[0];
  var got = goto.split('p')[0];
  var gt = parseInt(got);
  gt += 1;
  var g = gt+"";
  location.href = g+"p.html";
}
