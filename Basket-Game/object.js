var fallingobject = function (image, ch) {
    var o = new Object();
    var rand = (5 + Math.floor(Math.random() * 90)) + '%'
    o.elem = $('<img src="' + image + '" class="fallingobject">')
        .css({ left: rand, bottom: "100%", position: "absolute", zindex: "15", width: "40px" });
    $('#fallingobjects').append(o.elem)
    o.drop = function () {
        o.elem.animate({ 'bottom': '50px' }, 3500, 'linear', function () {
            if (ch == 0) {
                total += 6;
            }
            else if (ch == 1) {
                total += 5;
            }
            else if (ch == 2) {
                total += 7;
            }
            var basket = $('#bas');
            var basleft = basket.position().left;
            var bastop = basket.position().top;
            var p = $(this).position();
            if (p.left > basleft && p.left < basleft + 85) {
                if(ch==0 || ch==1 || ch==2){
                    var newbot = 30 + Math.floor(Math.random() * 50) + "px";
                    $(this).css({ bottom: newbot });
                    basket.append($(this));
                }
                if(ch==3){
                    $('audio#bomb')[0].play();
                    $(this).remove(".fallingobject");
                }
                if (ch == 0) {
                    score += 6;
                }
                else if (ch == 1) {
                    score +=5;
                }
                else if (ch == 2) {
                    score += 7;
                }
                else if (ch == 3) {
                    score -= 8;
                }
                document.getElementById('score').innerHTML = "SCORE: " + score;
            } else if (p.top > bastop) {
                $(this).remove(".fallingobject");
            }
        });
    }

    return o;
}
setInterval(function (){
    $('audio#bg2')[0].play();
});