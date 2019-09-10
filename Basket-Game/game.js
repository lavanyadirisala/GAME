var left = 0;
var score = 0;
var total = 0;
var ch;
$(document).ready(function () {
    $('#click').click(function () {
        $('#title').remove();
        $('#click1').remove();
        $('#click2').remove();
        $(this).remove();
        setInterval(function () {
            var otype = Math.floor(Math.random() * 4);
            var o;
            if (otype==0) {
                o = fallingobject("egg.png",0);
            } else if (otype==1) {
                o = fallingobject("yellow.png",1);
            } else if (otype==2){
                o = fallingobject("fruit.png",2);
            }else if (otype==3){
                o = fallingobject("bomb.png",3);
            }
            o.drop();
            if (total - score >= 100) {
                alert("GAME OVER \n 'SCORE: ' "+ score );                
                location.reload(true);
            }
        },2000);
        $(document).keydown(function (e) {
            if (e.which === 39) {
                $('audio#key')[0].play();
                if (left <= (window.innerWidth) - 98) {
                    left += 35;
                    $('#bas').css({ 'left': left + 'px' }); //right key
                }
            }
            else if (e.which === 37) {
                $('audio#key')[0].play();
                if (left > 0) {
                    left -= 35;
                    $('#bas').css({ 'left': left + 'px' });
                }
            }
        });
    });
});
$(document).ready(function () {
    $('#click1').click(function () {
        $('#title').remove();
        $('#click').remove();
        $('#click2').remove();
        $(this).remove();
        setInterval(function () {
            var otype = Math.floor(Math.random() * 4);
            var o;
            if (otype==0) {
                o = fallingobject("egg.png",0);
            } else if (otype==1) {
                o = fallingobject("yellow.png",1);
            } else if (otype==2){
                o = fallingobject("fruit.png",2);
            }else if (otype==3){
                o = fallingobject("bomb.png",3);
            }
            o.drop();
            if (total - score >= 70) {
                alert("GAME OVER \n 'SCORE: ' "+ score );
                location.reload(true);
            }
        },1500);
        $(document).keydown(function (e) {
            if (e.which === 39) {
                $('audio#key')[0].play();
                if (left <= (window.innerWidth) - 98) {
                    left += 35;
                    $('#bas').css({ 'left': left + 'px' }); //right key
                }
            }
            else if (e.which === 37) {
                $('audio#key')[0].play();
                if (left > 0) {
                    left -= 35;
                    $('#bas').css({ 'left': left + 'px' });
                }
            }
        });
    });
});
$(document).ready(function () {
    $('#click2').click(function () {
        $('#title').remove();
        $('#click').remove();
        $('#click1').remove();
        $(this).remove();
        setInterval(function () {
            var otype = Math.floor(Math.random() * 4);
            var o;
            if (otype==0) {
                o = fallingobject("egg.png",0);
            } else if (otype==1) {
                o = fallingobject("yellow.png",1);
            } else if (otype==2){
                o = fallingobject("fruit.png",2);
            } else if (otype==3){
                o = fallingobject("bomb.png",3);
            }
            o.drop();
            if (total - score >= 50) {
                alert("GAME OVER \n 'SCORE: ' "+ score );
                location.reload(true);
            }
        },1250);
        $(document).keydown(function (e) {
            if (e.which === 39) {
                $('audio#key')[0].play();
                if (left <= (window.innerWidth) - 98) {
                    left += 35;
                    $('#bas').css({ 'left': left + 'px' }); //right key
                }
            }
            else if (e.which === 37) {
                $('audio#key')[0].play();
                if (left > 0) {
                    left -= 35;
                    $('#bas').css({ 'left': left + 'px' });
                }
            }
        });
    });
});