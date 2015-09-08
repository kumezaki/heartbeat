mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

ctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;

line_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;

function paint_1()

{ 
	 var aspect = calcAspect();
	 with (mgraphics)
   
	
	{
		set_source_rgba(1., 0., 0., 1.);
		
		
		center_x = 0.;
		start_x = center_x; start_y = 0.2;
		end_x = center_x; end_y = -0.7;
		
		move_to(start_x * aspect,start_y);
		curve_to(center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.7,start_y-0.3, end_x,end_y);
		         // 0 + -0.6             0.2 + 0.6          0 -0.6        0.2 - 0.2   0. -.7

		move_to(start_x * aspect,start_y);
		curve_to(center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.7,start_y-0.3, end_x,end_y);
		fill();
		

		
		set_source_rgba(0.5, 0.5, 1., 1.);
		
		move_to(-1.0 * aspect, -0.1);
		line_to(-.85 * aspect, -0.1);
		stroke();
		fill();
		
		move_to(-.85 * aspect, -0.1); //diagonal up
		line_to(-.75 * aspect, line_pt_y1);
		stroke();
		
		move_to(-.65 * aspect, -.1); //digonal down, half way
		line_to(-.75 * aspect, line_pt_y1);
		
		move_to(-.65 * aspect, -.1); //diagonal down, full way
		line_to(-.55 * aspect, line_pt_y2); 
		
		move_to(-.45 * aspect, -.1); //diagonal up
		line_to(-.55 * aspect, line_pt_y2);
		
		move_to(-.45 * aspect, -0.1); //line across
		line_to(.45 * aspect, -0.1);
		
	    //right side
		move_to(.32 * aspect, -0.1);
		line_to(.45 * aspect, -0.1);
		stroke();
		
		move_to(.45 * aspect, -0.1); //diagonal up
		line_to(.55 * aspect, line_pt_y1);
		stroke();
		
		move_to(.65 * aspect, -.1); //digonal down, half way
		line_to(.55 * aspect, line_pt_y1);
		stroke();
		
		move_to(.65 * aspect, -.1); //diagonal down, full way
		line_to(.75 * aspect, line_pt_y2);
		stroke();
		
		move_to(.85 * aspect, -.1); //diagonal up
		line_to(.75 * aspect, line_pt_y2);
		stroke();
		
		move_to(.85 * aspect, -0.1); //line across
		line_to(1. * aspect, -0.1);
		stroke();
	}
	
}

function calcAspect()
{ var width = this.box.rect[2] - this.box.rect[0];
	var height = this.box.rect[3] - this.box.rect[1];
	return width/height;
}

function paint_2()
{
	var aspect = calcAspect();
 	with (mgraphics)
	{
		// another scene goes here
		set_source_rgba(0.5, 0.5, 0.5, 1.);
		
		move_to(-1.0 * aspect, -0.1);
		line_to(-.85 * aspect, -0.1);
		stroke();
		fill();
		
		move_to(-.85 * aspect, -0.1); //diagonal up
		line_to(-.75 * aspect, line_pt_y1-0.3);
		stroke();
		
		move_to(-.65 * aspect, -.1); //digonal down, half way
		line_to(-.75 * aspect, line_pt_y1-0.3);
		
		move_to(-.65 * aspect, -.1); //diagonal down, full way
		line_to(-.55 * aspect, line_pt_y2 +0.3); 
		
		move_to(-.45 * aspect, -.1); //diagonal up
		line_to(-.55 * aspect, line_pt_y2 + 0.3);
		
		move_to(-.45 * aspect, -0.1); //line across
		line_to(.45 * aspect, -0.1);
		
	    //right side
		move_to(.32 * aspect, -0.1);
		line_to(.45 * aspect, -0.1);
		stroke();
		
		move_to(.45 * aspect, -0.1); //diagonal up
		line_to(.55 * aspect, line_pt_y1 - 0.3);
		stroke();
		
		move_to(.65 * aspect, -.1); //digonal down, half way
		line_to(.55 * aspect, line_pt_y1 - 0.3);
		stroke();
		
		move_to(.65 * aspect, -.1); //diagonal down, full way
		line_to(.75 * aspect, line_pt_y2 + 0.3);
		stroke();
		
		move_to(.85 * aspect, -.1); //diagonal up
		line_to(.75 * aspect, line_pt_y2 + 0.3);
		stroke();
		
		move_to(.85 * aspect, -0.1); //line across
		line_to(1. * aspect, -0.1);
		stroke();
			
		
		//heart
		set_source_rgba(1., 0.5, 0.5, 1.);
		
		center_x = 0.;
		start_x = center_x; start_y = 0.1;
		end_x = center_x; end_y = -0.4;
		
		move_to(start_x * aspect,start_y);
		curve_to(center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.2,start_y-0.3, end_x,end_y);
		         // 0 + -0.6             0.2 + 0.6          0 -0.4        0.2 - 0.2   0. -.7

		move_to(start_x * aspect,start_y);
		curve_to(center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.2,start_y-0.3, end_x,end_y);
		fill();
		
	}
}

//paint is continuously called by the mgraphics engine
function paint()
{
	if (scene == 1) paint_1()
	if (scene == 2) paint_2()
}
function bang()
{
	mgraphics.redraw();
}

function set_scene(v)
{
	scene = v;
	post("scene is",scene);
}

function set_ctrl_pt_x1(v)
{
	ctrl_pt_x1 = v;
}

function set_line_pt_y1(z)
{
	line_pt_y1 = z;
}

function set_line_pt_x1(x)
{
	line_pt_x1 = x;
}

function set_line_pt_y2(y)
{
	line_pt_y2 = y;
}
