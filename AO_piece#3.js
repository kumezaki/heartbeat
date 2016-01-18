 autowatch = 1;

//...............global variables.................

var dis_width = 16.;
var dis_height = 9.;

//..heart
ctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;

start_x = 0.; end_x = 0.;
//heart_center_x = 0.;

center_x = 0.; 
start_x = 0;
start_y = 0.;
end_y = -0.7;
top_x = 0;
bottom_x = 0;

//...right line

line_pt_y2 = -0.6; line_pt_y1 = 0.45; line_pt_x1 = -.6;

//....left line
line_pt_y3 = -0.6; line_pt_y4 = 0.45;


//....colors
r = 0.; g = 0.; b = 0.; a = 1.;

//...idea 1 functions

x_1 = 0.;  y_1 = 0.; x_2 = 0.; y_2 = 0.; x_3 = 0.; y_3 = 0.;








//............clearscreen and CalcAspect.............................
function clearscreen()
{
	
	messnamed("mgraphics_msg","clear_surface");
	messnamed("mgraphics_msg", "set_source_rgba", 0., 0., 0., 1.);
	messnamed("mgraphics_msg", "paint"); 
    messnamed("mgraphics_msg", "set_source_rgba", 0., 0., 0., 1.);
	//messnamed("mgraphics_msg", "identity_matrix");
    //messnamed("mgraphics_msg", "move_to", 0., 0.);
}

function calcAspect()
{
	return dis_width/dis_height;
}








//...........heart functions.........................................

function paint_heart_one(r,g,b,a)
{
	var aspect = calcAspect(r,g,b,a, center_x);
	
	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	//messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	//messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","stroke");
}

	
function paint_heart_two(r,g,b,a)
{
	var aspect = calcAspect(r,g,b,a);
	
	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
    messnamed("mgraphics_msg","stroke");
}

function paint_heart_three(r,g,b,a)
{
	var aspect = calcAspect(r,g,b,a);

	messnamed("mgraphics_msg","set_source_rgba",1.,0.,0.,1.);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","stroke");
}

function paint_heart_four(r,g,b,a, ctrl_pt_x1, start_y, end_y, ctrl_pt_y1)
{
	var aspect = calcAspect();
	
	start_x = center_x;
	end_x = center_x;
	end_y = center_x;

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","fill");
}

function paint_heart_jit(r,g,b,a,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1)
{
	var aspect = calcAspect(r,g,b,a);

	messnamed("mgraphics_msg","set_source_rgba",r, g, b, a);
		
	//start_x = center_x;
	//end_x = center_x;
	//end_y = center_x;
	start_x = top_x;
	end_x = bottom_x;
	
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","fill");
}


//...................paint heart functions........

function paint_1H()
{
	//clearscreen();
	paint_heart_one(1.,0.,0.,1., 25.);
	return;
}
function paint_2H()
{
	//clearscreen();
	paint_heart_two(r,g,b,a);
	return;
}
function paint_3H()
{
	///clearscreen();
	paint_heart_jit(r,g,b,a,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1);
	//post("paint_9", "\n");
	return;
}

function paint_4H()
{
	//clearscreen();
	paint_heart_three(r,g,b,a, ctrl_pt_x1, start_y, end_y, ctrl_pt_y1);
	return;
}
function paint_5H()
{
	clearscreen()
	paint_heart_jit(r,g,b,a,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1);
	paint_one();
	paint_two(line_pt_y3);
	paint_three(line_pt_y3);
	paint_four(line_pt_y4);
	paint_five(line_pt_y4);
	paint_six();
	return;
}
function paint_6H()
{
	//clearscreen();
	//paint_one();
	//paint_two(line_pt_y3);
	//paint_three(line_pt_y3);
	//paint_four(line_pt_y4);
	//paint_five(line_pt_y4);
	paint_heart_four(r,g,b,a, bottom_x, top_x, ctrl_pt_x1, start_y, end_y,ctrl_pt_y1,center_x);
	//post("paint_12", "\n");
	return;
}
	
	







//.............left lines functions......................................

function paint_one()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);	
	messnamed("mgraphics_msg","move_to",-.75 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -.60 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
function paint_two(line_pt_y3)
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);	
	messnamed("mgraphics_msg","move_to", -0.60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y3, -0.3); //line_pt_y1
	messnamed("mgraphics_msg", "stroke");
}
function paint_three(line_pt_y3)
{
	var aspect = calcAspect(line_pt_y3);
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y3, -0.3);//line_pt_y1
	messnamed("mgraphics_msg", "stroke");
}
function paint_four(line_pt_y4)
{
	var aspect = calcAspect(line_pt_y4);
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y4, 0.3);
	messnamed("mgraphics_msg", "stroke");
}
function paint_five(line_pt_y4)
{
	var aspect = calcAspect(line_pt_y4);
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y4, 0.3);//line_pt_y2
	messnamed("mgraphics_msg","stroke");
}
function paint_six(r,g,b,a)
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);	
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}

//.................paint left line functions...........

function paint_1L()
{
	paint_one()
	return;
}

function paint_2L()
{
	//clearscreen();
	paint_two(line_pt_y3);
	return;
}
function paint_3L()
{
	//clearscreen();
	paint_three(line_pt_y3);
	return;		
}

function paint_4L()
{
	//clearscreen();
	paint_four(line_pt_y4);
	return;
}
function paint_5L()
{
	//clearscreen();
	paint_five(line_pt_y4);	
	return;
}
function paint_6L()
{
	//clearscreen();
	paint_one();
	paint_two(line_pt_y3);
	paint_three(line_pt_y3);
	paint_four(line_pt_y4);
	paint_five(line_pt_y4);
	paint_six();
	return;
}
function paint_7L()
{
	//clearscreen();
	paint_one();
	paint_two(line_pt_y3);
	paint_three(line_pt_y3);
	paint_four(line_pt_y4);
	paint_five(line_pt_y4);
	paint_six(r,g,b,a);
	return;
}

function paint_clear_6()
{
	paint_six(0., 0., 0., 0.)
	return;
}


//................right lines functions...........
function paint_r_one()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 0., 0., 0.);
	messnamed("mgraphics_msg","set_line_width",.01);

	//right side
	messnamed("mgraphics_msg","move_to", .50 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
	
}
function paint_r_two()
{
	var aspect = calcAspect();	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
}
function paint_r_three()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .30 * aspect, line_pt_y1, -0.3);
	messnamed("mgraphics_msg","stroke");
}
function paint_r_four()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .50 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
}
function paint_r_five()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .50 * aspect, line_pt_y2, 0.3);
	messnamed("mgraphics_msg","stroke");
}
function paint_r_six()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
    messnamed("mgraphics_msg","line_to", .75 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}

//..................paint right lines functions....

function paint1R()
{
	//clearscreen();
	paint_r_one();
	return;
}
function paint2R()
{	
	//clearscreen();
	paint_r_two(line_pt_y1);
	return;
}
function paint3R()
{
	//clearscreen();
	paint_r_three(line_pt_y1);
	return;
}
function paint4R()
{
	//clearscreen;
	paint_r_four(line_pt_y2);
	return;
}
function paint5R()
{
	//clearscreen();
	paint_r_five(line_pt_y2);
	return;
}
function paint6R()
{
	//clearscreen();
	paint_r_six();
	return;
}
function paint7R()
{
	//clearscreen();
	paint_r_two(line_pt_y1);
	paint_r_three(line_pt_y1);
	paint_r_four(line_pt_y2);
	paint_r_five(line_pt_y2);
	paint_r_six();
	return;
}









	
	
	
	
//.................set_functions..............

//.....set lines....

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

function set_line_pt_y3(y)
{
	line_pt_y3 = y;
}
function set_line_pt_y4(y)
{
	line_pt_y4 = y;
}


//......set heart......	
function set_ctrl_pt_x1(x)
{
	ctrl_pt_x1 = x;
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

function set_center_x(x)
{
	center_x = x;
}
function set_heart_center_x(x)
{
	heart_center_x = x;
}
function set_bottom_x(x)
{
	bottom_x = x;
}
function set_top_x(x)
{
	top_x = (x);
}

function set_start_x(x)
{ 
	start_x = x;
}
function set_end_x(x)
{
	end_x = x;
}


//.....set r g b a
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

//......set scene....
function set_scene(v)
{
	scene = v;
	post("scene is",scene, "\n");
}



//.............right lines ideas...............

function idea_1()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 1., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);

	//straight line
	//messnamed("mgraphics_msg","move_to", 0.0 *aspect, 0.0);
	//messnamed("mgraphics_msg", "line_to", 0.4, 0.0);
	//messnamed("mgraphics_msg", "stroke");
	
	
	//curve
	messnamed("mgraphics_msg","move_to", 0.4 *aspect, 0.0);
	//messnamed("mgraphics_msg", "line_to", 0.9, 0.0);
	messnamed("mgraphics_msg","curve_to", x_1, y_1, x_2, y_2, x_3, y_3);
	messnamed("mgraphics_msg","stroke");
	post("idea_1", "\n");
}

function set_y_2(y)
{
	y_2 = y;
}