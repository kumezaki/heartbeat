autowatch = 1;

var dis_width = 16.;
var dis_height = 9.;


ctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;

line_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;

line_pt_y3 = -0.6; line_pt_y4 = 0.3;

//heart_center_x = 0.;

center_x = 0.; start_y = 0.;end_y = 0.;ctrl_pt_x1 = 0.;ctrl_pt_y1 = 0.;




function calcAspect()
{
	return dis_width/dis_height;
}

function paint_heart_jit(r,g,b,a,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1)
{
	var aspect = calcAspect(r,g,b,a);

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
		
	start_x = center_x;
	end_x = center_x;
	
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);

	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);

	messnamed("mgraphics_msg","fill");
}


function paint_lineone_jit()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);
	
	messnamed("mgraphics_msg","move_to",-.75 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -.60 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", -0.60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y3, -0.3); //line_pt_y1
	messnamed("mgraphics_msg", "stroke");
	
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y3, -0.3);//line_pt_y1
	messnamed("mgraphics_msg", "stroke");
	
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y4, 0.3);
	messnamed("mgraphics_msg", "stroke");
	
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y4, 0.3);//line_pt_y2
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
}

function paint_linetwo_jit(line_pt_y1,line_pt_y2)
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.03);

	//right side
	//messnamed("mgraphics_msg","move_to", .50 * aspect, -0.1);
	//messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .50 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .50 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
    messnamed("mgraphics_msg","line_to", .75 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");

}

function paint_linethree_jit()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.03);

	//right side
	//messnamed("mgraphics_msg","move_to", .50 * aspect, -0.1);
	//messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .50 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .70 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .80 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .10 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .20 * aspect, -0.1);
    messnamed("mgraphics_msg","line_to", .35 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");

}

function paint_1()
{
	
	var aspect = calcAspect();
	
	
	//messnamed("mgraphics_msg","paint_lineone_jit");
	//messnamed("mgraphics_msg","paint_linetwo_jit", line_pt_y1,line_pt_y2);
	messnamed("mgraphics_msg","set_source_rgba",0., 0., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.03);
	
	messnamed("mgraphics_msg","move_to",-.75 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -.60 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", -0.60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg", "stroke");
	
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg", "stroke");
	
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg", "stroke");
	
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
			
}
	
function paint_2(line_pt_y1,line_pt_y2)


{
		
	var aspect = calcAspect();
	

	//right side
	//messnamed("mgraphics_msg","move_to", .50 * aspect, -0.1);
	//messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .50 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .70 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .80 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .10 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
	
	messnamed("mgraphics_msg","move_to", .20 * aspect, -0.1);
    messnamed("mgraphics_msg","line_to", .35 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
}
	

function paint()
{
	switch (scene)
	{
		case 1:
			clearscreen();
			paint_heart_jit(r,g,b,a,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1);
			paint_lineone_jit();
			paint_linetwo_jit(line_pt_y1, line_pt_y2);
			break;
		case 2:
			clearscreen();
			paint_lineone_jit();
			paint_linethree_jit(line_pt_y1, line_pt_y2);
			break;
		default:
			post("scene "+scene+" unknown\n")
			break;
	}
}

function clearscreen()

{
	
	messnamed("mgraphics_msg","clear_surface");
	messnamed("mgraphics_msg", "set_source_rgba", 0., 0., 0., 1.);
	messnamed("mgraphics_msg", "paint"); 
    messnamed("mgraphics_msg", "set_source_rgba", 0., 0., 0., 1.);
	//messnamed("mgraphics_msg", "identity_matrix");
    //messnamed("mgraphics_msg", "move_to", 0., 0.);

}
function set_ctrl_pt_y1(y)
{
	ctrl_pt_y1 = y;
}
function set_end_y(y)
{
	end_y = y;
}
function set_start_y(y)
{
	start_y = y;
}

function set_center_x(h)
{
		center_x = h;
}

function set_r(a)
{
	r = a;
}
	
function set_g(b)
{
	g = b;
}
function set_b(c)
{
	b = c;
}
function set_a(d)
{
	a = d;
}

function set_scene(v)
{
	scene = v;
	post("scene is",scene, "\n");
}

function set_ctrl_pt_x1(x)
{
	ctrl_pt_x1 = x;
}

function set_line_pt_y1(y)
{
	line_pt_y1 = y;
}

function set_line_pt_x1(x)
{
	line_pt_x1 = x;
}

function set_line_pt_y2(y)
{
	line_pt_y2 = y;
}

function set_heart_center_x(x)
{
	heart_center_x = x;
}

function switch_example(v)
{
	switch (v)
	{
		case 0:
			post("zero received!!!\n");
			break;
		case 1: 
			post("one received!!!\n");
			break;
		default: 
			post("what was that???\n");
			break;
	}
}
