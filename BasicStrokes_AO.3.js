mgraphics.init();

mgraphics.relative_coords = 0;	// change this to 1 and adjust the rest of the code

ctrl_pt_x1 = 50; ctrl_pt_y1 = 20;

line_pt_y2 = 150; line_pt_y1 = 50; line_pt_x1 = 50;

scene = 0;

function paint_1()
{
	with (mgraphics)
	{
		center_x = 150;
		start_x = center_x; start_y = 50;
		end_x = center_x; end_y = 150;
		
		move_to(start_x,start_y);
		curve_to(center_x-ctrl_pt_x1,start_y-ctrl_pt_y1, center_x-100,start_y+50, end_x,end_y);

		move_to(start_x,start_y);
		curve_to(center_x+ctrl_pt_x1,start_y-ctrl_pt_y1, center_x+100,start_y+50, end_x,end_y);
		
		move_to(0,100);
		line_to(30, 100);
		
		move_to(30, 100);//diagonal up
		line_to(50,line_pt_y1);
		
		move_to(55, 100); //digonal down, half way
		line_to(50, line_pt_y1);
		
		move_to(55, 100); //diagonal down, full way
		line_to(60, line_pt_y2); 
		
		move_to(70, 100); //diagonal up
		line_to(60, line_pt_y2);
		
		move_to(70, 100); //line across
		line_to(95, 100);
		
		//right side of pwindow
		move_to(205, 100);
		line_to(235, 100);
		
		move_to(235, 100);//diagonal up
		line_to(250, line_pt_y1);
		
		move_to(255, 100); //digonal down, half way
		line_to(250, line_pt_y1);
		
		move_to(255, 100); //diagonal down, full way
		line_to(260, line_pt_y2);
		
		move_to(270, 100); //diagonal up
		line_to(260, line_pt_y2);
		
		move_to(270, 100); //line across
		line_to(295, 100);
	}
}

function paint_2()
{
	with (mgraphics)
	{
		// draw another scene here
	}
}

// paint is continuously called by the mgraphics engine
function paint()
{
	if (scene == 1) paint_1();

	if (scene == 2) paint_2();
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
