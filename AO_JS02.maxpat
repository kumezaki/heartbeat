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
<<<<<<< Updated upstream
		"rect" : [ 34.0, 79.0, 1212.0, 683.0 ],
=======
		"rect" : [ 133.0, 79.0, 1216.0, 787.0 ],
>>>>>>> Stashed changes
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
					"id" : "obj-25",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 778.0, 550.0, 150.0, 47.0 ],
					"style" : "",
					"text" : "how to combine  rel_coords_one with this patch"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"patching_rect" : [ 131.0, 139.0, 31.0, 22.0 ],
					"style" : "",
					"text" : "t f b"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-22",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 131.0, 109.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"linecount" : 204,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 115.0, 475.0, 167.0, 2741.0 ],
					"style" : "",
					"text" : "autowatch = 1;\n\nvar dis_width = 16.;\nvar dis_height = 9.;\n\nctrl_pt_x1 = -0.7; ctrl_pt_y1 = 0.3;\n\nline_pt_y2 = -0.6; line_pt_y1 = 0.3; line_pt_x1 = -.6;\n\nheart_center_x = 0.;\n\n\nfunction bang()\n{\n\tmgraphics.redraw();\n}\n\nfunction calcAspect()\n{\n\treturn dis_width/dis_height;\n}\n\nfunction paint_heart_jit(r,g,b,a,center_x)\n{\n\tvar aspect = calcAspect();\n\n\tmessnamed(\"mgraphics_msg\",\"set_source_rgba\",r,g,b,a);\n\t\n\tstart_x = center_x; start_y = 0.2;\n\tend_x = center_x; end_y = -0.7;\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\",start_x*aspect,start_y);\n\tmessnamed(\"mgraphics_msg\",\"curve_to\",center_x+ctrl_pt_x1,start_y+ctrl_pt_y1,center_x-0.7,start_y-0.3,end_x,end_y);\n\n\tmessnamed(\"mgraphics_msg\",\"move_to\",start_x*aspect,start_y);\n\tmessnamed(\"mgraphics_msg\",\"curve_to\",center_x-ctrl_pt_x1,start_y+ctrl_pt_y1,center_x+0.7,start_y-0.3,end_x,end_y);\n\n\tmessnamed(\"mgraphics_msg\",\"fill\");\n}\n\nfunction paint_lineone_jit()\n\n{\n\tvar aspect = calcAspect();\n\t\n\tmessnamed(\"mgraphics_msg\",\"set_source_rgba\",0., 0., 0., 1.);\n\tmessnamed(\"mgraphics_msg\",\"set_line_width\",10);\n\tmessnamed(\"mgraphics_msg\",\"move_to\",-1.0 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", -.85 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", -0.85 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", -0.75 * aspect, line_pt_y1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", -0.65 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", -0.75 * aspect, line_pt_y1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", -0.65 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", -0.55 * aspect, line_pt_y2);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", -0.45 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", -0.55 * aspect, line_pt_y2);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", -0.45 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", .45 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n//right side\n\tmessnamed(\"mgraphics_msg\",\"move_to\", .32 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", .45 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", .45 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", .55 * aspect, line_pt_y1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", .65 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", .55 * aspect, line_pt_y1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", 65 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", 75 * aspect, line_pt_y2);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", 85 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", 75 * aspect, line_pt_y2);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\t\n\tmessnamed(\"mgraphics_msg\",\"move_to\", .85 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\",\"line_to\", .1 * aspect, -0.1);\n\tmessnamed(\"mgraphics_msg\", \"stroke\");\n\n}\n\nfunction set_ctrl_pt_x1(x)\n{\n\tctrl_pt_x1 = x;\n}\n\nfunction set_line_pt_y1(y)\n{\n\tline_pt_y1 = y;\n}\n\nfunction set_line_pt_x1(x)\n{\n\tline_pt_x1 = x;\n}\n\nfunction set_line_pt_y2(y)\n{\n\tline_pt_y2 = y;\n}\n\nfunction set_heart_center_x(x)\n{\n\theart_center_x = x;\n}\n"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 229.0, 263.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 7,
							"minor" : 0,
							"revision" : 5,
							"architecture" : "x86",
							"modernui" : 1
						}
,
						"rect" : [ 88.0, 129.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 105.0, 32.0, 61.0, 22.0 ],
									"style" : "",
									"text" : "loadbang"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 45.0, 29.5, 25.0, 25.0 ],
									"style" : ""
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-30",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 45.0, 90.0, 472.0, 22.0 ],
									"style" : "",
									"text" : "set_source_rgba 1 1 1 1, paint, set_source_rgba 0 0 0 1, identity_matrix, move_to 0. 0."
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-40",
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 45.0, 165.0, 25.0, 25.0 ],
									"style" : ""
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-30", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-40", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-30", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-30", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-4", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 229.0, 320.0, 81.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"style" : "",
						"tags" : ""
					}
,
					"style" : "",
					"text" : "patcher reset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "jit.pwindow",
					"name" : "u261001334",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 346.0, 236.0, 320.0, 180.0 ],
					"presentation_rect" : [ 0.0, 0.0, 320.0, 180.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 59.0, 97.0, 22.0 ],
					"style" : "",
					"text" : "paint_lineone_jit"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 230.0, 179.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "AO_JS01",
						"parameter_enable" : 0
					}
,
					"style" : "",
					"text" : "js KUJitJSMgraphicsExample.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 131.0, 177.0, 156.0, 22.0 ],
					"style" : "",
					"text" : "paint_heart_jit 0. 0. 1. 1. $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 47.0, 121.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"id" : "obj-21",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 798.0, 121.0, 150.0, 24.0 ],
					"style" : "",
					"text" : "open any movie here."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "jit_matrix", "" ],
					"patching_rect" : [ 346.0, 460.0, 30.0, 22.0 ],
					"style" : "",
					"text" : "jit.+"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "jit.pwindow",
					"name" : "u632000839",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 346.0, 505.0, 324.0, 231.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "jit.pwindow",
					"name" : "u702000842",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 759.0, 230.0, 309.0, 224.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 759.0, 123.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "read"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "jit_matrix", "" ],
					"patching_rect" : [ 759.0, 159.0, 95.0, 22.0 ],
					"style" : "",
					"text" : "jit.movie @vol 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 346.0, 63.0, 72.0, 22.0 ],
					"style" : "",
					"text" : "loadmess 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 483.5, 167.0, 34.0, 22.0 ],
					"style" : "",
					"text" : "print"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 346.0, 96.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 346.0, 126.0, 71.0, 23.0 ],
					"style" : "",
					"text" : "qmetro 33"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 427.0, 126.0, 103.0, 22.0 ],
					"style" : "",
					"text" : "r mgraphics_msg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "jit_matrix", "" ],
					"patching_rect" : [ 346.0, 192.0, 231.0, 22.0 ],
					"style" : "",
					"text" : "jit.mgraphics 320 180 @relative_coords 1"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "AO_JS01",
				"bootpath" : "~/Desktop/Anna 212/heartbeat",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "jit.+.mxo",
				"type" : "iLaX"
			}
 ],
		"embedsnapshot" : 0
	}

}
