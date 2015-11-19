autowatch = 1;

var dis_width = 16.;
var dis_height = 9.;

//ctrl_pt_x1 = -0.25; ctrl_pt_y1 = 0.10;
//messnamed("mgraphics_msg", ctrl_pt_x1 = -0.7); 
//messnamed("mgraphics_msg", ctrl_pt_y1 = 0.3);

//messnamed("mgraphics_msg",line_pt_y2 = -0.6);
//messnamed("mgraphics_msg",line_pt_y1 = 0.3);
//messnamed("mgraphics_msg",line_pt_x1 = -.6);

//messnamed("mgraphics_msg",heart_center_x = 0.);

ctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;

line_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;

heart_center_x = 0.;




function calcAspect()
{
	return dis_width/dis_height;
}

function paint_heart_jit(r,g,b,a, center_x)
{
	var aspect = calcAspect();

	messnamed("mgraphics_msg","set_source_rgba",r,g,b,a);
		
	start_x = center_x; start_y = 0.2;
	end_x = center_x; end_y = -0.7;
	
	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to",center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.5,start_y-0.3, end_x,end_y);

	messnamed("mgraphics_msg","move_to",start_x * aspect,start_y);
	messnamed("mgraphics_msg","curve_to", center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.5,start_y-0.3, end_x,end_y);

	messnamed("mgraphics_msg","fill");
}


function paint_lineone_jit()
{
	var aspect = calcAspect();
	
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
	messnamed("mgraphics_msg","stroke");

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

function clearscreen()
{
	//mgraphics.redraw();
	//messnamed("mgraphics_msg","clear_surface");
	messnamed("mgraphics_msg", "set_source_rgba", 1., 1., 1., 1.);
	messnamed("mgraphics_msg", "paint"); 
    messnamed("mgraphics_msg",  "set_source_rgba", 0., 0., 0., 1.);
	messnamed("mgraphics_msg", "identity_matrix");
    messnamed("mgraphics_msg", "move_to", 0., 0.);
}

function set_ctrl_pt_x1(x)
{
	ctrl_pt_x1 = x;
	messnamed("mgraphics_msg","relcordscontrol");
	messnamed("mgraphics_msg","set_ctrl_pt_x1", -0.75,-0.65);
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
