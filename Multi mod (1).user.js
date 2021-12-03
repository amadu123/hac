// ==UserScript==
// @name           Multi mod
// @namespace      https://www.youtube.com/channel/UCTG2PIyB2Y8oSBqNduqWJ0A
// @version        Private beta v1
// @description    Stacked Insta, Good Heal, Anti Clown Anti-invisible buildings delete button for river servers PREFIX = !   search for: PREFIX for all
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
// @require      https://github.com/amadu123/moomoo.io-hacks/raw/main/River%20Glitch.txt
// @icon          https://github.com/amadu123/hac/blob/main/hack%20pandemic.png?raw=true

//KeyBinds: R For insta, ' to change insta speed, spacebar for spike insta, U for age one insta, L for bow insta, ESC for menu, [ for auto heal on or off and PREFIX = !
// ==/UserScript==

let hue = 0;

let replaceInterval = setInterval(() => {
if (CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function() { if (this.fillStyle == "#8ecc51") this.fillStyle = `hsl(${hue}, 100%, 50%)`; return oldFunc.call(this, ...arguments); })(CanvasRenderingContext2D.prototype.roundRect);
  clearInterval(replaceInterval);
}}, 0);

function changeHue() {
  hue += Math.random() * 9999;
}

setInterval(changeHue, 0);



setInterval(() => {
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "red";
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "brown";
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "black";
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "red";
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "brown";
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "#black";
setTimeout( () => {
document.getElementById("woodDisplay").style.color = "red";
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 700);
setInterval(() => {
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "red";
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "yellow";
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "black";
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "red";
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "yellow";
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "black";
setTimeout( () => {
document.getElementById("scoreDisplay").style.color = "red";
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 700);
setInterval(() => {
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "red";
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "orange";
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "yellow";
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "green";
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "blue";
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "#d820da";
setTimeout( () => {
document.getElementById("stoneDisplay").style.color = "purple";
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 700);
setInterval(() => {
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "red";
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "green";
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "black";
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "yellow";
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "green";
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "black";
setTimeout( () => {
document.getElementById("foodDisplay").style.color = "red";
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 700);

setInterval(() => {
setTimeout( () => {
document.getElementById("gameName").innerHTML = "Multi mod";
setTimeout( () => {
document.getElementById("gameName").innerHTML = "V1";
}, 1500);
}, 2000);}
 , 700);
setInterval(() => {
setTimeout( () => {
document.getElementById("gameName").style.color = "White";
setTimeout( () => {
document.getElementById("gameName").style.color = "white";
setTimeout( () => {
document.getElementById("gameName").style.color = "white";
setTimeout( () => {
document.getElementById("gameName").style.color = "white";
setTimeout( () => {
document.getElementById("gameName").style.color = "white";
setTimeout( () => {
document.getElementById("gameName").style.color = "white";
setTimeout( () => {
document.getElementById("gameName").style.color = "white";
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 700);
setInterval(() => {
    if (changehat == true) {
        doNewSend(["13c", [0, 11, 0]]);
        doNewSend(["13c", [0, 21, 1]]);
        setTimeout(() => {
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 18, 1]]);
        },600);
        setTimeout(() => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 16, 1]]);
        },300);
    }
},260);
setInterval(() => {
    if (wingmod == true) {
        doNewSend(["13c", [0, 13, 1]]);
        setTimeout(() => {
            doNewSend(["13c", [0, 19, 1]]);
        },10);
    }
},10);

document.getElementById("diedText").style.color = "red";
document.getElementById("diedText").innerHTML = "You Died :<";

// edited menu HeHe
$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(0, 0, 0, 0)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '5px',
                    'margin': '15px',
                    'margin-top': '15px'});

$('#menuContainer').css({'white-space': 'normal'});

$('#nativeResolution').css({'cursor': 'pointer'});

$('#playMusic').css({'cursor': 'pointer'});

$('#guideCard').css({'overflow-y': 'hidden',
                     'margin-top': 'auto',
                     'margin-bottom': '30px'});


$('#skinColorHolder').css({'margin-bottom': '30.75px'});

$('.settingRadio').css({'margin-bottom': '30.75px'});



$('#linksContainer2').css({'-webkit-border-radius': '0px 0 0 0',
                           '-moz-border-radius': '0px 0 0 0',
                           'border-radius': '0px 0 0 0',
                           'right': '44%',
                           'left': '44%',
                           'background-color': 'rgba(0, 0, 0, 0)',
                           'text-align': 'center',
                           'bottom': '12px'});

$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(255, 255, 255, 0), 0 2px 0 rgba(255, 255, 255, 0), 0 3px 0 rgba(255, 255, 255, 0), 0 4px 0 rgba(255, 255, 255, 0), 0 5px 0 rgba(255, 255, 255, 0), 0 6px 0 rgba(255, 255, 255, 0), 0 7px 0 rgba(255, 255, 255, 0), 0 8px 0 rgba(255, 255, 255, 0), 0 9px 0 rgba(255, 255, 255, 0)',
                    'text-align': 'center',
                    'font-size': '156px',
                    'margin-bottom': '-30px'});

$('#loadingText').css({'color': '#000000',
                       'background-color': 'rgba(0, 0, 0, 0)',
                       'padding': '8px',
                       'right': '150%',
                       'left': '150%',
                       'margin-top': '40px'});

$('.ytLink').css({'color': '#144db4',
                  'padding': '8px',
                  'background-color': 'rgba(0, 0, 0, 0)'});

$('.menuLink').css({'color': '#144db4'});

$('#nameInput').css({'border-radius': '0px',
                     '-moz-border-radius': '0px',
                     '-webkit-border-radius': '0px',
                     'border': 'hidden'});

$('#serverSelect').css({'cursor': 'pointer',
                        'color': '#000000',
                        'background-color': '#808080',
                        'border': 'hidden',
                        'font-size': '20px'});

$('.menuButton').css({'border-radius': '0px',
                      '-moz-border-radius': '0px',
                      '-webkit-border-radius': '0px'});

$('#promoImgHolder').css({'position': 'absolute',
                          'bottom': '-7%',
                          'left': '20px',
                          'width': '420px',
                          'height': '236.25px',
                          'padding-bottom': '18px',
                          'margin-top': '0px'});

$('#adCard').css({'position': 'absolute',
                  'bottom': '-7%',
                  'right': '20px',
                  'width': '420px',
                  'height': '236.25px',
                  'padding-bottom': '18px'});


$('.menuHeader').css({'color': 'rgba(255, 255, 255, 1)'});

$('#killCounter').css({'color': '#ededed'});

$('#diedText').css({'background-color': 'rgba(0, 0, 0, 0)'});

$('#gameCanvas').css({'background-color': '#f4f4f4'});

$('#allianceButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('#storeButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('#chatButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('.gameButton').css({'-webkit-border-radius': '0px 0 0 0',
                      '-moz-border-radius': '0px 0 0 0',
                      'border-radius': '0px 0 0 0',
                      'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.uiElement, .resourceDisplay').css({'-webkit-border-radius': '0px',
                                       '-moz-border-radius': '0px',
                                       'border-radius': '0px',
                                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '0px',
                   'background-color': 'rgba(0, 0, 0, 0.4)',
                   'text-align': 'center'});

$('#foodDisplay').css({'color': '#ae4d54'});

$('#woodDisplay').css({'color': '#758f58'});

$('#stoneDisplay').css({'color': '#818198'});

$('#scoreDisplay').css({'color': '#c2b17a'});

$('#leaderboard').css({'-webkit-border-radius': '0px',
                       '-moz-border-radius': '0px',
                       'border-radius': '10px',
                       'background-color': 'rgba(0, 0, 0, 0.4)',
                       'text-align': 'center'});

$('#ageText').css({'color': '#ffdfd'});

$('#ageBar').css({'-webkit-border-radius': '0px',
                  '-moz-border-radius': '0px',
                  'border-radius': '0px',
                  'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#ageBarBody').css({'-webkit-border-radius': '0px',
                      '-moz-border-radius': '0px',
                      'border-radius': '0px',
                      'background-color': '#f00'});

$('.storeTab').css({'-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#storeHolder').css({'-webkit-border-radius': '0px',
                       '-moz-border-radius': '0px',
                       'border-radius': '0px',
                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#allianceHolder').css({'-webkit-border-radius': '0px',
                          '-moz-border-radius': '0px',
                          'border-radius': '0px',
                          'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.actionBarItem').css({'-webkit-border-radius': '0px',
                         'border-radius': '0px',
                         'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#itemInfoHolder').css({'text-align': 'center',
                          'top': '125px',
                          'left': '350px',
                          'right': '350px',
                          'max-width': '666px'});


var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "#fffdfd";
myElement.style.color = "#000000";

var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#1582ef";
getElement.style.color = "#000000";

$('#leaderboard').append('Multi mod');

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

// Keys
var TankGearKey = 90;
var BullHelmetKey = 74;
var SoldierHelmetKey = 67;
var TurretKey = 75;
var BoosterHatKey = 66;
var uneqiup = 16;
var SpikeGearKey = 89;
var EmpKey = 84;
var SamuKey = 79;
var SpikeKey = 86;
var PitKey = 70;
var PikeKey = 86;
var WindKey = 78;
try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("There was an error removing the ads.");
}


var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 17px;">Multi Menu

        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
                <br><h3 class="menuPrompt">Tank Gear: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull Helmet: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br>
                <br><h3 class="menuPrompt">Soldier Helmet: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret Gear: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/><br>
                <br><h3 class="menuPrompt">Booster Hat: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike Gear: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/><br>
                <br><h3 class="menuPrompt">Emp Helmet: </h3> <input value="${String.fromCharCode(EmpKey)}" id="emp" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Samurai Armor:</h3> <input value="${String.fromCharCode(SamuKey)}" id="samu" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br>
                <br><h3 class="menuPrompt">Put Pit on: </h3> <input value="${String.fromCharCode(PitKey)}" id="pit" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Put Pike on: </h3> <input value="${String.fromCharCode(PikeKey)}" id="pike" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br>
                <h3 class="menuPrompt">Put Windmill on: </h3> <input value="${String.fromCharCode(WindKey)}" id="wind" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 style="font-size: 17px;"> Settings </h3>
                <label class="container">Show biomes on the map ?(Snow, Plains, desert)
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
<label class="container">Melee Mod
<input type="checkbox" id="m">
<span class="checkmark"></span>
</label>
<label class="container">Change wing
<input type="checkbox" id="n">
<span class="checkmark"></span>
</label>
<label class="container">Auto Insta When Enemy Near
<input type="checkbox" id="ai">
<span class="checkmark"></span>
</label>
<label class="container">AntiInsta (Laggy)
<input type="checkbox" id="anti">
<span class="checkmark"></span>
</label>
<br><h3 style="font-size: 17px;"style="font-size: 21px;"> Instakill settings </h3>
<br><label class="container"style="font-size: 15px;">BeastInsta
<input type="checkbox" id="Beast">
<span class="checkmark"></span>
</label>
<br><label class="container"style="font-size: 15px;">DojoInsta
<input type="checkbox" id="dojo">
<span class="checkmark"></span>
</label>
<br><label class="container"style="font-size: 15px;">Lag Insta
<input type="checkbox" id="LI">
<span class="checkmark"></span>
</label>
<br><label class="container"style="font-size: 15px;">Multi Insta a mix of over 300
<input type="checkbox" id="RLI">
<span class="checkmark"></span>
</label>
<br><label class="container"style="font-size: 15px;">Reniz INSTA⛩
<input type="checkbox" id="RI">
<span class="checkmark"></span>
</label>
<br><label class="container"style="font-size: 15px;">Super Insta
<input type="checkbox" id="LegendaryInsta">
<span class="checkmark"></span>
</label>
<br><label class="container"style="font-size: 15px;">PerfectStackInsta
<input type="checkbox" id="NLI">
<span class="checkmark"></span>
</label>
               <h3 style="font-size: 17px;"> Autochat settings </h3>
               <br>AutoChat:<input type="text" value="1" id="ach1" width="100" height="50"/><br>
            </div>
        </div>
        <div class="modal-footer">
            <h3 style="font-size: 17px;">This Op macro by Excullity & bombies</h3>
            <p>Still Here You Found an Secret</p>
        </div>
    </div>
</div>
`
document.body.appendChild(menuChange)


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
$("#pit").on("input", () => {
    var cval = $("#pit").val();
    if (cval){
        PitKey = cval.toUpperCase();
        PitKey = PitKey.charCodeAt(0);
        console.log(PitKey);
    }
});
$("#pike").on("input", () => {
    var cval = $("#pike").val();
    if (cval){
        PikeKey = cval.toUpperCase();
        PikeKey = PikeKey.charCodeAt(0);
        console.log(PikeKey);
    }
});
$("#wind").on("input", () => {
    var cval = $("#wind").val();
    if (cval){
        WindKey = cval.toUpperCase();
        WindKey = WindKey.charCodeAt(0);
        console.log(WindKey);
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
        TrapKey = cval.toUpperCase();
        TrapKey = TrapKey.charCodeAt(0);
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
    background: #89CFF0;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-body {
    padding: 10px 20px;
    background: #fff;
}

.modal-footer {
    background: #89CFF0;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.closeBtn {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.closeBtn:hover,
.closeBtn:focus {
    color: #000;
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

/* When the checkbox is checked, add a red background */
.container input:checked ~ .checkmark {
  background-color: #89CFF0;
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
document.head.appendChild(styleItem);


$("#adCard").css({display: "none"});
$("#pre-content-container").css({display: "none"});


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
        doNewSend(["ch",["TankGear:ON"]]);
        doNewSend(["13c", [0, 21, 1]]);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
        doNewSend(["ch",["SoldierHelmet:ON"]]);
        doNewSend(["13c", [0, 19, 1]]);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
        doNewSend(["ch",["BullHelmet:ON"]]);
        doNewSend(["13c", [0, 18, 1]]);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BoosterHat);
    } else if (e.keyCode == EmpKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_EmpHelmet);
    } else if (e.keyCode == SamuKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SamuraiArmor);
        doNewSend(["ch",["SamuraiArmor:ON"]]);
        doNewSend(["13c", [0, 21, 1]]);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
        doNewSend(["ch",["TurretGear:ON"]]);
        doNewSend(["13c", [0, 19, 1]]);
    } else if (e.keyCode == PitKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        place(boostType)
    } else if (e.keyCode == PikeKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        place(spikeType)
    } else if (e.keyCode == WindKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        place(millType)
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
var a = document.querySelector("#m")

a.addEventListener('change', function() {
    if (this.checked) {
        changehat = true
        doNewSend(["ch", ["Melee Mod-ON"]]);
    } else {
        changehat = false
        doNewSend(["ch", ["Melee Mod-OFF"]]);
    }
})
var a1 = document.querySelector("#n")

a1.addEventListener('change', function () {
    if (this.checked) {
        wingmod = true
        doNewSend(["ch", ["Wing Change-ON"]]);
    } else {
        wingmod = false
        doNewSend(["ch", ["Wing Change-OFF"]]);
    }
})
var a2 = document.querySelector("#ai")

a2.addEventListener('change', function () {
    if (this.checked) {
        autoinsta = true
        doNewSend(["ch", ["Auto Insta-ON"]]);
    } else {
        autoinsta = false
        doNewSend(["ch", ["Auto Insta-OFF"]]);
    }
})
var anti2 = document.querySelector("#anti")

anti2.addEventListener('change', function () {
    if (this.checked) {
        antiinsta = true
        doNewSend(["ch", ["Anti Insta-ON"]]);
    } else {
        antiinsta = false
        doNewSend(["ch", ["Anti Insta-OFF"]]);
    }
})
var Beast = document.querySelector("#Beast")

Beast.addEventListener('change', function() {
    if (this.checked) {
        BeastInsta = 1
        dojoinsta = 0
        ReverseLagInsta = 0
        LegendaryInsta = 0
        LagInsta = 0
        RenizInsta = 0
        nolaginsta = 0
        doNewSend(["ch", ["BeastInsta-ON"]]);
    } else {
        BeastInsta = 0
        doNewSend(["ch", ["BeastInsta-OFF"]]);
    }
})
var dojo = document.querySelector("#dojo")

dojo.addEventListener('change', function() {
    if (this.checked) {
        dojoinsta = 1
        BeastInsta = 0
        ReverseLagInsta = 0
        LegendaryInsta = 0
        LagInsta = 0
        RenizInsta = 0
        nolaginsta = 0
        doNewSend(["ch", ["DojoInsta-ON"]]);
    } else {
        dojoinsta = 0
        doNewSend(["ch", ["DojoInsta-OFF"]]);
    }
})
var LI = document.querySelector("#LI")

LI.addEventListener('change', function() {
    if (this.checked) {
        LagInsta = 1
        BeastInsta = 0
        dojoinsta = 0
        ReverseLagInsta = 0
        LegendaryInsta = 0
        RenizInsta = 0
        nolaginsta = 0
        doNewSend(["ch", ["LagInsta-ON"]]);
    } else {
        LagInsta = 0
        doNewSend(["ch", ["LagInsta-OFF"]]);
    }
})
var RLI = document.querySelector("#RLI")

RLI.addEventListener('change', function() {
    if (this.checked) {
        ReverseLagInsta = 1
        BeastInsta = 0
        dojoinsta = 0
        LegendaryInsta = 0
        LagInsta = 0
        RenizInsta = 0
        nolaginsta = 0
        doNewSend(["ch", ["Multi Insta-ON"]]);
    } else {
        ReverseLagInsta = 0
        doNewSend(["ch", ["Multi Insta-OFF"]]);
    }
})
var RI = document.querySelector("#RI")

RI.addEventListener('change', function() {
    if (this.checked) {
        RenizInsta = 1
        BeastInsta = 0
        dojoinsta = 0
        ReverseLagInsta = 0
        LegendaryInsta = 0
        LagInsta = 0
        nolaginsta = 0
        doNewSend(["ch", ["ReniZInsta-ON"]]);
    } else {
        RenizInsta = 0
        doNewSend(["ch", ["ReniZInsta-OFF"]]);
    }
})
var LEGEND = document.querySelector("#LegendaryInsta")

LEGEND.addEventListener('change', function() {
    if (this.checked) {
        LegendaryInsta = 1
        BeastInsta = 0
        dojoinsta = 0
        ReverseLagInsta = 0
        LagInsta = 0
        RenizInsta = 0
        nolaginsta = 0
        doNewSend(["ch", ["Super Insta-ON"]]);
    } else {
        LegendaryInsta = 0
        doNewSend(["ch", ["Super Insta-OFF"]]);
    }
})
var Nolag = document.querySelector("#NLI")

Nolag.addEventListener('change', function() {
    if (this.checked) {
        LegendaryInsta = 1
        BeastInsta = 0
        dojoinsta = 0
        ReverseLagInsta = 0
        LagInsta = 0
        RenizInsta = 0
        nolaginsta = 1
        doNewSend(["ch", ["PerfectStackInsta-On"]]);
    } else {
        nolaginsta = 0
        doNewSend(["ch", ["PerfectStackInsta-Off"]]);
    }
})

var checkbox = document.querySelector("#myCheck")

checkbox.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://media.discordapp.net/attachments/899253156435886100/909697901473722419/70slosers_MC_PFP_Template-1.png?width=115&height=150)`});
        console.log('checked')
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
    }
})
var lel = false;
function nothig() {
    var lel = false;
    console.log("fOlS");
}
setInterval(() => {
    var ach = document.getElementById("ach1").value;
    if(ach == 1) {
        nothig();
    } else {
        doNewSend(["ch", [ach]]);
    }
}, 1000);

unsafeWindow.admob = {
    requestInterstitialAd: ()=>{},
    showInterstitialAd: ()=>{}
}
function ichat(space, chance) {
    var ach1 = document.getElementById("ach2").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
        if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
            result += "";
            count++
        } else {
            result += characters.charAt(i);
        }
    }
    return result;
}
let mouseX;
let mouseY;

let width;
let height;

var TOR=0x1,TESTRRR=!![],ASBMsg='Anti Boost Spike',TRUE=!![];
const _0x3710=['\x77\x6f\x62\x43\x6d\x77\x5a\x2f\x62\x67\x3d\x3d','\x51\x42\x45\x6a\x77\x70\x55\x78\x44\x73\x4b\x61\x77\x70\x39\x75\x48\x4d\x4f\x6c\x77\x71\x38\x41\x77\x6f\x34\x3d','\x77\x70\x49\x4a\x44\x47\x38\x69','\x77\x34\x2f\x43\x69\x4d\x4b\x42\x77\x34\x54\x44\x6f\x6c\x55\x53\x77\x71\x59\x76\x77\x36\x49\x70','\x5a\x63\x4f\x73\x77\x6f\x66\x43\x6e\x73\x4f\x66\x48\x4d\x4b\x45\x65\x4d\x4f\x78\x55\x73\x4b\x62\x51\x51\x3d\x3d','\x55\x38\x4f\x69\x77\x72\x33\x43\x74\x73\x4f\x42','\x77\x70\x6f\x5a\x4b\x55\x6b\x43\x52\x77\x3d\x3d','\x77\x71\x5a\x7a\x54\x79\x2f\x43\x74\x30\x4a\x6e\x77\x35\x70\x4d\x77\x6f\x64\x4d','\x48\x38\x4b\x53\x63\x48\x70\x65\x62\x54\x73\x74\x77\x37\x56\x4a\x46\x43\x49\x3d','\x61\x73\x4f\x47\x77\x36\x54\x43\x76\x6a\x73\x3d','\x77\x37\x2f\x44\x74\x78\x46\x6f\x63\x51\x3d\x3d','\x50\x79\x6a\x44\x70\x55\x66\x43\x70\x41\x3d\x3d','\x62\x73\x4b\x71\x77\x35\x37\x43\x69\x31\x73\x3d','\x41\x63\x4b\x32\x42\x73\x4f\x52\x4f\x41\x3d\x3d','\x61\x73\x4f\x6c\x77\x6f\x44\x43\x6e\x4d\x4f\x46\x41\x41\x3d\x3d','\x61\x42\x6e\x44\x73\x38\x4f\x41','\x4e\x6e\x58\x44\x6c\x68\x35\x44','\x64\x77\x58\x44\x69\x4d\x4f\x37\x43\x77\x3d\x3d','\x48\x38\x4b\x66\x44\x73\x4f\x77\x4b\x47\x77\x3d','\x77\x35\x44\x44\x6c\x73\x4f\x43\x77\x70\x4d\x3d','\x58\x67\x45\x77\x77\x72\x34\x2f','\x66\x4d\x4b\x33\x77\x37\x48\x43\x6e\x38\x4b\x4c','\x47\x69\x67\x4a\x42\x73\x4b\x49','\x43\x4d\x4f\x43\x47\x73\x4f\x72\x57\x51\x3d\x3d','\x77\x71\x33\x44\x73\x38\x4b\x36\x77\x70\x49\x76','\x45\x38\x4b\x53\x58\x4d\x4b\x4f\x47\x67\x3d\x3d','\x50\x42\x4c\x44\x71\x6d\x44\x43\x70\x51\x3d\x3d','\x77\x72\x49\x76\x56\x45\x54\x44\x72\x67\x3d\x3d','\x4f\x4d\x4b\x4c\x77\x35\x44\x43\x75\x4d\x4f\x53','\x77\x34\x33\x44\x75\x73\x4f\x56\x77\x6f\x4d\x2f','\x77\x34\x50\x43\x76\x44\x6c\x6c\x62\x77\x3d\x3d','\x77\x6f\x37\x43\x69\x44\x56\x30\x43\x67\x3d\x3d','\x4f\x73\x4b\x75\x44\x38\x4f\x39\x43\x41\x3d\x3d','\x77\x36\x77\x4d\x45\x73\x4b\x53\x77\x36\x73\x3d','\x4b\x63\x4b\x53\x56\x47\x50\x44\x72\x41\x3d\x3d','\x4a\x63\x4b\x38\x4f\x63\x4f\x32\x4e\x67\x3d\x3d','\x61\x38\x4f\x49\x4c\x6a\x6b\x30','\x77\x34\x72\x44\x6a\x30\x7a\x44\x6f\x33\x6f\x3d','\x47\x78\x2f\x44\x6e\x45\x4c\x43\x70\x41\x3d\x3d','\x77\x35\x66\x44\x68\x79\x49\x3d','\x77\x72\x30\x65\x43\x57\x30\x49','\x62\x63\x4b\x6a\x77\x36\x66\x43\x67\x4d\x4b\x67','\x44\x52\x74\x67\x55\x79\x34\x3d','\x77\x72\x58\x44\x6d\x4d\x4b\x56\x62\x4d\x4b\x58','\x43\x73\x4b\x41\x50\x73\x4b\x47\x77\x35\x45\x3d','\x4d\x42\x33\x44\x6b\x57\x62\x43\x6b\x41\x3d\x3d','\x77\x36\x50\x43\x6f\x38\x4b\x53\x77\x36\x66\x44\x72\x51\x3d\x3d','\x44\x32\x58\x44\x74\x43\x56\x55','\x46\x4d\x4b\x33\x43\x63\x4b\x6c\x43\x48\x63\x3d','\x48\x31\x63\x79\x45\x38\x4b\x5a','\x4b\x38\x4f\x30\x77\x36\x30\x39\x77\x6f\x6f\x3d','\x4f\x73\x4b\x39\x48\x38\x4b\x51\x4b\x77\x3d\x3d','\x77\x72\x37\x43\x6f\x63\x4b\x37\x77\x70\x64\x6f','\x77\x6f\x6b\x51\x4e\x6b\x55\x78','\x4e\x63\x4b\x72\x43\x4d\x4f\x43\x47\x67\x3d\x3d','\x77\x70\x58\x43\x73\x6a\x66\x43\x75\x4d\x4b\x71','\x63\x73\x4f\x55\x77\x36\x62\x43\x6d\x51\x49\x70\x77\x6f\x72\x44\x73\x44\x55\x3d','\x48\x73\x4b\x62\x77\x35\x4c\x43\x72\x73\x4f\x69\x43\x63\x4f\x7a\x51\x67\x3d\x3d','\x46\x4d\x4b\x45\x77\x37\x2f\x43\x70\x51\x3d\x3d','\x43\x58\x2f\x44\x72\x78\x31\x55\x77\x72\x33\x43\x71\x77\x3d\x3d','\x77\x35\x45\x47\x4b\x77\x3d\x3d','\x62\x38\x4b\x50\x77\x34\x7a\x43\x6d\x56\x70\x6f','\x59\x31\x74\x62\x61\x6e\x44\x43\x6c\x51\x3d\x3d','\x50\x53\x6f\x7a','\x77\x70\x50\x43\x72\x78\x78\x36','\x77\x72\x48\x43\x6d\x52\x46\x78','\x77\x35\x5a\x79\x59\x63\x4b\x74\x77\x35\x45\x4a','\x77\x35\x4a\x6f\x59\x38\x4b\x73\x77\x6f\x63\x3d','\x58\x4d\x4b\x55\x77\x34\x72\x43\x6e\x63\x4b\x74','\x77\x6f\x62\x43\x69\x63\x4b\x53\x77\x72\x70\x79','\x45\x38\x4f\x57\x77\x71\x76\x44\x6f\x4d\x4b\x47','\x56\x55\x39\x54\x63\x6e\x30\x3d','\x77\x6f\x33\x44\x6e\x4d\x4b\x48\x58\x73\x4b\x4b','\x4e\x4d\x4b\x34\x43\x4d\x4b\x4b\x77\x36\x34\x3d','\x77\x71\x72\x44\x67\x4d\x4b\x32\x51\x4d\x4b\x38\x61\x41\x3d\x3d','\x77\x6f\x72\x44\x6b\x38\x4b\x43\x55\x63\x4b\x72','\x46\x4d\x4f\x54\x77\x34\x45\x66\x77\x72\x45\x3d','\x77\x72\x51\x45\x62\x42\x51\x6b\x57\x73\x4b\x73\x77\x6f\x30\x37\x4f\x73\x4b\x4d\x77\x34\x6a\x44\x76\x63\x4f\x71\x77\x71\x6a\x44\x6e\x38\x4b\x78\x57\x57\x5a\x4e\x65\x45\x76\x44\x76\x68\x6e\x43\x6c\x7a\x4d\x55\x77\x36\x38\x3d','\x77\x35\x73\x41\x4e\x38\x4b\x66','\x77\x35\x54\x43\x67\x63\x4f\x7a\x41\x38\x4f\x32\x62\x38\x4f\x70\x77\x37\x6b\x30\x77\x36\x35\x61\x4d\x78\x38\x3d','\x77\x70\x4c\x44\x6f\x63\x4f\x39','\x77\x37\x33\x43\x67\x55\x67\x36\x59\x63\x4f\x67\x77\x37\x31\x51\x56\x4d\x4b\x59\x49\x53\x62\x44\x74\x30\x68\x6e\x77\x71\x76\x44\x6b\x67\x62\x43\x73\x51\x62\x44\x71\x55\x72\x43\x72\x73\x4b\x6a\x44\x56\x51\x2b\x57\x38\x4f\x6d\x77\x72\x7a\x43\x73\x53\x76\x43\x72\x44\x37\x44\x69\x55\x4d\x75\x77\x35\x58\x43\x6e\x44\x51\x3d','\x63\x38\x4f\x79\x77\x6f\x4c\x44\x6b\x38\x4b\x57\x41\x4d\x4b\x34\x61\x63\x4f\x6f\x52\x73\x4f\x4a\x47\x73\x4f\x6e\x55\x6b\x62\x44\x6b\x47\x78\x66\x53\x6e\x72\x44\x6d\x6a\x6a\x44\x67\x4d\x4f\x56\x77\x35\x33\x44\x68\x53\x6a\x44\x75\x38\x4f\x55\x46\x4d\x4f\x6e\x56\x63\x4b\x6f\x77\x71\x6c\x39\x77\x71\x39\x67\x77\x34\x73\x3d','\x77\x37\x44\x44\x70\x4d\x4b\x59\x55\x38\x4b\x72\x77\x6f\x58\x43\x6f\x38\x4b\x67\x59\x38\x4f\x4d\x77\x37\x59\x3d','\x77\x34\x2f\x43\x6c\x38\x4b\x62','\x77\x34\x76\x43\x67\x63\x4b\x63\x77\x36\x54\x44\x6f\x45\x51\x6f\x77\x71\x6f\x6c\x77\x36\x49\x44\x62\x73\x4f\x32\x5a\x77\x3d\x3d','\x77\x72\x72\x43\x68\x42\x46\x78\x50\x78\x72\x43\x6a\x6b\x72\x43\x76\x73\x4b\x39\x4d\x79\x35\x62\x77\x70\x55\x59\x50\x78\x54\x44\x67\x6b\x39\x73','\x41\x4d\x4b\x4f\x47\x63\x4f\x37\x4f\x51\x3d\x3d','\x77\x72\x50\x43\x67\x67\x31\x73\x50\x42\x54\x43\x6e\x67\x3d\x3d','\x77\x71\x74\x77\x53\x43\x38\x3d','\x48\x79\x67\x58\x43\x53\x44\x43\x68\x4d\x4f\x69\x51\x38\x4f\x71\x77\x71\x6e\x43\x69\x38\x4b\x44\x77\x34\x44\x43\x70\x57\x48\x43\x76\x53\x56\x47\x77\x6f\x30\x69\x77\x34\x55\x59\x77\x70\x76\x43\x70\x38\x4f\x7a\x77\x72\x44\x44\x71\x32\x41\x3d','\x63\x38\x4b\x4b\x77\x34\x33\x43\x6b\x41\x3d\x3d','\x77\x6f\x2f\x43\x69\x63\x4b\x48\x77\x34\x37\x44\x6f\x55\x34\x71\x77\x71\x59\x6b\x77\x34\x6c\x32\x4a\x63\x4b\x48\x65\x32\x66\x44\x70\x30\x78\x53\x77\x71\x6a\x44\x6e\x38\x4b\x5a','\x4d\x4d\x4b\x62\x63\x45\x37\x44\x74\x63\x4f\x4e','\x77\x6f\x58\x43\x73\x53\x67\x3d','\x77\x6f\x54\x44\x73\x6d\x4a\x6e\x63\x4d\x4f\x61\x77\x6f\x48\x44\x74\x63\x4f\x56\x77\x70\x4d\x6e\x77\x71\x2f\x43\x73\x77\x4d\x3d','\x52\x6c\x37\x43\x71\x41\x3d\x3d','\x48\x42\x50\x44\x6a\x6e\x62\x43\x6c\x31\x34\x3d','\x77\x72\x4a\x36\x52\x7a\x72\x43\x74\x6c\x67\x3d','\x77\x72\x77\x61\x55\x56\x49\x3d','\x77\x6f\x45\x50\x46\x6b\x55\x5a\x52\x73\x4f\x2f\x77\x34\x59\x3d','\x47\x78\x44\x44\x6b\x41\x3d\x3d','\x77\x71\x45\x31\x58\x30\x4e\x32\x77\x70\x41\x59\x77\x36\x39\x35','\x77\x34\x58\x43\x6c\x38\x4b\x37\x77\x34\x72\x44\x75\x55\x30\x70','\x77\x34\x48\x43\x6c\x38\x4b\x50\x77\x35\x48\x44\x72\x55\x49\x75','\x59\x73\x4b\x59\x77\x34\x44\x43\x6d\x6c\x78\x75','\x45\x63\x4b\x50\x42\x73\x4f\x78\x4f\x58\x59\x3d','\x4a\x38\x4b\x4e\x46\x38\x4b\x77\x45\x32\x74\x49\x50\x33\x6b\x3d','\x77\x35\x58\x43\x67\x41\x35\x74','\x77\x70\x4c\x44\x6f\x73\x4b\x62\x77\x70\x55\x52\x44\x38\x4b\x43\x77\x6f\x2f\x43\x71\x77\x3d\x3d','\x77\x35\x7a\x44\x67\x6a\x52\x76\x52\x4d\x4b\x70\x63\x51\x3d\x3d','\x47\x4d\x4b\x68\x77\x71\x6e\x43\x68\x77\x38\x70\x77\x72\x52\x48\x77\x72\x30\x3d','\x56\x42\x45\x35\x77\x72\x51\x3d','\x77\x6f\x48\x44\x6f\x4d\x4f\x68\x77\x35\x2f\x44\x73\x77\x6e\x44\x76\x69\x54\x43\x68\x77\x3d\x3d','\x4c\x73\x4b\x4e\x63\x4d\x4b\x44','\x43\x53\x52\x70\x66\x41\x6b\x3d','\x77\x71\x49\x76\x57\x56\x35\x52','\x77\x71\x7a\x43\x74\x68\x50\x43\x6b\x4d\x4b\x72','\x53\x42\x67\x7a\x77\x6f\x4d\x34\x42\x63\x4b\x54','\x77\x72\x66\x44\x72\x4d\x4b\x61\x54\x4d\x4b\x4c\x77\x6f\x6b\x3d','\x77\x35\x48\x44\x6c\x7a\x56\x45\x64\x51\x3d\x3d','\x59\x73\x4f\x68\x77\x70\x72\x43\x6d\x67\x3d\x3d','\x4f\x63\x4b\x4a\x61\x73\x4b\x47','\x4e\x78\x77\x42\x44\x38\x4b\x6a','\x77\x72\x6a\x43\x72\x69\x6c\x36\x4e\x51\x3d\x3d','\x47\x73\x4b\x4e\x77\x36\x33\x43\x75\x4d\x4f\x69\x43\x73\x4f\x7a','\x65\x51\x6a\x44\x70\x4d\x4f\x74\x43\x45\x58\x44\x74\x43\x33\x44\x67\x6c\x2f\x43\x6a\x68\x68\x61\x48\x38\x4f\x6f\x77\x34\x6f\x3d','\x4b\x63\x4f\x39\x44\x38\x4f\x6b\x64\x41\x3d\x3d','\x45\x63\x4b\x74\x4a\x73\x4f\x74\x4a\x67\x3d\x3d','\x77\x72\x4d\x69\x66\x6c\x4a\x38','\x77\x35\x35\x64\x54\x73\x4b\x53\x77\x34\x41\x3d','\x4f\x4d\x4b\x6d\x62\x4d\x4b\x75\x47\x41\x3d\x3d','\x77\x71\x68\x2b\x66\x63\x4b\x62\x53\x67\x3d\x3d','\x62\x38\x4f\x76\x77\x34\x50\x43\x6b\x73\x4f\x66\x41\x63\x4b\x34','\x77\x72\x6f\x6a\x61\x6d\x6c\x66','\x42\x4d\x4b\x67\x4f\x73\x4b\x72\x63\x4d\x4f\x6a\x77\x70\x39\x46\x77\x72\x44\x44\x69\x77\x3d\x3d','\x54\x51\x37\x44\x6b\x38\x4f\x6c\x44\x67\x3d\x3d','\x41\x63\x4b\x6a\x42\x73\x4b\x41\x4e\x67\x3d\x3d','\x77\x36\x44\x43\x76\x63\x4b\x70\x77\x37\x58\x44\x6e\x41\x3d\x3d','\x77\x72\x6e\x43\x72\x41\x5a\x72\x4d\x67\x3d\x3d','\x44\x73\x4b\x79\x66\x31\x6c\x55','\x56\x4d\x4f\x5a\x45\x68\x6b\x68','\x4f\x69\x49\x50\x4a\x73\x4b\x73','\x77\x72\x78\x71\x51\x53\x54\x43\x75\x77\x3d\x3d','\x77\x72\x62\x43\x75\x53\x78\x32\x46\x41\x3d\x3d','\x50\x4d\x4b\x5a\x4c\x73\x4f\x6b\x44\x51\x3d\x3d','\x55\x38\x4b\x66\x77\x36\x48\x43\x6e\x4d\x4b\x48','\x77\x35\x37\x44\x74\x7a\x52\x45\x64\x41\x3d\x3d','\x77\x71\x64\x61\x59\x53\x66\x43\x69\x77\x3d\x3d','\x77\x6f\x54\x44\x68\x73\x4b\x63\x57\x4d\x4b\x4a','\x77\x37\x70\x49\x62\x63\x4b\x6f\x77\x36\x45\x3d','\x77\x6f\x45\x55\x44\x47\x67\x50','\x42\x4d\x4f\x68\x77\x70\x76\x44\x71\x63\x4b\x4f','\x43\x63\x4b\x76\x61\x31\x78\x45','\x77\x35\x76\x44\x67\x43\x68\x74\x63\x51\x3d\x3d','\x48\x48\x30\x66\x42\x63\x4b\x54','\x77\x6f\x6a\x43\x6f\x6c\x54\x44\x69\x7a\x4d\x3d','\x77\x71\x59\x48\x55\x47\x6c\x39','\x77\x71\x6a\x43\x71\x48\x50\x44\x68\x77\x63\x3d','\x77\x72\x66\x44\x76\x73\x4f\x76\x77\x35\x76\x44\x72\x41\x54\x43\x70\x7a\x76\x43\x6b\x67\x3d\x3d','\x4a\x38\x4b\x74\x4c\x63\x4b\x52\x77\x35\x4d\x3d','\x47\x67\x77\x39\x4d\x38\x4b\x34','\x4b\x77\x46\x59\x66\x6a\x38\x3d','\x41\x63\x4f\x4b\x77\x36\x77\x73\x77\x70\x34\x3d','\x41\x57\x44\x44\x6b\x42\x4e\x6f','\x51\x4d\x4f\x52\x77\x6f\x62\x43\x72\x73\x4f\x33','\x49\x45\x49\x43\x5a\x69\x72\x43\x68\x30\x4e\x30\x77\x35\x74\x47\x77\x35\x37\x44\x6c\x63\x4b\x31\x55\x4d\x4b\x42\x63\x7a\x76\x43\x6b\x45\x59\x3d','\x77\x34\x54\x44\x68\x73\x4f\x53\x77\x70\x51\x4f\x45\x41\x3d\x3d','\x77\x71\x4c\x43\x69\x47\x48\x44\x68\x41\x3d\x3d','\x77\x70\x73\x49\x47\x46\x51\x42','\x77\x6f\x72\x43\x70\x7a\x58\x43\x74\x73\x4b\x71\x51\x41\x3d\x3d','\x46\x63\x4b\x54\x4b\x38\x4b\x53\x43\x51\x3d\x3d','\x51\x6a\x6f\x6c\x77\x70\x6b\x58'];(function(_0x24c794,_0xde1c8e){const _0x4f90e9=function(_0x5d0bb7){while(--_0x5d0bb7){_0x24c794['push'](_0x24c794['shift']());}};const _0x1f9213=function(){const _0x45a494={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xac27ab,_0x396294,_0x713f80,_0x3d7e69){_0x3d7e69=_0x3d7e69||{};let _0x5353d7=_0x396294+'='+_0x713f80;let _0x5ee655=0x0;for(let _0x5ee655=0x0,_0x1df785=_0xac27ab['length'];_0x5ee655<_0x1df785;_0x5ee655++){const _0x30cb5b=_0xac27ab[_0x5ee655];_0x5353d7+=';\x20'+_0x30cb5b;const _0x557c6a=_0xac27ab[_0x30cb5b];_0xac27ab['push'](_0x557c6a);_0x1df785=_0xac27ab['length'];if(_0x557c6a!==!![]){_0x5353d7+='='+_0x557c6a;}}_0x3d7e69['cookie']=_0x5353d7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x318600,_0x132a6f){_0x318600=_0x318600||function(_0x57804d){return _0x57804d;};const _0x2c6f0d=_0x318600(new RegExp('(?:^|;\x20)'+_0x132a6f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1103fb=function(_0xe0e8cc,_0x363969){_0xe0e8cc(++_0x363969);};_0x1103fb(_0x4f90e9,_0xde1c8e);return _0x2c6f0d?decodeURIComponent(_0x2c6f0d[0x1]):undefined;}};const _0x1625aa=function(){const _0x362e61=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x362e61['test'](_0x45a494['removeCookie']['toString']());};_0x45a494['updateCookie']=_0x1625aa;let _0x1a1387='';const _0xf67945=_0x45a494['updateCookie']();if(!_0xf67945){_0x45a494['setCookie'](['*'],'counter',0x1);}else if(_0xf67945){_0x1a1387=_0x45a494['getCookie'](null,'counter');}else{_0x45a494['removeCookie']();}};_0x1f9213();}(_0x3710,0x1a7));const _0xbe9b=function(_0x24c794,_0xde1c8e){_0x24c794=_0x24c794-0x0;let _0x4f90e9=_0x3710[_0x24c794];if(_0xbe9b['TNasTz']===undefined){(function(){let _0x335791;try{const _0x1f9213=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x335791=_0x1f9213();}catch(_0x45a494){_0x335791=window;}const _0xac27ab='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x335791['atob']||(_0x335791['atob']=function(_0x396294){const _0x713f80=String(_0x396294)['replace'](/=+$/,'');let _0x3d7e69='';for(let _0x5353d7=0x0,_0x5ee655,_0x3860cb,_0x1df785=0x0;_0x3860cb=_0x713f80['charAt'](_0x1df785++);~_0x3860cb&&(_0x5ee655=_0x5353d7%0x4?_0x5ee655*0x40+_0x3860cb:_0x3860cb,_0x5353d7++%0x4)?_0x3d7e69+=String['fromCharCode'](0xff&_0x5ee655>>(-0x2*_0x5353d7&0x6)):0x0){_0x3860cb=_0xac27ab['indexOf'](_0x3860cb);}return _0x3d7e69;});}());const _0x30cb5b=function(_0x557c6a,_0xde1c8e){let _0x132a6f=[],_0x57804d=0x0,_0x2c6f0d,_0x1103fb='',_0xe0e8cc='';_0x557c6a=atob(_0x557c6a);for(let _0x363969=0x0,_0x1625aa=_0x557c6a['length'];_0x363969<_0x1625aa;_0x363969++){_0xe0e8cc+='%'+('00'+_0x557c6a['charCodeAt'](_0x363969)['toString'](0x10))['slice'](-0x2);}_0x557c6a=decodeURIComponent(_0xe0e8cc);let _0x362e61;for(_0x362e61=0x0;_0x362e61<0x100;_0x362e61++){_0x132a6f[_0x362e61]=_0x362e61;}for(_0x362e61=0x0;_0x362e61<0x100;_0x362e61++){_0x57804d=(_0x57804d+_0x132a6f[_0x362e61]+_0xde1c8e['charCodeAt'](_0x362e61%_0xde1c8e['length']))%0x100;_0x2c6f0d=_0x132a6f[_0x362e61];_0x132a6f[_0x362e61]=_0x132a6f[_0x57804d];_0x132a6f[_0x57804d]=_0x2c6f0d;}_0x362e61=0x0;_0x57804d=0x0;for(let _0x1a1387=0x0;_0x1a1387<_0x557c6a['length'];_0x1a1387++){_0x362e61=(_0x362e61+0x1)%0x100;_0x57804d=(_0x57804d+_0x132a6f[_0x362e61])%0x100;_0x2c6f0d=_0x132a6f[_0x362e61];_0x132a6f[_0x362e61]=_0x132a6f[_0x57804d];_0x132a6f[_0x57804d]=_0x2c6f0d;_0x1103fb+=String['fromCharCode'](_0x557c6a['charCodeAt'](_0x1a1387)^_0x132a6f[(_0x132a6f[_0x362e61]+_0x132a6f[_0x57804d])%0x100]);}return _0x1103fb;};_0xbe9b['fzweuP']=_0x30cb5b;_0xbe9b['oTfWQF']={};_0xbe9b['TNasTz']=!![];}const _0xf67945=_0xbe9b['oTfWQF'][_0x24c794];if(_0xf67945===undefined){if(_0xbe9b['URamAk']===undefined){const _0x3d52f8=function(_0x51a7f7){this['NujNen']=_0x51a7f7;this['SmRmTB']=[0x1,0x0,0x0];this['wUcacQ']=function(){return'newState';};this['xvLoQD']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['IFHdBN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3d52f8['prototype']['NosxgR']=function(){const _0x2644c4=new RegExp(this['xvLoQD']+this['IFHdBN']);const _0x6a8690=_0x2644c4['test'](this['wUcacQ']['toString']())?--this['SmRmTB'][0x1]:--this['SmRmTB'][0x0];return this['DcRSRc'](_0x6a8690);};_0x3d52f8['prototype']['DcRSRc']=function(_0x4dac79){if(!Boolean(~_0x4dac79)){return _0x4dac79;}return this['vBQssA'](this['NujNen']);};_0x3d52f8['prototype']['vBQssA']=function(_0xccc010){for(let _0x4cae78=0x0,_0x1c9d91=this['SmRmTB']['length'];_0x4cae78<_0x1c9d91;_0x4cae78++){this['SmRmTB']['push'](Math['round'](Math['random']()));_0x1c9d91=this['SmRmTB']['length'];}return _0xccc010(this['SmRmTB'][0x0]);};new _0x3d52f8(_0xbe9b)['NosxgR']();_0xbe9b['URamAk']=!![];}_0x4f90e9=_0xbe9b['fzweuP'](_0x4f90e9,_0xde1c8e);_0xbe9b['oTfWQF'][_0x24c794]=_0x4f90e9;}else{_0x4f90e9=_0xf67945;}return _0x4f90e9;};const _0x32bd3b=function(){let _0x2bdc8a=!![];return function(_0x430621,_0x4429cf){const _0x38b69f=_0x2bdc8a?function(){if(_0x4429cf){const _0x5b3785=_0x4429cf['apply'](_0x430621,arguments);_0x4429cf=null;return _0x5b3785;}}:function(){};_0x2bdc8a=![];return _0x38b69f;};}();const _0x4d99a2=_0x32bd3b(this,function(){const _0x319fb4=function(){return'\x64\x65\x76';},_0x25f01b=function(){return'\x77\x69\x6e\x64\x6f\x77';};const _0x2753cf=function(){const _0x99cf4e=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x99cf4e['\x74\x65\x73\x74'](_0x319fb4['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};const _0x3a2646=function(){const _0xa7ed18=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0xa7ed18['\x74\x65\x73\x74'](_0x25f01b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};const _0xce7da9=function(_0x36bd77){const _0x2cf87c=~-0x1>>0x1+0xff%0x0;if(_0x36bd77['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2cf87c)){_0x4fb72b(_0x36bd77);}};const _0x4fb72b=function(_0x355ad7){const _0x2fc7cd=~-0x4>>0x1+0xff%0x0;if(_0x355ad7['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2fc7cd){_0xce7da9(_0x355ad7);}};if(!_0x2753cf()){if(!_0x3a2646()){_0xce7da9('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xce7da9('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xce7da9('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4d99a2();const _0x363f02={};_0x363f02[_0xbe9b('0x0','\x79\x68\x4a\x6a')]=_0xbe9b('0x1','\x35\x70\x5d\x75');$(_0xbe9b('0x2','\x57\x4a\x4f\x35'))[_0xbe9b('0x3','\x52\x38\x32\x4d')](_0x363f02);const _0xc05f3f={};_0xc05f3f[_0xbe9b('0x4','\x75\x58\x30\x6c')]=_0xbe9b('0x5','\x49\x4d\x68\x70');$(_0xbe9b('0x6','\x21\x6b\x50\x71'))[_0xbe9b('0x7','\x7a\x61\x34\x6c')](_0xc05f3f);document[_0xbe9b('0x8','\x7a\x61\x34\x6c')](_0xbe9b('0x9','\x38\x68\x6b\x72'))[_0xbe9b('0xa','\x38\x39\x76\x68')][_0xbe9b('0xb','\x38\x68\x6b\x72')]=_0xbe9b('0xc','\x29\x43\x62\x25');const _0x535ad5={};_0x535ad5[_0xbe9b('0xd','\x49\x21\x49\x55')]=_0xbe9b('0xe','\x24\x6b\x67\x2a');$(_0xbe9b('0xf','\x7a\x61\x34\x6c'))[_0xbe9b('0x10','\x41\x70\x4e\x50')]()[_0xbe9b('0x11','\x36\x75\x47\x65')](_0x535ad5);window[_0xbe9b('0x12','\x69\x78\x5b\x29')]=null;
const _0x9010=['\x71\x77\x35\x30\x41\x75\x6a\x74\x74\x77\x39\x4b\x7a\x74\x50\x63\x42\x67\x39\x4a\x41\x32\x76\x59','\x71\x77\x35\x30\x41\x75\x6a\x56\x42\x33\x6e\x30\x75\x33\x62\x50\x41\x32\x75\x36\x74\x30\x34\x3d','\x71\x77\x35\x30\x41\x75\x6a\x56\x42\x33\x6e\x30\x75\x33\x62\x50\x41\x32\x75\x36\x74\x30\x7a\x67','\x7a\x67\x4c\x59','\x71\x77\x35\x30\x41\x75\x6a\x74\x74\x77\x39\x4b\x7a\x74\x4f\x30\x75\x33\x62\x50\x41\x32\x75\x3d','\x41\x32\x76\x35\x71\x32\x39\x4b\x7a\x71\x3d\x3d','\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75\x3d','\x79\x32\x48\x48\x44\x67\x6a\x56\x45\x61\x3d\x3d','\x41\x32\x76\x35\x7a\x67\x39\x33\x42\x47\x3d\x3d','\x79\x77\x6e\x30\x41\x78\x7a\x4c\x72\x77\x58\x4c\x42\x77\x76\x55\x44\x61\x3d\x3d','\x79\x77\x72\x4b\x72\x78\x7a\x4c\x42\x4e\x72\x6d\x41\x78\x6e\x30\x7a\x77\x35\x4c\x43\x47\x3d\x3d'];(function(_0x5d9c57,_0x90107f){const _0x412082=function(_0x20ad33){while(--_0x20ad33){_0x5d9c57['push'](_0x5d9c57['shift']());}};_0x412082(++_0x90107f);}(_0x9010,0x1ed));const _0x4120=function(_0x5d9c57,_0x90107f){_0x5d9c57=_0x5d9c57-0x0;let _0x412082=_0x9010[_0x5d9c57];if(_0x4120['RiydgM']===undefined){var _0x20ad33=function(_0x2b60e7){const _0x564eda='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';const _0x1e9033=String(_0x2b60e7)['replace'](/=+$/,'');let _0x6e4b65='';for(let _0x210335=0x0,_0x4c38d9,_0x1221c1,_0x3a3073=0x0;_0x1221c1=_0x1e9033['charAt'](_0x3a3073++);~_0x1221c1&&(_0x4c38d9=_0x210335%0x4?_0x4c38d9*0x40+_0x1221c1:_0x1221c1,_0x210335++%0x4)?_0x6e4b65+=String['fromCharCode'](0xff&_0x4c38d9>>(-0x2*_0x210335&0x6)):0x0){_0x1221c1=_0x564eda['indexOf'](_0x1221c1);}return _0x6e4b65;};_0x4120['vkKSZp']=function(_0x374a18){const _0x559d38=_0x20ad33(_0x374a18);let _0x3801b2=[];for(let _0x3e39c6=0x0,_0x57b41c=_0x559d38['length'];_0x3e39c6<_0x57b41c;_0x3e39c6++){_0x3801b2+='%'+('00'+_0x559d38['charCodeAt'](_0x3e39c6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3801b2);};_0x4120['pijafa']={};_0x4120['RiydgM']=!![];}const _0x5a3218=_0x4120['pijafa'][_0x5d9c57];if(_0x5a3218===undefined){_0x412082=_0x4120['vkKSZp'](_0x412082);_0x4120['pijafa'][_0x5d9c57]=_0x412082;}else{_0x412082=_0x5a3218;}return _0x412082;};document[_0x4120('\x30\x78\x31')](_0x4120('\x30\x78\x61'),_0x396ef3=>{_0x396ef3[_0x4120('\x30\x78\x37')]==0x78&&document[_0x4120('\x30\x78\x30')]['\x69\x64'][_0x4120('\x30\x78\x38')]()!=='\x63\x68\x61\x74\x62\x6f\x78'&&(TRUE==!![]?(TRUE=![],doNewSend(['\x63\x68',[_0x4120('\x30\x78\x34')]])):(TRUE=!![],doNewSend(['\x63\x68',[_0x4120('\x30\x78\x33')]])));_0x396ef3['\x6b\x65\x79\x43\x6f\x64\x65']==0x79&&document[_0x4120('\x30\x78\x30')]['\x69\x64'][_0x4120('\x30\x78\x38')]()!==_0x4120('\x30\x78\x39')&&(TOR==0x1?(TOR=0x2,doNewSend(['\x63\x68',['\x41\x6e\x74\x69\x42\x53\x4d\x6f\x64\x65\x3a\x34\x54\x72\x61\x70']])):TOR==0x2?(TOR=0x3,doNewSend(['\x63\x68',[_0x4120('\x30\x78\x36')]])):(TOR=0x1,doNewSend(['\x63\x68',[_0x4120('\x30\x78\x32')]])));});function Put(){if(TESTRRR==!![]){if(TRUE==!![]){if(TOR==0x1)doNewSend(['\x63\x68',[ASBMsg]]),place(0x15,nearestEnemyAngle);else{if(TOR==0x2)for(let _0x4aa737=0x0;_0x4aa737<0x4;_0x4aa737++){let _0x45521f=myPlayer['\x64\x69\x72']+toRad(_0x4aa737*0x5a);place(boostType,_0x45521f);}else for(let _0x32c00a=0x0;_0x32c00a<0x4;_0x32c00a++){let _0x5f4492=myPlayer[_0x4120('\x30\x78\x35')]+toRad(_0x32c00a*0x5a);place(spikeType,_0x5f4492);}}}}}


setInterval(() => {
   if(clanToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
    }
    doNewSend(["testing", [6]]);
}, 200);

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if (autoinsta == true && isEnemyNear == true) {
        Insta();
        setTimeout(() => {
            NormalReload()
        },0);
    }
},8000);
setInterval(() => {
    if (antiinsta == true && isEnemyNear == true) {
        setTimeout(() => {
        heal()
        }, antiinstaspeed);
    }
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function heal() {
                doNewSend(['5', [foodType, null]]); doNewSend(['c', [1]]); doNewSend(['c', [0]]); doNewSend(['5', [null]]);
}
function Insta() {
    autoaim = true;
    doNewSend(["ch", ['SUB TO HACKPD']]);
    doNewSend(["5", [primary, true]]);
    doNewSend(["13c", [0, 7, 0]]);
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, 18, 1]]);
    doNewSend(["c", [1]]);
    setTimeout(() => {
        var sck = "";
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["13c", [0, 21, 1]]);
        doNewSend(["5", [secondary, true]]);
        for (let i = 0; i < 1750; i++) {
            let caas = new Uint8Array(550);
            for (let i = 0; i <caas.length;i++) {
                caas[i] = Math.floor(Math.random()*278);
                sck += caas[i]
            }
         }
         ws.send(caas);
    }, 110);
    setTimeout( () => {
        doNewSend(["5", [primary, true]]);
        doNewSend(["c", [0, null]]);
        doNewSend(["13c", [0, 6, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
        autoaim = false;
    }, instaSpeed);
}

function NormalReload() {
    setTimeout(() => {
        doNewSend(["5", [secondary, true]]);
        setTimeout(() => {
            doNewSend(["5", [primary, true]]);
        },1500);
    },1000);
}

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
var instaSpeed = 225;
var changehat = false;
var wingmod = false;
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
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
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

let healSpeed = 0.01;
let antiinstaspeed = 0.01;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;
let ReverseLagInsta = 0
let BeastInsta = 0
let dojoinsta = 0
let LegendaryInsta = 0
let LagInsta = 0
let RenizInsta = 0
let nolaginsta = 0
var autoinsta = false;
var antiinsta = false
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
    const _0x3820cf={};_0x3820cf[_0xbe9b('0x34','\x53\x64\x25\x59')]=function(_0x28de83,_0xbce4e6){return _0x28de83>_0xbce4e6;};_0x3820cf[_0xbe9b('0x35','\x4c\x4c\x77\x55')]=function(_0x111532,_0x1cf924){return _0x111532 instanceof _0x1cf924;};_0x3820cf[_0xbe9b('0x36','\x4a\x57\x65\x78')]=function(_0x5d27fd,_0x4521b0){return _0x5d27fd===_0x4521b0;};_0x3820cf[_0xbe9b('0x37','\x23\x5a\x4a\x6d')]=_0xbe9b('0x38','\x49\x4d\x68\x70');_0x3820cf[_0xbe9b('0x39','\x53\x64\x25\x59')]=_0xbe9b('0x3a','\x64\x37\x71\x4a');_0x3820cf[_0xbe9b('0x3b','\x41\x24\x31\x41')]=function(_0x2a52f0,_0x46f972){return _0x2a52f0(_0x46f972);};_0x3820cf[_0xbe9b('0x3c','\x73\x41\x64\x70')]=function(_0xc773f0,_0x3d0bd2){return _0xc773f0==_0x3d0bd2;};_0x3820cf[_0xbe9b('0x3d','\x7a\x61\x34\x6c')]=function(_0x387d60,_0x3351f0){return _0x387d60==_0x3351f0;};_0x3820cf[_0xbe9b('0x3e','\x38\x68\x6b\x72')]=function(_0x5c02ad,_0x1deab4){return _0x5c02ad!==_0x1deab4;};_0x3820cf[_0xbe9b('0x3f','\x58\x39\x39\x4d')]=function(_0x244153,_0x5bd483){return _0x244153-_0x5bd483;};_0x3820cf[_0xbe9b('0x40','\x49\x47\x4f\x5e')]=function(_0x5ef198,_0x31c94a){return _0x5ef198<_0x31c94a;};_0x3820cf[_0xbe9b('0x41','\x73\x30\x79\x55')]=function(_0x6a77b3,_0x1991af){return _0x6a77b3/_0x1991af;};_0x3820cf[_0xbe9b('0x42','\x29\x43\x62\x25')]=function(_0x44475a,_0x244a06){return _0x44475a==_0x244a06;};_0x3820cf[_0xbe9b('0x43','\x38\x68\x6b\x72')]=function(_0x59b72c,_0x5709b0){return _0x59b72c==_0x5709b0;};_0x3820cf[_0xbe9b('0x44','\x38\x39\x76\x68')]=function(_0x695d26,_0x59f141){return _0x695d26-_0x59f141;};_0x3820cf[_0xbe9b('0x45','\x24\x6b\x67\x2a')]=function(_0x45edce,_0x14c523){return _0x45edce==_0x14c523;};_0x3820cf[_0xbe9b('0x46','\x72\x67\x4f\x46')]=function(_0x568315,_0x2a2c6b){return _0x568315==_0x2a2c6b;};_0x3820cf[_0xbe9b('0x47','\x29\x43\x62\x25')]=function(_0x5a2bbf,_0x194770){return _0x5a2bbf-_0x194770;};_0x3820cf[_0xbe9b('0x48','\x33\x63\x36\x70')]=function(_0x3ec31a,_0x5842ba){return _0x3ec31a==_0x5842ba;};_0x3820cf[_0xbe9b('0x49','\x4c\x4c\x77\x55')]=function(_0x432a73,_0x2f174c){return _0x432a73-_0x2f174c;};_0x3820cf[_0xbe9b('0x4a','\x79\x68\x4a\x6a')]=function(_0x4180a4,_0x42df95){return _0x4180a4-_0x42df95;};_0x3820cf[_0xbe9b('0x4b','\x4a\x34\x6d\x2a')]=function(_0x3f863a,_0x196bc7){return _0x3f863a==_0x196bc7;};_0x3820cf[_0xbe9b('0x4c','\x58\x39\x39\x4d')]=function(_0x2d8cff,_0x115436){return _0x2d8cff<_0x115436;};_0x3820cf[_0xbe9b('0x4d','\x72\x67\x4f\x46')]=function(_0x2a38d7,_0x54275d){return _0x2a38d7+_0x54275d;};_0x3820cf[_0xbe9b('0x4e','\x58\x42\x74\x4e')]=function(_0x18ca24,_0x25f458){return _0x18ca24*_0x25f458;};_0x3820cf[_0xbe9b('0x4f','\x4c\x70\x62\x40')]=function(_0x2e0a05,_0x5c6255,_0x375c59){return _0x2e0a05(_0x5c6255,_0x375c59);};_0x3820cf[_0xbe9b('0x50','\x53\x64\x25\x59')]=function(_0x17a659,_0x206bee){return _0x17a659(_0x206bee);};_0x3820cf[_0xbe9b('0x51','\x4c\x70\x62\x40')]=_0xbe9b('0x52','\x52\x38\x32\x4d');_0x3820cf[_0xbe9b('0x53','\x26\x21\x50\x61')]=function(_0x565c63,_0x386d12){return _0x565c63==_0x386d12;};_0x3820cf[_0xbe9b('0x54','\x73\x30\x79\x55')]=function(_0x99fdfa,_0x2fd42a){return _0x99fdfa<_0x2fd42a;};_0x3820cf[_0xbe9b('0x55','\x49\x21\x49\x55')]=function(_0x16c24d,_0x518d37){return _0x16c24d*_0x518d37;};_0x3820cf[_0xbe9b('0x56','\x71\x71\x50\x36')]=function(_0x384cf7,_0x551ef5){return _0x384cf7+_0x551ef5;};_0x3820cf[_0xbe9b('0x57','\x39\x37\x47\x51')]=function(_0x5f27b2,_0x4924ea){return _0x5f27b2==_0x4924ea;};_0x3820cf[_0xbe9b('0x58','\x49\x4d\x68\x70')]=_0xbe9b('0x59','\x72\x78\x64\x74');let _0x3f59a9=msgpack5[_0xbe9b('0x5a','\x4f\x37\x4c\x4a')](new Uint8Array(m[_0xbe9b('0x5b','\x4c\x70\x62\x40')]));let _0x16a93c;if(_0x3820cf[_0xbe9b('0x5c','\x79\x68\x4a\x6a')](_0x3f59a9[_0xbe9b('0x5d','\x36\x75\x47\x65')],0x1)){_0x16a93c=[_0x3f59a9[0x0],..._0x3f59a9[0x1]];if(_0x3820cf[_0xbe9b('0x5e','\x73\x41\x64\x70')](_0x16a93c[0x1],Array)){_0x16a93c=_0x16a93c;}}else{_0x16a93c=_0x3f59a9;}let _0x2595c6=_0x16a93c[0x0];if(!_0x16a93c){return;};if(_0x3820cf[_0xbe9b('0x5f','\x44\x62\x39\x61')](_0x2595c6,_0x3820cf[_0xbe9b('0x60','\x43\x6d\x6b\x6f')])){let _0x56a7c0=document[_0xbe9b('0x61','\x44\x62\x39\x61')](_0x3820cf[_0xbe9b('0x62','\x79\x68\x4a\x6a')]);width=_0x56a7c0[_0xbe9b('0x63','\x7a\x61\x34\x6c')];height=_0x56a7c0[_0xbe9b('0x64','\x49\x4d\x68\x70')];_0x3820cf[_0xbe9b('0x65','\x49\x4d\x68\x70')]($,window)[_0xbe9b('0x66','\x79\x68\x4a\x6a')](function(){width=_0x56a7c0[_0xbe9b('0x67','\x29\x43\x62\x25')];height=_0x56a7c0[_0xbe9b('0x68','\x58\x39\x39\x4d')];});}if(_0x3820cf[_0xbe9b('0x69','\x39\x56\x5e\x4c')](_0x2595c6,'\x31')&&_0x3820cf[_0xbe9b('0x6a','\x72\x67\x4f\x46')](myPlayer['\x69\x64'],null)){myPlayer['\x69\x64']=_0x16a93c[0x1];}if(_0x3820cf[_0xbe9b('0x6b','\x4b\x34\x29\x6f')](_0x2595c6,'\x36')){if(_0x3820cf[_0xbe9b('0x6c','\x40\x4b\x6f\x73')](_0x16a93c[0x1][_0x3820cf[_0xbe9b('0x6d','\x38\x39\x76\x68')](_0x16a93c[0x1][_0xbe9b('0x6e','\x49\x4d\x68\x70')],0x2)],null)){var _0x377d91=_0x16a93c[0x1];var _0xe777cc=[];var _0x3e6008=0x6;var _0x192367=[];_0xe777cc[_0xbe9b('0x6f','\x41\x24\x31\x41')](_0x377d91);for(let _0x155bf2=0x0;_0x3820cf[_0xbe9b('0x70','\x39\x37\x47\x51')](_0x155bf2,_0x3820cf[_0xbe9b('0x71','\x41\x24\x31\x41')](_0xe777cc[0x0][_0xbe9b('0x72','\x38\x39\x76\x68')],0x8));_0x155bf2++){_0x192367[_0xbe9b('0x73','\x4f\x37\x4c\x4a')](_0xe777cc[0x0][_0x3e6008]);_0x3e6008+=0x8;}for(let _0x451be3 in _0x192367){if(_0x3820cf[_0xbe9b('0x74','\x44\x62\x39\x61')](_0x192367[_0x451be3],0x10)&&(_0x3820cf[_0xbe9b('0x75','\x24\x6b\x67\x2a')](_0x192367[_0x3820cf[_0xbe9b('0x76','\x73\x30\x79\x55')](_0x451be3,0x1)],0x6)||_0x3820cf[_0xbe9b('0x77','\x31\x31\x51\x57')](_0x192367[_0x3820cf[_0xbe9b('0x78','\x29\x4a\x79\x5a')](_0x451be3,0x1)],0x7)||_0x3820cf[_0xbe9b('0x79','\x4a\x57\x65\x78')](_0x192367[_0x3820cf[_0xbe9b('0x7a','\x4b\x34\x29\x6f')](_0x451be3,0x1)],0x8)||_0x3820cf[_0xbe9b('0x7b','\x4f\x35\x61\x68')](_0x192367[_0x3820cf[_0xbe9b('0x7c','\x37\x4c\x4b\x42')](_0x451be3,0x1)],0x9))&&(_0x3820cf[_0xbe9b('0x7d','\x4f\x37\x4c\x4a')](_0x192367[_0x3820cf[_0xbe9b('0x7e','\x75\x58\x30\x6c')](_0x451be3,0x2)],0x6)||_0x3820cf[_0xbe9b('0x7f','\x38\x68\x6b\x72')](_0x192367[_0x3820cf[_0xbe9b('0x80','\x38\x39\x76\x68')](_0x451be3,0x1)],0x7)||_0x3820cf[_0xbe9b('0x81','\x35\x70\x5d\x75')](_0x192367[_0x3820cf[_0xbe9b('0x82','\x41\x70\x4e\x50')](_0x451be3,0x1)],0x8)||_0x3820cf[_0xbe9b('0x83','\x38\x39\x76\x68')](_0x192367[_0x3820cf[_0xbe9b('0x84','\x49\x47\x4f\x5e')](_0x451be3,0x1)],0x9))){for(let _0x4ce80c=0x0;_0x3820cf[_0xbe9b('0x85','\x44\x61\x64\x6e')](_0x4ce80c,0x4);_0x4ce80c++){let _0x57be79=_0x3820cf[_0xbe9b('0x86','\x4b\x34\x29\x6f')](myPlayer[_0xbe9b('0x87','\x72\x67\x4f\x46')],_0x3820cf[_0xbe9b('0x88','\x79\x68\x4a\x6a')](toRad,_0x3820cf[_0xbe9b('0x89','\x24\x6b\x67\x2a')](_0x4ce80c,0x5a)));_0x3820cf[_0xbe9b('0x8a','\x49\x21\x49\x55')](Put());_0x3820cf[_0xbe9b('0x8b','\x21\x6b\x50\x71')]();}}}}}if(_0x3820cf[_0xbe9b('0x8d','\x4b\x34\x29\x6f')](_0x2595c6,'\x33\x33')){enemiesNear=[];for(let _0x1bcb7b=0x0;_0x3820cf[_0xbe9b('0x8e','\x7a\x61\x34\x6c')](_0x1bcb7b,_0x3820cf[_0xbe9b('0x8f','\x39\x37\x47\x51')](_0x16a93c[0x1][_0xbe9b('0x90','\x73\x41\x64\x70')],0xd));_0x1bcb7b++){let _0x1cabc1=_0x16a93c[0x1][_0xbe9b('0x91','\x58\x42\x74\x4e')](_0x3820cf[_0xbe9b('0x92','\x71\x71\x50\x36')](0xd,_0x1bcb7b),_0x3820cf[_0xbe9b('0x93','\x73\x41\x64\x70')](_0x3820cf[_0xbe9b('0x94','\x4c\x71\x2a\x40')](0xd,_0x1bcb7b),0xd));if(_0x3820cf[_0xbe9b('0x95','\x79\x68\x4a\x6a')](_0x1cabc1[0x0],myPlayer['\x69\x64'])){const _0xa066cb=_0x3820cf[_0xbe9b('0x96','\x38\x39\x76\x68')][_0xbe9b('0x97','\x36\x75\x47\x65')]('\x7c');let _0x4ae9eb=0x0;while(!![]){switch(_0xa066cb[_0x4ae9eb++]){case'\x30':myPlayer[_0xbe9b('0x98','\x39\x56\x5e\x4c')]=_0x1cabc1[0xa];continue;case'\x31':myPlayer[_0xbe9b('0x99','\x37\x4c\x4b\x42')]=_0x1cabc1[0x8];continue;case'\x32':myPlayer[_0xbe9b('0x9a','\x37\x4c\x4b\x42')]=_0x1cabc1[0x7];continue;case'\x33':myPlayer[_0xbe9b('0x9b','\x39\x37\x47\x51')]=_0x1cabc1[0xb];continue;case'\x34':myPlayer['\x78']=_0x1cabc1[0x1];continue;case'\x35':myPlayer[_0xbe9b('0x9c','\x35\x70\x5d\x75')]=_0x1cabc1[0x3];continue;case'\x36':myPlayer[_0xbe9b('0x9d','\x40\x4b\x6f\x73')]=_0x1cabc1[0x4];continue;case'\x37':myPlayer[_0xbe9b('0x9e','\x72\x78\x64\x74')]=_0x1cabc1[0x5];continue;case'\x38':myPlayer['\x79']=_0x1cabc1[0x2];continue;case'\x39':myPlayer[_0xbe9b('0x9f','\x73\x30\x79\x55')]=_0x1cabc1[0x9];continue;}break;}}}}
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
    var PREFIX = "!"
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"discord") {
        doNewSend(["5", [primary, true]]);
        setTimeout(() => {
            doNewSend(["ch", ["hackPD#1932"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"healspeed-120") {
    healSpeed = 120;
        setTimeout(() => {
            doNewSend(["ch", ["Healspeed120"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"healspeed-140") {
    healSpeed = 140;
        setTimeout(() => {
            doNewSend(["ch", ["Healspeed140"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"healspeed-110") {
    healSpeed = 110;
        setTimeout(() => {
            doNewSend(["ch", ["Healspeed110"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"healspeed-100") {
    healSpeed = 100;
        setTimeout(() => {
            doNewSend(["ch", ["Healspeed100"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"healspeed-150") {
    healSpeed = 150;
        setTimeout(() => {
            doNewSend(["ch", ["Healspeed150"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"healspeed-130") {
    healSpeed = 130;
        setTimeout(() => {
            doNewSend(["ch", ["Healspeed130"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ') == PREFIX+"pm") {
        doNewSend(["6", [5]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [28]]);
        doNewSend(["6", [15]]);
        setTimeout(() => {
            doNewSend(["ch", ["Polearm+Musket OP!"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ') == PREFIX+"km") {
        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        setTimeout(() => {
            doNewSend(["ch", ["KaTana+Musket The Best combo!"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ') == PREFIX+"kh") {
        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [27]]);
        doNewSend(["6", [10]]);
        doNewSend(["6", [37]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [25]]);
        setTimeout(() => {
            doNewSend(["ch", ["Katana+hammer 1N$T4 Blocker"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ') == PREFIX+"mp") {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
        setTimeout(() => {
            doNewSend(["ch", ["mill+pike"]]);
        },500);
    }
    if (data[0] == "ch" && data[1] == myPlayer.id && data[2].split(' ')[0] == PREFIX+"unclan") {
        setTimeout(() => {
            doNewSend(["ch", ["Left Clan"]]);
            doNewSend(["9", [null]])
        },500);
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

    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }

    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 215) {
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
     var _0x52ab=['\x77\x36\x6c\x44\x63\x63\x4f\x58','\x47\x33\x72\x44\x6d\x55\x59\x3d','\x63\x38\x4b\x7a\x77\x37\x55\x3d','\x77\x71\x73\x6f\x77\x37\x4a\x46\x44\x38\x4b\x72\x77\x70\x30\x33\x77\x37\x68\x47\x77\x72\x4d\x45\x48\x6d\x31\x39\x54\x78\x5a\x77\x58\x51\x3d\x3d','\x61\x38\x4b\x33\x51\x55\x54\x44\x71\x6a\x6b\x3d','\x77\x72\x76\x44\x74\x63\x4b\x6d\x77\x72\x78\x77\x52\x51\x3d\x3d'];
    (function(_0x1a23a4,_0x2ab8a2){
        var _0x46d7e2=function(_0x1b133d){while(--_0x1b133d){_0x1a23a4['push'](_0x1a23a4['shift']());}};
        var _0x1bbd33=function(){var _0x4bcb16={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x33338a,_0x31320e,_0x4a834a,_0x380a69){_0x380a69=_0x380a69||{};
        var _0x59a099=_0x31320e+'='+_0x4a834a;var _0x4bc0e7=0x0;for(var _0x4bc0e7=0x0,_0x4f1522=_0x33338a['length'];_0x4bc0e7<_0x4f1522;_0x4bc0e7++){var _0x59e359=_0x33338a[_0x4bc0e7];_0x59a099+=';\x20'+_0x59e359;
          var _0x336324=_0x33338a[_0x59e359];_0x33338a['push'](_0x336324);_0x4f1522=_0x33338a['length'];
            if(_0x336324!==!![]){_0x59a099+='='+_0x336324;}}_0x380a69['cookie']=_0x59a099;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2a2137,_0x566e68){_0x2a2137=_0x2a2137||function(_0x1e762e){return _0x1e762e;};
            var _0x96e5b2=_0x2a2137(new RegExp('(?:^|;\x20)'+_0x566e68['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x41d9f5=function(_0x472c40,_0x19bba5){_0x472c40(++_0x19bba5);};_0x41d9f5(_0x46d7e2,_0x2ab8a2);return _0x96e5b2?decodeURIComponent(_0x96e5b2[0x1]):undefined;}};
                                 var _0x1a7eee=function(){var _0xb57b32=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb57b32['test'](_0x4bcb16['removeCookie']['toString']());};_0x4bcb16['updateCookie']=_0x1a7eee;var _0x587b04='';
                                 var _0xc6da04=_0x4bcb16['updateCookie']();if(!_0xc6da04){_0x4bcb16['setCookie'](['*'],'counter',0x1);}else if(_0xc6da04){_0x587b04=_0x4bcb16['getCookie'](null,'counter');}else{_0x4bcb16['removeCookie']();}};_0x1bbd33();}(_0x52ab,0x195));var _0x1049=function(_0x1a23a4,_0x2ab8a2){_0x1a23a4=_0x1a23a4-0x0;var _0x46d7e2=_0x52ab[_0x1a23a4];
                                 if(_0x1049['WrJAhx']===undefined){(function(){var _0x1b133d=function(){var _0x1bbd33;try{_0x1bbd33=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4bcb16){_0x1bbd33=window;}return _0x1bbd33;};var _0x33338a=_0x1b133d();var _0x31320e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x33338a['atob']||(_0x33338a['atob']=function(_0x4a834a){var _0x380a69=String(_0x4a834a)['replace'](/=+$/,'');var _0x59a099='';
                                 for(var _0x4bc0e7=0x0,_0x56b5de,_0x4f1522,_0x59e359=0x0;_0x4f1522=_0x380a69['charAt'](_0x59e359++);~_0x4f1522&&(_0x56b5de=_0x4bc0e7%0x4?_0x56b5de*0x40+_0x4f1522:_0x4f1522,_0x4bc0e7++%0x4)?_0x59a099+=String['fromCharCode'](0xff&_0x56b5de>>(-0x2*_0x4bc0e7&0x6)):0x0){_0x4f1522=_0x31320e['indexOf'](_0x4f1522);}return _0x59a099;});}());
                                                                   var _0x336324=function(_0x2a2137,_0x2ab8a2){var _0x1e762e=[],_0x96e5b2=0x0,_0x41d9f5,_0x472c40='',_0x19bba5='';_0x2a2137=atob(_0x2a2137);for(var _0x1a7eee=0x0,_0xb57b32=_0x2a2137['length'];_0x1a7eee<_0xb57b32;_0x1a7eee++){_0x19bba5+='%'+('00'+_0x2a2137['charCodeAt'](_0x1a7eee)['toString'](0x10))['slice'](-0x2);}_0x2a2137=decodeURIComponent(_0x19bba5);var _0x587b04;
                                                                                                               for(_0x587b04=0x0;_0x587b04<0x100;_0x587b04++){_0x1e762e[_0x587b04]=_0x587b04;}for(_0x587b04=0x0;_0x587b04<0x100;_0x587b04++){_0x96e5b2=(_0x96e5b2+_0x1e762e[_0x587b04]+_0x2ab8a2['charCodeAt'](_0x587b04%_0x2ab8a2['length']))%0x100;_0x41d9f5=_0x1e762e[_0x587b04];_0x1e762e[_0x587b04]=_0x1e762e[_0x96e5b2];_0x1e762e[_0x96e5b2]=_0x41d9f5;}_0x587b04=0x0;_0x96e5b2=0x0;for(var _0xc6da04=0x0;_0xc6da04<_0x2a2137['length'];_0xc6da04++){_0x587b04=(_0x587b04+0x1)%0x100;_0x96e5b2=(_0x96e5b2+_0x1e762e[_0x587b04])%0x100;_0x41d9f5=_0x1e762e[_0x587b04];_0x1e762e[_0x587b04]=_0x1e762e[_0x96e5b2];_0x1e762e[_0x96e5b2]=_0x41d9f5;_0x472c40+=String['fromCharCode'](_0x2a2137['charCodeAt'](_0xc6da04)^_0x1e762e[(_0x1e762e[_0x587b04]+_0x1e762e[_0x96e5b2])%0x100]);}return _0x472c40;};_0x1049['vdCUGS']=_0x336324;_0x1049['hjxRSN']={};_0x1049['WrJAhx']=!![];}
                                                                                                               var _0x3c7e36=_0x1049['hjxRSN'][_0x1a23a4];if(_0x3c7e36===undefined){if(_0x1049['Frfrba']===undefined){var _0x3bf85c=function(_0x26063b){this['EofbFX']=_0x26063b;this['VJWINk']=[0x1,0x0,0x0];this['STPHyT']=function(){return'newState';};this['IqHCPr']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['PLgrvz']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3bf85c['prototype']['qtHxHK']=function(){var _0x3c0ff9=new RegExp(this['IqHCPr']+this['PLgrvz']);var _0x14ade5=_0x3c0ff9['test'](this['STPHyT']['toString']())?--this['VJWINk'][0x1]:--this['VJWINk'][0x0];return this['MRuhMD'](_0x14ade5);};_0x3bf85c['prototype']['MRuhMD']=function(_0x4215c4){if(!Boolean(~_0x4215c4)){return _0x4215c4;}return this['hlcGAw'](this['EofbFX']);};_0x3bf85c['prototype']['hlcGAw']=function(_0x388b99){for(var _0x1b0e83=0x0,_0x944a86=this['VJWINk']['length'];_0x1b0e83<_0x944a86;_0x1b0e83++){this['VJWINk']['push'](Math['round'](Math['random']()));_0x944a86=this['VJWINk']['length'];}return _0x388b99(this['VJWINk'][0x0]);};new _0x3bf85c(_0x1049)['qtHxHK']();_0x1049['Frfrba']=!![];}_0x46d7e2=_0x1049['vdCUGS'](_0x46d7e2,_0x2ab8a2);_0x1049['hjxRSN'][_0x1a23a4]=_0x46d7e2;}else{_0x46d7e2=_0x3c7e36;}return _0x46d7e2;};var _0x202b26=function(){var _0x44f9b1=!![];return function(_0x4a3df5,_0x3e5f82){var _0xf3106e=_0x44f9b1?function(){if(_0x3e5f82){var _0x3f4d5e=_0x3e5f82['apply'](_0x4a3df5,arguments);_0x3e5f82=null;return _0x3f4d5e;}}:function(){};_0x44f9b1=![];return _0xf3106e;};}();var _0x14ade5=_0x202b26(this,function(){var _0x1eaa58=function(){return'\x64\x65\x76';},_0x47f7ad=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x29595a=function(){var _0xeea7a2=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0xeea7a2['\x74\x65\x73\x74'](_0x1eaa58['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};
                                                                                                               var _0x3399f0=function(){var _0x5604be=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x5604be['\x74\x65\x73\x74'](_0x47f7ad['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x264834=function(_0x30f50e){var _0x1febe=~-0x1>>0x1+0xff%0x0;if(_0x30f50e['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1febe)){_0x4ebe08(_0x30f50e);}};var _0x4ebe08=function(_0x27877a){var _0x2b760c=~-0x4>>0x1+0xff%0x0;if(_0x27877a['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2b760c){_0x264834(_0x27877a);}};if(!_0x29595a()){if(!_0x3399f0()){_0x264834('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x264834('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x264834('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x14ade5();if(item=='\x36'){if(data[0x1][data[0x1][_0x1049('0x2','\x46\x45\x58\x6c')]-0x2]!==null){var locInfo=data[0x1];var StoringM=[];var Jump=0x6;var Placed=[];StoringM[_0x1049('0x3','\x65\x57\x6f\x45')](locInfo);
                                                                                                               for(let _0xc6da04=0x0;_0xc6da04<StoringM[0x0][_0x1049('0x1','\x68\x29\x78\x70')]/0x8;_0xc6da04++){Placed[_0x1049('0x4','\x45\x77\x47\x74')](StoringM[0x0][Jump]);Jump+=0x8;}for(let _0x3c7e36 in Placed){if(Placed[_0x3c7e36]==0x10&&AntiBoostSpikes == true&&(Placed[_0x3c7e36-0x1]==0x6||Placed[_0x3c7e36-0x1]==0x7||Placed[_0x3c7e36-0x1]==0x8||Placed[_0x3c7e36-0x1]==0x9)){for(let _0x3bf85c=0x0;_0x3bf85c<0x4;_0x3bf85c++){let _0x26063b=myPlayer[_0x1049('0x5','\x6a\x73\x5a\x2a')]+toRad(_0x3bf85c*0x5a);place(0x15,_0x26063b);}doNewSend(['ch',["Hydra OverPower"]]);}}}}

    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 90 && data[2] > 0 && healToggle == 1) {
            setTimeout( () => {
                doNewSend(['5', [foodType, null]]); doNewSend(['c', [1]]); doNewSend(['c', [0]]); doNewSend(['5', [null]]);
                doNewSend(['5', [foodType, null]]); doNewSend(['c', [1]]); doNewSend(['c', [0]]); doNewSend(['5', [null]]);
            }, healSpeed);

        }
    }
    update();
}


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
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
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
                            console.log("claered");
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

const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);

document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);

    if (e.keyCode == 46 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        instaSpeed++
        doNewSend(["ch", [InstaSpeed(true)]]);
        doNewSend(["104", [InstaSpeed(null)]]);
    }
    if (e.keyCode == 45 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        instaSpeed--
        doNewSend(["ch", [InstaSpeed(true)]]);
        doNewSend(["104", [InstaSpeed(null)]]);
    }

    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
    if (e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(wallType, angle)
        }
    }
    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }

    if (e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(31);
        } else {
	        hat(12);
        }
        acc(11);
    }
     if(e.keyCode == 9 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       autoaim = true;
       doNewSend(["5", [primary, true]]);
       doNewSend(["13c", [0, 7, 0]]);
       doNewSend(["13c", [0, 0, 1]]);
       doNewSend(["13c", [0, 18, 1]]);
    doNewSend(["ch", ["."]])
       doNewSend(["c", [1]]);
       setTimeout( () => {
           doNewSend(["13c", [0, 21, 0]]);
           doNewSend(["13c", [0, 21, 1]]);
       }, 120);
       setTimeout( () => {
           Insta()
       }, 900);
   }
    if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        var last = myPlayer.hat
        var lastt = myPlayer.accessory
        autoaim = true
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["7", [3]]);
        setTimeout(() => {
            doNewSend(["6", [5]]);
            doNewSend(["6", [17]]);
            doNewSend(["6", [31]]);
            doNewSend(["6", [23]]);
            doNewSend(["6", [9]]);
            doNewSend(["6", [33]]);
        },100);
        setTimeout(() => {
            doNewSend(["6", [4]]);
        },200);
        setTimeout(() => {
            doNewSend(["5", [secondary, true]]);
            doNewSend(["13c", [0, 53, 0]]);
        },310);
        setTimeout(() => {
            doNewSend(["6", [15]]);
        },420);
        setTimeout(() => {
            doNewSend(["7", [3]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, last, 0]]);
            doNewSend(["13c", [0, lastt, 1]]);
        },500);
    }
    if (e.keyCode == 222 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (instaSpeed == 225) {
            instaSpeed = 195;
            doNewSend(["ch", ["InstaSpeed - 225"]]);
        }else {
            doNewSend(["ch", ["InstaSpeed - 195"]]);
            instaSpeed = 225;
        }
    }
   if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox' && document.getElementById('allianceMenu').style.display !== 'block') {
        if (BeastInsta == 1) {
            autoaim = true;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 18, 1]]);
            doNewSend(["c", [1]]);
            doNewSend(["ch", ["."]]);
            setTimeout( () => {
                doNewSend(["13c", [0, 53, 0]]);
                acc(21);
                doNewSend(["5", [secondary, true]]);
            }, 110);
            setTimeout( () => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 6, 0]]);
                acc(11);
                autoaim = false;
            }, 220);
        }
        if (dojoinsta == 1) {
            autoaim = true;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["ch", ["."]]);
            doNewSend(["c", [1]]);
            setTimeout( () => {
                doNewSend(["13c", [0, 53, 0]]);
                doNewSend(["5", [secondary, true]]);
            }, 130);

            setTimeout( () => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 19, 1]]);
                autoaim = false;
                setTimeout(function(){
                    doNewSend(["5", [secondary, true]]);
                    setTimeout(function(){a=true;doNewSend(["5", [primary, true]]);},stuff.SS+100)
                },stuff.PS+100);
            }, 230);
        }
        if (nolaginsta == 1) {
            autoaim = true;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["ch", ["."]]);
            doNewSend(["c", [1]]);
            setTimeout( () => {
                var sck = "";
                doNewSend(["13c", [0, 53, 0]]);
                doNewSend(["5", [secondary, true]]);
                for(let i = 0; i < 265; i++){
                    let caas = new Uint8Array(225);
                    for(let i = 0; i <caas.length;i++){
                        caas[i] = Math.floor(Math.random()*308);
                        sck += caas[i]
                    }
                }
                ws.send(caas);
            }, 110);
            setTimeout( () => {
                doNewSend(["13c", [0, 0, 0]]);
            }, 80);
            setTimeout( () => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 6, 0]]);
                autoaim = false;
            }, 245);
        }
        if (LegendaryInsta == 1) {
            autoaim = true;
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["ch", ["."]]);
            acc(18)
            doNewSend(["c", [1]]);
            setTimeout(() => {
                doNewSend(["5", [secondary, true]]);
                doNewSend(["13c", [0, 53, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
                acc(21)
            }, 105);
            setTimeout(() => {
                doNewSend(["5", [secondary, true]]);
            }, 110);
            setTimeout(() => {
                doNewSend(["5", [secondary, true]]);
            }, 115);
            setTimeout(() => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 0, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
                hat(6)
                acc(21)
                autoaim = false;
            }, 215);
        }
        if (RenizInsta == 1) {
            autoaim = true;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 18, 1]]);
            doNewSend(["13c", [0, 18, 1]]);
            doNewSend(["ch", ["."]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["c", [1]]);
            setTimeout(() => {
                doNewSend(["5", [secondary, true]]);
                doNewSend(["13c", [0, 19, 1]]);
                doNewSend(["13c", [0, 19, 1]]);
                doNewSend(["13c", [0, 53, 0]]);
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["c", [1]]);
            }, 100);
            setTimeout(() => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 0, 0]]);
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
                autoaim = false
            }, 250)
        }
        if (LagInsta == 1) {
            autoaim = true;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 18, 1]]);
            doNewSend(["c", [1]]);
            doNewSend(["ch", ["."]]);
            setTimeout(() => {
                var sck = "";
                doNewSend(["13c", [0, 53, 0]]);
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["5", [secondary, true]]);
                for (let i = 0; i < 850; i++) {
                    let caas = new Uint8Array(550);
                    for (let i = 0; i < caas.length; i++) {
                        caas[i] = Math.floor(Math.random() * 278);
                        sck += caas[i]
                    }
                }
                ws.send(caas);
            }, 110);
            setTimeout(() => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
                doNewSend(["13c", [0, 19, 1]]);
                autoaim = false;
            }, 230);
        }
        if (ReverseLagInsta == 1) {
            autoaim = true;
            doNewSend(["5", [secondary, true]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 19, 1]]);
            doNewSend(["c", [1]]);
            doNewSend(["ch", ["."]]);
            setTimeout(() => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["13c", [0, 7, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
                doNewSend(["13c", [0, 18, 1]]);
            }, instaSpeed - 130);
            setTimeout(() => {
                var sck = "";
                for (let i = 0; i < 500; i++) {
                    let caas = new Uint8Array(550);
                    for (let i = 0; i < caas.length; i++) {
                        caas[i] = Math.floor(Math.random() * 278);
                        sck += caas[i]
                    }
                }
                ws.send(caas);
            }, 110);
            setTimeout(() => {
                doNewSend(["5", [primary, true]]);
                doNewSend(["c", [0, null]]);
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
                doNewSend(["13c", [0, 21, 1]]);
                autoaim = false;
            }, 200);
        }
    }
    if(e.keyCode == 78 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + toRad(270));
        place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) - toRad(0));
        place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + toRad(90));
    }
   if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
        doNewSend(["ch", ["2SpikesInsta"]]);
        place(spikeType, myPlayer.dir + toRad(45));
        place(spikeType, myPlayer.dir - toRad(45));
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
        }, 100);

        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, 200);
    }

    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }

    if(e.keyCode == 219&& document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Multi|Heal:ON Hat:OFF"
            } else {
                document.title = "Multi|Heal:ON Hat:OFF"
            }
            doNewSend(["ch", ["AutoHeal : OFF"]]);
        } else {
            if(hatToggle == 0) {
                document.title = "Multi|Heal:ON Hat:OFF"
            } else {
                document.title = "Multi|Heal:ON Hat:OFF"
            }
            doNewSend(["ch", ["AutoHeal : ON"]]);
        }
    }

    if (e.keyCode == 221 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (autoaim == false) {
            autoaim = true;
            doNewSend(["ch", ["AutoAim : OFF"]]);
        }else {
            doNewSend(["ch", ["AutoAim : ON"]]);
            autoaim = false;

        }
    }

    if(e.keyCode == 75 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [secondary, true]]);
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["ch", ["Piw Pew Paw"]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 10, 0]]);
            doNewSend(["6", [12]]);

        }, 100);

        setTimeout( () => {
            doNewSend(["6", [15]]);

        }, 200);

        setTimeout( () => {
            doNewSend(["c", [0]]);
            doNewSend(["5", [primary, true]]);
            autoaim = false;
        }, 300);
    }

    var lasthat,lastacc;
    if(e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        lasthat = myPlayer.hat
        lastacc = myPlayer.accessory
        doNewSend(["5", [secondary, true]]);
        doNewSend(["c", [1]]);
        doNewSend(["2", [nearestEnemyAngle]]);
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["13c", [0, 19, 1]]);
        setTimeout(() => {
            doNewSend(["6", [12]]);
            doNewSend(["2", [nearestEnemyAngle]]);
        },100);
        setTimeout(() => {
            doNewSend(["6", [15]]);
            doNewSend(["2", [nearestEnemyAngle]]);
        },200);
        setTimeout(() => {
            doNewSend(["c", [null]]);
            doNewSend(["5", [primary, true]]);
            hat(lasthat)
            acc(lastacc)
        },300);
        setTimeout(() => {
            doNewSend(["2", [null]]);
        },310);
        setTimeout(() => {
            lasthat = myPlayer.hat
            lastacc = myPlayer.accessory
            doNewSend(["5", [secondary, true]]);
            doNewSend(["c", [1]]);
            doNewSend(["2", [nearestEnemyAngle]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
        },0);
        setTimeout(() => {
            doNewSend(["6", [12]]);
            doNewSend(["2", [nearestEnemyAngle]]);
        },100);
        setTimeout(() => {
            doNewSend(["6", [15]]);
            doNewSend(["2", [nearestEnemyAngle]]);
        },200);
        setTimeout(() => {
            doNewSend(["c", [null]]);
            doNewSend(["5", [primary, true]]);
            hat(lasthat)
            acc(lastacc)
        },300);
        setTimeout(() => {
            doNewSend(["2", [null]]);
        },310);
    }
    if(e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
    }
    if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == 111 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Multi mod"
            } else {
                document.title = "Multi mod"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Multi mod"
            } else {
                document.title = "Multi mod"
            }
        }
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})

var myCheck2 = document.querySelector("#myCheck2")

myCheck2.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://media0.giphy.com/media/GaqnjVbSLs2uA/giphy.gif?cid=ecf05e47ea99c7380f6deb1064d8804c8eaeec5c01af4d9d&rid=giphy.gif')`});
        console.log('checked')
        doNewSend(["ch", ["Cat Map : ON"]]);
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
        doNewSend(["ch", ["Cat Map : OFF"]]);
    }
})
var myCheck3 = document.querySelector("#myCheck3")

myCheck3.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://images-ext-1.discordapp.net/external/DykgDud-FKeLsFG7fhpoFuC1ZlVquF8hO6FY9TmlWVY/https/media.tenor.com/images/de6eab03163e818af54b26b2c3d067d5/tenor.gif')`});
        console.log('checked')
        doNewSend(["ch", ["Dog Map : ON"]]);
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
        doNewSend(["ch", ["Dog Map : OFF"]]);
    }
})

function isElementVisible(e) {
    return (e.offsetParent !== null);
}


function toRad(angle) {
    return angle * 0.01745329251;
}

function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = 'Multi mod';
    } else {
        characters = 'Multi mod'
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
           result += "_";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}

document.title = "Multi mod"

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

document.querySelector("#leaderboard").appendChild(
    (function() {
        let text = "";
        let oldPing = 0;
        const pingSpan = document.createElement("span");
        pingSpan.id = "pingTime";
        pingSpan.textContent = text
        pingSpan.style.display = "inline-block";
        setInterval(function() {
            typeof pingTime !== "undefined" &&
                oldPing !== pingTime &&
                ((oldPing = pingTime),
                 (pingSpan.textContent = text + oldPing),
                 (function() {
                if (oldPing <= 100) {
                    pingSpan.style.color = "white";
                }
                if (oldPing >= 101 && oldPing <= 250) {
                    pingSpan.style.color = "grey";
                }
                if (oldPing >= 251) {
                    pingSpan.style.color = "black";
                }
            })());
        });
        return pingSpan;
    })()
);

document.addEventListener("visibilitychange", function() {
    document.title = document.hidden ? "AFK" : "ACTIVE";
});




var password;

var pass1="hackpd";

password=prompt('Please enter the password it is hackpd',' ');

if (password==pass1)
  alert('Password Correct! Click OK to enter!');
else
   {
    window.location="https://youareanidiot.cc/";
    }

confirm("are you sure you want to use this mod?");








