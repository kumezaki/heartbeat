{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 7,
			"minor" : 0,
			"revision" : 5,
			"architecture" : "x86",
			"modernui" : 1
		}
,
		"rect" : [ -10.0, 79.0, 842.0, 728.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-25",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 477.0, 199.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "ezdac~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 550.0, 232.0, 45.0, 45.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-22",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 477.0, 269.0, 56.0, 22.0 ],
					"sig" : 0.0,
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 477.0, 232.0, 65.0, 22.0 ],
					"style" : "",
					"text" : "cycle~ 0.5"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "float" ],
					"patching_rect" : [ 259.0, 262.0, 31.0, 22.0 ],
					"style" : "",
					"text" : "t b f"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-14",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 259.0, 232.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 271.0, 292.0, 130.0, 22.0 ],
					"style" : "",
					"text" : "set_heart_center_x $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"linecount" : 281,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 695.0, 608.0, 161.0, 3774.0 ],
					"style" : "",
					"text" : "mgraphics.init();\nmgraphics.relative_coords = 1;\nmgraphics.autofill = 0;\n\nctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;\n\nline_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;\n\nfunction paint_1()\n\n{ \n\t var aspect = calcAspect();\n\t with (mgraphics)\n   \n\t\n\t{\n\t\tset_source_rgba(1., 0., 0., 1.);\n\t\t\n\t\t\n\t\tcenter_x = 0.;\n\t\tstart_x = center_x; start_y = 0.2;\n\t\tend_x = center_x; end_y = -0.7;\n\t\t\n\t\tmove_to(start_x * aspect,start_y);\n\t\tcurve_to(center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.7,start_y-0.3, end_x,end_y);\n\t\t         // 0 + -0.6             0.2 + 0.6          0 -0.6        0.2 - 0.2   0. -.7\n\n\t\tmove_to(start_x * aspect,start_y);\n\t\tcurve_to(center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.7,start_y-0.3, end_x,end_y);\n\t\tfill();\n\t\t\n\n\t\t\n\t\tset_source_rgba(0.5, 0.5, 1., 1.);\n\t\t\n\t\tmove_to(-1.0 * aspect, -0.1);\n\t\tline_to(-.85 * aspect, -0.1);\n\t\tstroke();\n\t\tfill();\n\t\t\n\t\tmove_to(-.85 * aspect, -0.1); //diagonal up\n\t\tline_to(-.75 * aspect, line_pt_y1);\n\t\tstroke();\n\t\t\n\t\tmove_to(-.65 * aspect, -.1); //digonal down, half way\n\t\tline_to(-.75 * aspect, line_pt_y1);\n\t\t\n\t\tmove_to(-.65 * aspect, -.1); //diagonal down, full way\n\t\tline_to(-.55 * aspect, line_pt_y2); \n\t\t\n\t\tmove_to(-.45 * aspect, -.1); //diagonal up\n\t\tline_to(-.55 * aspect, line_pt_y2);\n\t\t\n\t\tmove_to(-.45 * aspect, -0.1); //line across\n\t\tline_to(.45 * aspect, -0.1);\n\t\t\n\t    //right side\n\t\tmove_to(.32 * aspect, -0.1);\n\t\tline_to(.45 * aspect, -0.1);\n\t\tstroke();\n\t\t\n\t\tmove_to(.45 * aspect, -0.1); //diagonal up\n\t\tline_to(.55 * aspect, line_pt_y1);\n\t\tstroke();\n\t\t\n\t\tmove_to(.65 * aspect, -.1); //digonal down, half way\n\t\tline_to(.55 * aspect, line_pt_y1);\n\t\tstroke();\n\t\t\n\t\tmove_to(.65 * aspect, -.1); //diagonal down, full way\n\t\tline_to(.75 * aspect, line_pt_y2);\n\t\tstroke();\n\t\t\n\t\tmove_to(.85 * aspect, -.1); //diagonal up\n\t\tline_to(.75 * aspect, line_pt_y2);\n\t\tstroke();\n\t\t\n\t\tmove_to(.85 * aspect, -0.1); //line across\n\t\tline_to(1. * aspect, -0.1);\n\t\tstroke();\n\t}\n\t\n}\n\nfunction calcAspect()\n{ var width = this.box.rect[2] - this.box.rect[0];\n\tvar height = this.box.rect[3] - this.box.rect[1];\n\treturn width/height;\n}\n\nfunction paint_2()\n{\n\tvar aspect = calcAspect();\n \twith (mgraphics)\n\t{\n\t\t// another scene goes here\n\t\t\n\tset_source_rgba(0.5, 0.5, 0.5, 1.);\n\t\t\n\t\tmove_to(-1.0 * aspect, -0.1);\n\t\tline_to(-.85 * aspect, -0.1);\n\t\tstroke();\n\t\tfill();\n\t\t\n\t\tmove_to(-.85 * aspect, -0.1); //diagonal up\n\t\tline_to(-.75 * aspect, line_pt_y1-0.3);\n\t\tstroke();\n\t\t\n\t\tmove_to(-.65 * aspect, -.1); //digonal down, half way\n\t\tline_to(-.75 * aspect, line_pt_y1-0.3);\n\t\t\n\t\tmove_to(-.65 * aspect, -.1); //diagonal down, full way\n\t\tline_to(-.55 * aspect, line_pt_y2 +0.3); \n\t\t\n\t\tmove_to(-.45 * aspect, -.1); //diagonal up\n\t\tline_to(-.55 * aspect, line_pt_y2 + 0.3);\n\t\t\n\t\tmove_to(-.45 * aspect, -0.1); //line across\n\t\tline_to(.45 * aspect, -0.1);\n\t\t\n\t    //right side\n\t\tmove_to(.32 * aspect, -0.1);\n\t\tline_to(.45 * aspect, -0.1);\n\t\tstroke();\n\t\t\n\t\tmove_to(.45 * aspect, -0.1); //diagonal up\n\t\tline_to(.55 * aspect, line_pt_y1 - 0.3);\n\t\tstroke();\n\t\t\n\t\tmove_to(.65 * aspect, -.1); //digonal down, half way\n\t\tline_to(.55 * aspect, line_pt_y1 - 0.3);\n\t\tstroke();\n\t\t\n\t\tmove_to(.65 * aspect, -.1); //diagonal down, full way\n\t\tline_to(.75 * aspect, line_pt_y2 + 0.3);\n\t\tstroke();\n\t\t\n\t\tmove_to(.85 * aspect, -.1); //diagonal up\n\t\tline_to(.75 * aspect, line_pt_y2 + 0.3);\n\t\tstroke();\n\t\t\n\t\tmove_to(.85 * aspect, -0.1); //line across\n\t\tline_to(1. * aspect, -0.1);\n\t\tstroke();\n\t\t\t\n\t\t\n\t\t//heart\n\t\tset_source_rgba(1., 0.5, 0.5, 1.);\n\t\t\n\t\tcenter_x = 0.;\n\t\tstart_x = center_x; start_y = 0.1;\n\t\tend_x = center_x; end_y = -0.4;\n\t\t\n\t\tmove_to(start_x * aspect,start_y);\n\t\tcurve_to(center_x+ctrl_pt_x1, start_y+ctrl_pt_y1, center_x-0.2,start_y-0.3, end_x,end_y);\n\t\t         // 0 + -0.6             0.2 + 0.6          0 -0.4        0.2 - 0.2   0. -.7\n\n\t\tmove_to(start_x * aspect,start_y);\n\t\tcurve_to(center_x-ctrl_pt_x1, start_y+ctrl_pt_y1, center_x+0.2,start_y-0.3, end_x,end_y);\n\t\tfill();\n\t\t\t\n\t\t\n\t\t\n\t\t\n\t}\n}\n\n//paint is continuously called by the mgraphics engine\nfunction paint()\n{\n\tif (scene == 1) paint_1()\n\tif (scene == 2) paint_2()\n}\nfunction bang()\n{\n\tmgraphics.redraw();\n}\n\nfunction set_scene(v)\n{\n\tscene = v;\n\tpost(\"scene is\",scene);\n}\n\nfunction set_ctrl_pt_x1(v)\n{\n\tctrl_pt_x1 = v;\n}\n\nfunction set_line_pt_y1(z)\n{\n\tline_pt_y1 = z;\n}\n\nfunction set_line_pt_x1(x)\n{\n\tline_pt_x1 = x;\n}\n\nfunction set_line_pt_y2(y)\n{\n\tline_pt_y2 = y;\n}\n"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 99.5, 353.5, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 117.0, 255.0, 75.0, 22.0 ],
					"style" : "",
					"text" : "set_scene 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-50",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 99.5, 220.0, 75.0, 22.0 ],
					"style" : "",
					"text" : "set_scene 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "ezdac~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 825.0, 343.0, 45.0, 45.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-52",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 816.0, 139.0, 31.0, 22.0 ],
					"style" : "",
					"text" : "100"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-47",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 902.0, 43.0, 62.0, 22.0 ],
					"style" : "",
					"text" : "loadmess"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 902.0, 76.0, 29.5, 22.0 ],
					"style" : "",
					"text" : "24"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 816.0, 100.0, 51.0, 22.0 ],
					"style" : "",
					"text" : "r bang1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-41",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 902.0, 144.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-38",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 902.0, 114.0, 51.0, 22.0 ],
					"style" : "",
					"text" : "pgmout"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 906.0, 216.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-36",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 815.0, 216.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-34",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 0,
					"patching_rect" : [ 815.0, 262.0, 201.0, 22.0 ],
					"style" : "",
					"text" : "noteout"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "float", "float" ],
					"patching_rect" : [ 815.0, 185.0, 110.0, 22.0 ],
					"style" : "",
					"text" : "makenote 200 300"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 530.0, 138.0, 210.0, 22.0 ],
					"style" : "",
					"text" : "relcordscontrol 0.6 0.4 set_line_pt_y1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 301.0, 138.0, 218.0, 22.0 ],
					"style" : "",
					"text" : "relcordscontrol -0.8 -0.6 set_line_pt_y2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 207.0, 70.0, 150.0, 33.0 ],
					"style" : "",
					"text" : "can't use floats for arguments"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 56.0, 138.0, 229.0, 22.0 ],
					"style" : "",
					"text" : "relcordscontrol -0.75 -0.65 set_ctrl_pt_x1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 103.0, 112.0, 53.0, 22.0 ],
					"style" : "",
					"text" : "s bang1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-49",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 56.0, 51.0, 71.0, 22.0 ],
					"style" : "",
					"text" : "metro 2000"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-40",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 56.0, 79.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 56.0, 18.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 301.0, 340.0, 150.0, 33.0 ],
					"style" : "",
					"text" : "how do I move the heart to the foreground?"
				}

			}
, 			{
				"box" : 				{
					"filename" : "rel_coords_one.js",
					"id" : "obj-1",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 56.0, 411.0, 316.0, 256.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 176.0, 359.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "open"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 539.5, 182.0, 65.5, 182.0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-20", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-22", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-36", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-27", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 185.5, 389.5, 65.5, 389.5 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-37", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 65.5, 107.0, 112.5, 107.0 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-41", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-40", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 109.0, 326.0, 65.5, 326.0 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 109.0, 296.5, 109.0, 296.5 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 126.5, 343.5, 65.5, 343.5 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 126.5, 341.0, 109.0, 341.0 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 109.0, 381.0, 65.5, 381.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 310.5, 182.0, 65.5, 182.0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "rel_coords_one.js",
				"bootpath" : "~/Desktop/Anna 212/heartbeat",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "relcordscontrol.maxpat",
				"bootpath" : "~/Desktop/Anna 212/heartbeat",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"embedsnapshot" : 0
	}

}
