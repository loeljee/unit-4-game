
    var yoda = {
        healtPoints: 180,
        attackPower: 8,
        counterPower: 20,
    }
    var chewy = {
        healthpoints: 130,
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
        counterPower:17,
    }

$("#yoda").on("click", function() {
    if( $("#userPick").is(':empty') ) {
    $("#userPick").append(this);
    $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
    }
    else if( $("#userOpponent").is(':empty') ) {
    $("#userOpponent").append(this);
    $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
    }
    else {}
});

$("#chewy").on("click", function() {
    if( $("#userPick").is(':empty') ) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
        }
        else if( $("#userOpponent").is(':empty') ) {
        $("#userOpponent").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
        }
        else {}
});

$("#vader").on("click", function() {
    if( $("#userPick").is(':empty') ) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
        }
        else if( $("#userOpponent").is(':empty') ) {
        $("#userOpponent").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
        }
        else {}
});

$("#sidious").on("click", function() {
    if( $("#userPick").is(':empty') ) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
        }
        else if( $("#userOpponent").is(':empty') ) {
        $("#userOpponent").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
        }
        else {}
});

