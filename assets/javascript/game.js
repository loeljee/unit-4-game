var yoda = {
    healthPoints: 140,
    attack: 8,
    attackPower: 8,
    counterPower: 12,
}
var chewy = {
    healthPoints: 150,
    attack: 10,
    attackPower: 10,
    counterPower: 15,
}
var sidious = {
    healthPoints: 145,
    attack: 6,
    attackPower: 6,
    counterPower: 14,
}
var vader = {
    healthPoints: 155,
    attack: 7,
    attackPower: 7,
    counterPower: 13,
}
var defeat = 0;
$("#yW").hide();
$("#eW").hide();
$("#btn").hide();

function defeated() {
    defeat++;
}
function checkUser() {
    user = $("#userPick").children()[0].id
}
function checkEnemy() {
    enemy = $("#userEnemy").children()[0].id
}
function enemyAfter() {
    enemy.healthPoints = enemy.healthPoints - user.attackPower;
}
function userAfter() {
    user.healthPoints = user.healthPoints - enemy.counterPower;
    user.attackPower = user.attackPower + user.attack;
}

$("#yoda").on("click", function () {
    if (($("#userPick").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
        $("#yoda").height(200);
        $("#yW").show();
    }
    else if (($("#userEnemy").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
        $("#yoda").height(200);
        $("#eW").show();
        $("#btn").show();
    }
});

$("#chewy").on("click", function () {
    if (($("#userPick").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
        $("#chewy").height(200);
        $("#yW").show();
    }
    else if (($("#userEnemy").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
        $("#chewy").height(200);
        $("#eW").show();
        $("#btn").show();
    }
    else { }
});

$("#vader").on("click", function () {
    if (($("#userPick").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
        $("#vader").height(200);
        $("#yW").show();
    }
    else if (($("#userEnemy").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
        $("#vader").height(200);
        $("#eW").show();
        $("#btn").show();
    }
    else { }
});

$("#sidious").on("click", function () {
    if (($("#userPick").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
        $("#sidious").height(200);
        $("#yW").show();
    }
    else if (($("#userEnemy").is(':empty')) && ($("#winner").is(':empty'))) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
        $("#sidious").height(200);
        $("#eW").show();
        $("#btn").show();
    }
    else { }
});


$("#btn").on("click", function () {
    if ($("#userPick").is(':empty')) {
        alert("CHOOSE YOUR CHARECTER!")
    }
    if (($("#userEnemy").is(':empty')) && (!$("#userPick").is(':empty'))) {
        alert("CHOOSE YOUR OPPONENT!")
    }
    checkUser();
    checkEnemy();
    if (!$("#userEnemy").is(':empty')) {
        if (user === "yoda") {
            user = yoda;
            $("#yhp").html(user.healthPoints);
        }
        else if (user === "chewy") {
            user = chewy;
            $("#chp").html(user.healthPoints);
        }
        else if (user === "vader") {
            user = vader;
            $("#vhp").html(user.healthPoints);
        }
        else if (user === "sidious") {
            user = sidious;
            $("#shp").html(user.healthPoints);
        }
        if (enemy === "yoda") {
            enemy = yoda;
            $("#yhp").html(enemy.healthPoints);
        }
        else if (enemy === "chewy") {
            enemy = chewy;
            $("#chp").html(enemy.healthPoints);
        }
        else if (enemy === "vader") {
            enemy = vader;
            $("#vhp").html(enemy.healthPoints);
        }
        else if (enemy === "sidious") {
            enemy = sidious;
            $("#shp").html(enemy.healthPoints);
        }
    }
});

$("#btn").on("click", function () {
    enemyAfter();
    userAfter();
    if (enemy.healthPoints <= 0) {
        defeated();
        $("#userEnemy").empty();
    }
    if ((user.healthPoints <= 0) && !(enemy.healthPoints <= 0)) {
        $("#userPick").empty();
        $(".card").height(500);
        $("#winner").html("YOU LOSE!");
        $("#yW").hide();
        $("#eW").hide();
        $(".btn").hide();
        $("h6").hide();
        $("#win").append($("#userEnemy"));
        $("#btrn").show();
    }
    if (defeat === 3) {
        $("#userEnemy").empty();
        $(".card").height(500);
        $("#winner").html("YOU WIN!")
        $("#eW").hide();
        $("#yW").hide();
        $(".btn").hide();
        $("h6").hide();
        $("#win").append($("#userPick"));
        $("#btrn").show();
    }
    checkUser();
    checkEnemy();
    if (user === "yoda") {
        user = yoda;
        $("#yhp").html(user.healthPoints);
    }
    else if (user === "chewy") {
        user = chewy;
        $("#chp").html(user.healthPoints);
    }
    else if (user === "vader") {
        user = vader;
        $("#vhp").html(user.healthPoints);
    }
    else if (user === "sidious") {
        user = sidious;
        $("#shp").html(user.healthPoints);
    }
    if (enemy === "yoda") {
        enemy = yoda;
        $("#yhp").html(enemy.healthPoints);
    }
    else if (enemy === "chewy") {
        enemy = chewy;
        $("#chp").html(enemy.healthPoints);
    }
    else if (enemy === "vader") {
        enemy = vader;
        $("#vhp").html(enemy.healthPoints);
    }
    else if (enemy === "sidious") {
        enemy = sidious;
        $("#shp").html(enemy.healthPoints);
    }

});
$("#btnr").on("click", function (){
    resetGame();
});





