mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

ctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;

line_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;

function paint()

{ var aspect =calcAspect();
	
	with (mgraphics)
	
	{
		
		center_x = 0.;
		start_x = center_x; start_y = 0.2;
		end_x = center_x; end_y = -0.7;
		
		move_to(start_x * aspect,start_y);
		curve_to(center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.7,start_y-0.3, end_x,end_y);
		         // 0 + -0.6             0.2 + 0.6          0 -0.6        0.2 - 0.2   0. -.7

		move_to(start_x * aspect,start_y);
		curve_to(center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.7,start_y-0.3, end_x,end_y);
		
		move_to(-1.0 * aspect, -0.);
		line_to(-.8 * aspect,  -0.);
		stroke();
		
		move_to(-.8 * aspect, -0);
		line_to(-.7 * aspect, line_pt_y1);
		stroke();
		
		
	
	}
	
}

function calcAspect()
{ var width = this.box.rect[2] - this.box.rect[0];
	var height = this.box.rect[3] - this.box.rect[1];
	return width/height;
	}
