autowatch = 1;

var dis_width = 16.;
var dis_height = 9.;

line_pt_y3 = -0.6; line_pt_y4 = 0.3;

function calcAspect()
{
	return dis_width/dis_height;
}

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
function paint_six()
{
	var aspect = calcAspect();
	
	messnamed("mgraphics_msg","set_source_rgba", 0., 1., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",.01);
	
	messnamed("mgraphics_msg","move_to", -0.20 * aspect, -0.1);
	messnamed("mgraphics_msg","line_to", .20 * aspect, -0.1);
	messnamed("mgraphics_msg","stroke");
}
function clearscreen()

{
	post("opening clearscreen\n");
	messnamed("mgraphics_msg","clear_surface");
	messnamed("mgraphics_msg", "set_source_rgba", 0., 0., 0., 1.);
	messnamed("mgraphics_msg", "paint"); 
    messnamed("mgraphics_msg", "set_source_rgba", 0., 0., 0., 1.);
	//messnamed("mgraphics_msg", "identity_matrix");
    //messnamed("mgraphics_msg", "move_to", 0., 0.);
}


function set_line_pt_y3(x)
{
	line_pt_y3 = x;
}

function set_line_pt_y4(y)
{
	line_pt_y4 = y;
}	
function paint_2()
{
	clearscreen();
	paint_two(line_pt_y3);
	return;
}
function paint_3()
{
	clearscreen();
	paint_three(line_pt_y3);
	return;		
}

function paint_4()
{
	clearscreen();
	paint_four(line_pt_y4);
	return;
}
function paint_5()
{
	clearscreen();
	paint_five(line_pt_y4);	
	return;
}
function paint_6()
{
	clearscreen();
	paint_one();
	paint_two(line_pt_y3);
	paint_three(line_pt_y3);
	paint_four(line_pt_y4);
	paint_five(line_pt_y4);
	paint_six();
	return;
}