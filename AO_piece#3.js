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
end_y = 0;
x_4 = 0.5
x_5 = 0.1
y_4 = 0.
y_5 = 0.
//...right line

line_pt_y2 = -0.6; line_pt_y1 = 0.45; line_pt_x1 = -.6;

//....left line
line_pt_y3 = -0.6; line_pt_y4 = 0.45;


//....colors
r = 0.; g = 0.; b = 0.; a = 1.;

//...idea 1 functions

//x_1 = 0.;  y_1 = 0.; x_2 = 0.; y_2 = 0.; x_3 = 0.; y_3 = 0.;








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
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	//messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	//messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","stroke");
}

	
function paint_heart_two(r,g,b,a)
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
    messnamed("mgraphics_msg","stroke");
}

function paint_heart_three(r,g,b,a)
{
	var aspect = calcAspect();

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","stroke");
}

function paint_heart_four(r,g,b,a, bottom_x, top_x, ctrl_pt_x1, start_y, end_y,ctrl_pt_y1,center_x)
{
	var aspect = calcAspect();
	
	//start_x = center_x;
	end_x = center_x;
	//end_y = center_x;

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","fill");
}

function paint_heart_jit(r,g,b,a,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1)
{
	var aspect = calcAspect();

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
function paint_heart_last(r,g,b,a,bottom_x, top_x, ctrl_pt_x1, start_y, end_y,ctrl_pt_y1,center_x)
{
	var aspect = calcAspect();

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);
	messnamed("mgraphics_msg","stroke");
}


//...................paint heart functions........

function paint_11H()
{
	paint_heart_last(r,g,b,a,bottom_x, top_x, ctrl_pt_x1, start_y, end_y,ctrl_pt_y1,center_x);
	return;
}

function paint_1H()
{
	//clearscreen();
	paint_heart_one(1.,0.,0.,1.);
	return;
}
function paint_2H()
{
	//clearscreen();
	paint_heart_two(1.,0.,0.,1.);
	return;
}
function paint_3H()
{
	///clearscreen();
	paint_heart_jit(1.,0.,0.,1.,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1);
	//post("paint_9", "\n");
	return;
}

function paint_4H()
{
	//clearscreen();
	paint_heart_three(r,0.,0.,1.);
	return;
}

function paint_41H()
{
	//clearscreen();
	paint_heart_three(r,0.,0.,1.);
	return;
}
function paint_5H()
{
	//clearscreen()
	paint_one();
	paint_two(line_pt_y3);
	paint_three(line_pt_y3);
	paint_four(line_pt_y4);
	paint_five(line_pt_y4);
	paint_six();
	paint_heart_jit(1.,0.,0.,1.,center_x,start_y,end_y,ctrl_pt_x1,ctrl_pt_y1);
	return;
}
function paint_6H()
{
	paint_heart_four(r,g,b,a, bottom_x, top_x, ctrl_pt_x1, start_y, end_y,ctrl_pt_y1,center_x);	
	return;
}
	
function paint_61H()
{
	paint_heart_four(0.8, 0.,0.,1., -0.45, top_x, ctrl_pt_x1, 0.0, -0.45,0.3,0.0);	
	return;
}
	







//.............left lines functions......................................

function paint_one(r,g,b,a)
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);	
	messnamed("mgraphics_msg","move_to",-.75 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -.60 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
function paint_two(r,g,b,a,line_pt_y3)
{
	var aspect = calcAspect(line_pt_y3);
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);	
	messnamed("mgraphics_msg","move_to", -0.60 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y3, -0.3); //line_pt_y1
	messnamed("mgraphics_msg", "stroke");
}
function paint_three(r,g,b,a,line_pt_y3)
{
	var aspect = calcAspect(line_pt_y3);
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.50 * aspect, line_pt_y3, -0.3);//line_pt_y1
	messnamed("mgraphics_msg", "stroke");
}
function paint_four(r,g,b,a,line_pt_y4)
{
	var aspect = calcAspect(line_pt_y4);
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);
	messnamed("mgraphics_msg","move_to", -0.40 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", -0.30 * aspect, line_pt_y4, 0.3);
	messnamed("mgraphics_msg", "stroke");
}
function paint_five(r,g,b,a,line_pt_y4)
{
	var aspect = calcAspect(line_pt_y4);
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
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
	messnamed("mgraphics_msg","line_to", .10 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}

//.................paint left line functions...........

function paint_1L()
{
	paint_one(0.,1.,0.,1.)
	return;
}

function paint_2L()
{
	//clearscreen();
	paint_two(0.,1.,0.,1.,line_pt_y3);
	return;
}
function paint_3L()
{
	//clearscreen();
	paint_three(0.,1.,0.,1.,line_pt_y3);
	return;		
}

function paint_4L()
{
	//clearscreen();
	paint_four(0.,1.,0.,1.,line_pt_y4);
	return;
}
function paint_5L()
{
	//clearscreen();
	paint_five(0.,1.,0.,1.,line_pt_y4);	
	return;
}
function paint_6L()
{
	//clearscreen();
	paint_one(0.,1.,0.,1.);
	paint_two(0.,1.,0.,1.,line_pt_y3);
	paint_three(0.,1.,0.,1.,line_pt_y3);
	paint_four(0.,1.,0.,1.,line_pt_y4);
	paint_five(0.,1.,0.,1.,line_pt_y4);
	paint_six(0.,1.,0.,1.);
	return;
}
function paint_7L()
{
	//clearscreen();
	paint_one(0.,1.,0.,1.);
	paint_two(0.,1.,0.,1.,line_pt_y3);
	paint_three(0.,1.,0.,1.,line_pt_y3);
	paint_four(0.,1.,0.,1.,line_pt_y4);
	paint_five(0.,1.,0.,1.,line_pt_y4);
	paint_six(0.,1.,0.,1.);
	return;
}
function paint_71L()
{
	//clearscreen();
	paint_one(r,g,b,a);
	paint_two(r,g,b,a,line_pt_y3);
	paint_three(r,g,b,a,line_pt_y3);
	paint_four(r,g,b,a,line_pt_y4);
	paint_five(r,g,b,a,line_pt_y4);
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

function idea_1(r,g,b,a, x_1, y_1, x_2, y_2, x_3, y_3, x_4)
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);

	//straight line
	//messnamed("mgraphics_msg","move_to", 0.0 *aspect, 0.0);
	//messnamed("mgraphics_msg", "line_to", 0.4, 0.0);
	//messnamed("mgraphics_msg", "stroke");
	
	
	//curve
	messnamed("mgraphics_msg","move_to", x_4 *aspect, -0.1);
	//messnamed("mgraphics_msg", "line_to", 0.2, -0.1);
	messnamed("mgraphics_msg","curve_to", x_1, y_1, x_2, y_2, x_3, y_3);
	messnamed("mgraphics_msg","stroke");
	//post("idea_1", "\n");
}


function move_1()
{
	idea_1(r,g,b,1., x_1, y_1, x_2, y_2, x_3, y_3, 0.1);
	return;
}

function idea_2()
{
var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", r,g,b,a);
	messnamed("mgraphics_msg","set_line_width",.01);

	//right side
	messnamed("mgraphics_msg","move_to", x_4 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", x_5 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
function move_2()
{
	idea_2(r,g,b,1., x_4, x_5);
}

function idea_3()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0.,1.,0.,1.);
	messnamed("mgraphics_msg","set_line_width",.01);

	//right side
	messnamed("mgraphics_msg","move_to", -0.1 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", 0.0 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}

function idea_31()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0.,1.,0.,1.);
	messnamed("mgraphics_msg","set_line_width",.01);

	//right side
	messnamed("mgraphics_msg","move_to", 0.05 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", 0.15 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
function idea_42(x_4, x_5, y_4, y_5)
{
	var aspect = calcAspect();	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", x_4 * aspect, y_4);
	messnamed("mgraphics_msg","line_to", x_5 * aspect, y_5 ); //line_pt_y1, 0.15);
	messnamed("mgraphics_msg","stroke");
}
function idea_4()
{
	var aspect = calcAspect();	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", 0.21 * aspect, -0.05);
	messnamed("mgraphics_msg","line_to", 0.25 * aspect, 0.15 ); //line_pt_y1, 0.15);
	messnamed("mgraphics_msg","stroke");
}
function set_y_5(y)
{
	y_5 = y
}

function set_y_4(y)
{
	y_4 = y
}

function trial()
{
	idea_42(x_4, x_5, y_4, y_5)
}
function idea_41()
{
	var aspect = calcAspect();	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .26 * aspect, 0.2);
	messnamed("mgraphics_msg","line_to", .30 * aspect, 0.4 ); //line_pt_y1, 0.15);
	messnamed("mgraphics_msg","stroke");
}

function idea_51()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .37 * aspect, 0.1);
	messnamed("mgraphics_msg","line_to", .33 * aspect, 0.3);
	messnamed("mgraphics_msg","stroke");
}
function idea_5()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .42 * aspect, -0.15);
	messnamed("mgraphics_msg","line_to", .38 * aspect, 0.05);
	messnamed("mgraphics_msg","stroke");
}


function idea_6()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .43 * aspect, -0.2);
	messnamed("mgraphics_msg","line_to", .47 * aspect, -0.40);
	messnamed("mgraphics_msg","stroke");
}


function idea_7()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .52 * aspect, -0.3);
	messnamed("mgraphics_msg","line_to", .48 * aspect, -0.5);
	messnamed("mgraphics_msg","stroke");
}
function idea_71()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .53 * aspect, -0.25);
	messnamed("mgraphics_msg","line_to", .56 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
function idea_8()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .60 * aspect, -0.1);
    messnamed("mgraphics_msg","line_to", .70 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
	
function idea_81()
{
	var aspect = calcAspect();
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.)
	messnamed("mgraphics_msg","move_to", .75 * aspect, -0.1);
    messnamed("mgraphics_msg","line_to", .85 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}	
	
	
function set_x_4(x)
{
	x_4 = (x);
}
function set_x_5(x)
{ 
	x_5 = (x);
}
function set_x_1(x)
{
	x_1 = x;
}

function set_y_1(y)
{
	y_1 = y;
}

function set_x_2(x)
{
	x_2 = x
}

function set_y_2(y)
{
	y_2 = y;
}

function set_x_3(x)
{
	x_3 = x
}

function set_y_3(y)
{
	y_3 = y
}
