window.onload=function(){
	//draw1();
	//draw2();
	window.onresize();
}
window.onresize = function(){
	if(document.body.clientWidth<=367){
		transform(0.5);
	}
	else if(document.body.clientWidth<=430){
		transform(0.8);
	}
	else{transform(1);}
	console.log(document.body.clientWidth);
}
function transform(beishu){
	var canvas1=document.getElementById("myCanvas1");
	var context1=canvas1.getContext("2d");
	canvas1.width = 400*beishu;
    canvas1.height = 400*beishu;
    context1.save();
	context1.scale(beishu,beishu);//缩放画布
	draw1();
	context1.restore();
	var canvas2=document.getElementById("myCanvas2");
	var context2=canvas2.getContext("2d");
	canvas2.width = 400*beishu;
    canvas2.height = 400*beishu;
    context2.save();
	context2.scale(beishu,beishu);//缩放画布
	draw2();
	context2.restore();
}

function draw1(){
	var canvas=document.getElementById("myCanvas1");
	var context=canvas.getContext("2d");

	var baseX=50,baseY=330;
	var data=[
			{name:"HTML",value:65,color:"rgba(255,0,0,0.5)"},
			{name:"CSS",value:75,color:"rgba(0,255,0,0.5)"},
			{name:"JS",value:85,color:"rgba(255,0,255,0.5)"},
			{name:"jQuery",value:55,color:"rgba(0,255,255,0.5)"}
			];

	//Web前端技能
	context.beginPath();
	context.font ="22px 微软雅黑";
	context.fillStyle="black";
	context.textAlign='center';
	context.fillText("Web前端技能",200,380);
	context.closePath();
	//柱子
	y_h=2.5;//纵轴倍数
	x_l=60;//横轴间隔
	x_w=30;//柱子宽
	context.beginPath();
	for(var i=0;i<4;i++){
		lg=context.createLinearGradient(baseX+20+x_l*i,0,baseX+20+x_l*i+x_w,0);
		lg.addColorStop(0,data[i].color);
		lg.addColorStop(0.5,"#fff");
		lg.addColorStop(1,data[i].color);
		context.fillStyle=lg;
		//context.fillStyle=data[i].color;
		context.strokeStyle=data[i].color;
		context.fillRect(baseX+20+x_l*i,baseY-data[i].value*y_h,x_w,data[i].value*y_h);
		context.strokeRect(baseX+20+x_l*i,baseY-data[i].value*y_h,x_w,data[i].value*y_h);
	}

	//坐标系
	context.beginPath();
	context.moveTo(baseX,baseY-270);
	context.lineTo(baseX,baseY);
	context.lineTo(baseX+300,baseY);
	context.lineTo(baseX+290,baseY-5);
	context.moveTo(baseX+300,baseY);
	context.lineTo(baseX+290,baseY+5);
	context.moveTo(baseX-5,baseY-260);
	context.lineTo(baseX,baseY-270);
	context.lineTo(baseX+5,baseY-260);
	context.moveTo(baseX-5,baseY-260);
	context.closePath();
	context.stroke();
	//文字
	context.fillStyle="rgba(0,0,0,1)";
	context.font = "12px Arial";
	context.textBaseline = 'top';
	context.textAlign='center';
	context.fillText("前端技能",baseX+300,baseY+10);
	context.fillText("技能值",baseX,baseY-290);
	context.moveTo(baseX,baseY-125);
	context.lineTo(baseX+5,baseY-125);
	context.strokeStyle="black";
	context.textAlign='right';
	context.fillText("50",baseX-2,baseY-130);
	context.font ="15px Arial";
	context.fillStyle="black";
	context.textAlign='center';
	for(var i=0;i<4;i++){
		context.fillText(data[i].name,baseX+20+x_l*i+x_w/2,baseY+5);
	}
	context.closePath();
	context.stroke();


}

function draw2(){
	var canvas=document.getElementById("myCanvas2");
	var context=canvas.getContext("2d");

	var baseX=200,baseY=200;
	var data=[
			{name:"工作热情",value:80},
			{name:"专业技术",value:65},
			{name:"合作能力",value:70},
			{name:"抗压能力",value:85},
			{name:"学习能力",value:75},
			{name:"潜力",value:100},
			];

	//Web前端技能
	context.beginPath();
	context.font ="22px 微软雅黑";
	context.fillStyle="black";
	context.textAlign='center';
	context.fillText("个人综合能力",200,380);
	context.closePath();
	//坐标系
	length=120;
	//绘制属性蛛网
	context.fillStyle="rgba(146,199,230,0.7)";
	context.strokeStyle="rgba(146,199,230,0.3)";
	context.beginPath();
	for(var i=0;i<6;i++){
		context.lineTo(baseX+Math.cos(Math.PI/6+i*Math.PI/3)*length*data[i].value/100,baseY+Math.sin(Math.PI/6+i*Math.PI/3)*length*data[i].value/100);
	}
	context.closePath();
	context.fill();
	context.stroke();
	//绘制六角形线
	context.beginPath();
	context.strokeStyle="rgba(255,0,0,0.3)";
	for(var i=0;i<6;i++){
		context.moveTo(baseX,baseY);
		context.lineTo(baseX+Math.cos(Math.PI/6+i*Math.PI/3)*length,baseY+Math.sin(Math.PI/6+i*Math.PI/3)*length);
	}
	context.moveTo(baseX+Math.cos(Math.PI/6+i*Math.PI/3)*length,baseY+Math.sin(Math.PI/6+i*Math.PI/3)*length);
	context.closePath();
	context.stroke();

	//绘制蛛网
	context.strokeStyle="#c5c5c5";
	for(var j=0;j<=5;j++){
		context.beginPath();
		for(var i=0;i<=6;i++){
			context.lineTo(baseX+Math.cos(Math.PI/6+i*Math.PI/3)*length*j/5,baseY+Math.sin(Math.PI/6+i*Math.PI/3)*length*j/5);
		}
		context.closePath();
		context.stroke();
	}
	//绘制属性名称
	context.strokeStyle="rgba(255,0,0,1)";
	context.beginPath();
	for(var i=0;i<6;i++){
		context.font ="14px Arial";
		context.fillStyle="black";
		context.textAlign='center';
		context.fillText(data[i].name,baseX+Math.cos(Math.PI/6+i*Math.PI/3)*(length+25),baseY+Math.sin(Math.PI/6+i*Math.PI/3)*(length+18)+5);
	}
	context.closePath();
	context.stroke();

}
