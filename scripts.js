$("#fox-1").text("Macrotis");
$("#fox-2").css("border-color", "purple");
$("p.first-task").css("background", "yellow");

let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
   $("p.north").css("background", "purple");
}

if (number > 100) {
   $("p.east").css("font-size", "16px");
   $("p.east").text("WoW, de nagy szám");
}
else {
   $("p.east").css("font-size", "12px");
   $("p.east").text("Ez csak egy közönséges szám");
}

if (word === "cool") {
   $("p.south").text("A DOM Ereje");
}
else {
   $("p.west").text("A DOM Ereje");
}


