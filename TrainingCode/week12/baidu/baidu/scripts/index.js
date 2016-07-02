//使用了单例模式，定义了单个对象，将变量初始化和事件绑定分开
//页面加载完成实现变量初始化，省去频繁创建和销毁
//变量是事件绑定分开，可以方便的增加或者删除事件和事件处理函数
//增加了代码的逻辑性，方便维护
var index={
	init:function() {
		//初始化变量
		this.morebtn= $("#more,#more_item_panel");
		this.acount= $('#acount,#acount_item');
		this.setting= $('#setting,#setting_item');
		this.activeNavLi= $('nav>li');
		this.myAttention= $('#myAttention');
		this.recommendation= $('#recommendation');
		this.Navigation =$('#Navigation');
		this.Movies =$('#Movies');
		this.buy=$('#buy');
		this.changeColor=$('#changeColor');
		this.img1=$('#img1');
		this.img2=$('#img2');
		this.img3=$('#img3');
		this.weather_detail=$('#weather_detail');
		//执行事件绑定操作
		this.bind();	
		console.log(this);
	},
	bind:function() {
		//更多产品绑定事件
		this.morebtn.bind({
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
		this.acount.bind({
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
		this.setting.bind({
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
		this.activeNavLi.bind({
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

		this.myAttention.bind({
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

		this.recommendation.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.recommend').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#recommendation').addClass('selected');
					       }
					    console.log($(''))
					}
		})

		this.Navigation.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.nav_content').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#Navigation').addClass('selected');
					       }
					}
		})

		this.Movies.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.vedio').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#Movies').addClass('selected');
					       }
					}
		})

		this.buy.bind({
			click:function(){
					   if ($('#toggle').length>0) {
					       $('#toggle').removeAttr('id');
					       $('.shopping').attr({'id':'toggle'});
					   };
					   if ($('.selected').length>0) {
					        $('.selected').removeClass('selected');
					       $('#buy').addClass('selected');
					       }
					}
		})

		//更换皮肤按钮绑定事件
		this.changeColor.bind({
			click:function () {
					    $('.color_change').css({
					        'display':'block'
					    })
					}
		})

		this.img1.bind({
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

		this.img2.bind({
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

		this.img3.bind({
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
		this.weather_detail.bind({
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