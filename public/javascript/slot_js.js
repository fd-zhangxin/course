(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 2048,
	height: 1536,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"../../../images/BG.jpg", id:"BG"},
		{src:"../../../images/btn1.png", id:"btn1"},
		{src:"../../../images/btn2.png", id:"btn2"},
		{src:"../../../images/btn3.png", id:"btn3"},
		{src:"../../../images/btn4.png", id:"btn4"},
		{src:"../../../images/btn5.png", id:"btn5"},
		{src:"../../../images/btn6.png", id:"btn6"},
		{src:"../../../images/btn7.png", id:"btn7"},
		{src:"../../../images/design1.png", id:"design1"},
		{src:"../../../images/design2.png", id:"design2"},
		{src:"../../../images/design3.png", id:"design3"},
		{src:"../../../images/design4.png", id:"design4"},
		{src:"../../../images/design5.png", id:"design5"},
		{src:"../../../images/image.png", id:"image"},
		{src:"../../../images/message.png", id:"message"},
		{src:"../../../images/touch.png", id:"touch"}
	]
};



// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


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


(lib.design1 = function() {
	this.initialize(img.design1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,250);


(lib.design2 = function() {
	this.initialize(img.design2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,250);


(lib.design3 = function() {
	this.initialize(img.design3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,250);


(lib.design4 = function() {
	this.initialize(img.design4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,250);


(lib.design5 = function() {
	this.initialize(img.design5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,250);


(lib.image = function() {
	this.initialize(img.image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.message = function() {
	this.initialize(img.message);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,118);


(lib.touch = function() {
	this.initialize(img.touch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.背景 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(35,24,21,0)","#231815"],[0,1],0,0,0,0,0,986.4).s().p("EiwjB/0MAAAj/nMFhGAAAMAAAD/ng");
	this.shape.setTransform(1130,818);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2260,1636);


(lib.MC_White = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx6BYvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAMAAAixVIACgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAMBj1AAAIADABIACADMAAACxVIgCADIgDABg");
	this.shape.setTransform(0,0,3.2,1.352);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-767.9,2048,1535.9);


(lib.MC_Touch_Touch = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.touch();
	this.instance.setTransform(-1024,-768);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Roll_Roll = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-482.1,184,517.4,-262.9).s().p("EhQ1AQZMChrg5eMiWoBSLg");
	this.shape.setTransform(-519.8,264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],482.1,-183.9,-517.4,263).s().p("EBFzgpFILDYtMihrA5eg");
	this.shape_1.setTransform(519.8,-264.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],184,482.1,-262.9,-517.4).s().p("EgpFhQ1MBSLCWoI4tLDg");
	this.shape_2.setTransform(264.1,519.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-183.9,-482.1,263,517.4).s().p("EgpFhFyIYtrDMA5eChrg");
	this.shape_3.setTransform(-264.1,-519.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-154.9,496,235.8,-526.8).s().p("Egk1BIqMBJqia9MgwYCkng");
	this.shape_4.setTransform(-236.7,529.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],155,-495.9,-235.7,526.9).s().p("EALkhSTIZSJqMhJrCa9g");
	this.shape_5.setTransform(236.7,-529.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],496,154.9,-526.8,-235.8).s().p("EhSTgk0MCknAwXIpqZTg");
	this.shape_6.setTransform(529.3,236.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-495.9,-154.9,526.9,235.8).s().p("EhSTgLjIJp5SMCa+BJqg");
	this.shape_7.setTransform(-529.3,-236.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-356.5,356.5,417.7,-417.7).s().p("EhBQAuIMCChhvYMhvYCChg");
	this.shape_8.setTransform(-419.6,419.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],356.5,-356.5,-417.7,417.7).s().p("EAuIhBQITJTJMiChBvYg");
	this.shape_9.setTransform(419.5,-419.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],356.5,356.5,-417.7,-417.7).s().p("EhBQhBQMCChBvYIzJTJg");
	this.shape_10.setTransform(419.5,419.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-356.5,-356.5,417.7,417.7).s().p("EhBQguHITJzJMBvYCChg");
	this.shape_11.setTransform(-419.6,-419.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,547.5,0,-547.4).s().p("EgNhBViMANhirDMANiCrDg");
	this.shape_12.setTransform(0,550);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,-547.4,0,547.5).s().p("EgNhhVhIbDAAMgNiCrDg");
	this.shape_13.setTransform(0,-550);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],547.5,0,-547.4,0).s().p("EhVhAAAMCrDgNhIAAbDg");
	this.shape_14.setTransform(550,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-547.4,0,547.5,0).s().p("EhVhgNhMCrDANhMirDANig");
	this.shape_15.setTransform(-550,0);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1097.5,-1097.5,2195,2195);


(lib.MC_Reel_Reels_Img4 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.design5();
	this.instance.setTransform(-237.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-125,475,250);


(lib.MC_Reel_Reels_Img3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.design4();
	this.instance.setTransform(-237.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-125,475,250);


(lib.MC_Reel_Reels_Img2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.design3();
	this.instance.setTransform(-237.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-125,475,250);


(lib.MC_Reel_Reels_Img1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.design2();
	this.instance.setTransform(-237.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-125,475,250);


(lib.MC_Reel_Reels_Img0 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.design1();
	this.instance.setTransform(-237.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-125,475,250);


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


(lib.MC_Kiras_Kira2_Kira = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B43E").s().p("AhHF3Qgph9hFhFQhEhEh9gqQhrgjjWgkQDWgjBrgkQB9gqBEhEQBFhFAph8QAlhrAijWQAkDXAjBqQArB8BEBFQBEBEB9AqQBqAkDYAjQjYAkhqAjQh9AqhEBEQhEBFgrB9QgjBqgkDYQgjjYgkhqg");
	this.shape.setTransform(0,0,1.004,1.004);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70,-70,140,140);


(lib.MC_Kiras_Kira1_Kira = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEE35").s().p("Ag3EoQghhig2g2Qg3g3highQhUgciqgcQCqgbBUgcQBighA3g2QA2g3AhhiQAchUAbiqQAcCqAcBUQAhBiA3A3QA2A2BiAhQBUAcCqAbQiqAchUAcQhiAhg2A3Qg3A2ghBiQgcBUgcCqQgbiqgchUg");
	this.shape.setTransform(0,0,0.999,0.999);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-55,110,110);


(lib.MC_Item = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image();
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


(lib.MC_Bg1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.BG();
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


(lib.MC_Touch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// touch
	this.touch = new lib.MC_Touch_Touch();

	this.timeline.addTween(cjs.Tween.get(this.touch).to({alpha:0.102},11).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1024,-768,2048,1536);


(lib.MC_Roll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stepRotation = function() {
			exportRoot["roll"]["roll"].rotation += 6;
		}
		
		createjs.Ticker.addEventListener("tick", this.stepRotation);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// roll
	this.roll = new lib.MC_Roll_Roll();

	this.timeline.addTween(cjs.Tween.get(this.roll).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1097.5,-1097.5,2195,2195);


(lib.MC_ReelR_Reels = function() {
	this.initialize();

	// r0
	this.r0 = new lib.MC_Reel_Reels_Img0();
	this.r0.setTransform(0,945);

	// r1
	this.r1 = new lib.MC_Reel_Reels_Img4();
	this.r1.setTransform(0,675);

	// r2
	this.r2 = new lib.MC_Reel_Reels_Img1();
	this.r2.setTransform(0,405);

	// r3
	this.r3 = new lib.MC_Reel_Reels_Img3();
	this.r3.setTransform(0,135);

	// r4
	this.r4 = new lib.MC_Reel_Reels_Img2();
	this.r4.setTransform(0,-135);

	// r5
	this.r5 = new lib.MC_Reel_Reels_Img0();
	this.r5.setTransform(0,-405);

	// r6
	this.r6 = new lib.MC_Reel_Reels_Img4();
	this.r6.setTransform(0,-675);

	// r7
	this.r7 = new lib.MC_Reel_Reels_Img1();
	this.r7.setTransform(0,-945);

	this.addChild(this.r7,this.r6,this.r5,this.r4,this.r3,this.r2,this.r1,this.r0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-1070,475,2140);


(lib.MC_ReelR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.nowLoopCount = -1;
		
		this.kurikaeshi = function() {
			exportRoot["reelR"]["reels"].y = 0;
			exportRoot["reelR"].nowLoopCount += 1;
			
			createjs.Tween.removeTweens( exportRoot["reelR"]["reels"] );
			
			var yy = 0;
			var time = 0;
			
			if(exportRoot["reelR"].nowLoopCount >= (exportRoot.rightLoopCount+4)) {
				if(exportRoot._result == 1) {
					yy = 540;
					time = 800;
				}
				else if(exportRoot._result == 2) {
					yy = 1080;
					time = 1600;
				}
				else if(exportRoot._result == 3) {
					yy = 810;
					time = 1200;
				}
				else if(exportRoot._result == 4) {
					yy = 270;
					time = 400;
				}
				else if(exportRoot._result == 5) {
					yy = 1350;
					time = 2000;
				}
				
				createjs.Tween.get(exportRoot["reelR"]["reels"],{override:true})
					.to({y:yy}, time, createjs.Ease.linear)
					.call(function(){exportRoot.gotoAndPlay("scene3");});
				return;
			}
			else {
				if(exportRoot["reelR"].nowLoopCount >= (exportRoot.rightLoopCount+3)) {
					time = 1600;
				}
				else if(exportRoot["reelR"].nowLoopCount >= (exportRoot.rightLoopCount+2)) {
					time = 1200;
				}
				else if(exportRoot["reelR"].nowLoopCount >= (exportRoot.rightLoopCount+1)) {
					time = 800;
				}
				else {
					time = 400;
				}
		
				createjs.Tween.get(exportRoot["reelR"]["reels"],{override:true})
					.to({y:1300}, time, createjs.Ease.linear)
					.call(exportRoot["reelR"].kurikaeshi);
			}
		}
		
		this.kurikaeshi();
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnDA+gMAAAh8/MBOHAAAMAAAB8/g");
	mask.setTransform(10,670);

	// rells
	this.reels = new lib.MC_ReelR_Reels();

	this.reels.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.reels).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.5,270,475,800);


(lib.MC_ReelL_Reels = function() {
	this.initialize();

	// r0
	this.r0 = new lib.MC_Reel_Reels_Img2();
	this.r0.setTransform(0,945);

	// r1
	this.r1 = new lib.MC_Reel_Reels_Img1();
	this.r1.setTransform(0,675);

	// r2
	this.r2 = new lib.MC_Reel_Reels_Img0();
	this.r2.setTransform(0,405);

	// r3
	this.r3 = new lib.MC_Reel_Reels_Img4();
	this.r3.setTransform(0,135);

	// r4
	this.r4 = new lib.MC_Reel_Reels_Img3();
	this.r4.setTransform(0,-135);

	// r5
	this.r5 = new lib.MC_Reel_Reels_Img2();
	this.r5.setTransform(0,-405);

	// r6
	this.r6 = new lib.MC_Reel_Reels_Img1();
	this.r6.setTransform(0,-675);

	// r7
	this.r7 = new lib.MC_Reel_Reels_Img0();
	this.r7.setTransform(0,-945);

	this.addChild(this.r7,this.r6,this.r5,this.r4,this.r3,this.r2,this.r1,this.r0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-1070,475,2140);


(lib.MC_ReelL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.nowLoopCount = -1;
		
		this.kurikaeshi = function() {
			exportRoot["reelL"]["reels"].y = 0;
			exportRoot["reelL"].nowLoopCount += 1;
			
			createjs.Tween.removeTweens( exportRoot["reelL"]["reels"] );
			
			if(exportRoot["reelL"].nowLoopCount >= exportRoot.leftLoopCount) {
				var yy = 0;
				var time = 0;
				
				if(exportRoot._result == 1) {
					yy = 810;
					time = 240;
				}
				else if(exportRoot._result == 2) {
					yy = 270;
					time = 80;
				}
				else if(exportRoot._result == 3) {
					yy = 1080;
					time = 320;
				}
				else if(exportRoot._result == 4) {
					yy = 1350;
					time = 40;
				}
				else if(exportRoot._result == 5) {
					yy = 540;
					time = 160;
				}
				
				createjs.Tween.get(exportRoot["reelL"]["reels"],{override:true})
					.to({y:yy}, time, createjs.Ease.linear);
				return;
			}
			else {
				createjs.Tween.get(exportRoot["reelL"]["reels"],{override:true})
					.to({y:1300}, 400, createjs.Ease.linear)
					.call(exportRoot["reelL"].kurikaeshi);
			}
		}
		
		this.kurikaeshi();
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnDA+gMAAAh8/MBOHAAAMAAAB8/g");
	mask.setTransform(10,670);

	// rells
	this.reels = new lib.MC_ReelL_Reels();

	this.reels.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.reels).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.5,270,475,800);


(lib.MC_ReelC_Reels = function() {
	this.initialize();

	// r0
	this.r0 = new lib.MC_Reel_Reels_Img4();
	this.r0.setTransform(0,945);

	// r1
	this.r1 = new lib.MC_Reel_Reels_Img3();
	this.r1.setTransform(0,675);

	// r2
	this.r2 = new lib.MC_Reel_Reels_Img2();
	this.r2.setTransform(0,405);

	// r3
	this.r3 = new lib.MC_Reel_Reels_Img1();
	this.r3.setTransform(0,135);

	// r4
	this.r4 = new lib.MC_Reel_Reels_Img0();
	this.r4.setTransform(0,-135);

	// r5
	this.r5 = new lib.MC_Reel_Reels_Img4();
	this.r5.setTransform(0,-405);

	// r6
	this.r6 = new lib.MC_Reel_Reels_Img3();
	this.r6.setTransform(0,-675);

	// r7
	this.r7 = new lib.MC_Reel_Reels_Img2();
	this.r7.setTransform(0,-945);

	this.addChild(this.r7,this.r6,this.r5,this.r4,this.r3,this.r2,this.r1,this.r0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-237.5,-1070,475,2140);


(lib.MC_ReelC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.nowLoopCount = -1;
		
		this.kurikaeshi = function() {
			exportRoot["reelC"]["reels"].y = 0;
			exportRoot["reelC"].nowLoopCount += 1;
			
			createjs.Tween.removeTweens( exportRoot["reelC"]["reels"] );
			
			if(exportRoot["reelC"].nowLoopCount >= exportRoot.centerLoopCount) {
				var yy = 0;
				var time = 0;
				
				if(exportRoot._result == 1) {
					yy = 1350;
					time = 40;
				}
				else if(exportRoot._result == 2) {
					yy = 810;
					time = 240;
				}
				else if(exportRoot._result == 3) {
					yy = 270;
					time = 80;
				}
				else if(exportRoot._result == 4) {
					yy = 540;
					time = 160;
				}
				else if(exportRoot._result == 5) {
					yy = 1080;
					time = 320;
				}
				
				createjs.Tween.get(exportRoot["reelC"]["reels"],{override:true})
					.to({y:yy}, time, createjs.Ease.linear);
				return;
			}
			else {
				createjs.Tween.get(exportRoot["reelC"]["reels"],{override:true})
					.to({y:1300}, 400, createjs.Ease.linear)
					.call(exportRoot["reelC"].kurikaeshi);
			}
		}
		
		this.kurikaeshi();
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnDA+gMAAAh8/MBOHAAAMAAAB8/g");
	mask.setTransform(10,670);

	// rells
	this.reels = new lib.MC_ReelC_Reels();

	this.reels.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.reels).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.5,270,475,800);


(lib.MC_Kiras_Kira2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kira
	this.kira = new lib.MC_Kiras_Kira2_Kira();

	this.timeline.addTween(cjs.Tween.get(this.kira).to({scaleX:0.57,scaleY:0.57,alpha:0.199},3).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-70,140,140);


(lib.MC_Kiras_Kira1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kira
	this.kira = new lib.MC_Kiras_Kira1_Kira();

	this.timeline.addTween(cjs.Tween.get(this.kira).to({scaleX:0.57,scaleY:0.57,alpha:0.199},3).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-55,110,110);


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


(lib.MC_Kiras2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// k0
	this.k0 = new lib.MC_Kiras_Kira2();
	this.k0.setTransform(-520.1,-245);
	this.k0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k0).wait(2).to({_off:false},0).wait(3));

	// k1
	this.k1 = new lib.MC_Kiras_Kira2();
	this.k1.setTransform(403.1,376.1,0.789,0.789);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(3).to({_off:false},0).wait(2));

	// k2
	this.k2 = new lib.MC_Kiras_Kira2();
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
	this.k0 = new lib.MC_Kiras_Kira1();
	this.k0.setTransform(-436.1,52);
	this.k0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k0).wait(1).to({_off:false},0).wait(3));

	// k1
	this.k1 = new lib.MC_Kiras_Kira1();
	this.k1.setTransform(215.1,-448.1,0.789,0.789);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(2).to({_off:false},0).wait(2));

	// k2
	this.k2 = new lib.MC_Kiras_Kira1();
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
	this.k0 = new lib.MC_Kiras_Kira1();
	this.k0.setTransform(-252,-288);

	this.timeline.addTween(cjs.Tween.get(this.k0).wait(3));

	// k1
	this.k1 = new lib.MC_Kiras_Kira1();
	this.k1.setTransform(55,304.1,0.789,0.789);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(1).to({_off:false},0).wait(2));

	// k2
	this.k2 = new lib.MC_Kiras_Kira1();
	this.k2.setTransform(388.1,21.7,1.076,1.076);
	this.k2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k2).wait(2).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-343,110,110);


// stage content:



(lib.slot_js = function(mode,startPosition,loop) {
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
		for(var i=0; i<8; i++) {
			this.cacher(this["reelL"]["reels"]["r" + i], -237.5, -125, 475, 250);
			this.cacher(this["reelC"]["reels"]["r" + i], -237.5, -125, 475, 250);
			this.cacher(this["reelR"]["reels"]["r" + i], -237.5, -125, 475, 250);
		}
		this.cacher(this["touch"]["touch"], -1024, -768, 2048, 1536);
		this.cacher(this["backout"], 0, 0, 2260, 1636);
		this.cacher(this["roll"]["roll"], -1097.5, -1097.5, 2195, 2195);
		this.cacher(this["inputBtn"], -431, -69, 862, 138);
		this.cacher(this["backBtn"], -252.5, -69, 505, 138);
		this.cacher(this["item"], -400, -400, 800, 800);
		this.cacher(this["msg"], -1024, -59, 2048, 118);
		
		for(var i=0; i<14; i++) {
			this.cacher(this["fubuki"]["fb" + i]["kami"], -30, -35, 60, 70);
			if(i < 5) {
				this.cacher(this["linkBtn" + (i+1)], -202, -55.5, 404, 111);
					
				if(i < 3) {
					this.cacher(this["kiras0"]["k" + i]["kira"], -55, -55, 110, 110);
					this.cacher(this["kiras1"]["k" + i]["kira"], -55, -55, 110, 110);
					this.cacher(this["kiras2"]["k" + i]["kira"], -70, -70, 140, 140);
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
		
		this.leftLoopCount = 4;
		this.centerLoopCount = 6;
		this.rightLoopCount = 7;
		
		
		if( !this["tap_area1"].hasEventListener("mousedown") ) {
			this["tap_area1"].addEventListener("mousedown", this.firstTap);
		}
		
		this.nowScene = this.SCENE1;
		
		if(this._settled == 1) {
			if(exportRoot._result == 1) {
				exportRoot["reelL"]["reels"].y = 810;
				exportRoot["reelC"]["reels"].y = 1350;
				exportRoot["reelR"]["reels"].y = 540;
			}
			else if(exportRoot._result == 2) {
				exportRoot["reelL"]["reels"].y = 270;
				exportRoot["reelC"]["reels"].y = 810;
				exportRoot["reelR"]["reels"].y = 1080;
			}
			else if(exportRoot._result == 3) {
				exportRoot["reelL"]["reels"].y = 1080;
				exportRoot["reelC"]["reels"].y = 270;
				exportRoot["reelR"]["reels"].y = 810;
			}
			else if(exportRoot._result == 4) {
				exportRoot["reelL"]["reels"].y = 1350;
				exportRoot["reelC"]["reels"].y = 540;
				exportRoot["reelR"]["reels"].y = 270;
			}
			else if(exportRoot._result == 5) {
				exportRoot["reelL"]["reels"].y = 540;
				exportRoot["reelC"]["reels"].y = 1080;
				exportRoot["reelR"]["reels"].y = 1350;
			}
				
			this.gotoAndPlay("scene3");
		}
		else {
			this.stop();
		}
	}
	this.frame_5 = function() {
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
		
		try {
			document.getElementById('se').play();
		}
		catch(e){};
		
		this["reelL"].gotoAndStop("on");
		this["reelC"].gotoAndStop("on");
		this["reelR"].gotoAndStop("on");
		
		
		this.stop();
	}
	this.frame_10 = function() {
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
		
		if(this._deli == 1) {
			this["inputBtn"].visible = this["inputBtn_area"].visible = true;
		}
		else {
			this["inputBtn"].visible = this["inputBtn_area"].visible = false;
		}
	}
	this.frame_41 = function() {
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
	}
	this.frame_57 = function() {
		this.nowScene = this.SCENE3;
		
		if( !this["backBtn_area"].hasEventListener("mousedown") ) {
			this["backBtn_area"].addEventListener("mousedown", this.backTap);
		}
		
		if(this._deli == 1) {
			if( !this["inputBtn_area"].hasEventListener("mousedown") ) {
				this["inputBtn_area"].addEventListener("mousedown", this.inputTap);
			}
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(31).call(this.frame_41).wait(16).call(this.frame_57).wait(1));

	// linkBtn_area1
	this.linkBtn_area1 = new lib.MC_White();
	this.linkBtn_area1.setTransform(204,80,0.197,0.072);
	this.linkBtn_area1.alpha = 0.012;
	this.linkBtn_area1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area1).wait(4).to({_off:false},0).wait(54));

	// linkBtn_area2
	this.linkBtn_area2 = new lib.MC_White();
	this.linkBtn_area2.setTransform(614,80,0.197,0.072);
	this.linkBtn_area2.alpha = 0.012;
	this.linkBtn_area2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area2).wait(4).to({_off:false},0).wait(54));

	// linkBtn_area3
	this.linkBtn_area3 = new lib.MC_White();
	this.linkBtn_area3.setTransform(1024,80,0.197,0.072);
	this.linkBtn_area3.alpha = 0.012;
	this.linkBtn_area3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area3).wait(4).to({_off:false},0).wait(54));

	// linkBtn_area4
	this.linkBtn_area4 = new lib.MC_White();
	this.linkBtn_area4.setTransform(1434,80,0.197,0.072);
	this.linkBtn_area4.alpha = 0.012;
	this.linkBtn_area4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area4).wait(4).to({_off:false},0).wait(54));

	// linkBtn_area5
	this.linkBtn_area5 = new lib.MC_White();
	this.linkBtn_area5.setTransform(1844,80,0.197,0.072);
	this.linkBtn_area5.alpha = 0.012;
	this.linkBtn_area5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn_area5).wait(4).to({_off:false},0).wait(54));

	// inputBtn_area
	this.inputBtn_area = new lib.MC_White();
	this.inputBtn_area.setTransform(480,1391,0.421,0.09);
	this.inputBtn_area.alpha = 0.012;
	this.inputBtn_area._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inputBtn_area).wait(51).to({_off:false},0).wait(7));

	// backBtn_area
	this.backBtn_area = new lib.MC_White();
	this.backBtn_area.setTransform(1765,1391,0.247,0.09);
	this.backBtn_area.alpha = 0.012;
	this.backBtn_area._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backBtn_area).wait(51).to({_off:false},0).wait(7));

	// tap_area1
	this.tap_area1 = new lib.MC_White();
	this.tap_area1.setTransform(1024,768);
	this.tap_area1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.tap_area1).to({_off:true},5).wait(53));

	// duummy
	this.dummy = new lib.MC_White();
	this.dummy.setTransform(1024,768);
	this.dummy.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dummy).wait(58));

	// linkBtn1
	this.linkBtn1 = new lib.MC_LinkBtn1();
	this.linkBtn1.setTransform(204,80);
	this.linkBtn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn1).wait(5).to({_off:false},0).wait(53));

	// linkBtn2
	this.linkBtn2 = new lib.MC_LinkBtn2();
	this.linkBtn2.setTransform(614,80);
	this.linkBtn2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn2).wait(5).to({_off:false},0).wait(53));

	// linkBtn3
	this.linkBtn3 = new lib.MC_LinkBtn3();
	this.linkBtn3.setTransform(1024,80);
	this.linkBtn3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn3).wait(5).to({_off:false},0).wait(53));

	// linkBtn4
	this.linkBtn4 = new lib.MC_LinkBtn4();
	this.linkBtn4.setTransform(1434,80);
	this.linkBtn4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn4).wait(5).to({_off:false},0).wait(53));

	// linkBtn5
	this.linkBtn5 = new lib.MC_LinkBtn5();
	this.linkBtn5.setTransform(1844,80);
	this.linkBtn5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.linkBtn5).wait(5).to({_off:false},0).wait(53));

	// fubuki
	this.fubuki = new lib.MC_Fubuki();
	this.fubuki.setTransform(1024,768);
	this.fubuki.alpha = 0;
	this.fubuki._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fubuki).wait(41).to({_off:false},0).to({alpha:1},4).wait(13));

	// kiras2
	this.kiras2 = new lib.MC_Kiras2();
	this.kiras2.setTransform(1094.7,768.7,1,1,0,0,0,70.7,0.7);
	this.kiras2.alpha = 0;
	this.kiras2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kiras2).wait(41).to({_off:false},0).to({alpha:1},4).wait(13));

	// kiras1
	this.kiras1 = new lib.MC_Kiras1();
	this.kiras1.setTransform(1094.7,768.7,1,1,0,0,0,70.7,0.7);
	this.kiras1.alpha = 0;
	this.kiras1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kiras1).wait(41).to({_off:false},0).to({alpha:1},4).wait(13));

	// kiras0
	this.kiras0 = new lib.MC_Kiras0();
	this.kiras0.setTransform(1024,768);
	this.kiras0.alpha = 0;
	this.kiras0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kiras0).wait(41).to({_off:false},0).to({alpha:1},4).wait(13));

	// msg
	this.msg = new lib.MC_Msg();
	this.msg.setTransform(1024,1236);
	this.msg.alpha = 0;
	this.msg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msg).wait(41).to({_off:false},0).to({alpha:1},4).wait(13));

	// item
	this.item = new lib.MC_Item();
	this.item.setTransform(1024,768,0.1,0.1);
	this.item.alpha = 0;
	this.item._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item).wait(31).to({_off:false},0).to({scaleX:1.25,scaleY:1.25,alpha:1},5,cjs.Ease.get(-1)).to({scaleX:0.75,scaleY:0.75},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(17));

	// backBtn
	this.backBtn = new lib.MC_BackBtn();
	this.backBtn.setTransform(1765,1391);
	this.backBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(51).to({_off:false},0).wait(7));

	// inputBtn
	this.inputBtn = new lib.MC_InputBtn();
	this.inputBtn.setTransform(480,1391);
	this.inputBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inputBtn).wait(51).to({_off:false},0).wait(7));

	// roll
	this.roll = new lib.MC_Roll();
	this.roll.setTransform(1024,768);
	this.roll.alpha = 0;
	this.roll._off = true;

	this.timeline.addTween(cjs.Tween.get(this.roll).wait(41).to({_off:false},0).to({alpha:1},4).wait(13));

	// backout
	this.backout = new lib.背景();
	this.backout.setTransform(1024,768,1,1,0,0,0,1130,818);
	this.backout.alpha = 0;
	this.backout._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backout).wait(17).to({_off:false},0).to({alpha:0.699},6).wait(35));

	// touch
	this.touch = new lib.MC_Touch();
	this.touch.setTransform(1024,768);

	this.timeline.addTween(cjs.Tween.get(this.touch).to({_off:true},5).wait(53));

	// reelL
	this.reelL = new lib.MC_ReelL();
	this.reelL.setTransform(503,190);

	this.timeline.addTween(cjs.Tween.get(this.reelL).wait(58));

	// reelC
	this.reelC = new lib.MC_ReelC();
	this.reelC.setTransform(1034,190,1,1,0,0,0,10,0);

	this.timeline.addTween(cjs.Tween.get(this.reelC).wait(58));

	// reelR
	this.reelR = new lib.MC_ReelR();
	this.reelR.setTransform(1547,190,1,1,0,0,0,10,0);

	this.timeline.addTween(cjs.Tween.get(this.reelR).wait(58));

	// bg1
	this.bg1 = new lib.MC_Bg1();
	this.bg1.setTransform(1024,768);

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1024,-112,2048,2416);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;