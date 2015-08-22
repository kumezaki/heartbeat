mgraphics.init();

ctrl_pt_x1 = 50; ctrl_pt_y1 = 20;

function paint()
{
	with (mgraphics)
	{
		center_x = 100;
		start_x = center_x; start_y = 50;
		end_x = center_x; end_y = 150;
		
		move_to(start_x,start_y);
		curve_to(center_x-ctrl_pt_x1,start_y-ctrl_pt_y1, center_x-100,start_y+50, end_x,end_y);

		move_to(start_x,start_y);
		curve_to(center_x+ctrl_pt_x1,start_y-ctrl_pt_y1, center_x+100,start_y+50, end_x,end_y);
	}
}

function bang()
{
	mgraphics.redraw();
}

function set_ctrl_pt_x1(v)
{
	ctrl_pt_x1 = v;
}
