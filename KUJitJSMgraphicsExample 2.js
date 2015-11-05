mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

var dis_width = box.rect[2] - box.rect[0];
var dis_height = box.rect[3] - box.rect[1];

function bang()
{
	mgraphics.redraw();
}

function onresize(w, h)
{
	post("resize called\n");
	dis_width = w;
	dis_height = h;
}

function paint()
{
	with (mgraphics)
	{
		set_source_rgba(0.5, 0., 0., 1.);
		set_line_width(10);
		move_to(0,dis_height/2);
		line_to(dis_width, dis_height/2);
		stroke();
	}
}

function paint_jit()
{
	// note that the following are the same as the ones in paint
	messnamed("mgraphics_msg","set_source_rgba",0.5, 0., 0., 1.);
	messnamed("mgraphics_msg","set_line_width",10);
	messnamed("mgraphics_msg","move_to",0,dis_height/2);
	messnamed("mgraphics_msg","line_to",dis_width,dis_height/2);
	messnamed("mgraphics_msg","stroke");
}
