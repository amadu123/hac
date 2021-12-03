// ==UserScript==
// @name           Multi mod V2
// @namespace      none
// @version        Private V2
// @description    Stacked Insta, Good Heal, Anti Clown Anti-invisible buildings T for one frame
// @author         DEADHACKS & HackPD
// @match          *://moomoo.io/*
// @match          none
// @match          *://*sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://ksw2-center.glitch.me/users/fzb/antiinvis_1
// @require      https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require      https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js
// @require      none
// @icon          https://github.com/amadu123/hac/blob/main/hack%20pandemic.png?raw=true
// ==/UserScript==

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
    if(item == "6"){
        for(let i = 0; i < data[1].length / 8; i++){
            let ObjectData = data[1].slice(8*i, 8*i+8);
            if(ObjectData[6] == 15 && ObjectData[7] != myPlayer.id){
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 120){
                    for(let i=0;i<36;i++){
                        let angle = myPlayer.dir + toRad(i * 10);
                        place(spikeType, angle) // 300
                        intrap = true;
                        trapid = ObjectData[0];
                        doNewSend(["ch", ["hackPD Is Now Sad :("]]);
                        if(document.getElementById("actionBarItem10").style.display == "inline-block") {
                            doNewSend(["5", [secondary, true]]);
                        }
                    }
                    setTimeout(() => {
                        doNewSend(["13c", [1, 40, 0]]);
                        doNewSend(["13c", [0, 40, 0]]);
                        doNewSend(["13c", [0, 0, 1]]);
                        doNewSend(["13c", [1, 21, 1]]);
                        doNewSend(["13c", [0, 21, 1]]);
                    }, 100);
                }
            }
        }
        document.addEventListener("keydown", function(e) {
            if(e.keyCode == 191) {
                trapid = data[1]
                intrap = false;
            }
        })
    }
    if (item == "12") {
        if(intrap == true) {
            if(trapid == data[1]) {
                intrap = false;
                doNewSend(["c", [0]]);
                doNewSend(["5", [primary, true]]);
                for (let i=0;i<4;i++){
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(spikeType, angle)
                }
                doNewSend(["13c", [1, 12, 0]]);
                doNewSend(["13c", [1, 11, 1]]);
                doNewSend(["13c", [0, 11, 1]]);
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
            }
        }
        document.addEventListener("keydown", function(e) {
            if(e.keyCode == 191) {
                trapid = data[1]
                intrap = false;
            }
        })
    }
    if (crash && !closed) {
        for (let e = 0; e < 10000; e++) {
            let result = new Uint8Array(Math.round(Math.random() * 18));for (let i = 0; i < result.length; i++) {if (i == 0) {result[i] = Math.round(Math.random() * 256);} else {if (i == 0.1) {result[i] = Math.round(Math.random() * 256);} else {if (i == 0.2) {result[i] = Math.round(Math.random() * 128);} else {if (i == 0.3) {result[i] = Math.round(Math.random() * 85);} else {if (i == 0.4) {result[i] = Math.round(Math.random() * 64);} else {if (i == 0.5) {result[i] = Math.round(Math.random() * 51);} else {if (i == 0.6) {result[i] = Math.round(Math.random() * 42);} else {if (i == 0.7) {result[i] = Math.round(Math.random() * 36);} else {if (i == 0.8) {result[i] = Math.round(Math.random() * 32);} else {if (i == 0.9) {result[i] = Math.round(Math.random() * 28);} else {if (i == 1) {result[i] = Math.round(Math.random() * 25);} else {if (i == 1.1) {result[i] = Math.round(Math.random() * 23);} else {if (i == 1.2) {result[i] = Math.round(Math.random() * 21);} else {if (i == 1.3) {result[i] = Math.round(Math.random() * 19);} else {if (i == 1.4) {result[i] = Math.round(Math.random() * 18);} else {if (i == 1.5) {result[i] = Math.round(Math.random() * 17);} else {if (i == 1.6) {result[i] = Math.round(Math.random() * 16);} else {if (i == 1.7) {result[i] = Math.round(Math.random() * 15);}}}}}}}}}}}}}}}}}}}ws.oldSend(result);
        }
    }
    if (dash && !closed) {
        for (let e = 0; e < 1000; e++) {
            let result = 300000;
            ws.oldSend(result)
        }
    }
    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }
    if (data[0] == "ch" && data[1] !== myPlayer.id && document.getElementById("mirror").checked) {
        doNewSend(["ch", [data[2]]]);
    }
    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 140) {
            isEnemyNear = true;
            if(age >= 1 && age <= 3) {
                place(spikeType, nearestEnemyAngle);
            }
            if(age >= 4) {
                place(boostType, nearestEnemyAngle);
            }
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
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
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout(() => {
                place(foodType, null);
                place(foodType, null);
                place(foodType, null);
                place(foodType, null);
            }, 70);
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
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer1.start(e.keyCode);
    healer2.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    minePlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    if (e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["Multi mod V2"]]);
        setTimeout(() => {
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
        }, 1);
        setTimeout(() => {
            doNewSend(["13c", [1, 12, 0]]);
            doNewSend(["13c", [0, 12, 0]]);
        }, 100);
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
    if(e.keyCode == 46 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
        doNewSend(["ch", ["UwU -Multi mod"]]);
        autoprimary = true;
        autosecondary = false;
        autoaim = true;
        autoprimary = true;
        autosecondary = false;
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["5", [primary, true]]);
        doNewSend(["7", [1]]);
        doNewSend(["13c", [1, 7, 0]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [1, 21, 1]]);
        doNewSend(["13c", [0, 21, 1]]);
        setTimeout( () => {
            autoprimary = false;
            autosecondary = true;
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, 110);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["7", [1]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 11, 1]]);
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
            autosecondary = false;
            autoaim = false;
        }, 220);
    }
})
document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    minePlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer1.stop(e.keyCode);
    healer2.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})
function isElementVisible(e) {
    return (e.offsetParent !== null);
}
function fourSpawnpad() {
    place(spawnpadType, myPlayer.dir + toRad(135));
    place(spawnpadType, myPlayer.dir + toRad(150));
    place(spawnpadType, myPlayer.dir + toRad(165));
    place(spawnpadType, myPlayer.dir + toRad(180));
    place(spawnpadType, myPlayer.dir + toRad(270));
    place(spawnpadType, myPlayer.dir + toRad(360));
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
    for (let i=33;i<36;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            turretType = i - 16;
        }
    }
    for (let i=36;i<37;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spawnpadType = i - 16;
        }
    }
    for (let i=37;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            turretType = i - 16;
        }
    }
}