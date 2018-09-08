
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

$("#yoda").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/yodaf.jpg)');
    }
    else { }
});

$("#chewy").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/chewyf.jpg)');
    }
    else { }
});

$("#vader").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/vaderf.jpg)');
    }
    else { }
});

$("#sidious").on("click", function () {
    if ($("#userPick").is(':empty')) {
        $("#userPick").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
    }
    else if ($("#userEnemy").is(':empty')) {
        $("#userEnemy").append(this);
        $(this).css('backgroundImage', 'url(assets/images/sidiousf.png)');
    }
    else { }
});


$(".btn").on("click", function () {
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

$(".btn").on("click", function () {
    enemyAfter();
    userAfter();
    console.log("My health: " + user.healthPoints);
    console.log("Enemy health: " + enemy.healthPoints);
    console.log(user.attackPower);
    if (enemy.healthPoints <= 0) {
        console.log(defeat);
        defeated();
        $("#userEnemy").empty();
        // $("#userPick").width(600);
        // $("#userPick").height(300);
    }
    if (user.healthPoints && enemy.healthPoints <= 0) {


    }
    if ((user.healthPoints <= 0) && !(enemy.healthPoints <= 0)) {
        $("#userPick").empty();
        $(".card").width(600);
        $(".card").height(300);
        alert("LOSER");
    }
    if (defeat === 3) {
        $("#userEnemy").empty();
        $(".card").width(600);
        $(".card").height(300);
        alert("WINNER");
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


