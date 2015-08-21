mgraphics.init();

function paint()
{
	with (mgraphics)
	{
		center_x = 100;
		start_x = center_x; start_y = 50;
		end_x = center_x; end_y = 150;
		
		move_to(start_x,start_y);
		curve_to(center_x-50,start_y-20, center_x-100,start_y+50, end_x,end_y);

		move_to(start_x,start_y);
		curve_to(center_x+50,start_y-20, center_x+100,start_y+50, end_x,end_y);
	}
}
