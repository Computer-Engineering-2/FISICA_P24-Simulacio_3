// Recuperem el canvas i creem l'espai de treball (10x10)
var canvas = document.getElementById('canvas');
var espai = new Espai(canvas,-5,5,-5,5);
// Creem el Sol (no es mou del centre)
var sol = new Particula(1,0,0,0.3,'#ff00ff',true);
// Creem els planetes que orbitaran
var planeta1 = new Particula(1,0,0,0.1);
planeta1.pos = new Vector(1,0);
planeta1.vel = new Vector(0,1);
var planeta2 = new Particula(1,0,0,0.1);
planeta2.pos = new Vector(3,0);
planeta2.vel = new Vector(0,1/Math.sqrt(3));
var planeta3 = new Particula(1,0,0,0.1);
planeta3.pos = new Vector(0.6,0);
planeta3.vel = new Vector(0,1.6);
// Creem la força de gravitacio
var g = new Gravitacio();

window.onload = init; 
 
function init() {
  setInterval(onEachStep, 1000/60); // 60 fps
};
 
function onEachStep() {
	Temps.euler(planeta1,1/60,g.forca(planeta1));
	Temps.euler(planeta2,1/60, g.forca(planeta2));
	Temps.euler(planeta3,1/60,g.forca(planeta3));
	espai.clear();
	sol.draw(espai);
	planeta1.draw(espai);
	planeta2.draw(espai);
	planeta3.draw(espai);
};