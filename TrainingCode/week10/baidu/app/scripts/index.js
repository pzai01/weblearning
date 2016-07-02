var index={
	init:function() {
		var morebtn= $('#more,#more_item_panel');
		var acount= $('#acount,#acount_item');
		var setting= $('#setting,#setting_item');
		var activeNavLi= $('nav>li',this);
		var myAttention= $('#myAttention');
		var recommendation= $('#recommendation');
		var Navigation =$('#Navigation');
		var Movies =$('#Movies');
		var buy=$('#buy');
		var changeColor=$('#changeColor');
		var img1=$('#img1');
		var img2=$('#img2');
		var img3=$('#img3');
		var weather_detail=$('#weather_detail');
		bind();	
	}
	bind:function () {
		//更多产品绑定事件
		morebtn.bind({
		  mouseover:function(){
				    $('#more_item_panel').css({
				       'display':'block'
				     });
				    $('#more').css({
				       'background':'#f9f9f9',
				       'color':'#555'
				     });
				},  
		  mouseout:function(){
				    $('#more_item_panel').css({
				       'display':'none'
				     });
				    $('#more').css({
				       'background':'rgba(0, 102, 255, 0.98)',
				       'color':'white'
				     })
				}  
		})

		//账户按钮绑定事件
		acount.bind({
			mouseover:function(){
					    $('#acount_item').css({
					       'display':'block'
					     });
					},
			mouseout:function(){
					    $('#acount_item').css({
					       'display':'none'
					     });
					}

		})

		// 设置按钮滑过事件
		setting.bind({
			mouseover:function(){
					    $('#setting_item').css({
					       'display':'block'
					     });
					},
			mouseout:function(){
					    $('#setting_item').css({
					       'display':'none'
					     });
					}
		})

		//导航栏事件绑定
		activeNavLi.bind({
			mouseover:function(){
					   $(this).css({
					       'background':'rgba(128, 128, 128, 0.76)',
					       'color':'white'
					    });
					},
			mouseout:function(){
					   $(this).removeAttr('style') 
					}
		})

		//中间内容区域切换

		myAttention.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.my_at').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#myAttention').addClass('selected');
					       }
					}
		})

		recommendation.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.my_at').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#myAttention').addClass('selected');
					       }
					}
		})

		Navigation.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.my_at').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#myAttention').addClass('selected');
					       }
					}
		})

		Movies.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.my_at').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#myAttention').addClass('selected');
					       }
					}
		})

		buy.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.my_at').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#myAttention').addClass('selected');
					       }
					}
		})

		//更换皮肤按钮绑定事件
		changeColor.bind({
			click:function () {
					    $('.color_change').css({
					        'display':'block'
					    })
					}
		})

		img1.bind({
			click:function () {
					    $('.container').css({
					        'background':'url(../img/background_img1.jpg) no-repeat',
					        'background-size':'100% 100%'
					    })
					    $('.color_change').css({
					        'display':'none'
					    })
					}
		})

		img2.bind({
			click:function () {
					    $('.container').css({
					        'background':'url(../img/background_img2.jpg) no-repeat',
					        'background-size':'100% 100%'
					    })
					    $('.color_change').css({
					        'display':'none'
					    })
					}
		})

		img3.bind({
			click:function () {
					    $('.container').css({
					        'background':'url(../img/background_img3.jpg) no-repeat',
					        'background-size':'100% 100%'
					    })
					    $('.color_change').css({
					        'display':'none'
					    })
					}
		})

		//天气详情
		weather_detail.bind({
			mouseover:function(){
					    $('.weather').css({
					            'display':'block'
					        })
					},
			mouseout:function(){
					    $('.weather').css({
					            'display':'none'
					        })
					}
		})

	}

}
index.init();