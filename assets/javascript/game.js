
    var yoda = {
        healtPoints: 180,
        attackPower: 8,
        counterPower: 20,
    }
    var chewy = {
        healthpoints: 100,
        attackPower: 10,
        counterPower: 15,
    }
    var sidius = {
        healthpoints: 200,
        attackPower: 6,
        counterPower: 18,
    }
    var vader = {
        healthpoints: 150,
        attackPower: 7,
        counterPower:17
    }

$("#yoda").on("click", function() {
    $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
});

$("#chewy").on("click", function() {
    $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
});

$("#vader").on("click", function() {
    $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
});

$("#sidious").on("click", function() {
    $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
});

// $("#yoda").click(function(){
//      var imgbg = $(this).attr("url(../images/)");
//      $('#bg').css({backgroundImage: "url("+imgbg+")"});
//      });
    