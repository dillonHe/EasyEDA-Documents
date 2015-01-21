
testInsertShape();

function testInsertShape(){
	api('insertShape', [
		{
			shapeTypeName: "path",
			fillColor: "none",
			pathString: "M520 500 C480 460 550 430 480 410",
			strokeColor: "#000000",
			strokeStyle: 0,
			strokeWidth: "1"
		}
	]);
	api('insertShape', [
		{
			shapeTypeName: "path",
			fillColor: "none",
			pathString: shapeLotusFlower(500,550,3,80,40),
			strokeColor: "#000000",
			strokeStyle: 0,
			strokeWidth: "1"
		},
		{
			shapeTypeName: "path",
			fillColor: "none",
			pathString: shapeLotusFlower(700,500,6,70,30),
			strokeColor: "#ff00ff",
			strokeStyle: 0,
			strokeWidth: "1"
		},
		{
			shapeTypeName: "path",
			fillColor: "none",
			pathString: shapeFlower2(660,670,4, 14,-Math.PI/4, 63.246,-0.32175, 84.85,Math.PI/4),
			strokeColor: "#cccc00",
			strokeStyle: 0,
			strokeWidth: "2"
		}
	]);
}

/** Lotus shape path */
function shapeLotusFlower(cx,cy,n,r,r2){
	var pathD = '', angle, angle2, x, y, x2, y2;
	function p(x,y){
		return (x+cx)+' '+(y+cy);
	}
	for(var i=0; i<n; i++){
		angle = i * Math.PI / n;
		angle2 = (i / n + 0.5) * Math.PI;
		x = r * Math.cos(angle);
		y = r * Math.sin(angle);
		x2 = r2 * Math.cos(angle2);
		y2 = r2 * Math.sin(angle2);
		pathD += 'M'+p(x,y)
			+'C'+p(x2,y2)+' '+p(-x2,-y2)+' '+p(-x,-y)
			+'C'+p(x2,y2)+' '+p(-x2,-y2)+' '+p(x,y);
	}
	return pathD;
}
/** Petal shape path */
function shapeFlower2(cx,cy,n,r1,a1,r2,a2,r3,a3){
	var pathD = '', angle, angle2, angle3, angle4, x, y, x2, y2;
	function p(r,thi){
		return (r * Math.cos(thi) + cx)+' '+(r * Math.sin(thi) + cy);
	}
	function polar(r,thi){
		return {r:r,thi:thi};
	}
	for(var i=0; i<n; i++){
		angle = i>0 ? angle4 : a1 + i * 2 * Math.PI / n;
		angle2 = a2 + i * 2 * Math.PI / n;
		angle3 = a3 + i * 2 * Math.PI / n;
		angle4 = a1 + (i+1) * 2 * Math.PI / n;
		pathD += (i>0 ? '' : 'M'+p(r1,angle))
			+'C'+p(r2,angle2)+' '+p(r3,angle3)+' '+p(r1,angle4);
	}
	return pathD;
}
