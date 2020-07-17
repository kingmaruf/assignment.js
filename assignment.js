// feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(10560);
console.log (result);

// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var result = woodCalculator(5, 3, 1);
console.log (result);

// brickCalculator
function brickCalculator(oneToTenFloor, elevenToTwelveFloor, twentyOneToAboveFloor){
    var oneToTenFloorCount = oneToTenFloor * 15000;
    var elevenToTwelveFloorCount = elevenToTwelveFloor * 12000;
    var twentyOneToAboveFloorCount = twentyOneToAboveFloor * 10000;
    var totalBrick = oneToTenFloorCount + elevenToTwelveFloorCount + twentyOneToAboveFloorCount;
    return totalBrick;
}
var result = brickCalculator (7, 0, 0);
console.log(result);

// tinyFriend
function tinyFriend(names){
    var smallName = names[0];
    for (var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length< smallName.length){
          smallName = currentName;
        }
    }
    return smallName;
}
var smallName = tinyFriend(['eka', 'noyona', 'pk', 'tisha', 'misa', 'sabrina']);
console.log(smallName);
