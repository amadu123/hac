// ==UserScript==
// @name           Multi mod last
// @namespace      https://sites.google.com/view/moohack/home
// @version        last
// @description    Stacked Insta, Good Heal, Anti-invisible buildings, T for one frame, R for op insta
// @author         DEADHACKS & HackPD
// @match          *://moomoo.io/*
// @match          https://abc.moomoo.io/*
// @match          *://*sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js?version=912797
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require    https://greasyfork.org/scripts/437719-antiinvis-1-moomoo-io/code/antiinvis_1%20moomooio.user.js
// @require      https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require      https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js
// @icon          https://github.com/amadu123/hac/blob/main/hack%20pandemic.png?raw=true
// ==/UserScript==

//pls no skid






document.getElementById("storeHolder").style = "height: 1500px; width: 550px;";
document.getElementById('gameName').innerHTML = 'Multi mod V2';
document.getElementById('loadingText').innerHTML = 'Multi mod V2';
document.getElementById('enterGame').innerHTML = 'Start Playing';
document.getElementById('chatBox').placeholder = 'Multi mod';
document.getElementById('diedText').innerHTML = "hackPD Is Sad :(";
document.getElementsByClassName("menuCard")[5].remove();
document.getElementById('adCard').remove();
document.getElementById("pingDisplay").style.color = "indianred";
document.getElementById("gameName").style.color = "indianred";
document.getElementById("diedText").style.color = "indianred";
document.getElementById("killCounter").style.color = "indianred";
document.getElementById("leaderboard").style.color = "indianred";
document.getElementById('loadingText').style.color = 'indianred';
document.getElementById('enterGame').style.backgroundColor = 'indianred';
document.getElementById('nameInput').style.color = "indianred";
document.getElementById("stoneDisplay").style.color = "indianred";
document.getElementById("woodDisplay").style.color = "indianred";
document.getElementById("foodDisplay").style.color = "indianred";
document.getElementById("scoreDisplay").style.color = "indianred";
document.getElementById("ageText").style.color = "indianred";
document.getElementById("ageBarBody").style.backgroundColor = "indianred";
document.getElementById("chatButton").style.color = "indianred";
document.getElementById("storeButton").style.color = "indianred";
document.getElementById("allianceButton").style.color = "indianred";

var cc;
var dd = 0;

(function() {
    'use strict';
    var kills = 10;
    setInterval(getkills, 10);
    function getkills(){
        var count = parseInt(document.getElementById("killCounter").innerText);
        if(count > kills){
            doNewSend(["ch", [count + " Multi mod V2 by hackPD"]]);
        }
        kills = count;
    }
})();

var currentCoordX;
var currentCoordY;
var age = 1;
var afkMode = 0;
let dash;
let crash;

let mouseX;
let mouseY;
let width;
let height;

let trap_a = null;
let intrap = false;
let trapid = null;

setInterval(() => {
    if (intrap == true) {
        doNewSend(["2", [trap_a]]);
        doNewSend(["13c", [0, 40, 0]]);
        doNewSend(["13c", [0, 21, 1]]);
        doNewSend(["c", [1, trap_a]]);
        millToggle = 0;
    }
}, 1);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);
setInterval(() => {
    if(autoprimary == true) {
        doNewSend(["5", [primary, true]]);
    }
}, 0);
setInterval(() => {
    if(autosecondary == true) {
        doNewSend(["5", [secondary, true]]);
    }
}, 0);
setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);
function normal() {
    hat(normalHat);
    acc(normalAcc);
}
function aim(x, y){
    var cvs = document.getElementById("gameCanvas");
    cvs.dispatchEvent(new MouseEvent("mousemove", {
        clientX: x,
        clientY: y
    }));
}
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");
var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var autoprimary = false;
var autosecondary = false;
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
var messagefake = 0;
var msgpack5 = msgpack;
var boostDir;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};
let healSpeed = 60;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;
document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;
        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};
function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}

function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if(!data) {return};
    if(item === "io-init") {
        let cvs = document.getElementById("gameCanvas");
        width = cvs.clientWidth;
        height = cvs.clientHeight;
        $(window).resize(function() {
            width = cvs.clientWidth;
            height = cvs.clientHeight;
        });
        cvs.addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    }
    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }
    if (item == "33") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }
    if (item == "18") {
        if (data[5] == 3.6) {
            let dir_1 = dir => Math.atan2(Math.sin(dir), Math.cos(dir));
            let a1 = dir_1((Math.atan2(data[2]-myPlayer.y, data[1]-myPlayer.x) + Math.PI + Math.PI) % (Math.PI * 2));
            let a2 = dir_1((dir_1(data[3]) + Math.PI) % (Math.PI * 2));
            let a3 = a1 - a2;
            if (0.36 > a3 && -0.36 < a3) {
                doNewSend(["ch", ["sync detect test"]]);
                place(foodType, Math.atan2(data[2]-myPlayer.y, data[1]-myPlayer.x));
                doNewSend(["2", [Math.atan2(data[2]-myPlayer.y, data[1]-myPlayer.x)]]);
            }
        }
    }
    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }

    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 19
                }
            };
        }
    }
    if(isEnemyNear == false && autoaim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
	        normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
 if(item == "h" && data[1] == myPlayer.id) {
            if(data[2] < 100 && data[2] > 0) {
           setTimeout( () => {
               place(foodType, null);
           }, 70);

       }
     if(data[2] < 70 && data[2] > 0 && antiinsta == true && myPlayer.hat == 6) {//anti insta
               doNewSend(["13c", [1, 22, 0]]);
               doNewSend(["13c", [0, 22, 0]]);
               doNewSend(["13c", [0, 0, 1]]);
               doNewSend(["13c", [0, 19, 1]]);
               place(foodType, null);
           setTimeout( () => {
               doNewSend(["ch", ["..."]]);
               doNewSend(["13c", [0, 7, 0]]);
               doNewSend(["13c", [0, 13, 1]]);
           }, 222);
       }
     if(data[2] < 53 && data[2] > 0 && antiinsta == true) {
               doNewSend(["13c", [1, 22, 0]]);
               doNewSend(["13c", [0, 22, 0]]);
               doNewSend(["13c", [0, 0, 1]]);
               doNewSend(["13c", [0, 19, 1]]);
               place(foodType, null);
               place(foodType, null);
           setTimeout( () => {
               doNewSend(["13c", [0, 7, 0]]);
               doNewSend(["13c", [0, 13, 1]]);
           }, 222);
       }
   }
   update();
}

setInterval(()=>{
    if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 230) {
        if (nearestEnemy[5] == 11) {
            doNewSend(["ch", ["Why Shield >:("]]);
        }
    }
}, 0)

function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}
function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}
function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}
function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}
function placeQ(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, boostDir]]);
    doNewSend(["c", [0, boostDir]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
    doNewSend(["2", [nearestEnemyAngle]]);
}
function boostSpike() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}
var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;
    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                        }
                    }, interval);
                }
            }
        },
        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };
}

var millToggle = 0;
var mineToggle = 0;
setInterval(() => {
    if(millToggle == 1) {
        place(millType, Math['atan2'](mouseY - height / 2, mouseX - width / 2) + toRad(0xe54324dc82 + 64));
        place(millType, Math['atan2'](mouseY - height / 2, mouseX - width / 2) - toRad(0xe54324dc82 + 64));
        place(millType, Math['atan2'](mouseY - height / 2, mouseX - width / 2) + toRad(0xe54324dc82 + 360))
    }
}, 0);
setInterval(() => {
    if(mineToggle == 1) {
        place(mineType)
    }
}, 0);
const healer1 = repeater(51, () => {placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir)}, 50);
const healer2 = repeater(81, () => {placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir)}, 50);
const boostPlacer = repeater(77, () => {place(boostType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(0, () => {place(millType)}, 0);
const minePlacer = repeater(667, () => {place(mineType)}, 0);
const turretPlacer = repeater(99999999, function() {
place(turretType);
place(turretType);
place(turretType);
}, 0);
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer1.start(e.keyCode);
    healer2.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    minePlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
if(e.keyCode == 89 && document.activeElement.id.toLowerCase()!== 'chatbox') {
      doNewSend(["ch", ["AutoUpgrader<y>"]]);
             doNewSend(["6", [7]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [27]]);
        doNewSend(["6", [10]]);
        doNewSend(["6", [38]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        }
    if(e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {//press c to activate bow insta(needs katana and bow)
            doNewSend(["5", [secondary, true]]);
                        doNewSend(["ch", ['Multi one tick']]);

            doNewSend(["7", [1]]);
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [1, 11, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["6", [15]]);
            doNewSend(["5", [secondary, true]]);
        }, 105);
        setTimeout( () => {
            if (myPlayer.y < 2400){
            doNewSend(["13c", [0, 15, 0]]);
            doNewSend(["13c", [1, 15, 0]]);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            doNewSend(["13c", [0, 31, 0]]);
            doNewSend(["13c", [1, 31, 0]]);
        } else {
	        doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [1, 12, 0]]);
        }
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [1, 11, 1]]);
            doNewSend(["7", [1]]);
            doNewSend(["5", [secondary, true]]);
        }, 200);
    }
    if (e.keyCode == 190 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        afkMode = (afkMode + 1) % 2;
        if(afkMode == 1) {
            doNewSend(["ch", ["Multi mod - Idle Mode"]]);
        } else {
            doNewSend(["ch", ["Multi mod - Normal"]]);
        }
        doNewSend(["13c", [1, 56, 0]]);
        doNewSend(["13c", [0, 56, 0]]);
    }
    if (e.keyCode == 189 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [1, 15, 0]]);
        doNewSend(["13c", [0, 15, 0]]);
        doNewSend(["13c", [1, 12, 0]]);
        doNewSend(["13c", [0, 12, 0]]);
        doNewSend(["13c", [1, 31, 0]]);
        doNewSend(["13c", [0, 31, 0]]);
        doNewSend(["13c", [1, 11, 1]]);
        doNewSend(["13c", [0, 11, 1]]);
        setTimeout(() => {
            if(afkMode == false) {
                if (myPlayer.y < 2400){
                    doNewSend(["13c", [0, 15, 0]]);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                    doNewSend(["13c", [0, 31, 0]]);
                } else {
                    doNewSend(["13c", [0, 12, 0]]);
                }
                doNewSend(["13c", [0, 11, 1]]);
            } else {
                doNewSend(["13c", [1, 56, 0]]);
                doNewSend(["13c", [0, 56, 0]]);
            }
        }, 20);
    }
    if (e.keyCode == 49 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autosecondary = false;
        autoprimary = true;
        setTimeout( () => {
            autoprimary = false;
        }, 330);
    }
    if(e.keyCode == 78 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        millToggle = (millToggle + 1) % 2;
    }
    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(mineType, angle)
        }
    }
    if(e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        mineToggle = (mineToggle + 1) % 2;
    }
    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }
    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messagefake = (messagefake + 1) % 2;
    }
    if (e.keyCode == 70 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(boostType)
    }
    if (e.keyCode == 50 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoprimary = false;
        autosecondary = true;
        setTimeout( () => {
            autosecondary = false;
        }, 330);
    }
    if (e.keyCode == 75 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(spawnpadType, myPlayer.dir + toRad(45));
        place(spawnpadType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [1, 40, 0]]);
        doNewSend(["13c", [0, 40, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
    }
    if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["Multi One Frame"]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [1, 53, 0]]);
        doNewSend(["13c", [0, 53, 0]]);
        setTimeout(() => {
            doNewSend(["13c", [1, 7, 0]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["7", [1]]);
        }, 80);
        setTimeout(() => {
            doNewSend(["7", [1]]);
            if (myPlayer.y < 2400){
                doNewSend(["13c", [1, 15, 0]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                doNewSend(["13c", [1, 31, 0]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else {
                doNewSend(["13c", [1, 12, 0]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
        }, 180);
    }

    if (e.keyCode == 9 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [1, 11, 1]]);
        doNewSend(["13c", [0, 11, 1]]);
        doNewSend(["13c", [1, 12, 0]]);
        doNewSend(["13c", [0, 12, 0]]);
        doNewSend(["13c", [1, 31, 0]]);
        doNewSend(["13c", [1, 15, 0]]);
    }
    if(e.keyCode == 106 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
    }
    if(e.keyCode == 8 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["Multi mod- Crashing"]]);
        crash = true;
    }
    if(e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["Multi mod - Dashing"]]);
        dash = true;
        setTimeout(() => {
            dash = false;
        }, 300);
    }
    if(e.keyCode == 35 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [7]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [27]]);
        doNewSend(["6", [10]]);
        doNewSend(["6", [38]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
   if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
console.log("autochoosing")
doNewSend(["6", [5]]); // Polearm
console.log("polearm")
doNewSend(["6", [17]]); // Cookie
console.log("cookie")
doNewSend(["6", [31]]); // Pit trap
console.log("trap")
doNewSend(["6", [23]]); // Greater Spikes
console.log("spike")
doNewSend(["6", [9]]); // Bow
console.log("bow")
doNewSend(["6", [38]]); // Teleporter
console.log("tp")
doNewSend(["6", [28]]); // Faster Windmill
console.log("mill")
doNewSend(["6", [15]]); // Musket
console.log("musket")
                doNewSend(["ch", ['multi mod insta']]);
                    autoaim = true;
            autoprimary = true;
            autosecondary = false;
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["7", [1]]);
            doNewSend(["13c", [1, 7, 0]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [1, 19, 1]]);
            doNewSend(["13c", [0, 19, 1]]);
        setTimeout( () => {
            var sck = "";
            autoprimary = false;
            autosecondary = true;
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
            for(let i = 0; i < 350; i++){
                    let caas = new Uint8Array(250);
                    for(let i = 0; i <caas.length;i++){
                        caas[i] = Math.floor(Math.random()*250);
                        sck += caas[i]
                    }
                }
                ws.send(caas);
        }, 100);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["7", [1]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 11, 1]]);
            if (myPlayer.y < 2400){
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                doNewSend(["13c", [0, 31, 0]]);
            } else {
	            doNewSend(["13c", [0, 12, 0]]);
            }
            setTimeout(()=>{
                if (autoreload == true) {
                    doNewSend(["5", [secondary, true]]);
                    setTimeout(()=>{
                        doNewSend(["5", [primary, true]]);
                    }, 1750);
                }
            }, 500);
            autosecondary = false;
            autoaim = false;
        }, 230);
    }

var _0x4213=['BulletRealoded','keyCode','ReloadingBullet.','chatbox','toLowerCase','ReloadingBullet..','activeElement'];(function(_0x5ed5b4,_0x29c455){var _0x421357=function(_0xabf1ea){while(--_0xabf1ea){_0x5ed5b4['push'](_0x5ed5b4['shift']());}};_0x421357(++_0x29c455);}(_0x4213,0xe7));var _0xabf1=function(_0x5ed5b4,_0x29c455){_0x5ed5b4=_0x5ed5b4-0x7a;var _0x421357=_0x4213[_0x5ed5b4];return _0x421357;};var _0x4d404f=_0xabf1;e['keyCode']==0x52&&document[_0x4d404f(0x80)]['id'][_0x4d404f(0x7e)]()!==_0x4d404f(0x7d)&&setTimeout(()=>{var _0x41e56e=_0x4d404f;doNewSend(['ch',[_0x41e56e(0x7c)]]),doNewSend(['5',[secondary,!![]]]);},0x2bc);e[_0x4d404f(0x7b)]==0x52&&document[_0x4d404f(0x80)]['id']['toLowerCase']()!==_0x4d404f(0x7d)&&setTimeout(()=>{var _0x3cccb6=_0x4d404f;doNewSend(['ch',[_0x3cccb6(0x7f)]]),doNewSend(['5',[secondary,!![]]]);},0x514);e['keyCode']==0x52&&document[_0x4d404f(0x80)]['id'][_0x4d404f(0x7e)]()!==_0x4d404f(0x7d)&&setTimeout(()=>{var _0x1c159b=_0x4d404f;doNewSend(['ch',[_0x1c159b(0x7a)]]),doNewSend(['5',[primary,!![]]]);},0x9c4);

     if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["One Frame"]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [1, 53, 0]]);
        doNewSend(["13c", [0, 53, 0]]);
        setTimeout(() => {
            doNewSend(["13c", [1, 7, 0]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["7", [1]]);
        }, 80);
        setTimeout(() => {
            doNewSend(["7", [1]]);
            if (myPlayer.y < 2400){
                doNewSend(["13c", [1, 15, 0]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                doNewSend(["13c", [1, 31, 0]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else {
                doNewSend(["13c", [1, 12, 0]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
        }, 180);
    }
});
document.addEventListener('keyup', (e)=>{
});
function isElementVisible(e) {
    return (e.offsetParent !== null);
}
function toRad(angle) {
    return angle * 0.01745329251;
}
function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}
function update() {
    for (let i=0;i<9;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            primary = i;
        }
    }

    for (let i=9;i<16;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            secondary = i;
        }
    }

    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }

    for (let i=19;i<22;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            wallType = i - 16;
        }
    }

    for (let i=22;i<26;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spikeType = i - 16;
        }
    }

    for (let i=26;i<29;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            millType = i - 16;
        }
    }

    for (let i=29;i<31;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            mineType = i - 16;
        }
    }

    for (let i=31;i<33;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            boostType = i - 16;
        }
    }

    for (let i=33;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36){
            turretType = i - 16;
        }
    }

    spawnpadType = 36;
}




var ID_WinterCap = 15;
var ID_FlipperHat = 31;
var ID_MarksmanCap = 1;
var ID_BushGear = 10;
var ID_SoldierHelmet = 6;
var ID_AntiVenomGear = 23;
var ID_MusketeerHat = 32;
var ID_MedicGear = 13;
var ID_BullHelmet = 7;
var ID_EmpHelmet = 22;
var ID_BoosterHat = 12;
var ID_BarbarianArmor = 26;
var ID_BullMask = 46;
var ID_WindmillHat = 14;
var ID_SpikeGear = 11;
var ID_BushidoArmor = 16;
var ID_SamuraiArmor = 20;
var ID_ScavengerGear = 27;
var ID_TankGear = 40;
var ID_TurretGear = 53;
var ID_PlagueMask = 85;

// Keys
var TankGearKey = 90;
var TurretKey = 74;
var BullHelmetKey = 66;
var SoldierHelmetKey = 81;
var BoosterHatKey = 0;
var uneqiup = 16;
var SpikeGearKey = 73;
var EmpKey = 84;
var SamuKey = 89;
var SpikeKey = 86
var PlagueMaskKey = 85;

var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
<div class="modal-content">
<div class="modal-header">
<span class="closeBtn">&times;</span>
<h2 style="font-size: 17px;">Settings</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<h3 style="color: #000; font-size: 17px;">Made by hackPD</h3>


<h3 class="menuPrompt">Tank Gear: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Bull Helmet: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Soldier Helmet: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
<h3 class="menuPrompt">Turret Gear: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
<h3 class="menuPrompt">Booster Hat: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
<h3 class="menuPrompt">Spike Gear: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
<h3 class="menuPrompt">Emp Helmet: </h3> <input value="${String.fromCharCode(EmpKey)}" id="emp" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Samurai Armor: </h3> <input value="${String.fromCharCode(SamuKey)}" id="samu" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Plague Mask: </h3> <input value="${String.fromCharCode(PlagueMaskKey)}" id="PlagueMask" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<hr>
<h3 style="font-size: 17px;"> Settings </h3>
                        <div class="modal-body" style="font-size: 17px;">
        <div class="modal-footer">
            <p>New Multi mod V2 menu</p>
        </div>
    </div>
</div>
</label>
</div>
</div>
<div class="modal-footer">
<h3 style="font-size: 14px;">Multi mod V2 made by hackPD</p>
</div>
</div>
</div>
`
document.body.appendChild(menuChange);
$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log(TankGearKey);
    }
});
$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log(BullHelmetKey);
    }
});
$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log(SoldierHelmetKey);
    }
});
$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log(TurretKey);
    }
});
$("#PlagueMask").on("input", () => {
    var cval = $("#PlagueMask").val();
    if (cval){
        PlagueMaskKey = cval.toUpperCase();
        PlagueMaskKey = PlagueMaskKey.charCodeAt(0);
        console.log(PlagueMaskKey);
    }
});
$("#emp").on("input", () => {
    var cval = $("#emp").val();
    if (cval){
        EmpKey = cval.toUpperCase();
        EmpKey = EmpKey.charCodeAt(0);
        console.log(EmpKey);
    }
});
$("#samu").on("input", () => {
    var cval = $("#samu").val();
    if (cval){
        SamuKey = cval.toUpperCase();
        SamuKey = SamuKey.charCodeAt(0);
        console.log(SamuKey);
    }
});
$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log(BoosterHatKey);
    }
});
$("#spikeg").on("input", () => {
    var cval = $("#spikeg").val();
    if (cval){
        SpikeGearKey = cval.toUpperCase();
        SpikeGearKey = SpikeGearKey.charCodeAt(0);
        console.log(SpikeGearKey);
    }
});
$("#trap").on("input", () => {
    var cval = $("#trap").val();
    if (cval){
        console.log(TrapKey);
    }
});

var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
.keyPressLow {
margin-left: 8px;
font-size: 16px;
margin-right: 8px;
height: 25px;
width: 50px;
background-color: #fcfcfc;
border-radius: 3.5px;
border: none;
text-align: center;
color: #4A4A4A;
border: 0.5px solid #f2f2f2;
}
.menuPrompt {
font-size: 17px;
font-family: 'Hammersmith One';
color: #4A4A4A;
flex: 0.2;
text-align: center;
margin-top: 10px;
display: inline-block;
}
.modal {
display: none;
position: fixed;
z-index: 1;
left: 0;
top: 0;
overflow: auto;
height: 100%;
width: 100%;
}
.modal-content {
margin: 10% auto;
width: 40%;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
font-size: 14px;
line-height: 1.6;
}
.modal-header h2,
.modal-footer h3 {
margin: 0;
}
.modal-header {
background: #000;
padding: 15px;
color: #000;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}
.modal-body {
padding: 10px 20px;
background: #fff;
}
.modal-footer {
background: #7adbf0;
padding: 10px;
color: #fff;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
.closeBtn {
color: #fff;
float: right;
font-size: 30px;
color: #fff;
}
.closeBtn:hover,
.closeBtn:focus {
color: #7adbf0;
text-decoration: none;
cursor: pointer;
}
/* Customize the label (the container) */
.container {
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 16px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
/* Hide the browser's default checkbox */
.container input {
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
}
/* Create a custom checkbox */
.checkmark {
position: absolute;
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: #eee;
}
/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
background-color: #ccc;
}
/* When the checkbox is checked, add a green background */
.container input:checked ~ .checkmark {
background-color: #7adbf0;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
content: "";
position: absolute;
display: none;
}
/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
display: block;
}
/* Style the checkmark/indicator */
.container .checkmark:after {
left: 9px;
top: 5px;
width: 5px;
height: 10px;
border: solid white;
border-width: 0 3px 3px 0;
-webkit-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
}
`))
//not by hackPD
document.head.appendChild(styleItem);
$("#adCard").css({display: "https://www.youtube.com/channel/UCgwpEuNS27XnH9ZNyi0C7OA?view_as=subscriber"});
document.addEventListener('keydown', function(e) {
    if (e.keyCode == uneqiup && document.activeElement.id.toLowerCase() !== 'chatbox'){
        console.log("done")
        storeEquip(0);
    } else if (e.keyCode == 27){
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TankGear);
        doNewSend(["ch", ["tankgear"]]);
        acc(21);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
        doNewSend(["ch", ["soldier"]]);
        acc(21);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
        doNewSend(["ch", ["bull"]]);
        acc(21);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BoosterHat);
        doNewSend(["ch", ["boost"]]);
        acc(11);
    } else if (e.keyCode == EmpKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_EmpHelmet);
        doNewSend(["ch", ["emp"]]);
        acc(18);
    } else if (e.keyCode == SamuKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SamuraiArmor);
        doNewSend(["ch", ["samurai"]]);
        acc(21);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
        doNewSend(["ch", ["Spike"]]);
        acc(21);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
        doNewSend(["ch", ["turretgear"]]);
        acc(21);
    } else if (e.keyCode == PlagueMaskKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_PlagueMask);
        doNewSend(["ch", ["plaguemask"]]);
        acc(18);
    }
})
// Get modal element
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
// Close
function closeModal() {
    modal.style.display = 'none';
}
// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
var checkbox = document.querySelector("#myCheck")
checkbox.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://wallhere.com/vi/wallpaper/585982')`});
        console.log('checked')
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
    }
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27){
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else if (e.keyCode == 27){
            modal.style.display = "block";
            modal.style.display = "none";
        }
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TankGear);
        doNewSend(["ch", ["!tankgear"]]);
        acc(21)
    } else if (e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(0);
        doNewSend(["ch", ["!unequiped"]]);
        acc(0)
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
        doNewSend(["ch", ["!soldier"]]);
        acc(21)
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
        doNewSend(["ch", ["!bull"]]);
        acc(21)
    } else if (e.keyCode == BarbarianArmorKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BarbarianArmor);
        doNewSend(["ch", ["!barbarianArmor"]]);
        acc(19)
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
        doNewSend(["ch", ["!Spike"]]);
        acc(21)
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
        doNewSend(["ch", ["!turretgear"]]);
        acc(21)
    }
})
// Get modal element
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

var checkbox = document.querySelector("#myCheck")

checkbox.addEventListener('change', function() {
if (this.checked) {
    $("#mapDisplay").css({
        background: `url('https://i.imgur.com/fgFsQJp.png')`
    });
    console.log('checked')
} else {
    $("#mapDisplay").css({
        background: `rgba(0, 0, 0, 0.25)`
    })
    console.log('unchecked')
}
})

var checkbox2 = document.querySelector("#reload")

checkbox2.addEventListener('change', function() {
    if (this.checked) {
        reload1 = 189;
        console.log('checked')
    } else {
        reload1 = 0;
    }
})

function toggleSetMenu(TM){
    if (TM){
        modal.style.display = "block";
    }else{
        modal.style.display = "none";
    }
};

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27){
        menuChange.toggle = !menuChange.toggle;
        toggleSetMenu(menuChange.toggle);
    }
})

var FB;FB='https://cdn.discordapp.com/attachments/679243194294075411/742222854199836742/NEFFEX_-_One_Shot_Copyright_Free.m4a';var ML;ML='https://cdn.discordapp.com/attachments/679243194294075411/742222089234284664/NEFFEX_-_Destiny__Copyright_Free.m4a';

var _0x7487=['loadingText','leaderboard','style','remove','chatBox','nameInput','enterGame','Name','placeholder','pingDisplay','getElementById','#FFD700','color','height:\x201500px;\x20width:\x20450px;','ot-sdk-btn-floating','#05f2DB','~ElIt3Mod~','storeHolder','innerHTML','gameName','Loading...'];(function(_0x4b9acf,_0x261451){var _0x748751=function(_0x3c8f8d){while(--_0x3c8f8d){_0x4b9acf['push'](_0x4b9acf['shift']());}};_0x748751(++_0x261451);}(_0x7487,0x78));var _0x3c8f=function(_0x4b9acf,_0x261451){_0x4b9acf=_0x4b9acf-0x67;var _0x748751=_0x7487[_0x4b9acf];return _0x748751;};var _0xacdd97=_0x3c8f;document[_0xacdd97(0x77)](_0xacdd97(0x6e))[_0xacdd97(0x6f)][_0xacdd97(0x79)]=_0xacdd97(0x78),document[_0xacdd97(0x77)](_0xacdd97(0x73))['innerHTML']='|Spawn|',document[_0xacdd97(0x77)](_0xacdd97(0x71))[_0xacdd97(0x75)]='Messege.\x20.\x20.',document[_0xacdd97(0x77)](_0xacdd97(0x72))['placeholder']=_0xacdd97(0x74),document['getElementById']('loadingText')[_0xacdd97(0x6a)]=_0xacdd97(0x6c),document['getElementById'](_0xacdd97(0x6d))[_0xacdd97(0x6f)][_0xacdd97(0x79)]=_0xacdd97(0x67),document['getElementById'](_0xacdd97(0x69))[_0xacdd97(0x6f)]=_0xacdd97(0x7a),document[_0xacdd97(0x77)](_0xacdd97(0x6b))[_0xacdd97(0x6a)]=_0xacdd97(0x68),document[_0xacdd97(0x77)]('gameName')[_0xacdd97(0x6f)][_0xacdd97(0x79)]=_0xacdd97(0x67),document[_0xacdd97(0x77)](_0xacdd97(0x76))['style'][_0xacdd97(0x79)]=_0xacdd97(0x67),document[_0xacdd97(0x77)]('adCard')[_0xacdd97(0x70)](),document[_0xacdd97(0x77)](_0xacdd97(0x7b))[_0xacdd97(0x70)]();
$( "#partyButton, #joinPartyButton" ).wrapAll( '<div class="partyWrap"></div>' );
$( "#linksContainer2 > a:nth-child(1)" ).replaceWith( '<a href="./docs/versions.txt" target="_blank" class="menuLink">Multi mod V2</a>' );
$( "#partyButton" ).replaceWith( '<span>Empty </span><i class="material-icons" style="font-size:30px;vertical-align:middle">?</i>' );
$( "#errorNotification" ).after( '<div id="moddedMenu"><div class="titleMM">Multi mod V2</div><div class="one"><label class="switch"></span></label><div class="two"><div class="text"><b>Menu-Fast<br><label class="container">NEFFEX - Destiny<input type="checkbox" id="myMusic"><span class="checkmark"></label><label class="container">NEFFEX-One Shot<input type="checkbox" id="awman"><span class="checkmark"></div></div><hr></b></div></div>');
(function() {var css = [
	"div#adCard, ",
	"  #twitterFollow, ",
	"  #youtubeFollow, ",
	"  #downloadButtonContainer, ",
	"  #followText, ",
	"  #promoImg {",
	"    display: none;",
	"  }",
	"",
	"  #featuredYoutube > a.ytLink, ",
	"  a {",
	"    color: #05f2DB !important;",
	"    font-size: 20px;",
	"    margin-top: 0px;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  a:hover {",
	"    color: #05f2DB !important;",
	"  }",
	"",
	"  #youtuberOf, ",
	"  #linksContainer2, ",
	"  .partyWrap {",
	"    background: rgba(0,0,0,0.6);",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 10px;",
	"    padding: 10px;",
	"    font-size: 20px;",
	"    position: absolute;",
	"    color: #05f2DB;",
	"  }",
	"",
	"  .partyWrap {",
	"    min-height: 80px;",
	"    min-width: 160px;",
	"    top: 10px;",
	"    right: 10px;",
	"  }",
	"",
	"  #youtuberOf {",
	"    top: 10px;",
	"    left: 10px;",
	"  }",
	"",
	"  #followText {",
	"    min-height: 200px;",
	"    bottom: 20px;",
	"    left: 20px;",
	"  }",
	"",
	"  #linksContainer2 {",
	"    bottom: 10px;",
	"    right: 10px;",
	"    color: #05f2DB;",
	"  }",
	"",
	"  .menuCard {",
	"    background: rgba(0,0,0,0.6);",
	"    border-radius: 10px;",
	"    border: 10px solid rgba(0,0,0,0.9);",
	"    box-shadow: none;",
	"    overflow:auto;",
	"  }",
	"",
	"  ::-webkit-scrollbar {",
	"    width: 10px;",
	"    border-right: 2px solid #FF0000;",
	"  }",
	"",
	"  ::-webkit-scrollbar-thumb {",
	"    border: 2px solid #FF0000;",
	"  }",
	"",
	"  ::-webkit-scrollbar-thumb:hover {",
	"    background: #FF0000;",
	"  }",
	"",
	"  ::-webkit-scrollbar-thumb:active {",
	"    background: Blue;",
	"    border: 2px solid #FF0000;",
	"  }",
	"",
	"  .menuHeader {",
	"    font-size: 24px;",
	"    color: #05f2DB;",
	"    margin-bottom: 3px;",
	"    border-bottom: 3px solid #eee;",
	"  }",
	"",
	"  .menuHeader:first-child {",
	"    margin-bottom: 30px;",
	"  }",
	"",
	"  .menuText {",
	"    font-size: 50px;",
	"    color: #05f2DB;",
	"    margin-bottom: 50px;",
	"  }",
	"",
	"  .ytLink {",
	"    color:#05f2DB;",
	"    font-size: 24px;",
	"    text-decoration: none;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .menuButton {",
	"    color: #fff;",
	"    background-color: transparent;",
	"    border: 5px solid #05f2DB;",
	"    position: relative;",
	"    display: inline-flex;",
	"    padding: 0px 70px;",
	"    font-family: denk one;",
	"    transition: color .5s;",
	"    overflow: hidden;",
	"    width: 100%;",
	"    justify-content: center;",
	"  }",
	"",
	"  .menuButton:hover {",
	"    color: #FF0000 !important;",
	"    border: 5px solid #05f2DB;",
	"    cursor: pointer;",
	"    background-color: transparent;",
	"  }",
	"",
	"  .menuButton:before {",
	"    content: \'\';",
	"    position: absolute;",
	"    top: 0;",
	"    left: 0;",
	"    width: 130%; ",
	"    height: 10000%;",
	"    background: #05f2DB;",
	"    border-right: 20px solid #05f2DB;",
	"    z-index: -1;",
	"    transform-origin:0 0 ;",
	"    transform:translateX(-112%) skewX(45deg);",
	"    transition: transform .5s;",
	"  }",
	"",
	"  .menuButton:hover:before {",
	"    color: #05f2DB !important;",
	"    transform: translateX(-20%) skewX(45deg);",
	"  }",
	"",
	"  .menuCard span {",
	"    margin: 10px;",
	"  }",
	"",
	"  #promoHolderImg > img {",
	"    width: 300px;",
	"    height: 94px;",
	"  }",
	"",
	"  #guideCard {",
	"    max-height: 282px;",
	"  }",
	"",
	"  .skinColorItem {",
	"    transition: 1s;",
	"    border: 3px solid #05f2DB;",
	"  }",
	"",
	"  select {",
	"    background: ;",
	"    border-radius: 5px;",
	"    border: 3px solid ;",
	"    margin-bottom: 10px;",
	"    color: #05f2DB;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  select:hover {",
	"    background: white;",
	"    border: 3px solid #05f2DB;",
	"  }",
	"",
	"  #pre-content-container {",
	"    display: none!important;",
	"  }",
	"",
	"  .uiElement, ",
	"  .resourceDisplay, ",
	"  .actionBarItem {",
	"    background-color: gray !important;",
	"    border: 3px solid #05f2DB;",
	"    border-radius: 50px !important;",
	"    color: ;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .uiElement:hover, ",
	"  .resourceDisplay:hover, ",
	"  .actionBarItem:hover {",
	"    background-color:  !important;",
	"    border: 3px solid ;",
	"    border-radius: 50px !important;",
	"    color: ;",
	"  }",
	"",
	"  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 10px !important;",
	"    color: ;",
	"  }",
	"",
	"  #itemInfoHolder { ",
	"    -webkit-text-stroke: transparent;",
	"  }",
	"",
	"  .material-icons { ",
	"    color: #05f2DB;",
	"    font-size: 31px;",
	"    -webkit-text-stroke: 1.5px #fff;",
	"  }",
	"",
	"  #altServer > a > i {",
	"    font-size: 30px white!important;",
	"    -webkit-text-stroke: transparent !important;",
	"  }",
	"",
	"  #ageText { ",
	"    font-size: 40px #05f2DB!important;",
	"    color: ;",
	"    -webkit-text-stroke: 1.5px #fff;",
	"    margin-bottom: 30px;",
	"  }",
	"",
	"  #ageBarBody {",
    "    background: url('https://dribbble.s3.amazonaws.com/users/41276/screenshots/332290/animated-rainbow.gif');",
	"    border: 2px solid #fff",
	"  }",
	"",
    "  #pingDisplay {",
	"    background-color: ;",
	"    border: 6px solid #05f2DB",
	"  }",
	"",
    "  #leaderboardData {",
	"    background-color: ;",
	"    border: 3px solid green",
	"  }",
	"",
	"  #ageBarBody {",
    "    background: url('https://dribbble.s3.amazonaws.com/users/41276/screenshots/332290/animated-rainbow.gif');",
	"    border: 2px solid #fff",
	"  }",
	"",
	"  #ageBar {",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    height: 10px;",
	"    padding-bottom: 10px;",
	"    margin-bottom: 20px;",
	"  }",
	"",
	"  .actionBarItem {",
	"    width: 65px;",
	"    height: 65px;",
	"    background-position: center; ",
	"    background-size: 55px 55px;",
	"  }",
	"",
	"  #aBox {",
	"    color: white!important;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #chatBox::placeholder {",
	"    color: #05f2DB!important;",
	"  }",
	"",
	"  #chatBox:hover {",
	"    background: #05f2DB!important;",
	"  }",
	"",
	"  #chatBox:hover::placeholder {",
	"    color: #05f2DB!important;",
	"  }",
	"",
	"  #leaderboard, .leaderboardItem[style*=\"color: #05f2DB;\"] {",
	"    color: #05f2DB!important;",
	"  }",
	"",
	"  .ytLink:hover {",
	"    color: #05f2DB;",
	"  }",
	"",
	"  #nameInput {",
	"    background: #05f2DB;",
	"    border: 5px solid #05f2DB;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #nameInput::placeholder {",
	"    color: #FF0000;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #nameInput:hover {",
	"    background: #05f2DB;",
	"    color: #05f2DB;",
	"  }",
	"",
	"  #nameInput:hover::placeholder {",
	"    background: #05f2DB;",
	"    color: #fff;",
	"  }",
	"",
	"  #linksContainer2 {",
	"    max-height: 500px;",
	"    width: 250px;",
	"  }",
	"",
	"  #linksContainer2 > * {",
	"    display:table-cell;",
	"    vertical-align:middle;",
	"    text-align: center;",
	"    width:700px;",
	"  }",
	"  ",
	"  .storeTab, ",
	"  #storeHolder, ",
	"  #allianceHolder, ",
	"  #allianceInput, ",
	"  .allianceButtonM {",
	"    background: ;",
	"    border: 3px solid black;",
	"  }",
	"",
	"  .storeItem, ",
	"  .storeTab, ",
	"  .allianceButtonM, ",
	"  #allianceInput::placeholder, ",
	"  .allianceItem {",
	"    color: white !important;",
	"  }",
	"",
	"  .storeItem, ",
	"  .storeTab, ",
	"  .allianceButtonM, ",
	"  #allianceInput::placeholder, ",
	"  .allianceItem, ",
	"  .joinAlBtn {",
	"    color: white !important;",
	"  }",
	"",
	"  .storeItem:hover, ",
	"  .storeTab:hover, ",
	"  .allianceButtonM:hover,",
	"  .allianceItem:hover, ",
	"  .joinAlBtn:hover {",
	"    color: green !important;",
	"  }",
	"",
	"  #allianceInput, ",
	"  #killCounter {",
	"    color: black;",
	"  }",
	"  ",
	"  #allianceInput:hover {",
	"    background: #05f2DB;",
	"    color: #05f2DB;",
	"  }",
	"",
	"  #allianceInput:hover::placeholder{",
	"    color:#05f2DB;",
	"  }",
	"",
	"  #linksContainer2 > *:first-child {",
	"    border-bottom: 3px solid #05f2DB;",
	"  }",
	"",
	"  #moddedMenu {",
	"    position: absolute;",
	"    top: 3%;",
	"    left: 0px;",
	"    width: 4%;",
	"    height: 60%;",
	"    background: ;",
	"    border: 3px solid black;",
	"    border-top-right-radius: 30px;",
	"    border-bottom-right-radius: 30px;",
	"    transition: 1s;",
	"    z-index: 999;",
	"  }",
	"",
	"  #moddedMenu:hover {",
	"    width: 20%;",
	"  }",
	"",
	"  #youtuberOf {",
	"    bottom: 10px;",
	"    top: auto;",
	"  }",
	"",
	"  .titleMM {",
	"    color: #05f2DB;",
	"    border-bottom: 3px solid #05f2DB;",
	"    font-size: 32px;",
	"    transform: rotate(90deg);",
	"    white-space: nowrap;",
	"    margin-top: 300%;",
	"    transition: 1s;",
	"  }",
	"",
	"  #moddedMenu:hover > .titleMM {",
	"    transform: rotate(0deg) translate(0,-1580%)",
	"  }",
	"",
	"  .switch {",
	"    margin-top: 2.5px;",
	"    margin-left: 10px;",
	"    position: absolute;",
	"    width: 80px;",
	"    height: 34px;",
	"    transition: opacity 1s;",
	"    opacity: 0;",
	"  }",
	"",
	"  .text {",
	"    bottom: 76%;",
	"    position: absolute;",
	"    color: #05f2DB;",
	"    font-size: 100px;",
	"    left: 36%;",
	"    display: none;",
	"    transition: 1s;",
	"  }",
	"",
	"  .text > b { ",
	"    font-size: 20px;",
	"    color: #FF0000;",
	"  }",
	"",
	"  b:hover { ",
	"    color: #abf691;",
	"  }",
	"",
	"  .one > .text {",
	"    top: 17.5%;",
	"  }",
	"",
	"  .two > .text {",
	"    top: 27.5%;",
	"  }",
	"",
	"  .three > .text {",
	"    top: 37.5%;",
	"  }",
	"",
	"  .four > .text {",
	"    top: 47.5%;",
	"  }",
	"",
	"  .five > .text {",
	"    top: 57.5%;",
	"  }",
	"",
	"  .six > .text {",
	"    top: 67.5%;",
	"  }",
	"",
	"  .seven > .text {",
	"    top: 77.5%;",
	"  }",
	"",
	"  .eight > .text {",
	"    top: 87.5%;",
	"  }",
	"",
	"  #moddedMenu:hover .switch {",
	"    opacity: 1;",
	"  }",
	"",
	"  #moddedMenu:hover .text {",
	"    display: block;",
	"  }",
	"",
	"  .one > .switch {",
	"    top: 15%;",
	"  }",
	"",
	"  .two > .switch {",
	"    top: 25%;",
	"  }",
	"",
	"  .three > .switch {",
	"    top: 35%;",
	"  }",
	"",
	"  .four > .switch {",
	"    top: 45%;",
	"  }",
	"",
	"  .five > .switch {",
	"    top: 55%;",
	"  }",
	"",
	"  .six > .switch {",
	"    top: 65%;",
	"  }",
	"",
	"  .seven > .switch {",
	"    top: 75%;",
	"  }",
	"",
	"  .eight > .switch {",
	"    top: 85%;",
	"  }",
	"",
	"  .switch input {",
	"    display:none;",
	"  }",
	"",
	"  .slider {",
	"    position: absolute;",
	"    cursor: pointer;",
	"    top: 0;",
	"    left: 0;",
	"    right: 0;",
	"    bottom: 0;",
	"    background-color: #888;",
	"    -webkit-transition: .4s;",
	"    transition: .4s;",
	"  }",
	"",
	"  .slider:before {",
	"    position: absolute;",
	"    content: \"\";",
	"    height: 26px;",
	"    width: 26px;",
	"    left: 4px;",
	"    bottom: 4px;",
	"    background-color: white;",
	"    -webkit-transition: .4s;",
	"    transition: .4s;",
	"  }",
	"",
	"  input:checked + .slider {",
	"    background-color: #FF0000;",
	"  }",
	"  ",
	"  input:focus + .slider {",
	"    box-shadow: 0 0 1px #FF0000;",
	"  }",
	"",
	"  input:checked + .slider:before {",
	"    -webkit-transform: translateX(26px);",
	"    -ms-transform: translateX(26px);",
	"    transform: translateX(26px);",
	"  }",
	"",
	"  .slider.round {",
	"    border-radius: 34px;",
	"  }",
	"",
	"  .slider.round:before {",
	"    border-radius: 50%;",
	"  }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {

		document.documentElement.appendChild(node);
	}
}

})();










(function() {
    'use strict';
  let div = document.createElement('div');
    div.className = "btns";
  var FPSBTN=
  `
    <input id="FPSBTN" type="text" placeholder="enter fps" maxlength="30" class="uiElement " style="width: 88px;margin-right: 10px; margin-top:10px; margin-left: 10px; padding: 6px; font-size: 20px;color: #fff;background-color: rgba(0, 0, 0, 0.25);-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;pointer-events: all;border: 0;">
  `;
  var QUABTN=
  `
  <input id="QUABTN" type="text" placeholder="enter % of quality" maxlength="30" class="uiElement" style="width: 186px;margin-right: 10px; margin-top:10px;margin-left: 0px; padding: 6px;font-size: 20px;color: #fff;background-color: rgba(0, 0, 0, 0.25);-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;pointer-events: all;border: 0;">
  `;
  div.innerHTML=FPSBTN+QUABTN;
  document.getElementById("gameUI").append(div);

  var in1 = document.getElementById("FPSBTN");
  var in2 = document.getElementById("QUABTN");
  in1.oninput = function() {
    setFrame(in1.value);
  };
  in2.oninput = function() {
    optimise(in2.value);
  };
  var mctx = 0;
  var gcanvas = 0;
  var wh = document.documentElement.clientHeight;
  var ww = document.documentElement.clientWidth;
  var th = 0;
  var tw = 0;
  function optimise(pr){
    document.getElementById("gameCanvas").style.display = 'none';
    let last =  document.getElementsByClassName("optimise")[0];
    if(!!last){
      last.remove();
    }
      th = wh/100*pr;
      tw = ww/100*pr;
      let div = document.createElement('div');
      div.className = "optimise";
      div.innerHTML = `<canvas id="myCanvas" width="`+ww/100*pr+`" height="`+th+`" style="width: `+ww+`px; height: `+wh+`px;"></canvas>`;
      document.body.append(div);
      gcanvas = document.getElementById("gameCanvas")
      var gctx = gcanvas.getContext("2d");
      var mcanvas = document.getElementById("myCanvas")
      mctx = mcanvas.getContext("2d");
      mcanvas.addEventListener('mousemove', e => {
          let x = e.offsetX;
          let y = e.offsetY;
          gcanvas.dispatchEvent(new MouseEvent("mousemove", {
            clientX: e.offsetX,
            clientY: e.offsetY
         }));
      });
      mcanvas.addEventListener('mousedown', e => {
          let x = e.offsetX;
          let y = e.offsetY;
          gcanvas.dispatchEvent(new MouseEvent("mousedown", {
            clientX: e.offsetX,
            clientY: e.offsetY
         }));
      });
      mcanvas.addEventListener('mouseup', e => {
          let x = e.offsetX;
          let y = e.offsetY;
          gcanvas.dispatchEvent(new MouseEvent("mouseup", {
            clientX: e.offsetX,
            clientY: e.offsetY
         }));
      });
  }
  function setFrame(fr){
    frame1 = 1000/fr;
  }
  var frame1 = 1000/60;
  frame();
  function frame(){
    if(gcanvas){
    mctx.drawImage(gcanvas, 0, 0, tw, th)}
    setTimeout(() => {
    frame();
    }, frame1);
  }
})();













