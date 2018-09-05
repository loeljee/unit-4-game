
var yoda = {
    healthPoints: 100,
    attack: 8,
    attackPower: 8,
    counterPower: 20,
}
var chewy = {
    healthPoints: 130,
    attack: 10,
    attackPower: 10,
    counterPower: 15,
}
var sidious = {
    healthPoints: 200,
    attack: 6,
    attackPower: 6,
    counterPower: 18,
}
var vader = {
    healthPoints: 150,
    attack: 7,
    attackPower: 7,
    counterPower: 17,
}


function checkUser() {
    user = $("#userPick").children()[0].id
}
function checkEnemy() {
    enemy = $("#userEnemy").children()[0].id
}

function enemyAfter(){
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
    checkUser();
    checkEnemy();
    if (!$("#userEnemy").is(':empty')) {
        console.log(user);
        console.log(enemy);
        if (user === "yoda") {
            user = yoda;
        }
        else if (user === "chewy") {
            user = chewy;
        }
        else if (user === "vader") {
            user = vader;
        }
        else if (user === "sidious") {
            user = sidious;
        }
        if (enemy === "yoda") {
            enemy = yoda;
        }
        else if (enemy === "chewy") {
            enemy = chewy;
        }
        else if (enemy === "vader") {
            enemy = vader;
        }
        else if (enemy === "sidious") {
            enemy = sidious;
        }
    }
    if 
    console.log($("#fighters"));
});

$(".btn").on("click", function () {
    enemyAfter();
    userAfter();
    console.log("My health: " + user.healthPoints);
    console.log("Enemy health: " + enemy.healthPoints);
    console.log(user.attackPower);
    if (enemy.healthPoints <= 0){
        console.log("defeated");
        $("#userEnemy").empty();
        $("#userPick").width(600);
        $("#userPick").height(300);
    }
    if (user.healthPoints <= 0){
        $("#userPick").empty();
        $("#userEnemy").width(600);
        $("#userEnemy").height(300);
        alert("LOSER");
    }
});


// var attack = $("#userEnemy.healthPoints") - $("#userPick.attackPower")
// take userp's ap from usero's hp and add ap to ap
// also take usero's cp from userp's hp