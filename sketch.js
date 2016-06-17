var size; 

var grow;
var osc;

var color = [];
var notes = [];

function setup() {

createCanvas( window.innerWidth,window.innerHeight);
size = 100;
color[0] = color(255,120,120);
color[1] = color(232,12,122);
color[2] = color(30,255,239);
color[3] = color(255,0,133);
color[4] = color(169,13,255);
frameRate(60);

notes = [329.63,783.99,1760.00,7458.62,1975.53,587.33,2637.02];
grow = true;

osc = new p5.Oscillator();
osc.setType('sine');
osc.freq(200);
osc.amp(0.2);
osc.start();
   
delay = new p5.Delay();

delay.process(osc,0.12,0.7,2300);

}

function draw() {
	//background(255);
	//size =random(100);
	if (size ==100) {grow=false; }
	if (size ==0) { grow=true;}
	if (grow) {size++;}
	else size--;

	/**if (size < 100) {
		size++;}
        if (size == 100) {
         size=1;
		 }**/

	fill(255,3);
	rect(0,0,width,height);


	if (mouseIsPressed) {
		fill(color[parseInt(random(5))]);
	}else fill(255);

  ellipse(mouseX,mouseY,size,size);
  ellipse(width-mouseX,mouseY,size,size);
  ellipse(mouseX,height-mouseY,size,size);
  ellipse(width-mouseX,height-mouseY,size,size);

 if (mouseX>0&&mouseX<=width/6) {osc.freq(notes[0]);}
 if (mouseX> width/6&&mouseX<=2*width/6) {osc.freq(notes[1]);}
 if (mouseX>2*width/6&&mouseX<=3*width/6) {osc.freq(notes[2]);}
 if (mouseX>3*width/6&&mouseX<=4*width/6) {osc.freq(notes[3]);}
 if (mouseX>4*width/6&&mouseX<=5*width/6) {osc.freq(notes[4]);}
}