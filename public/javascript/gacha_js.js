(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 2048,
	height: 1536,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"../../../../images/BG1.jpg", id:"BG1"},
		{src:"../../../../images/BG2.jpg", id:"BG2"},
		{src:"../../../../images/board.png", id:"board"},
		{src:"../../../../images/btn1.png", id:"btn1"},
		{src:"../../../../images/btn2.png", id:"btn2"},
		{src:"../../../../images/btn3.png", id:"btn3"},
		{src:"../../../../images/btn4.png", id:"btn4"},
		{src:"../../../../images/btn5.png", id:"btn5"},
		{src:"../../../../images/btn6.png", id:"btn6"},
		{src:"../../../../images/btn7.png", id:"btn7"},
		{src:"../../../../images/gacha_back.png", id:"gacha_back"},
		{src:"../../../../images/gacha_bpdy0.png", id:"gacha_bpdy0"},
		{src:"../../../../images/gacha_bpdy1.png", id:"gacha_bpdy1"},
		{src:"../../../../images/gacha_bpdy2.png", id:"gacha_bpdy2"},
		{src:"../../../../images/gacha_capsel_b.png", id:"gacha_capsel_b"},
		{src:"../../../../images/gacha_capsel_r.png", id:"gacha_capsel_r"},
		{src:"../../../../../images/gacha_capsel_y.png", id:"gacha_capsel_y"},
		{src:"../../../../images/gacha_handle.png", id:"gacha_handle"},
		{src:"../../../../images/gacha_shitaago.png", id:"gacha_shitaago"},
		{src:"../../../../images/gacha_uwaago.png", id:"gacha_uwaago"},
		{src:"../../../../images/image1.png", id:"image1"},
		{src:"../../../../images/message.png", id:"message"},
		{src:"../../../../images/roll.png", id:"roll"},
		{src:"../../../../images/touch.png", id:"touch"}
	]
};



// symbols:



(lib.BG1 = function() {
	this.initialize(img.BG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.BG2 = function() {
	this.initialize(img.BG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.board = function() {
	this.initialize(img.board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,383);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,111);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,111);


(lib.btn3 = function() {
	this.initialize(img.btn3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,111);


(lib.btn4 = function() {
	this.initialize(img.btn4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,111);


(lib.btn5 = function() {
	this.initialize(img.btn5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,111);


(lib.btn6 = function() {
	this.initialize(img.btn6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,862,138);


(lib.btn7 = function() {
	this.initialize(img.btn7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,138);


(lib.gacha_back = function() {
	this.initialize(img.gacha_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,668,667);


(lib.gacha_bpdy0 = function() {
	this.initialize(img.gacha_bpdy0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,536);


(lib.gacha_bpdy1 = function() {
	this.initialize(img.gacha_bpdy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,921);


(lib.gacha_bpdy2 = function() {
	this.initialize(img.gacha_bpdy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,578,1200);


(lib.gacha_capsel_b = function() {
	this.initialize(img.gacha_capsel_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,160);


(lib.gacha_capsel_r = function() {
	this.initialize(img.gacha_capsel_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,160);


(lib.gacha_capsel_y = function() {
	this.initialize(img.gacha_capsel_y);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,160);


(lib.gacha_handle = function() {
	this.initialize(img.gacha_handle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,96);


(lib.gacha_shitaago = function() {
	this.initialize(img.gacha_shitaago);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,100);


(lib.gacha_uwaago = function() {
	this.initialize(img.gacha_uwaago);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,121);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.message = function() {
	this.initialize(img.message);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,118);


(lib.roll = function() {
	this.initialize(img.roll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,568);


(lib.touch = function() {
	this.initialize(img.touch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.MC_White = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx6BYvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAMAAAixVIACgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAMBj1AAAIADABIACADMAAACxVIgCADIgDABg");
	this.shape.setTransform(0,0,3.2,1.352);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Touch_Touch = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.touch();
	this.instance.setTransform(-1024,-768);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Msg = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.message();
	this.instance.setTransform(-1024,-59);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-59,2048,118);


(lib.MC_LinkBtn5 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn5();
	this.instance.setTransform(-202,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202,-55.5,404,111);


(lib.MC_LinkBtn4 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn4();
	this.instance.setTransform(-202,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202,-55.5,404,111);


(lib.MC_LinkBtn3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn3();
	this.instance.setTransform(-202,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202,-55.5,404,111);


(lib.MC_LinkBtn2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn2();
	this.instance.setTransform(-202,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202,-55.5,404,111);


(lib.MC_LinkBtn1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn1();
	this.instance.setTransform(-202,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202,-55.5,404,111);


(lib.MC_Kiras_Kira_Kira = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHF3Qgqh9hEhEQhFhFh8gpQhqgkjXgkQDXgjBqgjQB8gqBFhFQBEhEAqh9QAkhrAjjXQAkDXAjBrQAqB9BFBEQBFBFB8AqQBrAjDXAjQjXAkhrAkQh8AphFBFQhFBEgqB9QgjBqgkDYQgjjYgkhqg");
	this.shape.setTransform(0,0,1.004,1.004);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70,-70,140,140);


(lib.MC_Kanban = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8F9899").ss(8.3,1,1).p("EArwAdOMhXfAAAMAAAg6bMBXfAAAg");
	this.shape.setTransform(0.1,-210.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7FEFF").s().p("EgruAdOMAAAg6bMBXdAAAMAAAA6bg");
	this.shape_1.setTransform(0.1,-210.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#453606").ss(10,1,1).p("EA3oAINMhvPAAAIAAwZMBvPAAAg");
	this.shape_2.setTransform(0,-54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECAC5B").s().p("Eg3nAIMIAAwXMBvPAAAIAADCMhsbAAAIAANVg");
	this.shape_3.setTransform(0,-54.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE8E3E").s().p("Eg3nAIMIAAwXMBvPAAAIAAQXg");
	this.shape_4.setTransform(0,-54.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#453606").ss(10,1,1).p("EA3oAINMhvPAAAIAAwZMBvPAAAg");
	this.shape_5.setTransform(0,-159.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDBF62").s().p("Eg3nAINIAAwYMBvPAAAIAADDMhsbAAAIAANVg");
	this.shape_6.setTransform(0,-159.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DFA045").s().p("Eg3nAINIAAwYMBvPAAAIAAQYg");
	this.shape_7.setTransform(0,-159.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#453606").ss(10,1,1).p("EA3oAINMhvPAAAIAAwZMBvPAAAg");
	this.shape_8.setTransform(0,-264.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECAC5B").s().p("Eg3nAINIAAwZMBvPAAAIAADDMhsbAAAIAANWg");
	this.shape_9.setTransform(0,-264.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CE8E3E").s().p("Eg3nAINIAAwZMBvPAAAIAAQZg");
	this.shape_10.setTransform(0,-264.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#453606").ss(10,1,1).p("EA3oAINMhvPAAAIAAwZMBvPAAAg");
	this.shape_11.setTransform(0,-369.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDBF62").s().p("Eg3nAINIAAwZMBvPAAAIAADEMhsbAAAIAANVg");
	this.shape_12.setTransform(0,-369.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DFA045").s().p("Eg3nAINIAAwZMBvPAAAIAAQZg");
	this.shape_13.setTransform(0,-369.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#453606").ss(10,1,1).p("EAINBODMAAAicGIwZAAMAAACcGg");
	this.shape_14.setTransform(-0.5,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECAC5B").s().p("EgILBODMAAAicGIQXAAIAAC0ItVAAMAAACZSg");
	this.shape_15.setTransform(-0.5,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A76A21").s().p("AoLDZIAAmxIQXAAIAAGxg");
	this.shape_16.setTransform(-0.5,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A76A21").s().p("AoLDZIAAmxIQXAAIAAGxg");
	this.shape_17.setTransform(-0.5,-423.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE8E3E").s().p("EgILBODMAAAicGIQXAAMAAACcGg");
	this.shape_18.setTransform(-0.5,0);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-361,-504.6,722.2,1009.2);


(lib.MC_Item = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image1();
	this.instance.setTransform(-400,-400);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-400,800,800);


(lib.MC_InputBtn = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn6();
	this.instance.setTransform(-431,-69);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-431,-69,862,138);


(lib.MC_Gacha_Gacha_Handle = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_handle();
	this.instance.setTransform(-132,-47.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132,-47.8,264,96);


(lib.MC_Gacha_Gacha_Body2 = function() {
	this.initialize();

	// レイヤー 4
	this.instance = new lib.gacha_bpdy2();
	this.instance.setTransform(-288.9,-600);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.9,-600,578,1200);


(lib.MC_Gacha_Gacha_Body1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_bpdy1();
	this.instance.setTransform(-338,-460.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-338,-460.7,676,921);


(lib.MC_Gacha_Gacha_Body0 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_bpdy0();
	this.instance.setTransform(-120,-268);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-268,240,536);


(lib.MC_Gacha_Gacha_BallYellow = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_capsel_y();
	this.instance.setTransform(-72.7,-79.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.8,146,160);


(lib.MC_Gacha_Gacha_BallRed = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_capsel_r();
	this.instance.setTransform(-72.7,-79.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.8,146,160);


(lib.MC_Gacha_Gacha_BallBlue = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_capsel_b();
	this.instance.setTransform(-72.7,-79.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.8,146,160);


(lib.MC_Gacha_Gacha_Back0 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.gacha_back();
	this.instance.setTransform(-334,-333.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-334,-333.5,668,667);


(lib.MC_Fubuki_Fubuki13_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CC74C").s().p("Ai/jSIDhicICeJBIjhCcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.3,-36.7,38.6,73.5);


(lib.MC_Fubuki_Fubuki12_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CC74C").s().p("Ai/jSIDhicICeJBIjhCcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-36.7,38.6,73.5);


(lib.MC_Fubuki_Fubuki11_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD9332").s().p("AAEjiIB2iDIh9JJIh2CCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,-35.8,24.6,71.7);


(lib.MC_Fubuki_Fubuki10_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CC74C").s().p("AgTEEIgppUIBQBMIApJVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-33.8,12.3,67.6);


(lib.MC_Fubuki_Fubuki9_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45AAF2").s().p("AkZiwIHbjuIBYJPInbDug");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-41.6,56.6,83.2);


(lib.MC_Fubuki_Fubuki8_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45AAF2").s().p("AjwEXICCpIIFeAbIiBJIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-30.6,48.2,61.3);


(lib.MC_Fubuki_Fubuki7_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45AAF2").s().p("Aj8jMIE7ieIC+I3Ik7Ceg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-36.3,50.6,72.7);


(lib.MC_Fubuki_Fubuki6_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD57EC").s().p("AikETIiCpIIHLAkICCJHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.6,-31,59.2,62.2);


(lib.MC_Fubuki_Fubuki5_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD57EC").s().p("AhEDoIAApWICJCHIAAJWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-36.7,13.9,73.5);


(lib.MC_Fubuki_Fubuki4_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD57EC").s().p("AiODDIDJozIBUCuIjJIzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-36.9,28.8,73.9);


(lib.MC_Fubuki_Fubuki3_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD9332").s().p("AhIjsICRh9IAAJWIiRB9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-36.3,14.7,72.6);


(lib.MC_Fubuki_Fubuki2_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD9332").s().p("AhIjsICRh9IAAJWIiRB9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-36.3,14.7,72.6);


(lib.MC_Fubuki_Fubuki1_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD9332").s().p("AkQEBIAApWIIhBVIAAJWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.3,-34.2,54.6,68.5);


(lib.MC_Fubuki_Fubuki0_Kami = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD9332").s().p("AkQEBIAApWIIhBVIAAJWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.3,-34.2,54.6,68.5);


(lib.MC_Flash_Flash = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.roll();
	this.instance.setTransform(-568,-568,2,2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-568,-568,1136,1136);


(lib.MC_Board = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.board();
	this.instance.setTransform(-285,-191.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-285,-191.5,570,383);


(lib.MC_Bg2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.BG2();
	this.instance.setTransform(-1024,-768);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Bg1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.BG1();
	this.instance.setTransform(-1024,-768);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_BackBtn = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.btn7();
	this.instance.setTransform(-252.5,-69);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-252.5,-69,505,138);


(lib.MC_WhiteOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		exportRoot.nowScene = exportRoot.SCENE3;
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// white
	this.white = new lib.MC_White();

	this.timeline.addTween(cjs.Tween.get(this.white).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Touch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// touch
	this.touch = new lib.MC_Touch_Touch();

	this.timeline.addTween(cjs.Tween.get(this.touch).to({alpha:0.102},11).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Kiras_Kira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kira
	this.kira = new lib.MC_Kiras_Kira_Kira();

	this.timeline.addTween(cjs.Tween.get(this.kira).to({scaleX:0.57,scaleY:0.57,alpha:0.199},3).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-70,140,140);


(lib.MC_Gacha_Gacha_Balls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{b:0,r:1,y:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// レイヤー 1
	this.bb = new lib.MC_Gacha_Gacha_BallBlue();

	this.timeline.addTween(cjs.Tween.get(this.bb).to({_off:true},1).wait(2));

	// レイヤー 3
	this.rb = new lib.MC_Gacha_Gacha_BallRed();
	this.rb._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rb).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// レイヤー 4
	this.yb = new lib.MC_Gacha_Gacha_BallYellow();
	this.yb._off = true;

	this.timeline.addTween(cjs.Tween.get(this.yb).wait(2).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.8,146,160);


(lib.MC_Fubuki_Fubuki13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki13_Kami();
	this.kami.setTransform(-520.1,-920.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-529.3,y:-858.6},0).wait(1).to({x:-539.5,y:-782.8},0).wait(1).to({x:-548.1,y:-711.1},0).wait(1).to({x:-550,y:-653.3},0).wait(1).to({x:-526,y:-581.5},0).wait(1).to({x:-514.9,y:-512.1},0).wait(1).to({x:-534,y:-441.9},0).wait(1).to({x:-548.2,y:-363.8},0).wait(1).to({x:-558.9,y:-311.7},0).wait(1).to({x:-574.5,y:-236.3},0).wait(1).to({x:-568.1,y:-168.9},0).wait(1).to({x:-567.5,y:-103.1},0).wait(1).to({x:-523.2,y:-42},0).wait(1).to({x:-517.1,y:9.3},0).wait(1).to({x:-512.6,y:94.9},0).wait(1).to({x:-526.4,y:166.3},0).wait(1).to({x:-516.7,y:234.9},0).wait(1).to({x:-484.9,y:275.3},0).wait(1).to({x:-448,y:341.8},0).wait(1).to({x:-428.7,y:407.3},0).wait(1).to({x:-412.4,y:488.9},0).wait(1).to({x:-409.3,y:548.5},0).wait(1).to({x:-384.2,y:609.6},0).wait(1).to({x:-365.2,y:686.7},0).wait(1).to({x:-395.6,y:736.6},0).wait(1).to({x:-397.1,y:824.9},0).wait(1).to({x:-400.1,y:876.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.4,-956.9,38.5,73.5);


(lib.MC_Fubuki_Fubuki12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki12_Kami();
	this.kami.setTransform(44,-852.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:27,y:-793.8},0).wait(1).to({x:13,y:-733.4},0).wait(1).to({x:0.9,y:-672.6},0).wait(1).to({x:-9.6,y:-611.6},0).wait(1).to({x:-18.6,y:-550.2},0).wait(1).to({x:-25.9,y:-488.8},0).wait(1).to({x:-31.4,y:-427.1},0).wait(1).to({x:-34.8,y:-365.2},0).wait(1).to({x:-35.7,y:-303.2},0).wait(1).to({x:-33.1,y:-241.3},0).wait(1).to({x:-25.8,y:-179.6},0).wait(1).to({x:-11.2,y:-119.3},0).wait(1).to({x:9.3,y:-73.4},0).wait(1).to({x:36.6,y:-17.9},0).wait(1).to({x:61.2,y:37.3},0).wait(1).to({x:89,y:104.9},0).wait(1).to({x:112.2,y:162.9},0).wait(1).to({x:131.7,y:217.8},0).wait(1).to({x:149.6,y:285.8},0).wait(1).to({x:151.1,y:344.8},0).wait(1).to({x:150,y:403.9},0).wait(1).to({x:164.5,y:462.1},0).wait(1).to({x:175.1,y:523.9},0).wait(1).to({x:181.5,y:586.3},0).wait(1).to({x:181.3,y:649.9},0).wait(1).to({x:170.1,y:710.1},0).wait(1).to({x:154.5,y:775.7},0).wait(1).to({x:140.1,y:828.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.8,-888.9,38.6,73.4);


(lib.MC_Fubuki_Fubuki11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.kami = new lib.MC_Fubuki_Fubuki11_Kami();
	this.kami.setTransform(468.1,-936.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:434,y:-819.1},0).wait(1).to({x:402.5,y:-701.1},0).wait(1).to({x:373.9,y:-582.5},0).wait(1).to({x:348.2,y:-463.1},0).wait(1).to({x:325.9,y:-343.1},0).wait(1).to({x:307.3,y:-222.6},0).wait(1).to({x:292.7,y:-101.4},0).wait(1).to({x:282.5,y:20.2},0).wait(1).to({x:277.2,y:142.2},0).wait(1).to({y:264.3},0).wait(1).to({x:283.1,y:386.1},0).wait(1).to({x:295.4,y:507.6},0).wait(1).to({x:314.7,y:628.1},0).wait(1).to({x:341.4,y:747.1},0).wait(1).to({x:376.1,y:864.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(455.9,-972,24.5,71.6);


(lib.MC_Fubuki_Fubuki10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.kami = new lib.MC_Fubuki_Fubuki10_Kami();
	this.kami.setTransform(312.1,-852.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:325,y:-769},0).wait(1).to({x:343.2,y:-673.7},0).wait(1).to({x:365.3,y:-580.7},0).wait(1).to({x:387.2,y:-509.1},0).wait(1).to({x:408.7,y:-420.3},0).wait(1).to({x:425.8,y:-321.3},0).wait(1).to({x:428.2,y:-232.5},0).wait(1).to({x:396.3,y:-144},0).wait(1).to({x:345.8,y:-57.5},0).wait(1).to({x:309.3,y:1.6},0).wait(1).to({x:273,y:107.6},0).wait(1).to({x:257.6,y:179.2},0).wait(1).to({x:257.2,y:269.4},0).wait(1).to({x:220.8,y:347.1},0).wait(1).to({x:241.8,y:448.3},0).wait(1).to({x:246.6,y:537},0).wait(1).to({x:267,y:618.2},0).wait(1).to({x:295.5,y:707.9},0).wait(1).to({x:329.9,y:802.8},0).wait(1).to({x:360.1,y:876.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(306,-886,12.3,67.5);


(lib.MC_Fubuki_Fubuki9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki9_Kami();
	this.kami.setTransform(192.1,-860.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:171.6,y:-806.8},0).wait(1).to({x:150,y:-747.7},0).wait(1).to({x:129.5,y:-689.8},0).wait(1).to({x:109.9,y:-631.4},0).wait(1).to({x:93.3,y:-581.5},0).wait(1).to({x:69.6,y:-519.8},0).wait(1).to({x:46,y:-462.8},0).wait(1).to({x:21.1,y:-406.7},0).wait(1).to({x:-5.8,y:-351.4},0).wait(1).to({x:-32.9,y:-302.5},0).wait(1).to({x:-62.3,y:-246.2},0).wait(1).to({x:-88.3,y:-190.9},0).wait(1).to({x:-111.8,y:-135},0).wait(1).to({x:-132,y:-76.7},0).wait(1).to({x:-132.5,y:-21.2},0).wait(1).to({x:-107.8,y:36.1},0).wait(1).to({x:-74,y:88.4},0).wait(1).to({x:-34.3,y:138.2},0).wait(1).to({x:5.7,y:179.3},0).wait(1).to({x:50.3,y:216},0).wait(1).to({x:95.7,y:258.4},0).wait(1).to({x:137.8,y:303.5},0).wait(1).to({x:173.3,y:356.1},0).wait(1).to({x:177.3,y:412.5},0).wait(1).to({x:185.3,y:470.7},0).wait(1).to({x:174,y:523.8},0).wait(1).to({x:213.1,y:553.9},0).wait(1).to({x:246.5,y:605},0).wait(1).to({x:207.5,y:647.4},0).wait(1).to({x:147.8,y:696.4},0).wait(1).to({x:163.8,y:692.2},0).wait(1).to({x:196.6,y:706.6},0).wait(1).to({x:232.5,y:730.5},0).wait(1).to({x:231.9,y:813.6},0).wait(1).to({x:228.1,y:860.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163.8,-901.8,56.5,83.1);


(lib.MC_Fubuki_Fubuki8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki8_Kami();
	this.kami.setTransform(-796.2,-824.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-810.5,y:-751.3},0).wait(1).to({x:-821.7,y:-676.8},0).wait(1).to({x:-830.7,y:-602.2},0).wait(1).to({x:-837.4,y:-527.4},0).wait(1).to({x:-841.2,y:-452.2},0).wait(1).to({x:-840.5,y:-376.9},0).wait(1).to({x:-831.2,y:-301.7},0).wait(1).to({x:-798.2,y:-241},0).wait(1).to({x:-753.2,y:-185.8},0).wait(1).to({x:-699.8,y:-124.3},0).wait(1).to({x:-656.8,y:-62.3},0).wait(1).to({x:-653.6,y:15.9},0).wait(1).to({x:-678,y:88.4},0).wait(1).to({x:-656.9,y:149.9},0).wait(1).to({x:-636.8,y:210.4},0).wait(1).to({x:-613.8,y:284.6},0).wait(1).to({x:-589.5,y:364.9},0).wait(1).to({x:-576.2,y:449.1},0).wait(1).to({x:-562.6,y:505.6},0).wait(1).to({x:-538.6,y:582.2},0).wait(1).to({x:-525.1,y:657.6},0).wait(1).to({x:-529.2,y:731},0).wait(1).to({x:-554.9,y:823.6},0).wait(1).to({x:-564.1,y:876.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-820.3,-854.8,48.2,61.3);


(lib.MC_Fubuki_Fubuki7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki7_Kami();
	this.kami.setTransform(776.2,-832.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:747.7,y:-717.3},0).wait(1).to({x:722.8,y:-599},0).wait(1).to({x:734.5,y:-482.5},0).wait(1).to({x:798.5,y:-381.4},0).wait(1).to({x:889.4,y:-309},0).wait(1).to({x:937.5,y:-182.6},0).wait(1).to({x:921.5,y:-89.4},0).wait(1).to({x:862.7,y:8.4},0).wait(1).to({x:800,y:133.7},0).wait(1).to({x:749.2,y:227.1},0).wait(1).to({x:714.9,y:335.7},0).wait(1).to({x:687.7,y:454},0).wait(1).to({x:628.7,y:552.3},0).wait(1).to({x:546,y:663.9},0).wait(1).to({x:506.2,y:761.1},0).wait(1).to({x:500.2,y:876.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(750.9,-868.5,50.6,72.7);


(lib.MC_Fubuki_Fubuki6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki6_Kami();
	this.kami.setTransform(-792.2,-888.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-744.7,y:-818.7},0).wait(1).to({x:-695.5,y:-741.8},0).wait(1).to({x:-649.1,y:-661.5},0).wait(1).to({x:-622.8,y:-587.2},0).wait(1).to({x:-617.9,y:-498.9},0).wait(1).to({x:-647.5,y:-413.8},0).wait(1).to({x:-624.7,y:-339},0).wait(1).to({x:-654.1,y:-254.1},0).wait(1).to({x:-675,y:-149.7},0).wait(1).to({x:-623.2,y:-134.3},0).wait(1).to({x:-581.8,y:-87.2},0).wait(1).to({x:-562.7,y:-9.8},0).wait(1).to({x:-597.7,y:84.5},0).wait(1).to({x:-635.1,y:164.9},0).wait(1).to({x:-695.8,y:229.1},0).wait(1).to({x:-736.6,y:301.8},0).wait(1).to({x:-720.3,y:382.6},0).wait(1).to({x:-650.8,y:427.7},0).wait(1).to({x:-580.2,y:476.2},0).wait(1).to({x:-534.8,y:556.8},0).wait(1).to({x:-513.7,y:642.3},0).wait(1).to({x:-538.7,y:723.3},0).wait(1).to({x:-592.7,y:793.1},0).wait(1).to({x:-636.1,y:868.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-821.8,-919.2,59.1,62.1);


(lib.MC_Fubuki_Fubuki5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki5_Kami();
	this.kami.setTransform(560.2,-852.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:637.8,y:-815},0).wait(1).to({x:674.6,y:-746.5},0).wait(1).to({x:698.9,y:-650.9},0).wait(1).to({x:707.2,y:-567.9},0).wait(1).to({x:714.2,y:-468.8},0).wait(1).to({x:719.9,y:-379.3},0).wait(1).to({x:709.2,y:-277.4},0).wait(1).to({x:688.6,y:-216.1},0).wait(1).to({x:637.7,y:-135.8},0).wait(1).to({x:595.1,y:-56.6},0).wait(1).to({x:559.8,y:25},0).wait(1).to({x:544.1,y:113.6},0).wait(1).to({x:484.2,y:154.9},0).wait(1).to({x:454.9,y:237.1},0).wait(1).to({x:498.3,y:326.7},0).wait(1).to({x:548.2,y:397.1},0).wait(1).to({x:557.2,y:483.4},0).wait(1).to({x:556.9,y:586.9},0).wait(1).to({x:524.4,y:642.7},0).wait(1).to({x:507.4,y:724.8},0).wait(1).to({x:504.2,y:828.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(553.3,-888.9,13.9,73.5);


(lib.MC_Fubuki_Fubuki4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki4_Kami();
	this.kami.setTransform(-196,-880.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-187.5,y:-816.3},0).wait(1).to({x:-169.3,y:-752.3},0).wait(1).to({x:-143.9,y:-691.5},0).wait(1).to({x:-125.8,y:-631.4},0).wait(1).to({x:-119.8,y:-564.2},0).wait(1).to({x:-121.6,y:-498},0).wait(1).to({x:-130.2,y:-432.5},0).wait(1).to({x:-146,y:-368.6},0).wait(1).to({x:-186.8,y:-328.6},0).wait(1).to({x:-246.8,y:-294.2},0).wait(1).to({x:-303,y:-257.4},0).wait(1).to({x:-356.3,y:-216.9},0).wait(1).to({x:-402.5,y:-169.8},0).wait(1).to({x:-405.3,y:-113.6},0).wait(1).to({x:-376.2,y:-62.3},0).wait(1).to({x:-358.3,y:-8},0).wait(1).to({x:-285.7,y:0.6},0).wait(1).to({x:-254.5,y:38.3},0).wait(1).to({x:-237.9,y:103.5},0).wait(1).to({x:-194.8,y:154.4},0).wait(1).to({x:-154.3,y:206.9},0).wait(1).to({x:-116.2,y:261.1},0).wait(1).to({x:-81.4,y:317.9},0).wait(1).to({x:-53.2,y:380.4},0).wait(1).to({x:-65.7,y:433.7},0).wait(1).to({x:-123.3,y:466.2},0).wait(1).to({x:-191.4,y:495.9},0).wait(1).to({x:-234.3,y:526.4},0).wait(1).to({x:-266.6,y:585.9},0).wait(1).to({x:-293.1,y:646.5},0).wait(1).to({x:-312.2,y:710},0).wait(1).to({x:-305.8,y:775.6},0).wait(1).to({x:-229.9,y:808.6},0).wait(1).to({x:-196,y:837.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.4,-917.1,28.8,73.9);


(lib.MC_Fubuki_Fubuki3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.kami = new lib.MC_Fubuki_Fubuki3_Kami();
	this.kami.setTransform(-612.1,-816.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-553.4,y:-768.3},0).wait(1).to({x:-495.5,y:-716.1},0).wait(1).to({x:-439.5,y:-662.2},0).wait(1).to({x:-385.5,y:-606.1},0).wait(1).to({x:-334,y:-547.3},0).wait(1).to({x:-286.6,y:-484.2},0).wait(1).to({x:-250.7,y:-411.2},0).wait(1).to({x:-260.9,y:-364.1},0).wait(1).to({x:-324.9,y:-314},0).wait(1).to({x:-392.1,y:-262},0).wait(1).to({x:-452.9,y:-196.8},0).wait(1).to({x:-466.9,y:-143.8},0).wait(1).to({x:-411.6,y:-82.3},0).wait(1).to({x:-337.3,y:-40.6},0).wait(1).to({x:-281.8,y:23.9},0).wait(1).to({x:-246.1,y:74},0).wait(1).to({x:-199,y:144.2},0).wait(1).to({x:-158,y:217},0).wait(1).to({x:-145.7,y:286.8},0).wait(1).to({x:-220.7,y:311.7},0).wait(1).to({x:-247.5,y:360.3},0).wait(1).to({x:-319.2,y:397.9},0).wait(1).to({x:-382.6,y:443.4},0).wait(1).to({x:-437.9,y:497.4},0).wait(1).to({x:-479.4,y:563.1},0).wait(1).to({x:-492.6,y:638.1},0).wait(1).to({x:-479.5,y:714.8},0).wait(1).to({x:-446.5,y:787.6},0).wait(1).to({x:-400.1,y:844.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-619.5,-852.5,14.6,72.5);


(lib.MC_Fubuki_Fubuki2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki2_Kami();
	this.kami.setTransform(-328,-808.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-312.4,y:-716},0).wait(1).to({x:-288.9,y:-616},0).wait(1).to({x:-260.6,y:-519.7},0).wait(1).to({x:-224.4,y:-425.2},0).wait(1).to({x:-193.1,y:-349.1},0).wait(1).to({x:-188.1,y:-239.5},0).wait(1).to({x:-203.3,y:-140.2},0).wait(1).to({x:-236.3,y:-46.6},0).wait(1).to({x:-288.1,y:37.1},0).wait(1).to({x:-343.7,y:113.4},0).wait(1).to({x:-394.3,y:202.4},0).wait(1).to({x:-435.4,y:294.7},0).wait(1).to({x:-463.7,y:391},0).wait(1).to({x:-466.5,y:485.7},0).wait(1).to({x:-446.9,y:583.3},0).wait(1).to({x:-422.3,y:679.5},0).wait(1).to({x:-394.5,y:775.4},0).wait(1).to({x:-364.1,y:868.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.4,-844.5,14.7,72.5);


(lib.MC_Fubuki_Fubuki1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki1_Kami();
	this.kami.setTransform(424.1,-828.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:413.8,y:-765.2},0).wait(1).to({x:405.1,y:-700.9},0).wait(1).to({x:397.5,y:-636.6},0).wait(1).to({x:391,y:-572.2},0).wait(1).to({x:385.7,y:-507.6},0).wait(1).to({x:382.1,y:-442.8},0).wait(1).to({x:380.8,y:-377.7},0).wait(1).to({x:384.4,y:-311.8},0).wait(1).to({x:412.8,y:-266.1},0).wait(1).to({x:440.4,y:-203.1},0).wait(1).to({x:450.6,y:-138.7},0).wait(1).to({x:454.2,y:-78.3},0).wait(1).to({x:479.7,y:-15.4},0).wait(1).to({x:497.9,y:46.7},0).wait(1).to({x:505.5,y:113.3},0).wait(1).to({x:474.3,y:177.9},0).wait(1).to({x:427.5,y:199.6},0).wait(1).to({x:413.9,y:260.7},0).wait(1).to({x:402.1,y:325.5},0).wait(1).to({x:392.2,y:390.2},0).wait(1).to({x:384.8,y:455.4},0).wait(1).to({x:381.8,y:522.7},0).wait(1).to({x:400.4,y:573.9},0).wait(1).to({x:437,y:634.3},0).wait(1).to({x:434,y:694.4},0).wait(1).to({x:400.9,y:756.5},0).wait(1).to({x:390,y:826.9},0).wait(1).to({x:384.1,y:876.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396.8,-862.4,54.6,68.5);


(lib.MC_Fubuki_Fubuki0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kami
	this.kami = new lib.MC_Fubuki_Fubuki0_Kami();
	this.kami.setTransform(-432.1,-820.2);

	this.timeline.addTween(cjs.Tween.get(this.kami).wait(1).to({x:-395.7,y:-722.6},0).wait(1).to({x:-362.8,y:-623.8},0).wait(1).to({x:-332.5,y:-524},0).wait(1).to({x:-305.8,y:-423.1},0).wait(1).to({x:-285.3,y:-320.9},0).wait(1).to({x:-287.2,y:-217.6},0).wait(1).to({x:-344.7,y:-145.8},0).wait(1).to({x:-406.5,y:-61.6},0).wait(1).to({x:-442.2,y:49.6},0).wait(1).to({x:-393.3,y:96.6},0).wait(1).to({x:-411.4,y:209.1},0).wait(1).to({x:-433.9,y:312.6},0).wait(1).to({x:-457.2,y:415},0).wait(1).to({x:-480,y:517.4},0).wait(1).to({x:-501.1,y:619.9},0).wait(1).to({x:-517.8,y:724.6},0).wait(1).to({x:-512.1,y:824.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.4,-854.4,54.6,68.4);


(lib.MC_Fubuki = function() {
	this.initialize();

	// f0
	this.fb0 = new lib.MC_Fubuki_Fubuki0();

	// f1
	this.fb1 = new lib.MC_Fubuki_Fubuki1();

	// f2
	this.fb2 = new lib.MC_Fubuki_Fubuki2();

	// f3
	this.fb3 = new lib.MC_Fubuki_Fubuki3();

	// f4
	this.fb4 = new lib.MC_Fubuki_Fubuki4();

	// f5
	this.fb5 = new lib.MC_Fubuki_Fubuki5();

	// f6
	this.fb6 = new lib.MC_Fubuki_Fubuki6();

	// f7
	this.fb7 = new lib.MC_Fubuki_Fubuki7();

	// f8
	this.fb8 = new lib.MC_Fubuki_Fubuki8();

	// f9
	this.fb9 = new lib.MC_Fubuki_Fubuki9();

	// f10
	this.fb10 = new lib.MC_Fubuki_Fubuki10();

	// f11
	this.fb11 = new lib.MC_Fubuki_Fubuki11();

	// f12
	this.fb12 = new lib.MC_Fubuki_Fubuki12();

	// f13
	this.fb13 = new lib.MC_Fubuki_Fubuki13();

	this.addChild(this.fb13,this.fb12,this.fb11,this.fb10,this.fb9,this.fb8,this.fb7,this.fb6,this.fb5,this.fb4,this.fb3,this.fb2,this.fb1,this.fb0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-821.8,-972,1623.3,200);


(lib.MC_Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		exportRoot.gotoAndPlay("scene3");
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// flash
	this.flash = new lib.MC_Flash_Flash();
	this.flash.setTransform(0,0,0.225,0.225);
	this.flash.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(5).to({alpha:0.398},0).to({scaleX:1.59,scaleY:1.59,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:4.4,scaleY:4.4},8).wait(6));

	// white
	this.white = new lib.MC_White();
	this.white.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.white).wait(14).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1023.9,-768,2047.9,1536);


(lib.MC_Kiras2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// k0
	this.k0 = new lib.MC_Kiras_Kira();
	this.k0.setTransform(-520.1,-245);
	this.k0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k0).wait(2).to({_off:false},0).wait(3));

	// k1
	this.k1 = new lib.MC_Kiras_Kira();
	this.k1.setTransform(403.1,376.1,0.789,0.789);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(3).to({_off:false},0).wait(2));

	// k2
	this.k2 = new lib.MC_Kiras_Kira();
	this.k2.setTransform(-91.9,-430.4,1.076,1.076);
	this.k2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k2).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.MC_Kiras1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// k0
	this.k0 = new lib.MC_Kiras_Kira();
	this.k0.setTransform(-436.1,52);
	this.k0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k0).wait(1).to({_off:false},0).wait(3));

	// k1
	this.k1 = new lib.MC_Kiras_Kira();
	this.k1.setTransform(215.1,-448.1,0.789,0.789);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(2).to({_off:false},0).wait(2));

	// k2
	this.k2 = new lib.MC_Kiras_Kira();
	this.k2.setTransform(460.1,-250.3,1.076,1.076);
	this.k2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.MC_Kiras0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// k0
	this.k0 = new lib.MC_Kiras_Kira();
	this.k0.setTransform(-252,-288);

	this.timeline.addTween(cjs.Tween.get(this.k0).wait(3));

	// k1
	this.k1 = new lib.MC_Kiras_Kira();
	this.k1.setTransform(55,304.1,0.789,0.789);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(1).to({_off:false},0).wait(2));

	// k2
	this.k2 = new lib.MC_Kiras_Kira();
	this.k2.setTransform(388.1,21.7,1.076,1.076);
	this.k2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k2).wait(2).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.1,-358,140,140);


(lib.MC_Gacha_MoveGacha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":5,on2:76});

	// timeline functions:
	this.frame_0 = function() {
		var r = (Math.floor( Math.random() * 3 ))+1;
		
		this["balls0"].gotoAndStop(r);
		this["balls1"].gotoAndStop(r);
		this["balls2"].gotoAndStop(r);
		
		this.stop();
	}
	this.frame_15 = function() {
		exportRoot["gacha"].gotoAndPlay("moved");
	}
	this.frame_75 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this["flash"].gotoAndPlay("on");
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(60).call(this.frame_75).wait(19).call(this.frame_94).wait(1));

	// flash
	this.flash = new lib.MC_Flash();

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(95));

	// balls2
	this.balls2 = new lib.MC_Gacha_Gacha_Balls();
	this.balls2.setTransform(5.9,260.7,1.991,1.991);
	this.balls2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.balls2).wait(1).to({regX:0.2,regY:0.1,x:6.3,y:260.9,alpha:0.01},0).wait(79).to({x:0.4,alpha:1},0).wait(1).to({scaleX:2.39,scaleY:2.39,x:0.5,y:118},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:0.6,y:-24.8},0).wait(1).to({scaleX:3.19,scaleY:3.19,x:0.7,y:-167.7},0).wait(1).to({scaleX:3.58,scaleY:3.58,y:-83.6},0).wait(1).to({scaleX:3.98,scaleY:3.98,x:0.8,y:0.4},0).wait(1).to({y:-5.6},0).wait(1).to({y:-11.6},0).wait(1).to({y:-5.6},0).wait(1).to({y:0.4},0).wait(1).to({y:-1.6},0).wait(1).to({y:-3.6},0).wait(4));

	// 下請け
	this.instance = new lib.gacha_shitaago();
	this.instance.setTransform(-118.4,463.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

	// balls1
	this.balls1 = new lib.MC_Gacha_Gacha_Balls();
	this.balls1.setTransform(0,467.2);
	this.balls1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.balls1).wait(1).to({regX:0.2,regY:0.1,x:0.2,y:467.3,alpha:0.01},0).wait(77).to({alpha:1},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:3.2,y:364.1},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:6.3,y:260.9},0).to({_off:true},1).wait(14));

	// handle
	this.handle = new lib.MC_Gacha_Gacha_Handle();
	this.handle.setTransform(-2.1,113.5);

	this.timeline.addTween(cjs.Tween.get(this.handle).wait(5).to({rotation:180,x:-2.2},14).to({rotation:355.8,x:-2.1},12).wait(1).to({rotation:360},0).wait(63));

	// 上受け
	this.instance_1 = new lib.gacha_uwaago();
	this.instance_1.setTransform(-97.8,264.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgycCQqVikhrvxQhqvvAAmiQAAmjEEkoQEFkoFxAAQFvAAEFEoQEFEoA5H+QA4H9izQ4QidOsoHAAQhOAAhVgWg");
	mask.setTransform(2.3,454.9);

	// balls0
	this.balls0 = new lib.MC_Gacha_Gacha_Balls();
	this.balls0.setTransform(0,304);
	this.balls0.alpha = 0.012;

	this.balls0.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.balls0).wait(1).to({regX:0.2,regY:0.1,x:0.2,y:304.1,alpha:0.01},0).wait(75).to({alpha:1},0).wait(1).to({y:385.7},0).wait(1).to({y:467.3},0).to({_off:true},1).wait(16));

	// body0
	this.body0 = new lib.MC_Gacha_Gacha_Body0();
	this.body0.setTransform(-2.1,260.7);

	this.timeline.addTween(cjs.Tween.get(this.body0).wait(95));

	// body1
	this.body1 = new lib.MC_Gacha_Gacha_Body1();
	this.body1.setTransform(-2.1,-165.8);

	this.timeline.addTween(cjs.Tween.get(this.body1).wait(95));

	// b0
	this.b0 = new lib.MC_Gacha_Gacha_BallYellow();
	this.b0.setTransform(-146.5,23.9,0.999,0.999,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.b0).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,x:-146.3,y:24},0).wait(7).to({rotation:2.2,x:-196.8,y:-48.6},0).wait(1).to({rotation:24.7,x:-210.1,y:-134.3},0).wait(1).to({rotation:47.2,x:-159.9,y:-213.5},0).wait(1).to({rotation:69.7,x:-101.9,y:-260.3},0).wait(1).to({rotation:92.2,x:-179.3,y:-223.8},0).wait(1).to({rotation:114.7,x:-172.7,y:-188},0).wait(1).to({rotation:74.7,x:-116.8,y:-184.2},0).wait(1).to({rotation:34.7,x:-65.2,y:-205.1},0).wait(1).to({rotation:-5.4,x:-39.3,y:-214.5},0).wait(1).to({rotation:-45.4,x:-5.6,y:-177.9},0).wait(1).to({rotation:-85.4,x:71.9,y:-189.3},0).wait(1).to({rotation:-125.4,x:114.3,y:-195.1},0).wait(1).to({x:51.4,y:-199.2},0).wait(1).to({x:-11.5,y:-194.8},0).wait(1).to({x:-31,y:-186.3},0).wait(1).to({x:-50,y:-176.9},0).wait(1).to({x:-69.5,y:-168.5},0).wait(1).to({x:-92.7,y:-152.4},0).wait(1).to({x:-115.2,y:-135.1},0).wait(1).to({x:-138.4,y:-119},0).wait(1).to({x:-164.1,y:-140.7},0).wait(1).to({x:-188.5,y:-164},0).wait(1).to({x:-213.5,y:-186.7},0).wait(1).to({x:-215.9,y:-197.4},0).wait(1).to({x:-216.3,y:-208.6},0).wait(1).to({x:-216.4,y:-219.9},0).wait(1).to({x:-216.3,y:-231.2},0).wait(1).to({x:-216.4,y:-242.4},0).wait(1).to({x:-216.9,y:-226.5},0).wait(1).to({x:-217,y:-210.7},0).wait(1).to({x:-216.4,y:-194.8},0).wait(1).to({x:-215.2,y:-230.4},0).wait(1).to({x:-213.5,y:-265.9},0).wait(1).to({x:-199.3,y:-230.3},0).wait(1).to({x:-185,y:-194.8},0).wait(1).to({x:-150.7,y:-177.9},0).wait(1).to({x:-116.3,y:-161.2},0).wait(1).to({x:-154.1,y:-148.8},0).wait(1).to({x:-192.9,y:-138.3},0).wait(1).to({x:-203.4,y:-128.7},0).wait(1).to({x:-213.5,y:-119},0).wait(1).to({x:-222.4,y:-126.6},0).wait(1).to({x:-234.1,y:-130.8},0).wait(1).to({x:-246,y:-134.5},0).wait(1).to({x:-246.2,y:-174.5},0).wait(1).to({x:-246.3,y:-214.5},0).wait(1).to({x:-246,y:-254.5},0).wait(1).to({x:-238,y:-231.1},0).wait(1).to({x:-230,y:-207.7},0).wait(1).to({x:-221.9,y:-184.4},0).wait(1).to({x:-213.5,y:-161.2},0).wait(1).to({x:-213.6,y:-140.1},0).wait(1).to({x:-213.7,y:-119.1},0).wait(1).to({x:-213.8,y:-98},0).wait(1).to({y:-77},0).wait(1).to({y:-56},0).wait(1).to({x:-213.5,y:-35},0).wait(1).to({x:-220.1,y:-72.4},0).wait(1).to({x:-226.7,y:-110},0).wait(1).to({x:-233.3,y:-147.5},0).wait(1).to({x:-239.8,y:-185.1},0).wait(1).to({x:-246,y:-222.7},0).wait(1).to({x:-212.5,y:-204.6},0).wait(1).to({x:-179,y:-186.4},0).wait(1).to({x:-145.5,y:-168.5},0).wait(1).to({x:-145.6,y:-163.1},0).wait(1).to({x:-145.7,y:-157.8},0).wait(1).to({x:-145.4,y:-152.5},0).wait(1).to({x:-145.7,y:-209.1},0).wait(1).to({x:-145.4,y:-265.9},0).wait(1).to({x:-145.5,y:-255.7},0).wait(1).to({x:-145.6,y:-245.5},0).wait(1).to({x:-145.7,y:-235.4},0).wait(1).to({y:-225.2},0).wait(1).to({y:-215.1},0).wait(1).to({y:-204.9},0).wait(1).to({x:-145.4,y:-194.8},0).wait(1).to({x:-145.6,y:-186},0).wait(1).to({x:-145.7,y:-177.2},0).wait(1).to({x:-145.4,y:-168.5},0).wait(8));

	// b1
	this.b1 = new lib.MC_Gacha_Gacha_BallBlue();
	this.b1.setTransform(106.5,49.9);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1).to({regX:0.2,regY:0.1,x:106.7,y:50},0).wait(8).to({rotation:-15,x:55.6,y:55.5},0).wait(1).to({rotation:-30,x:4.3,y:58.1},0).wait(1).to({rotation:-45,x:-47,y:56.1},0).wait(1).to({rotation:-60,x:-97.5,y:46.8},0).wait(1).to({rotation:-75,x:-143.2,y:24.1},0).wait(1).to({rotation:-90,x:-170.8,y:-18.3},0).wait(1).to({rotation:-105,x:-171.8,y:-69.3},0).wait(1).to({rotation:-120,x:-157.4,y:-118.5},0).wait(1).to({rotation:-135,x:-135.7,y:-165},0).wait(1).to({rotation:-150,x:-109.7,y:-209.3},0).wait(1).to({x:-112.4,y:-161.5},0).wait(1).to({x:-46.1,y:-77.5},0).wait(1).to({x:37.6,y:-169.1},0).wait(1).to({x:33.6,y:-104.8},0).wait(1).to({x:80.1,y:-152.7},0).wait(1).to({x:118.2,y:-209.8},0).wait(1).to({y:-173.1},0).wait(1).to({y:-136.4},0).wait(1).to({y:-99.7},0).wait(1).to({x:151.5,y:-115.8},0).wait(1).to({x:184.1,y:-134.8},0).wait(1).to({x:217.6,y:-150.7},0).wait(1).to({x:209,y:-130.2},0).wait(1).to({x:197.7,y:-110.7},0).wait(1).to({x:186.1,y:-91.4},0).wait(1).to({x:174.7,y:-71.9},0).wait(1).to({x:165.5,y:-51.5},0).wait(1).to({x:150.4,y:-40.3},0).wait(1).to({x:133.7,y:-31},0).wait(1).to({x:118.2,y:-20.3},0).wait(1).to({x:133.7,y:-86},0).wait(1).to({x:149.6,y:-151.6},0).wait(1).to({x:183.7,y:-132.6},0).wait(1).to({x:217.6,y:-113.2},0).wait(1).to({x:195.9,y:-98.7},0).wait(1).to({x:172.3,y:-86.3},0).wait(1).to({x:148.6,y:-74.1},0).wait(1).to({x:126.6,y:-59.7},0).wait(1).to({x:135.9,y:-55.3},0).wait(1).to({x:146.5,y:-53.6},0).wait(1).to({x:157,y:-52.6},0).wait(1).to({x:167.7,y:-52},0).wait(1).to({x:178.3,y:-51.5},0).wait(1).to({x:183.2,y:-93.7},0).wait(1).to({x:186,y:-136.4},0).wait(1).to({x:190.9,y:-178.7},0).wait(1).to({x:182.5,y:-167.5},0).wait(1).to({x:172.8,y:-157.2},0).wait(1).to({x:163,y:-147},0).wait(1).to({x:153.1,y:-136.8},0).wait(1).to({x:143.3,y:-126.6},0).wait(1).to({x:133.4,y:-116.5},0).wait(1).to({x:123.6,y:-106.2},0).wait(1).to({x:113.9,y:-95.9},0).wait(1).to({x:104.3,y:-85.5},0).wait(1).to({x:95,y:-74.9},0).wait(1).to({x:86,y:-64},0).wait(1).to({x:80,y:-51.5},0).wait(1).to({x:71.2,y:-74.8},0).wait(1).to({x:61.6,y:-98.2},0).wait(1).to({x:52.3,y:-121.6},0).wait(1).to({x:43.3,y:-145.2},0).wait(1).to({x:37.6,y:-169.1},0).wait(1).to({x:58.5,y:-156.2},0).wait(1).to({x:78.4,y:-141.4},0).wait(1).to({x:98.2,y:-126.5},0).wait(1).to({x:118.3,y:-112},0).wait(1).to({x:139.7,y:-99.7},0).wait(1).to({x:154.4,y:-131},0).wait(1).to({x:166.7,y:-163.7},0).wait(1).to({x:181.3,y:-195.1},0).wait(1).to({x:193.7,y:-190.6},0).wait(1).to({x:204.4,y:-182.5},0).wait(1).to({x:213.5,y:-172.8},0).wait(1).to({x:221.7,y:-162.3},0).wait(1).to({x:229.4,y:-151.3},0).wait(1).to({x:236.9,y:-140.3},0).wait(1).to({x:244.6,y:-129.3},0).wait(1).to({x:253.4,y:-119.3},0).wait(8));

	// b11
	this.b11 = new lib.MC_Gacha_Gacha_BallRed();
	this.b11.setTransform(-120.3,-119.1,0.998,0.998,138.2);

	this.timeline.addTween(cjs.Tween.get(this.b11).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,x:-120.5,y:-119},0).wait(8).to({rotation:99.6,x:-115.4,y:-55.5},0).wait(1).to({rotation:61,x:-81.8,y:-3.5},0).wait(1).to({rotation:22.4,x:-19.4,y:-2.3},0).wait(1).to({rotation:-16.1,x:39.2,y:-27.5},0).wait(1).to({rotation:-54.7,x:93.6,y:-60.9},0).wait(1).to({rotation:-93.3,x:145.5,y:-98},0).wait(1).to({rotation:-131.9,x:195.6,y:-137.3},0).wait(1).to({x:151.4,y:-115.3},0).wait(1).to({x:106.2,y:-95.1},0).wait(1).to({x:60,y:-77.6},0).wait(1).to({x:11.7,y:-68.3},0).wait(1).to({x:6.1,y:-82.3},0).wait(1).to({x:12.1,y:-98.8},0).wait(1).to({x:19.8,y:-114.6},0).wait(1).to({x:28,y:-130.2},0).wait(1).to({x:32.3,y:-146},0).wait(1).to({x:75.2,y:-97.8},0).wait(1).to({x:121.4,y:-51.6},0).wait(1).to({x:164,y:-3.1},0).wait(1).to({x:162.9,y:-2.8},0).wait(1).to({x:168.9,y:-7.1},0).wait(1).to({x:174.9,y:-11.4},0).wait(1).to({x:180.9,y:-15.7},0).wait(1).to({x:186.9,y:-20},0).wait(1).to({x:192.9,y:-24.3},0).wait(1).to({x:198.8,y:-28.7},0).wait(1).to({x:204.7,y:-33.1},0).wait(1).to({x:210.5,y:-37.7},0).wait(1).to({x:216.1,y:-43},0).wait(1).to({x:210.7,y:-42.9},0).wait(1).to({x:228.4,y:-112.3},0).wait(1).to({x:245.8,y:-181.9},0).wait(1).to({x:189.5,y:-173.6},0).wait(1).to({x:132.9,y:-166.9},0).wait(1).to({x:76.3,y:-160.5},0).wait(1).to({x:19.7,y:-153.9},0).wait(1).to({x:-36.8,y:-146.9},0).wait(1).to({x:-92.9,y:-137.3},0).wait(1).to({x:-48.9,y:-100.4},0).wait(1).to({x:0.3,y:-67.7},0).wait(1).to({x:49.7,y:-35.5},0).wait(1).to({x:99,y:-2.8},0).wait(1).to({x:143.5,y:33.9},0).wait(1).to({x:172,y:-5},0).wait(1).to({x:202,y:-43.9},0).wait(1).to({x:229.8,y:-83.3},0).wait(1).to({x:225.4,y:-80.7},0).wait(1).to({x:221.7,y:-76.8},0).wait(1).to({x:222.5,y:-72.3},0).wait(1).to({x:226.4,y:-68.9},0).wait(1).to({x:230.7,y:-65.9},0).wait(1).to({x:234.1,y:-62.2},0).wait(1).to({x:233.2,y:-57.7},0).wait(1).to({x:229,y:-54.3},0).wait(1).to({x:224.4,y:-51.9},0).wait(1).to({x:219.7,y:-49.9},0).wait(1).to({x:171.5,y:-54.1},0).wait(1).to({x:123.6,y:-63.8},0).wait(1).to({x:75.9,y:-73.9},0).wait(1).to({x:28.1,y:-83.4},0).wait(1).to({x:-20.3,y:-87.3},0).wait(1).to({x:-42.5,y:-77.5},0).wait(1).to({x:-63.8,y:-65.8},0).wait(1).to({x:-84.7,y:-53.3},0).wait(1).to({x:-105.4,y:-40.4},0).wait(1).to({x:-125.8,y:-27.3},0).wait(1).to({x:-146.5,y:-14.4},0).wait(1).to({x:-196.9,y:-92.3},0).wait(1).to({x:-246.3,y:-171.3},0).wait(1).to({x:-240.8,y:-154},0).wait(1).to({x:-238.3,y:-122.4},0).wait(1).to({x:-238.2,y:-95.9},0).wait(1).to({x:-237,y:-65.2},0).wait(1).to({x:-234,y:-42.7},0).wait(1).to({x:-212.3,y:-22.2},0).wait(1).to({x:-195.2,y:-2.3},0).wait(1).to({x:-159.9,y:15.4},0).wait(1).to({x:-153.7,y:23.8},0).wait(1).to({x:-160.4,y:20.3},0).wait(8));

	// b2
	this.b2 = new lib.MC_Gacha_Gacha_BallRed();
	this.b2.setTransform(174.3,-20.7,0.999,0.999,-158.9);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,rotation:-158.8,x:174.1,y:-20.8},0).wait(8).to({rotation:-130.5,x:150.7,y:-53.9},0).wait(1).to({rotation:-102.2,x:115.3,y:-72.9},0).wait(1).to({rotation:-73.9,x:74.9,y:-72.5},0).wait(1).to({rotation:-45.5,x:36.3,y:-59.7},0).wait(1).to({rotation:-17.2,x:0.4,y:-40.5},0).wait(1).to({rotation:11.1,x:-33.5,y:-17.7},0).wait(1).to({rotation:39.4,x:-65.8,y:7.3},0).wait(1).to({rotation:67.8,x:-96.8,y:33.8},0).wait(1).to({rotation:96.1,x:-126.9,y:61.4},0).wait(1).to({x:-113.7,y:49.7},0).wait(1).to({x:-100.6,y:38},0).wait(1).to({x:-87.4,y:26.3},0).wait(1).to({x:-74.3,y:14.6},0).wait(1).to({x:-61.1,y:2.9},0).wait(1).to({x:-48,y:-8.7},0).wait(1).to({x:-34.8,y:-20.4},0).wait(1).to({x:-39.2,y:-14.5},0).wait(1).to({x:-43.6,y:-8.7},0).wait(1).to({x:-47.9,y:-2.8},0).wait(1).to({x:-52.3,y:3},0).wait(1).to({x:-56.7,y:8.9},0).wait(1).to({x:-61.1,y:14.7},0).wait(1).to({x:-42.6,y:16.3},0).wait(1).to({x:-24.4,y:20.7},0).wait(1).to({x:-6.2,y:25.4},0).wait(1).to({x:12,y:29.8},0).wait(1).to({x:30.5,y:31},0).wait(1).to({x:35.1,y:27.7},0).wait(1).to({x:39.7,y:24.4},0).wait(1).to({x:44.2,y:21},0).wait(1).to({x:8.1,y:8.5},0).wait(1).to({x:-28,y:-4},0).wait(1).to({x:-23.8,y:-49.7},0).wait(1).to({x:-19.6,y:-95.4},0).wait(1).to({x:-36.6,y:-82.7},0).wait(1).to({x:-54.1,y:-69.4},0).wait(1).to({x:-71.6,y:-56.1},0).wait(1).to({x:-88.4,y:-42.9},0).wait(1).to({x:-70.1,y:-36.9},0).wait(1).to({x:-52.6,y:-27.9},0).wait(1).to({x:-35.3,y:-18.7},0).wait(1).to({x:-17.8,y:-9.9},0).wait(1).to({x:0.6,y:-4},0).wait(1).to({x:5.6,y:-48.5},0).wait(1).to({x:8.3,y:-93.5},0).wait(1).to({x:13.2,y:-138.1},0).wait(1).to({x:9.7,y:-128.2},0).wait(1).to({x:2.6,y:-117.9},0).wait(1).to({x:-4.7,y:-107.7},0).wait(1).to({x:-12,y:-97.6},0).wait(1).to({x:-19.4,y:-87.5},0).wait(1).to({x:-26.8,y:-77.3},0).wait(1).to({x:-34,y:-67.1},0).wait(1).to({x:-41.2,y:-56.8},0).wait(1).to({x:-47.9,y:-46.3},0).wait(1).to({x:-51.1,y:-35.1},0).wait(1).to({x:-24.2,y:-49.7},0).wait(1).to({x:2.1,y:-65.4},0).wait(1).to({x:28.3,y:-81.1},0).wait(1).to({x:54.7,y:-96.8},0).wait(1).to({x:81.5,y:-111.7},0).wait(1).to({x:89.7,y:-105},0).wait(1).to({x:94.3,y:-94.6},0).wait(1).to({x:98.1,y:-83.9},0).wait(1).to({x:101.8,y:-73.2},0).wait(1).to({x:105.6,y:-62.5},0).wait(1).to({x:112,y:-53.7},0).wait(1).to({x:76.1,y:-99.7},0).wait(1).to({x:40,y:-145.8},0).wait(1).to({x:52.7,y:-147},0).wait(1).to({x:65.3,y:-143.7},0).wait(1).to({x:76.9,y:-138},0).wait(1).to({x:87.4,y:-130.5},0).wait(1).to({x:96.6,y:-121.4},0).wait(1).to({x:104,y:-110.9},0).wait(1).to({x:108.7,y:-98.8},0).wait(1).to({x:109.1,y:-85.9},0).wait(1).to({x:104.8,y:-73.8},0).wait(1).to({x:96.6,y:-63.8},0).wait(8));

	// b3
	this.b3 = new lib.MC_Gacha_Gacha_BallYellow();
	this.b3.setTransform(-19.6,69.9,0.998,0.998,142.4,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.b3).wait(1).to({regX:0.2,scaleX:1,scaleY:1,rotation:142.5},0).wait(7).to({rotation:124.5,x:-70.6,y:55.1},0).wait(1).to({rotation:106.5,x:-133.4,y:35.9},0).wait(1).to({rotation:88.5,x:-159.2,y:12.7},0).wait(1).to({rotation:70.5,x:-181.3,y:-40.8},0).wait(1).to({rotation:52.5,x:-137.3,y:-34.8},0).wait(1).to({rotation:34.4,x:-83.7,y:-5},0).wait(1).to({rotation:16.4,x:-49.3,y:-26.5},0).wait(1).to({rotation:-1.6,x:5.6,y:-35.5},0).wait(1).to({rotation:-19.6,x:65.9,y:-24.5},0).wait(1).to({rotation:-37.6,x:114.5,y:-6.2},0).wait(1).to({x:109.6,y:-6.4},0).wait(1).to({x:104.8,y:-6.6},0).wait(1).to({x:99.9,y:-6.8},0).wait(1).to({x:95,y:-7},0).wait(1).to({x:90.2,y:-7.2},0).wait(1).to({x:85.3,y:-7.4},0).wait(1).to({x:80.5,y:-7.7},0).wait(1).to({x:75.6,y:-7.9},0).wait(1).to({x:70.7,y:-8.1},0).wait(1).to({x:65.9,y:-8.3},0).wait(1).to({x:61,y:-8.5},0).wait(1).to({x:56.2,y:-8.7},0).wait(1).to({x:51.3,y:-8.9},0).wait(1).to({x:46.4,y:-9.2},0).wait(1).to({x:41.6,y:-9.4},0).wait(1).to({x:36.7,y:-9.6},0).wait(1).to({x:31.9,y:-9.8},0).wait(1).to({x:27,y:-10},0).wait(1).to({x:22.1,y:-10.2},0).wait(1).to({x:17.3,y:-10.4},0).wait(1).to({x:12.4,y:-10.6},0).wait(1).to({x:7.5,y:-10.9},0).wait(1).to({x:2.7,y:-11.1},0).wait(1).to({x:17.3,y:-23.3},0).wait(1).to({x:31.9,y:-35.6},0).wait(1).to({x:3.3,y:-25.8},0).wait(1).to({x:-24.8,y:-15},0).wait(1).to({x:-53.1,y:-4.1},0).wait(1).to({x:-81.6,y:5.6},0).wait(1).to({x:-86.4},0).wait(1).to({x:-91.1,y:5.5},0).wait(1).to({x:-95.8,y:5.4},0).wait(1).to({x:-100.5,y:5.3},0).wait(1).to({x:-105.2,y:5.1},0).wait(1).to({x:-116.9,y:-25.9},0).wait(1).to({x:-126.7,y:-57.9},0).wait(1).to({x:-138.3,y:-89.1},0).wait(1).to({x:-142.7,y:-79.5},0).wait(1).to({x:-142.8,y:-68.2},0).wait(1).to({x:-142.1,y:-56.9},0).wait(1).to({x:-141.1,y:-45.7},0).wait(1).to({x:-139.9,y:-34.4},0).wait(1).to({x:-138.7,y:-23.2},0).wait(1).to({x:-137.6,y:-12},0).wait(1).to({x:-136.6,y:-0.8},0).wait(1).to({x:-136.1,y:10.5},0).wait(1).to({x:-138.3,y:21.4},0).wait(1).to({x:-134.6,y:1.4},0).wait(1).to({x:-129.1,y:-18.7},0).wait(1).to({x:-123.6,y:-38.7},0).wait(1).to({x:-118.2,y:-58.8},0).wait(1).to({x:-114.8,y:-79},0).wait(1).to({x:-136.7,y:-78.7},0).wait(1).to({x:-158.5,y:-78.3},0).wait(1).to({x:-180.4,y:-77.7},0).wait(1).to({x:-202.3,y:-77},0).wait(1).to({x:-224.1,y:-75.8},0).wait(1).to({x:-245.8,y:-73},0).wait(1).to({rotation:-34.8,x:-231.5,y:-68.2},0).wait(1).to({rotation:-32,x:-235.5,y:-62.6},0).wait(1).to({rotation:-29.2,x:-236.5,y:-55.9},0).wait(1).to({rotation:-26.4,x:-234.8,y:-49.3},0).wait(1).to({rotation:-23.6,x:-231.7,y:-43.1},0).wait(1).to({rotation:-20.8,x:-227.8,y:-37.4},0).wait(1).to({rotation:-18,x:-223.4,y:-32.1},0).wait(1).to({rotation:-15.2,x:-218.6,y:-27.2},0).wait(1).to({rotation:-12.4,x:-213.7,y:-22.4},0).wait(1).to({rotation:-9.6,x:-208.5,y:-17.9},0).wait(1).to({rotation:-6.8,x:-203.2,y:-13.6},0).wait(1).to({rotation:-4,x:-197.6,y:-9.6},0).wait(8));

	// b5
	this.b5 = new lib.MC_Gacha_Gacha_BallBlue();
	this.b5.setTransform(-204.3,-29.2,0.999,0.999,63.2);

	this.timeline.addTween(cjs.Tween.get(this.b5).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,y:-28.9},0).wait(7).to({rotation:52.2,x:-223.4,y:-99},0).wait(1).to({rotation:41.3,x:-239.3,y:-179.9},0).wait(1).to({rotation:30.4,x:-193.3,y:-223.4},0).wait(1).to({rotation:19.5,x:-125.2,y:-192.3},0).wait(1).to({rotation:8.6,x:-51.9,y:-203},0).wait(1).to({rotation:-2.3,x:33.1,y:-196.6},0).wait(1).to({rotation:-13.2,x:62.1,y:-200.9},0).wait(1).to({rotation:-24.1,x:118.5,y:-229.6},0).wait(1).to({rotation:-35,x:113.6,y:-165.8},0).wait(1).to({rotation:-45.9,x:160,y:-105.7},0).wait(1).to({rotation:-56.8,x:231.5,y:-86.3},0).wait(1).to({x:236.2,y:-129.6},0).wait(1).to({x:240.9,y:-173},0).wait(1).to({x:245.5,y:-216.4},0).wait(1).to({x:237.2,y:-161.1},0).wait(1).to({x:230.6,y:-105.3},0).wait(1).to({x:221.3,y:-50.2},0).wait(1).to({x:209.2,y:-56},0).wait(1).to({x:198.2,y:-64.1},0).wait(1).to({x:187.6,y:-72.6},0).wait(1).to({x:177.1,y:-81.3},0).wait(1).to({x:166.6,y:-90},0).wait(1).to({x:156.1,y:-98.7},0).wait(1).to({x:145.5,y:-107.4},0).wait(1).to({x:134.8,y:-115.8},0).wait(1).to({x:123.9,y:-124},0).wait(1).to({x:112.4,y:-131.4},0).wait(1).to({x:99.8,y:-136.1},0).wait(1).to({x:95.1,y:-135.9},0).wait(1).to({x:90.4,y:-135.6},0).wait(1).to({x:85.7,y:-135.2},0).wait(1).to({x:73.5,y:-182.6},0).wait(1).to({x:61.4,y:-230.1},0).wait(1).to({x:72.1,y:-174.1},0).wait(1).to({x:82.8,y:-118},0).wait(1).to({x:71.6,y:-94.3},0).wait(1).to({x:62.3,y:-69.6},0).wait(1).to({x:53,y:-44.9},0).wait(1).to({x:41.8,y:-21.2},0).wait(1).to({x:37.9,y:-20.1},0).wait(1).to({x:34,y:-19.1},0).wait(1).to({x:30,y:-18.3},0).wait(1).to({x:26.1,y:-17.5},0).wait(1).to({x:22.1,y:-16.8},0).wait(1).to({x:47.4,y:-71.2},0).wait(1).to({x:74.3,y:-125.2},0).wait(1).to({x:99.8,y:-179.7},0).wait(1).to({x:86.6,y:-170.7},0).wait(1).to({x:74.7,y:-159.8},0).wait(1).to({x:63.2,y:-148.6},0).wait(1).to({x:51.9,y:-137.1},0).wait(1).to({x:40.6,y:-125.6},0).wait(1).to({x:29.4,y:-114.1},0).wait(1).to({x:18.1,y:-102.6},0).wait(1).to({x:6.7,y:-91.2},0).wait(1).to({x:-4.8,y:-80},0).wait(1).to({x:-17.2,y:-69.8},0).wait(1).to({x:-25.6,y:-99.5},0).wait(1).to({x:-30.3,y:-131},0).wait(1).to({x:-34.5,y:-162.4},0).wait(1).to({x:-38.9,y:-193.9},0).wait(1).to({x:-46.1,y:-224.4},0).wait(1).to({x:-41.8,y:-206.3},0).wait(1).to({x:-33.6,y:-188.8},0).wait(1).to({x:-25.1,y:-171.5},0).wait(1).to({x:-16.6,y:-154.2},0).wait(1).to({x:-8.8,y:-136.5},0).wait(1).to({x:-4.5,y:-118},0).wait(1).to({x:-71.1,y:-128.8},0).wait(1).to({x:-137.8,y:-140},0).wait(1).to({x:-141.9,y:-129.4},0).wait(1).to({x:-142.1,y:-118.1},0).wait(1).to({x:-138.9,y:-107.1},0).wait(1).to({x:-133.5,y:-97.1},0).wait(1).to({x:-126.9,y:-87.8},0).wait(1).to({x:-119.4,y:-79.3},0).wait(1).to({x:-111.2,y:-71.3},0).wait(1).to({x:-102.6,y:-63.8},0).wait(1).to({x:-93.6,y:-56.7},0).wait(1).to({x:-84.3,y:-50.2},0).wait(8));

	// b4
	this.b4 = new lib.MC_Gacha_Gacha_BallYellow();
	this.b4.setTransform(-232.6,-99.1,0.999,0.999,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.b4).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,x:-232.4},0).wait(7).to({rotation:-31.8,x:-197.6,y:-52.1},0).wait(1).to({rotation:-46.8,x:-153.9,y:-13.3},0).wait(1).to({rotation:-61.8,x:-102.7,y:14.7},0).wait(1).to({rotation:-76.8,x:-46.6,y:31.2},0).wait(1).to({rotation:-91.8,x:11.5,y:36.8},0).wait(1).to({rotation:-106.8,x:69.9,y:33.1},0).wait(1).to({rotation:-121.8,x:127.3,y:22.1},0).wait(1).to({rotation:-136.8,x:183.4,y:5.2},0).wait(1).to({x:193.7,y:-8.1},0).wait(1).to({x:203.8,y:-21.5},0).wait(1).to({x:213.7,y:-35.2},0).wait(1).to({x:223.1,y:-49.2},0).wait(1).to({x:231.6,y:-63.7},0).wait(1).to({x:235,y:-79.5},0).wait(1).to({x:170.6,y:-84.6},0).wait(1).to({x:106,y:-88.9},0).wait(1).to({x:41.5,y:-94},0).wait(1).to({x:27.9,y:-90.8},0).wait(1).to({x:14.9,y:-85.3},0).wait(1).to({x:2,y:-79.3},0).wait(1).to({x:-10.7,y:-73.2},0).wait(1).to({x:-23.4,y:-67},0).wait(1).to({x:-36.1,y:-60.7},0).wait(1).to({x:-48.8,y:-54.4},0).wait(1).to({x:-61.5,y:-48.1},0).wait(1).to({x:-74.2,y:-41.9},0).wait(1).to({x:-87.1,y:-36},0).wait(1).to({x:-100.5,y:-31.9},0).wait(1).to({x:-113,y:-39},0).wait(1).to({x:-125.6,y:-46},0).wait(1).to({x:-137.9,y:-53.5},0).wait(1).to({x:-148.3,y:-117},0).wait(1).to({x:-158.4,y:-180.7},0).wait(1).to({x:-164.3,y:-130.1},0).wait(1).to({x:-170,y:-79.5},0).wait(1).to({x:-185.6,y:-79.8},0).wait(1).to({x:-201.3,y:-79.4},0).wait(1).to({x:-217,y:-79.1},0).wait(1).to({x:-232.5,y:-79.5},0).wait(1).to({x:-197.7,y:-88.2},0).wait(1).to({x:-162.7,y:-96.4},0).wait(1).to({x:-127.7,y:-104.5},0).wait(1).to({x:-92.7,y:-112.7},0).wait(1).to({x:-57.7,y:-121.3},0).wait(1).to({x:-48.2,y:-177.9},0).wait(1).to({x:-40.2,y:-234.8},0).wait(1).to({x:-30.7,y:-291.6},0).wait(1).to({x:-18,y:-276.6},0).wait(1).to({x:-8.4,y:-259.2},0).wait(1).to({x:0.5,y:-241.4},0).wait(1).to({x:9.3,y:-223.5},0).wait(1).to({x:17.9,y:-205.5},0).wait(1).to({x:26.4,y:-187.5},0).wait(1).to({x:35,y:-169.5},0).wait(1).to({x:43.6,y:-151.5},0).wait(1).to({x:52.5,y:-133.7},0).wait(1).to({x:62.8,y:-116.7},0).wait(1).to({x:90.4,y:-131.2},0).wait(1).to({x:116.9,y:-148},0).wait(1).to({x:143.2,y:-165.2},0).wait(1).to({x:169.4,y:-182.5},0).wait(1).to({x:196,y:-199.1},0).wait(1).to({x:204.2,y:-180},0).wait(1).to({x:210.7,y:-160.2},0).wait(1).to({x:216.9,y:-140.2},0).wait(1).to({x:222.6,y:-120.2},0).wait(1).to({x:227.8,y:-99.9},0).wait(1).to({x:230.3,y:-79.5},0).wait(1).to({x:239.7,y:-135.8},0).wait(1).to({x:247.7,y:-192.2},0).wait(1).to({x:234.3,y:-193.7},0).wait(1).to({x:220.9,y:-192.7},0).wait(1).to({x:207.5,y:-190.7},0).wait(1).to({x:194.3,y:-188},0).wait(1).to({x:181.1,y:-185},0).wait(1).to({x:168,y:-181.6},0).wait(1).to({x:155,y:-178.1},0).wait(1).to({x:142,y:-174.3},0).wait(1).to({x:129.1,y:-170.3},0).wait(1).to({x:116.3,y:-166.2},0).wait(8));

	// b7
	this.b7 = new lib.MC_Gacha_Gacha_BallBlue();
	this.b7.setTransform(50,-48.5,0.998,0.998,43.1);

	this.timeline.addTween(cjs.Tween.get(this.b7).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,rotation:43,x:50.1,y:-48.3},0).wait(7).to({rotation:29.6,x:24.3,y:-74},0).wait(1).to({rotation:16.1,x:-3.6,y:-99.7},0).wait(1).to({rotation:2.6,x:-32,y:-124.3},0).wait(1).to({rotation:-10.9,x:-65.9,y:-134.6},0).wait(1).to({rotation:-24.4,x:-88.6,y:-108.2},0).wait(1).to({rotation:-37.9,x:-100.9,y:-70.9},0).wait(1).to({rotation:-51.4,x:-115.7,y:-47},0).wait(1).to({rotation:-64.9,x:-154.5,y:-53.8},0).wait(1).to({rotation:-78.4,x:-182.1,y:-74.8},0).wait(1).to({rotation:-91.9,x:-208.5,y:-48.7},0).wait(1).to({x:-216.2,y:-60.2},0).wait(1).to({x:-223.5,y:-72},0).wait(1).to({x:-230.1,y:-84.2},0).wait(1).to({x:-232.4,y:-97.2},0).wait(1).to({x:-237.1,y:-119.4},0).wait(1).to({x:-243,y:-141.4},0).wait(1).to({x:-247,y:-163.5},0).wait(1).to({x:-233.1,y:-116.8},0).wait(1).to({x:-220.5,y:-69.4},0).wait(1).to({x:-206.1,y:-22.7},0).wait(1).to({x:-186.1,y:-25.6},0).wait(1).to({x:-166.1,y:-28.7},0).wait(1).to({x:-146,y:-31.8},0).wait(1).to({x:-126,y:-34.9},0).wait(1).to({x:-106,y:-38.1},0).wait(1).to({x:-86,y:-41.4},0).wait(1).to({x:-66,y:-44.7},0).wait(1).to({x:-46.1,y:-48.6},0).wait(1).to({x:-32.7,y:-64.5},0).wait(1).to({x:-20,y:-81.1},0).wait(1).to({x:-6.8,y:-97.2},0).wait(1).to({x:-4.2,y:-132.2},0).wait(1).to({x:-1.9,y:-167.4},0).wait(1).to({x:46.5,y:-202.4},0).wait(1).to({x:95.1,y:-237.4},0).wait(1).to({x:106.2,y:-213.1},0).wait(1).to({x:115.9,y:-188.1},0).wait(1).to({x:125.6,y:-162.9},0).wait(1).to({x:135.6,y:-138.1},0).wait(1).to({x:152.7,y:-128.9},0).wait(1).to({x:169.7,y:-119.5},0).wait(1).to({x:186.6,y:-109.9},0).wait(1).to({x:203.4,y:-100.3},0).wait(1).to({x:220.1,y:-90.5},0).wait(1).to({x:227.8,y:-135.6},0).wait(1).to({x:235.3,y:-180.8},0).wait(1).to({x:242.1,y:-226.1},0).wait(1).to({x:234.6,y:-219},0).wait(1).to({x:228,y:-211},0).wait(1).to({x:221.4,y:-202.9},0).wait(1).to({x:214.9,y:-194.8},0).wait(1).to({x:208.4,y:-186.7},0).wait(1).to({x:201.8,y:-178.7},0).wait(1).to({x:195,y:-170.9},0).wait(1).to({x:188,y:-163.2},0).wait(1).to({x:180.5,y:-155.9},0).wait(1).to({x:172.1,y:-149.9},0).wait(1).to({x:155.1,y:-165.5},0).wait(1).to({x:140.7,y:-184.2},0).wait(1).to({x:126.6,y:-203.2},0).wait(1).to({x:112.2,y:-221.9},0).wait(1).to({x:95.1,y:-237.4},0).wait(1).to({x:77.3,y:-211.6},0).wait(1).to({x:62.8,y:-183.6},0).wait(1).to({x:48.8,y:-155.2},0).wait(1).to({x:35,y:-126.8},0).wait(1).to({x:21.2,y:-98.4},0).wait(1).to({x:5.7,y:-70.9},0).wait(1).to({x:-20.8,y:-135.7},0).wait(1).to({x:-46.1,y:-201.4},0).wait(1).to({x:-50.4,y:-192.4},0).wait(1).to({x:-47.5,y:-182.1},0).wait(1).to({x:-42.5,y:-172.8},0).wait(1).to({x:-36.7,y:-163.9},0).wait(1).to({x:-30.3,y:-155.4},0).wait(1).to({x:-23.7,y:-147.1},0).wait(1).to({x:-16.9,y:-139},0).wait(1).to({x:-10,y:-131},0).wait(1).to({x:-2.9,y:-123.1},0).wait(1).to({x:3.5,y:-114.8},0).wait(8));

	// b8
	this.b8 = new lib.MC_Gacha_Gacha_BallRed();
	this.b8.setTransform(234.5,-116.2,0.998,0.998,43.1);

	this.timeline.addTween(cjs.Tween.get(this.b8).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,rotation:43,x:234.6,y:-116},0).wait(8).to({rotation:29.7,x:230.5,y:-86},0).wait(1).to({rotation:16.4,x:221.4,y:-57.2},0).wait(1).to({rotation:3.1,x:206.3,y:-31.1},0).wait(1).to({rotation:-10.3,x:186.8,y:-7.9},0).wait(1).to({rotation:-23.6,x:142.8,y:22},0).wait(1).to({rotation:-36.9,x:89.6,y:27.6},0).wait(1).to({rotation:-50.2,x:37.5,y:14.8},0).wait(1).to({rotation:-63.6,x:-11.4,y:-7.8},0).wait(1).to({rotation:-76.9,x:-57.4,y:-36},0).wait(1).to({x:-72.4,y:-50.9},0).wait(1).to({x:-87.1,y:-66},0).wait(1).to({x:-101.4,y:-81.4},0).wait(1).to({x:-112.2,y:-98.1},0).wait(1).to({x:-134.1,y:-69.8},0).wait(1).to({x:-157.7,y:-42.3},0).wait(1).to({x:-178.4,y:-13.4},0).wait(1).to({x:-179.9,y:-16},0).wait(1).to({x:-185.1,y:-19.6},0).wait(1).to({x:-190.4,y:-23.1},0).wait(1).to({x:-195.7,y:-26.6},0).wait(1).to({x:-201,y:-30.1},0).wait(1).to({x:-206.3,y:-33.7},0).wait(1).to({x:-211.5,y:-37.3},0).wait(1).to({x:-216.7,y:-41},0).wait(1).to({x:-221.6,y:-44.9},0).wait(1).to({x:-225.9,y:-49.6},0).wait(1).to({x:-220.4,y:-50.6},0).wait(1).to({x:-217.9,y:-49.2},0).wait(1).to({x:-218.6,y:-47.3},0).wait(1).to({x:-215.6,y:-46.1},0).wait(1).to({x:-231.2,y:-100.3},0).wait(1).to({x:-246.7,y:-154.7},0).wait(1).to({x:-222.1,y:-84.1},0).wait(1).to({x:-197.3,y:-13.5},0).wait(1).to({x:-176.1,y:-7.8},0).wait(1).to({x:-154.8,y:-2},0).wait(1).to({x:-133.6,y:3.7},0).wait(1).to({x:-112.4,y:9.5},0).wait(1).to({x:-91.1,y:15.3},0).wait(1).to({x:-69.9,y:21},0).wait(1).to({x:-48.6,y:26.6},0).wait(1).to({x:-27.2,y:32.1},0).wait(1).to({x:-5.8,y:37},0).wait(1).to({x:30.3,y:-2.3},0).wait(1).to({x:63.8,y:-44.7},0).wait(1).to({x:99.7,y:-84.6},0).wait(1).to({x:110.8,y:-79},0).wait(1).to({x:119.3,y:-70},0).wait(1).to({x:126.5,y:-59.7},0).wait(1).to({x:132.8,y:-48.9},0).wait(1).to({x:138.7,y:-37.8},0).wait(1).to({x:144.3,y:-26.6},0).wait(1).to({x:149.9,y:-15.4},0).wait(1).to({x:155.6,y:-4.3},0).wait(1).to({x:162.1,y:6.4},0).wait(1).to({x:170.6,y:15.3},0).wait(1).to({x:183.5,y:-0.2},0).wait(1).to({x:192.9,y:-19.1},0).wait(1).to({x:201.8,y:-38.2},0).wait(1).to({x:210.8,y:-57.4},0).wait(1).to({x:222.2,y:-74.6},0).wait(1).to({x:209.5,y:-60.3},0).wait(1).to({x:193.7,y:-47.9},0).wait(1).to({x:177.6,y:-35.8},0).wait(1).to({x:161.5,y:-23.8},0).wait(1).to({x:145.7,y:-11.4},0).wait(1).to({x:132.1,y:2.9},0).wait(1).to({x:125.1,y:-45.4},0).wait(1).to({x:118.9,y:-94},0).wait(1).to({x:127.2,y:-84},0).wait(1).to({x:135.3,y:-74},0).wait(1).to({x:143.3,y:-63.8},0).wait(1).to({x:151.2,y:-53.6},0).wait(1).to({x:159.1,y:-43.3},0).wait(1).to({x:166.8,y:-32.9},0).wait(1).to({x:174.3,y:-22.4},0).wait(1).to({x:181.6,y:-11.7},0).wait(1).to({x:188.2,y:-0.5},0).wait(1).to({x:183.3,y:2.9},0).wait(8));

	// b6
	this.b6 = new lib.MC_Gacha_Gacha_BallYellow();
	this.b6.setTransform(1.2,-96.8,0.999,0.999,90);

	this.timeline.addTween(cjs.Tween.get(this.b6).wait(8).to({rotation:0,x:-225.8},5).to({rotation:-28,x:-169.3,y:19.1},6).to({rotation:13,x:-143.5,y:23.3},5).to({rotation:109,x:20.1,y:-100.7},11).to({rotation:30,x:99.1,y:-195.7},3).to({scaleX:1,scaleY:1,x:124.9,y:-45.9},2).to({scaleX:1,scaleY:1,x:21.8,y:-204.7},2).to({rotation:0,x:105.1,y:-58.7},9).to({x:115.1,y:-189.7},3).to({x:130.1,y:-27.4},10).to({rotation:-22.5,x:141.1,y:-269.4},5).to({rotation:22.5,x:101.5,y:-159.4},6).to({rotation:-7.5,y:-240.4},2).to({x:230.5,y:-64.5},10).wait(8));

	// b10
	this.b10 = new lib.MC_Gacha_Gacha_BallBlue();
	this.b10.setTransform(125.7,-135.2,0.999,0.999,169.7);

	this.timeline.addTween(cjs.Tween.get(this.b10).wait(1).to({regX:0.2,regY:0.1,scaleX:1,scaleY:1,x:125.5},0).wait(8).to({rotation:161.4,x:87.4,y:-97.1},0).wait(1).to({rotation:153,x:49.3,y:-59.2},0).wait(1).to({rotation:144.7,x:10.9,y:-21.6},0).wait(1).to({rotation:136.3,x:-27.8,y:15.7},0).wait(1).to({rotation:128,x:-67.8,y:51.7},0).wait(1).to({rotation:119.6,x:-62.2,y:29.9},0).wait(1).to({rotation:111.3,x:-28.3,y:-11.7},0).wait(1).to({rotation:102.9,x:6.4,y:-52.8},0).wait(1).to({rotation:94.6,x:41.5,y:-93.6},0).wait(1).to({x:-14.2,y:-68},0).wait(1).to({x:-69.7,y:-41.9},0).wait(1).to({x:-124.8,y:-14.8},0).wait(1).to({x:-177.3,y:16.5},0).wait(1).to({x:-195.5,y:-16.4},0).wait(1).to({x:-212.6,y:-50.4},0).wait(1).to({x:-230.3,y:-83.7},0).wait(1).to({x:-197.1,y:-37.8},0).wait(1).to({x:-163,y:7.4},0).wait(1).to({x:-129.5,y:53.2},0).wait(1).to({x:-104.5,y:54.8},0).wait(1).to({x:-78.9,y:51.9},0).wait(1).to({x:-53.5,y:48.3},0).wait(1).to({x:-28,y:44.4},0).wait(1).to({x:-2.7,y:40.4},0).wait(1).to({x:22.6,y:36.3},0).wait(1).to({x:48.1,y:32.3},0).wait(1).to({x:73.5,y:28.4},0).wait(1).to({x:98.9,y:24.8},0).wait(1).to({x:124.5,y:21.8},0).wait(1).to({x:149.7,y:22.9},0).wait(1).to({x:187.4,y:-23.9},0).wait(1).to({x:224.9,y:-70.8},0).wait(1).to({x:212.8,y:-54.7},0).wait(1).to({x:198.7,y:-40.1},0).wait(1).to({x:184.3,y:-25.7},0).wait(1).to({x:169.9,y:-11.3},0).wait(1).to({x:155.7,y:3.2},0).wait(1).to({x:142.7,y:18.8},0).wait(1).to({x:79.5,y:18.3},0).wait(1).to({x:16,y:14.9},0).wait(1).to({x:-47.4,y:11.3},0).wait(1).to({x:-110.8,y:8},0).wait(1).to({x:-174.2,y:7.4},0).wait(1).to({x:-197.5,y:-31.1},0).wait(1).to({x:-219.5,y:-70.7},0).wait(1).to({x:-242,y:-109.8},0).wait(1).to({x:-237.2,y:-96.2},0).wait(1).to({x:-230.8,y:-83.1},0).wait(1).to({x:-224,y:-70.3},0).wait(1).to({x:-216.9,y:-57.6},0).wait(1).to({x:-209.6,y:-45},0).wait(1).to({x:-202.1,y:-32.6},0).wait(1).to({x:-194.3,y:-20.3},0).wait(1).to({x:-186.3,y:-8.1},0).wait(1).to({x:-178,y:3.7},0).wait(1).to({x:-168.8,y:15},0).wait(1).to({x:-107.9,y:2.9},0).wait(1).to({x:-47.8,y:-15},0).wait(1).to({x:12.1,y:-33.5},0).wait(1).to({x:72.2,y:-51.6},0).wait(1).to({x:133.2,y:-64.4},0).wait(1).to({x:142.2,y:-53.8},0).wait(1).to({x:148.4,y:-41.2},0).wait(1).to({x:153.2,y:-28},0).wait(1).to({x:157,y:-14.5},0).wait(1).to({x:160.1,y:-0.8},0).wait(1).to({x:162.3,y:13},0).wait(1).to({x:59.5,y:-28.7},0).wait(1).to({x:-43.4,y:-70.5},0).wait(1).to({x:-38.8,y:-46.3},0).wait(1).to({x:-26.4,y:-24.8},0).wait(1).to({x:-10.9,y:-5.3},0).wait(1).to({x:6.5,y:12.4},0).wait(1).to({x:25.3,y:28.6},0).wait(1).to({x:45.6,y:43},0).wait(1).to({x:67.4,y:55},0).wait(1).to({x:90.7,y:63.5},0).wait(1).to({x:115.4,y:65},0).wait(1).to({x:136.8,y:53.2},0).wait(8));

	// b9
	this.b9 = new lib.MC_Gacha_Gacha_BallRed();
	this.b9.setTransform(-90,-10,1.007,1.007,43.1);

	this.timeline.addTween(cjs.Tween.get(this.b9).wait(1).to({regX:0.2,regY:0.1,rotation:43,x:-89.9,y:-9.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({rotation:29.3,x:-125.5,y:-35.4},0).wait(1).to({rotation:15.5,x:-156.5,y:-84.9},0).wait(1).to({rotation:1.8,x:-187.8,y:-134.4},0).wait(1).to({rotation:-12,x:-228.3,y:-170.8},0).wait(1).to({rotation:-6,x:-186.4,y:-143.6},0).wait(1).to({rotation:0,x:-124.7,y:-142.4},0).wait(1).to({rotation:6,x:-63.2,y:-149.5},0).wait(1).to({rotation:12,x:-5.3,y:-170.1},0).wait(1).to({rotation:18,x:-18.7,y:-218.3},0).wait(1).to({rotation:9.8,x:-73.5,y:-179.2},0).wait(1).to({rotation:1.5,x:-128.2,y:-139.6},0).wait(1).to({rotation:-6.7,x:-182.2,y:-99.2},0).wait(1).to({rotation:-15,x:-231.8,y:-55.2},0).wait(1).to({rotation:-10,x:-214.8,y:-115.8},0).wait(1).to({rotation:-5,x:-199.7,y:-177.2},0).wait(1).to({rotation:0,x:-181.5,y:-237.4},0).wait(1).to({rotation:-14.5,x:-175.7,y:-214.7},0).wait(1).to({rotation:-29.1,x:-174.4,y:-190.8},0).wait(1).to({rotation:-43.6,x:-173.8,y:-166.8},0).wait(1).to({rotation:-58.2,x:-173.4,y:-142.8},0).wait(1).to({rotation:-72.7,x:-173.2,y:-118.8},0).wait(1).to({rotation:-87.3,x:-172.9,y:-94.8},0).wait(1).to({rotation:-101.8,x:-172.3,y:-70.8},0).wait(1).to({rotation:-116.4,x:-171.4,y:-46.9},0).wait(1).to({rotation:-130.9,x:-169.7,y:-22.8},0).wait(1).to({rotation:-145.5,x:-166.4,y:0.9},0).wait(1).to({rotation:-160,x:-156,y:21.6},0).wait(1).to({rotation:-176.2,x:-144.5,y:22.9},0).wait(1).to({rotation:-192.4,x:-132.9,y:23.9},0).wait(1).to({rotation:-208.6,x:-121.3,y:25.4},0).wait(1).to({rotation:-224.8,x:-153.5,y:-16.9},0).wait(1).to({rotation:-241,x:-185.5,y:-59.3},0).wait(1).to({rotation:-250.5,x:-150.6,y:-7.6},0).wait(1).to({rotation:-260.1,x:-115.6,y:44.1},0).wait(1).to({rotation:-269.6,x:-93.2,y:22.5},0).wait(1).to({rotation:-279.2,x:-76,y:-4.6},0).wait(1).to({rotation:-288.7,x:-59.9,y:-32.2},0).wait(1).to({rotation:-298.3,x:-44.1,y:-60.2},0).wait(1).to({rotation:-307.8,x:-28.4,y:-88.2},0).wait(1).to({rotation:-317.4,x:-12.5,y:-116.1},0).wait(1).to({rotation:-326.9,x:3.9,y:-143.7},0).wait(1).to({rotation:-336.5,x:21.6,y:-170.5},0).wait(1).to({rotation:-346,x:44.9,y:-191.2},0).wait(1).to({rotation:-346.8,x:5.5,y:-130.5},0).wait(1).to({rotation:-347.7,x:-37.6,y:-71.6},0).wait(1).to({rotation:-348.5,x:-77.5,y:-11},0).wait(1).to({rotation:-349.3,x:-65,y:-6.5},0).wait(1).to({rotation:-350.2,x:-53.7,y:0.4},0).wait(1).to({rotation:-351,x:-43,y:8.3},0).wait(1).to({rotation:-351.8,x:-32.7,y:16.7},0).wait(1).to({rotation:-352.7,x:-22.7,y:25.4},0).wait(1).to({rotation:-353.5,x:-12.8,y:34.3},0).wait(1).to({rotation:-354.3,x:-3.1,y:43.3},0).wait(1).to({rotation:-355.2,x:6.7,y:52.3},0).wait(1).to({rotation:-356,x:16.7,y:61.1},0).wait(1).to({rotation:-356.8,x:27.4,y:68.9},0).wait(1).to({rotation:-357.7,x:-14.8,y:36.8},0).wait(1).to({rotation:-358.5,x:-58,y:4.9},0).wait(1).to({rotation:-359.3,x:-101.1,y:-26.9},0).wait(1).to({rotation:-360.2,x:-144.4,y:-58.8},0).wait(1).to({rotation:-361,x:-187,y:-91},0).wait(1).to({rotation:-361.8,x:-180.9,y:-74.1},0).wait(1).to({rotation:-362.7,x:-177.9,y:-56.1},0).wait(1).to({rotation:-363.5,x:-175.5,y:-38},0).wait(1).to({rotation:-364.3,x:-173.5,y:-19.8},0).wait(1).to({rotation:-365.2,x:-171.5,y:-1.6},0).wait(1).to({rotation:-366,x:-169.1,y:16.4},0).wait(1).to({rotation:-366.8,x:13.2,y:-47.8},0).wait(1).to({rotation:-367.7,x:195.7,y:-112.5},0).wait(1).to({rotation:-368.5,x:157.8,y:-98.5},0).wait(1).to({rotation:-369.3,x:115.9,y:-92.4},0).wait(1).to({rotation:-370.2,x:73.7,y:-87.7},0).wait(1).to({rotation:-371,x:31.5,y:-83.9},0).wait(1).to({rotation:-371.8,x:-10.7,y:-80.7},0).wait(1).to({rotation:-372.7,x:-53,y:-78.2},0).wait(1).to({rotation:-373.5,x:-95.3,y:-76.3},0).wait(1).to({rotation:-374.3,x:-137.7,y:-75.3},0).wait(1).to({rotation:-375.2,x:-180.1,y:-75.7},0).wait(1).to({rotation:-376,x:-221.9,y:-81.6},0).wait(8));

	// body2
	this.body2 = new lib.MC_Gacha_Gacha_Body2();
	this.body2.setTransform(-2.1,60.6);

	this.timeline.addTween(cjs.Tween.get(this.body2).wait(95));

	// back0
	this.back0 = new lib.MC_Gacha_Gacha_Back0();
	this.back0.setTransform(0,-170);

	this.timeline.addTween(cjs.Tween.get(this.back0).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1023.9,-768,2047.9,1536);


(lib.MC_Gacha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,moved:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this["gacha"].gotoAndPlay("on2");
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(61).call(this.frame_61).wait(3).call(this.frame_64).wait(1));

	// gacha
	this.gacha = new lib.MC_Gacha_MoveGacha();
	this.gacha.setTransform(-3.7,380.1,1.2,1.2,0,0,0,-3.1,317.8);

	this.timeline.addTween(cjs.Tween.get(this.gacha).wait(1).to({regX:0,regY:0,x:0,y:-1.3},0).wait(5).to({rotation:0.1,x:1.6,y:-1.8},0).wait(1).to({rotation:0.2,x:3.3,y:-2.3},0).wait(1).to({rotation:0.1,x:1.4,y:-1.8},0).wait(1).to({rotation:0,x:-0.4,y:-1.3},0).wait(1).to({rotation:-0.1,x:-2,y:-1.8},0).wait(1).to({rotation:-0.2,x:-3.6,y:-2.3},0).wait(1).to({rotation:-0.1,x:-1.6,y:-1.8},0).wait(1).to({rotation:0,x:0.5,y:-1.3},0).wait(1).to({rotation:0.5,x:10.7,y:-2.3},0).wait(1).to({rotation:0,x:0},0).wait(1).to({rotation:-0.5,x:-9.3,y:-1.4},0).wait(1).to({rotation:0,x:0},0).wait(1).to({x:1.2,y:-3.4},0).wait(1).to({x:3.9,y:-3.7},0).wait(1).to({x:0,y:-4},0).wait(1).to({rotation:-0.7,x:-4.5,y:-4.4},0).wait(1).to({rotation:-1.3,x:-9,y:-4.6},0).wait(1).to({rotation:-2,x:-13.6,y:-4.9},0).wait(1).to({rotation:-1,x:-7,y:-5},0).wait(1).to({rotation:0,x:-0.4,y:-5.1},0).wait(1).to({rotation:0.5,x:2.8},0).wait(1).to({rotation:1,x:6.1,y:-5},0).wait(1).to({rotation:0.3,x:1,y:-3.7},0).wait(1).to({rotation:-0.5,x:-4.1,y:-2.3},0).wait(1).to({rotation:0.3,x:0.8,y:-7.8},0).wait(1).to({rotation:1,x:5.7,y:-13.2},0).wait(1).to({rotation:0.5,x:2.9,y:-7.3},0).wait(1).to({rotation:0,x:0.1,y:-1.3},0).wait(1).to({rotation:-1.5,x:-8.3,y:-14.3},0).wait(1).to({rotation:-3,x:-16,y:-27},0).wait(1).to({rotation:0,x:0,y:-13.3},0).wait(1).to({rotation:3,x:26.9,y:-31.6},0).wait(1).to({rotation:0,x:0.1,y:-4.3},0).wait(1).to({rotation:-1,x:-6.7,y:-1.3},0).wait(1).to({rotation:0,x:5},0).wait(1).to({rotation:1.5,x:11.3,y:-10.5},0).wait(1).to({scaleY:1.2,rotation:3,x:17.6,y:-19.3},0).wait(1).to({rotation:1.5,x:8.8,y:-10.2},0).wait(1).to({rotation:0,x:0,y:-0.8},0).wait(1).to({scaleY:1.2,rotation:-2,x:-18.3,y:-8.6},0).wait(1).to({rotation:-1,x:-9.2,y:-4.6},0).wait(1).to({scaleY:1.2,rotation:0,x:0,y:-0.5},0).wait(1).to({scaleY:1.2,y:-0.7},0).wait(1).to({scaleY:1.2,y:-0.9},0).wait(1).to({y:-1.1},0).wait(1).to({scaleY:1.2,y:-1.3},0).wait(1).to({scaleY:1.14,y:34.2},0).wait(1).to({scaleY:1.09,x:0.1,y:69.7},0).wait(1).to({scaleY:1.03,y:105.2},0).wait(1).to({scaleY:0.97,y:140.7},0).wait(1).to({scaleY:0.92,x:0.2,y:176.2},0).wait(1).to({scaleY:0.86,y:211.7},0).wait(1).to({scaleX:1.1,scaleY:0.9,x:0.1,y:-47.4},0).wait(1).to({scaleX:1,scaleY:0.94,x:0,y:-306.5},0).wait(1).to({scaleX:0.62,scaleY:1.2,x:-1.6,y:-204.1},0).wait(1).to({scaleX:0.85,x:-0.9,y:-68},0).wait(1).to({scaleX:1.2,scaleY:1.17,x:0.2,y:16.6},0).wait(1).to({scaleY:1.18,y:8.3},0).wait(1).to({scaleY:1.2,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1228.3,-922.9,2456.6,1843.2);


// stage content:



(lib.gacha_js = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene2:5,scene3:10});

	// timeline functions:
	this.frame_0 = function() {
		
		this.cacher = function(obj, cache_x, cache_y, cache_w, cache_h) {
			try {
				obj.updateCache();
			}
			catch(e) {
				obj.cache( cache_x, cache_y, cache_w, cache_h );
			}
		}
		
		this.setHitArea = function(target, hit_x, hit_y, hit_w, hit_h) {
			if(target.hitArea == null) {
				var hitObject = new createjs.Shape();
			  hitObject.graphics.beginFill("#000000").drawRect( hit_x, hit_y, hit_w, hit_h );
				this.cacher( hitObject, hit_x, hit_y, hit_w, hit_h );
				target.hitArea = hitObject;
			}
		}
		
		
		
		this.firstTap = function(e) {
			if( exportRoot.nowScene != exportRoot.SCENE1 ) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			
			exportRoot.gotoAndPlay("scene2");
		}
		
		this.linkTap1 = function(e) {
			if(( exportRoot.nowScene != exportRoot.SCENE2 ) && ( exportRoot.nowScene != exportRoot.SCENE3 )) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			window.open( exportRoot._url1 );
		}
		this.linkTap2 = function(e) {
			if(( exportRoot.nowScene != exportRoot.SCENE2 ) && ( exportRoot.nowScene != exportRoot.SCENE3 )) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			window.open( exportRoot._url2 );
		}
		this.linkTap3 = function(e) {
			if(( exportRoot.nowScene != exportRoot.SCENE2 ) && ( exportRoot.nowScene != exportRoot.SCENE3 )) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			window.open( exportRoot._url3 );
		}
		this.linkTap4 = function(e) {
			if(( exportRoot.nowScene != exportRoot.SCENE2 ) && ( exportRoot.nowScene != exportRoot.SCENE3 )) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			window.open( exportRoot._url4 );
		}
		this.linkTap5 = function(e) {
			if(( exportRoot.nowScene != exportRoot.SCENE2 ) && ( exportRoot.nowScene != exportRoot.SCENE3 )) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			window.open( exportRoot._url5 );
		}
		
		this.inputTap = function(e) {
			if( exportRoot.nowScene != exportRoot.SCENE3 ) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			location.replace( exportRoot._url_address );
		}
		
		this.backTap = function(e) {
			if( exportRoot.nowScene != exportRoot.SCENE3 ) {
				return;
			}
			exportRoot.nowScene = exportRoot.SCENE0;
			location.replace( exportRoot._backUrl );
		}
		this.cacher(this["bg1"], -1024, -768, 2048, 1536);
		this.cacher(this["bg2"], -1024, -768, 2048, 1536);
		this.cacher(this["inputBtn"], -431, -69, 862, 138);
		this.cacher(this["backBtn"], -252.5, -69, 505, 138);
		this.cacher(this["item"], -400, -400, 800, 800);
		this.cacher(this["msg"], -1024, -59, 2048, 118);
		this.cacher(this["kanban"], -357, -500, 714, 1000);
		this.cacher(this["board"], -235, -191.5, 570, 383);
		this.cacher(this["gacha"]["gacha"]["back0"], -334, -334, 668, 668);
		this.cacher(this["gacha"]["gacha"]["body2"], -284, -600, 568, 1200);
		this.cacher(this["gacha"]["gacha"]["body1"], -334, -456, 668, 912);
		this.cacher(this["gacha"]["gacha"]["body0"], -120, -268, 240, 536);
		this.cacher(this["gacha"]["gacha"]["flash"]["flash"], -568, -568, 1136, 1136);
		this.cacher(this["gacha"]["gacha"]["flash"]["white"], -1024, -768, 2048, 1536);
		this.cacher(this["touch"]["touch"], -1024, -768, 2048, 1536);
		this.cacher(this["whiteout"]["white"], -1024, -768, 2048, 1536);
		
		for(var i=0; i<14; i++) {
			this.cacher(this["fubuki"]["fb" + i]["kami"], -30, -35, 60, 70);
			if(i < 12) {
				this.cacher( this["gacha"]["gacha"]["b" + i], -80, -80, 160, 160);
				
				if(i < 5) {
					this.cacher(this["linkBtn" + (i+1)], -202, -55.5, 404, 111);
					
					if(i < 3) {
						this.cacher(this["kiras0"]["k" + i]["kira"], -70, -70, 140, 140);
						this.cacher(this["kiras1"]["k" + i]["kira"], -70, -70, 140, 140);
						this.cacher(this["kiras2"]["k" + i]["kira"], -70, -70, 140, 140);
				
						this.cacher( this["gacha"]["gacha"]["balls" + i]["bb"], -80, -80, 160, 160);
						this.cacher( this["gacha"]["gacha"]["balls" + i]["rb"], -80, -80, 160, 160);
						this.cacher( this["gacha"]["gacha"]["balls" + i]["yb"], -80, -80, 160, 160);
					}
				}
			}
		}
		this._backUrl = backUrl;
		this._settled = settled;
		this._prize1 = prize1;
		this._prize2 = prize2;
		this._prize3 = prize3;
		this._prize4 = prize4;
		this._prize5 = prize5;
		this._url1 = url1;
		this._url2 = url2;
		this._url3 = url3;
		this._url4 = url4;
		this._url5 = url5;
		this._url_address = url_address;
		this._deli = delit;
		this._result = result;
		
		this.SCENE0 = 0;
		this.SCENE1 = 1;
		this.SCENE2 = 2;
		this.SCENE3 = 3;
		this.nowScene = this.SCENE0;
		
		
		if( !this["tap_area1"].hasEventListener("mousedown") ) {
			this["tap_area1"].addEventListener("mousedown", this.firstTap);
		}
		
		this.nowScene = this.SCENE1;
		
		if(this._settled == 1) {
			this.gotoAndPlay("scene3");
		}
		else {
			this.stop();
		}
	}
	this.frame_5 = function() {
		try {
			var audio = document.getElementById('se');
			audio.play();
		}
		catch(e){};
		
		this.nowScene = this.SCENE2;
		
		var i = 0;
		for(i=1; i<=5; i++) {
			if( this["_url" + i] == "" ) {
				this["linkBtn" + i].visible = this["linkBtn_area" + i].visible = false;
			}
			else {
				this["linkBtn" + i].visible = this["linkBtn_area" + i].visible = true;
				if( !this["linkBtn_area" + i].hasEventListener("mousedown") ) {
					this["linkBtn_area" + i].addEventListener("mousedown", this["linkTap" + i]);
				}
			}
		}
		
		this["gacha"]["gacha"].gotoAndPlay("on");
		
		this.stop();
	}
	this.frame_10 = function() {
		if( !this["backBtn_area"].hasEventListener("mousedown") ) {
			this["backBtn_area"].addEventListener("mousedown", this.backTap);
		}
		
		
		i = 0;
		for(i=1; i<=5; i++) {
			if( this["_url" + i] == "" ) {
				this["linkBtn" + i].visible = this["linkBtn_area" + i].visible = false;
			}
			else {
				this["linkBtn" + i].visible = this["linkBtn_area" + i].visible = true;
				if( !this["linkBtn_area" + i].hasEventListener("mousedown") ) {
					this["linkBtn_area" + i].addEventListener("mousedown", this["linkTap" + i]);
				}
			}
		}
		
		if(this._deli == 1) {
			this["inputBtn"].visible = this["inputBtn_area"].visible = true;
			if( !this["inputBtn_area"].hasEventListener("mousedown") ) {
				this["inputBtn_area"].addEventListener("mousedown", this.inputTap);
			}
		}
		else {
			this["inputBtn"].visible = this["inputBtn_area"].visible = false;
		}
		
		if(this._result == 1) {
			this["msg"].visible = true;
			
			this["fubuki"].visible = true;
			
			this["kiras2"].visible = true;
			this["kiras1"].visible = true;
			this["kiras0"].visible = true;
		}
		else if(this._result == 2) {
			this["msg"].visible = false;
			
			this["fubuki"].visible = true;
			
			this["kiras2"].visible = true;
			this["kiras1"].visible = true;
			this["kiras0"].visible = true;
		}
		else if(this._result == 3) {
			this["msg"].visible = false;
			
			this["fubuki"].visible = false;
			
			this["kiras2"].visible = true;
			this["kiras1"].visible = true;
			this["kiras0"].visible = true;
		}
		else if(this._result == 4) {
			this["msg"].visible = false;
			
			this["fubuki"].visible = false;
			
			this["kiras2"].visible = false;
			this["kiras1"].visible = true;
			this["kiras0"].visible = true;
		}
		else {
			this["msg"].visible = false;
			
			this["fubuki"].visible = false;
			
			this["kiras2"].visible = false;
			this["kiras1"].visible = false;
			this["kiras0"].visible = true;
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(5));

	// linkBtn_area1
	this.linkBtn_area1 = new lib.MC_White();
	this.linkBtn_area1.setTransform(204,80,0.197,0.072);
	this.linkBtn_area1.alpha = 0.012;
	this.linkBtn_area1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area1).wait(4).to({_off:false},0).wait(11));

	// linkBtn_area2
	this.linkBtn_area2 = new lib.MC_White();
	this.linkBtn_area2.setTransform(614,80,0.197,0.072);
	this.linkBtn_area2.alpha = 0.012;
	this.linkBtn_area2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area2).wait(4).to({_off:false},0).wait(11));

	// linkBtn_area3
	this.linkBtn_area3 = new lib.MC_White();
	this.linkBtn_area3.setTransform(1024,80,0.197,0.072);
	this.linkBtn_area3.alpha = 0.012;
	this.linkBtn_area3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area3).wait(4).to({_off:false},0).wait(11));

	// linkBtn_area4
	this.linkBtn_area4 = new lib.MC_White();
	this.linkBtn_area4.setTransform(1434,80,0.197,0.072);
	this.linkBtn_area4.alpha = 0.012;
	this.linkBtn_area4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area4).wait(4).to({_off:false},0).wait(11));

	// linkBtn_area5
	this.linkBtn_area5 = new lib.MC_White();
	this.linkBtn_area5.setTransform(1844,80,0.197,0.072);
	this.linkBtn_area5.alpha = 0.012;
	this.linkBtn_area5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area5).wait(4).to({_off:false},0).wait(11));

	// inputBtn_area
	this.inputBtn_area = new lib.MC_White();
	this.inputBtn_area.setTransform(480,1391,0.421,0.09);
	this.inputBtn_area.alpha = 0.012;
	this.inputBtn_area._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inputBtn_area).wait(10).to({_off:false},0).wait(5));

	// backBtn_area
	this.backBtn_area = new lib.MC_White();
	this.backBtn_area.setTransform(1765,1391,0.247,0.09);
	this.backBtn_area.alpha = 0.012;
	this.backBtn_area._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backBtn_area).wait(10).to({_off:false},0).wait(5));

	// tap_area1
	this.tap_area1 = new lib.MC_White();
	this.tap_area1.setTransform(1024,768);
	this.tap_area1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.tap_area1).to({_off:true},5).wait(10));

	// duummy
	this.dummy = new lib.MC_White();
	this.dummy.setTransform(1024,768);
	this.dummy.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dummy).wait(15));

	// whiteout
	this.whiteout = new lib.MC_WhiteOut();
	this.whiteout.setTransform(1024,768);
	this.whiteout._off = true;

	this.timeline.addTween(cjs.Tween.get(this.whiteout).wait(10).to({_off:false},0).wait(5));

	// touch
	this.touch = new lib.MC_Touch();
	this.touch.setTransform(1024,768);

	this.timeline.addTween(cjs.Tween.get(this.touch).to({_off:true},5).wait(10));

	// gacha
	this.gacha = new lib.MC_Gacha();
	this.gacha.setTransform(1024.9,768,0.834,0.833,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.gacha).to({_off:true},10).wait(5));

	// board
	this.board = new lib.MC_Board();
	this.board.setTransform(1682.5,1160.5);

	this.timeline.addTween(cjs.Tween.get(this.board).to({_off:true},10).wait(5));

	// kanban
	this.kanban = new lib.MC_Kanban();
	this.kanban.setTransform(1682.1,1371.6);

	this.timeline.addTween(cjs.Tween.get(this.kanban).to({_off:true},10).wait(5));

	// linkBtn1
	this.linkBtn1 = new lib.MC_LinkBtn1();
	this.linkBtn1.setTransform(204,80);
	this.linkBtn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn1).wait(5).to({_off:false},0).wait(10));

	// linkBtn2
	this.linkBtn2 = new lib.MC_LinkBtn2();
	this.linkBtn2.setTransform(614,80);
	this.linkBtn2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn2).wait(5).to({_off:false},0).wait(10));

	// linkBtn3
	this.linkBtn3 = new lib.MC_LinkBtn3();
	this.linkBtn3.setTransform(1024,80);
	this.linkBtn3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn3).wait(5).to({_off:false},0).wait(10));

	// linkBtn4
	this.linkBtn4 = new lib.MC_LinkBtn4();
	this.linkBtn4.setTransform(1434,80);
	this.linkBtn4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn4).wait(5).to({_off:false},0).wait(10));

	// linkBtn5
	this.linkBtn5 = new lib.MC_LinkBtn5();
	this.linkBtn5.setTransform(1844,80);
	this.linkBtn5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn5).wait(5).to({_off:false},0).wait(10));

	// fubuki
	this.fubuki = new lib.MC_Fubuki();
	this.fubuki.setTransform(1024,768);
	this.fubuki._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fubuki).wait(10).to({_off:false},0).wait(5));

	// kiras2
	this.kiras2 = new lib.MC_Kiras2();
	this.kiras2.setTransform(1094.7,768.7,1,1,0,0,0,70.7,0.7);
	this.kiras2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kiras2).wait(10).to({_off:false},0).wait(5));

	// kiras1
	this.kiras1 = new lib.MC_Kiras1();
	this.kiras1.setTransform(1094.7,768.7,1,1,0,0,0,70.7,0.7);
	this.kiras1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kiras1).wait(10).to({_off:false},0).wait(5));

	// kiras0
	this.kiras0 = new lib.MC_Kiras0();
	this.kiras0.setTransform(1024,768);
	this.kiras0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kiras0).wait(10).to({_off:false},0).wait(5));

	// msg
	this.msg = new lib.MC_Msg();
	this.msg.setTransform(1024,1236);
	this.msg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msg).wait(10).to({_off:false},0).wait(5));

	// item
	this.item = new lib.MC_Item();
	this.item.setTransform(1024,768);
	this.item._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item).wait(10).to({_off:false},0).wait(5));

	// backBtn
	this.backBtn = new lib.MC_BackBtn();
	this.backBtn.setTransform(1765,1391);
	this.backBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(10).to({_off:false},0).wait(5));

	// inputBtn
	this.inputBtn = new lib.MC_InputBtn();
	this.inputBtn.setTransform(480,1391);
	this.inputBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inputBtn).wait(10).to({_off:false},0).wait(5));

	// bg2
	this.bg2 = new lib.MC_Bg2();
	this.bg2.setTransform(1024,768);
	this.bg2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(10).to({_off:false},0).wait(5));

	// bg1
	this.bg1 = new lib.MC_Bg1();
	this.bg1.setTransform(1024,768);

	this.timeline.addTween(cjs.Tween.get(this.bg1).to({_off:true},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1024,766.9,2048,1877.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;