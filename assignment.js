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
function brickCalculator(floor){
    var brick = 0;
    if (floor<=10){
        brick = floor * 15 * 1000;
    } 
    else if(floor<=20){
        var firstLevel = 10 * 15 * 1000;
        var remaining = floor - 10;
        var secondLevel = remaining * 12 * 1000;
        brick = firstLevel + secondLevel;
    } 
    else{
        var firstLevel = 10 * 15 * 1000;
        var secondLevel = 10 * 12 * 1000;
        var remaining = floor - 20;
        var thirdLevel = remaining * 10 * 1000;
        brick = firstLevel + secondLevel + thirdLevel;
    }   
    return brick;
}
var result = brickCalculator (40);
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