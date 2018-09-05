
var yoda = {
    healthPoints: 180,
    attackPower: 8,
    counterPower: 20,
}
var chewy = {
    healthpoints: 130,
    attackPower: 10,
    counterPower: 15,
}
var sidious = {
    healthpoints: 200,
    attackPower: 6,
    counterPower: 18,
}
var vader = {
    healthpoints: 150,
    attackPower: 7,
    counterPower: 17,
}

function checkUser() {
    user = $("#userPick").children()[0].id
}
function checkEnemy() {
    enemy = $("#userEnemy").children()[0].id
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
        enemyHealth = enemy.healthPoints - user.attackPower;
        userHealth = user.healthpoints - enemy.counterPower;
        console.log(enemyHealth);
        console.log(userHealth);
    }
});

$(".btn").on("click", function () {
    enemyHealth - user.attackPower
});


// var attack = $("#userEnemy.healthPoints") - $("#userPick.attackPower")
// take userp's ap from usero's hp and add ap to ap
// also take usero's cp from userp's hp