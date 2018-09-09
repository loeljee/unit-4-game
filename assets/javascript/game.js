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

$("#yW").hide();
$("#eW").hide();
$("#btn").hide();

$("#yoda").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
        $("#yoda").height(200);
        $("#yW").show();
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
        $("#yoda").height(200);
        $("#eW").show();
        $("#btn").show();
    }
    else { }
});

$("#chewy").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
        $("#chewy").height(200);
        $("#yW").show();
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
        $("#chewy").height(200);
        $("#eW").show();
        $("#btn").show();
    }
    else { }
});

$("#vader").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
        $("#vader").height(200);
        $("#yW").show();
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
        $("#vader").height(200);
        $("#eW").show();
        $("#btn").show();
    }
    else { }
});

$("#sidious").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
        $("#sidious").height(200);
        $("#yW").show();
    }
    else if ($("#userEnemy").is(':empty')) {
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

var defeat = 0;
function defeated() {
    defeat++;
}

$("#btn").on("click", function () {
    enemyAfter();
    userAfter();
    console.log("My health: " + user.healthPoints);
    console.log("Enemy health: " + enemy.healthPoints);
    console.log(user.attackPower);
    if (enemy.healthPoints <= 0) {
        console.log(defeat);
        defeated();
        $("#userEnemy").empty();
    }
    if (user.healthPoints && enemy.healthPoints <= 0) {


    }
    if ((user.healthPoints <= 0) && !(enemy.healthPoints <= 0)) {
        $("#userPick").empty();
        // $(".card").width(800);
        $(".card").height(500);
        $("#eW").html("ENEMY WINS!").position("center");
        $("#yW").hide();
        $(".btn").hide();
        $("h6").hide();
        $("#win").append($("#userEnemy"));
        $("#userEnemy").attr("disabled","disabled");
    }
    if (defeat === 3) {
        $("#userEnemy").empty();
        // $(".card").width(800);
        $(".card").height(500);
        $("#yW").html("YOU WIN!").position("center");
        $("#eW").hide();
        $(".btn").hide();
        $("h6").hide();
        $("#win").append($("#userPick"));
        $("#win").attr("disabled","disabled");
        
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


$("#btnr").hide();
// $("#btnr").on("click", function (){
//     resart()
// });


