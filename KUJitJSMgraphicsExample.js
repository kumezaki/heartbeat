autowatch = 1;

var dis_width = 16.;
var dis_height = 9.;

ctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;

line_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;

heart_center_x = 0.;

//<<<<<<< Updated upstream
//=======
function bang()
{
	mgraphics.redraw();
}

function onresize(w, h)//what is this?
{
	post("resize called\n");
	dis_width = w;
	dis_height = h;
}

function paint()
{
	with (mgraphics)
	{
		set_source_rgba(0.5, 0., 0., 1.);//what is this?
		set_line_width(10);
		move_to(0,dis_height/2);
		line_to(dis_width, dis_height/2);
		stroke();
	}
	
	paint_heart(0.,0.,1.,1.,0.2);
}

//>>>>>>> Stashed changes
function paint_jit()
{
	// note that the following are the same as the ones in paint
	messnamed("mgraphics_msg","set_source_rgba",0.5, 0., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",10);
	messnamed("mgraphics_msg","move_to",0,dis_height/2);
	messnamed("mgraphics_msg","line_to",dis_width,dis_height/2);
	messnamed("mgraphics_msg","stroke");
}

function calcAspect()
{
	return dis_width/dis_height;
}

function paint_heart_jit(r,g,b,a,center_x)
{
	var aspect = calcAspect();

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	
	start_x = center_x; start_y = 0.2;
	end_x = center_x; end_y = -0.7;
	
	messnamed("mgraphics_msg","move_to",start_x*aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1,start_y+ctrl_pt_y1,center_x-0.7,start_y-0.3,end_x,end_y);

	messnamed("mgraphics_msg","move_to",start_x*aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x-ctrl_pt_x1,start_y+ctrl_pt_y1,center_x+0.7,start_y-0.3,end_x,end_y);

	messnamed("mgraphics_msg","fill");
}
