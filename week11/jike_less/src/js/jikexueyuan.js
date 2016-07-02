/**
 * Created by hasee on 2016/5/8.
 */
$(document).ready(function(){
    // 搜索框获得焦点事件
    $("#search_text").on("focus",function () {
        console.log(1111);
        $(".search_form>p").css({
            "display":"none"
        });
        $(".btn_search").css({
            "background-color":"#27C34E"
        })
    });
    // 搜索框失去焦点事件
    $("#search_text").on("blur",function () {
        $(".search_form>p").css({
            "display":"block"
        });
        $(".btn_search").css({
            "background-color":"white"
        })
    });

    // 搜索按钮划过事件
    $(".btn_search").hover(function () {
        $(this).css({
                    "background-color":"#27C34E"
                })
    },function () {
        $(this).css({
            "background-color":"white"
        })
    });

    // 搜索框内部的内容鼠标滑过事件
    $(".search_form>p>span",this).hover(function () {
        $(this).css({
                    "background-color":"rgba(85, 85, 85, 0.21)",
                    "cursor":"pointer"
                })
    },function () {
        $(this).removeAttr("style")
    });

    // 导航栏事件
    $(".nav_item,.nav_bar_detail").hover(function () {
        $(".nav_bar_detail").show()
    },function () {
        $(".nav_bar_detail").hide()
    });

    // 内容区域菜单栏鼠标滑过事件
    $('#menu_detail_mobie').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","mobile");
        $("#menu_detail_mobie").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
            if($(".detail_pannel").attr("data-content")=="mobile"){
                $(".mobile_dev").show()
            };
    },function () {
        $(".detail_pannel").hide();
        $(".mobile_dev").hide();
        $("#menu_detail_mobie").removeAttr("style");
    });
    
    $('#menu_detail_web').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","web");
        $("#menu_detail_web").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        })
        if($(".detail_pannel").attr("data-content")=="web"){
            $(".web_dev").show()
        };
    },function () {
        $(".detail_pannel").hide();
        $(".web_dev").hide();
        $("#menu_detail_web").removeAttr("style");
    });

    $('#menu_detail_server').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","server");
        $("#menu_detail_server").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="server"){
            $(".server_dev").show();
        };
    },function () {
        $(".detail_pannel").hide();
        $(".server_dev").hide();
        $("#menu_detail_server").removeAttr("style");
    });

    $('#menu_detail_base').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","base");
        $("#menu_detail_base").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="base"){
            $(".Basis_dev").show();
        };
    },function () {
        $(".detail_pannel").hide();
        $(".Basis_dev").hide();
        $("#menu_detail_base").removeAttr("style");
    });

    $('#menu_detail_cloud').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","cloud");
        $("#menu_detail_cloud").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="cloud"){
            $(".cloud_dev").show()
        };
    },function () {
        $(".detail_pannel").hide();
        $(".cloud_dev").hide();
        $("#menu_detail_cloud").removeAttr("style");
    });

    $('#menu_detail_obj').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","obj");
        $("#menu_detail_obj").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="obj"){
            $(".obj_dev").show()
        };
    },function () {
        $(".detail_pannel").hide();
        $(".obj_dev").hide();
        $("#menu_detail_obj").removeAttr("style");
    });

    $('#menu_detail_sql').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","sql");
        $("#menu_detail_sql").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="sql"){
            $(".sql_dev").show()
        };
    },function () {
        $(".detail_pannel").hide();
        $(".sql_dev").hide();
        $("#menu_detail_sql").removeAttr("style");
    });

    $('#menu_detail_Certification').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","Certification1");
        $("#menu_detail_Certification").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="Certification1"){
            $(".Certification").show();
        };
    },function () {
        $(".detail_pannel").hide();
        $(".Certification").hide();
        $("#menu_detail_Certification").removeAttr("style");
    });

    $('#menu_detail_ent').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","ent");
        $("#menu_detail_ent").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="ent"){
            $(".Enterprise_it").show();
        };
    },function () {
        $(".detail_pannel").hide();
        $(".Enterprise_it").hide();
        $("#menu_detail_ent").removeAttr("style");
    });

    $('#menu_detail_des').hover(function () {
        $(".detail_pannel").show();
        $(".detail_pannel").attr("data-content","des");
        $("#menu_detail_des").css({
            "border-right-color":"transparent",
            "border-left-color":"green"
        });
        if($(".detail_pannel").attr("data-content")=="des"){
            $(".Design_test").show();
        };
    },function () {
        $(".detail_pannel").hide();
        $(".Design_test").hide();
        $("#menu_detail_des").removeAttr("style");
    });

    $(".detail_pannel").hover(function () {
        $(".detail_pannel").show();
        if($(".detail_pannel").attr("data-content")=="mobile") {
            $(".mobile_dev").show();
            $("#menu_detail_mobie").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="web"){
            $(".web_dev").show();
            $("#menu_detail_web").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="server"){
            $(".server_dev").show();
            $("#menu_detail_server").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="base"){
            $(".Basis_dev").show();
            $("#menu_detail_base").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="cloud"){
            $(".cloud_dev").show();
            $("#menu_detail_cloud").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="obj"){
            $(".obj_dev").show();
            $("#menu_detail_obj").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="sql"){
            $(".sql_dev").show();
            $("#menu_detail_sql").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="Certification1"){
            $(".Certification").show();
            $("#menu_detail_Certification").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="ent"){
            $(".Enterprise_it").show();
            $("#menu_detail_ent").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }else if($(".detail_pannel").attr("data-content")=="des"){
            $(".Design_test").show();
            $("#menu_detail_des").css({
                "border-right-color":"transparent",
                "border-left-color":"green"
            });
        }
    },function () {
        $(".detail_pannel").hide();
        $(".mobile_dev").hide();
        $(".web_dev").hide();
        $(".server_dev").hide();
        $(".Basis_dev").hide();
        $(".cloud_dev").hide();
        $(".obj_dev").hide();
        $(".sql_dev").hide();
        $(".Certification").hide();
        $(".Enterprise_it").hide();
        $(".Design_test").hide();
        $(".detail_pannel").removeAttr("data-content");
        $("#menu_detail_mobie").removeAttr("style");
        $("#menu_detail_server").removeAttr("style");
        $("#menu_detail_base").removeAttr("style");
        $("#menu_detail_cloud").removeAttr("style");
        $("#menu_detail_obj").removeAttr("style");
        $("#menu_detail_sql").removeAttr("style");
        $("#menu_detail_Certification").removeAttr("style");
        $("#menu_detail_ent").removeAttr("style");
        $("#menu_detail_des").removeAttr("style");

    });

     $(".detail_pannel>div>ul>li,.detail_pannel>div>ul>p",this).hover(function () {
         $(this).css({
             "color":"rgb(39, 195, 78)"
         })
     },function () {
         $(this).removeAttr("style");
     });
    
    //极客课程图片轮播区域
    var index=0;
    $(".img li:first").clone().appendTo(".img");
    var size=$(".img li").size();

    //向左点击的button事件
    $("#btn_l").on("click",function () {
        moveR();
    })
    function moveL() {
        index++;
        if(index==size){
            index=1;
            $(".img").css({
                "left":-534*(index-1)+"px"
            })
        }
        $(".img").stop().animate({
            "left":-534*index+"px"
        },1000)
        $(".num li").siblings().removeClass("on");
        $(".num li").eq(index).addClass("on");
    }

    //向右点击的button事件
    $("#btn_r").on("click",function () {
       moveL()
    })
    function moveR() {
        index--;
        if(index==-1){
            index=size-2;
            $(".img").css({
                "left":-534*(index+1)+"px"
            })
        }
        $(".img").stop().animate({
            "left":-534*index+"px"
        },1000)
        $(".num li").siblings().removeClass("on");
        $(".num li").eq(index).addClass("on");
    }

    // 自动轮播
    var t=setInterval(function () {
        moveL();
    },2000);

    //图片中间的索引点鼠标滑过事件
    $(".num li").hover(function () {
        index=$(this).index();
        $(".img").animate({
            "left":-534*index+"px"
        },1000)
        $(".num li").siblings().removeClass("on");
        $(".num li").eq(index).addClass("on");
        clearInterval(t);
    },function () {
        t=setInterval(function () {
            moveL();
        },2000);
    })

    // 轮播的图片滑过事件
    $(".img li").hover(function () {
        clearInterval(t);
        $(".btn_lr").css({
            "visibility":"visible"
        })
    },function () {
        t=setInterval(function () {
            moveL();
        },2000);
        $(".btn_lr").css({
            "visibility":"hidden"
        })
    })
    //轮播图片左右点击按钮鼠标滑过的时间
    $("#btn_l,#btn_r").hover(function () {
        clearInterval(t);
        $(".btn_lr").css({
            "visibility":"visible"
        })
    },function () {

    })


    //轮播图片下面的课程手动轮播
    var i=0;
    $("#HTML5").clone().appendTo(".main_course_content")
    $("#Android").clone().appendTo(".main_course_content")
    $("#IOS").clone().appendTo(".main_course_content")
    var size1=$(".main_course_content a").size();
    //向右点击轮播
    $("#lesson_back").on("click",function () {
        i++;
        if(i==size1-2){
            i=1;
            $(".main_course_content").css({
                "left":-177*(i-1)+"px"
            })
        }
        $(".main_course_content").animate({
            "left":-177*i+"px"
        },1000)
    })
    //向左点击轮播
    $("#lesson_forward").on("click",function () {
        i--;
        if(i==-1){
            i=size1-4;
            $(".main_course_content").css({
                "left":-177*(size1-3)+"px"
            })
        }
        $(".main_course_content").animate({
            "left":-177*i+"px"
        },1000)
    })
    //main_course_content鼠标滑过事件
    $(".main_course_content").hover(function () {
        $(".main_course_btn").css({
            "visibility":"visible"
        })
    },function () {
        $(".main_course_btn").css({
            "visibility":"hidden"
        })
    })

    $(".main_course_btn").hover(function () {
        $(".main_course_btn").css({
            "visibility":"visible"
        })
    },function () {
        console.log("do nothing")
    })

    //轮播右侧登陆注册区域鼠标滑过事件
    $(".fast_link a").hover(function () {
        $(this).css({
            "color":"rgb(39, 195, 78)"
        })
    },function () {
        $(this).removeAttr("style")
    })
    

   $("#li_fast_link_FQ").hover(function () {
       $(".fast_link_content").css({
           "display":"block"
       })
       $(".fast_link_FQ_detail").css({
           "display":"block"
       })
   },function () {
       
   })
    $("#li_fast_link_WIKI").hover(function () {
        $(".fast_link_content").css({
            "display":"block"
        })
        $(".fast_link_WIKI_detail").css({
            "display":"block"
        })
    },function () {

    })
    $("#li_fast_link_cursor").hover(function () {
        $(".fast_link_content").css({
            "display":"block"
        })
        $(".fast_link_cursor_detail").css({
            "display":"block"
        })
    },function () {

    })
    $("#li_fast_link_Community").hover(function () {
        $(".fast_link_content").css({
            "display":"block"
        })
        $(".fast_link_Community_detail").css({
            "display":"block"
        })
    },function () {

    })

    $(".fast_link_content").on("mouseout",function () {
        $(".fast_link_content").css({
            "display":"none"
        })
        $(".fast_link_FQ_detail").css({
            "display":"none"
        })
        $(".fast_link_WIKI_detail").css({
            "display":"none"
        })
        $(".fast_link_cursor_detail").css({
            "display":"none"
        })
        $(".fast_link_Community_detail").css({
            "display":"none"
        })
    })
    
    
    //publice_class导航栏鼠标滑过事件
    $(".public_class_nav li",this).hover(function () {
        $(this).siblings().removeClass("nav_on")
        $(this).addClass("nav_on")
    },function () {

    })

    //每一个课程滑过事件
     // $("#Hot li:nth-child(1)").hover(function () {
     //     $("#Hot li:nth-child(1)>.class_info p:first-child").addClass("class_info_show")
     //     $("#Hot li:nth-child(1)>.class_info p:last-child").addClass("class_info_show")
     //     $(".lang_ico1").hide()
     //     $(".learning_num").addClass("class_info_show")
     //     $("#Hot li:nth-child(1)>div.class_play").addClass("class_info_show")
     // },function () {
     //     $("#Hot li:nth-child(1)>.class_info p:first-child").removeClass("class_info_show")
     //     $("#Hot li:nth-child(1)>.class_info p:last-child").removeClass("class_info_show")
     //     $(".learning_num").removeClass("class_info_show")
     //     $(".lang_ico1").show()
     //     $("#Hot li:nth-child(1)>div.class_play").removeClass("class_info_show")
     // })
    $(".public_class_content li",this).hover(function () {
        $(this).children(".class_info").children("p:first-child").addClass("class_info_show")
        $(this).children(".class_info").children("p:last-child").addClass("class_info_show")
        $(this).children(".class_info").children("p").children(".lang_ico1").hide()
        $(this).children(".class_info").children("p").children(".learning_num").addClass("class_info_show")
        $(this).children(".class_play").addClass("class_info_show")
        $(this).children(".class_info").css({
            "border-bottom":"1px solid rgba(128, 128, 128, 0.2)"
        })

    },function () {
        $(this).children(".class_info").children("p:first-child").removeClass("class_info_show")
        $(this).children(".class_info").children("p:last-child").removeClass("class_info_show")
        $(this).children(".class_info").children("p").children(".lang_ico1").show()
        $(this).children(".class_info").children("p").children(".learning_num").removeClass("class_info_show")
        $(this).children(".class_play").removeClass("class_info_show")
        $(this).children(".class_info").removeAttr("style")
    })
    
    //publice_class导航栏切换内容跟着切换
    $(".public_class_nav li",this).hover(function () {
        if($(this).attr("data-content")=="hot"){
            $("#Hot").siblings().removeClass("public_class_content_show")
            $("#Hot").addClass("public_class_content_show")
        }else if($(this).attr("data-content")=="new"){
            $("#New").siblings().removeClass("public_class_content_show")
            $("#New").addClass("public_class_content_show")
        }else if($(this).attr("data-content")=="free"){
            $("#Free").siblings().removeClass("public_class_content_show")
            $("#Free").addClass("public_class_content_show")
        }else if($(this).attr("data-content")=="project"){
            $("#Project").siblings().removeClass("public_class_content_show")
            $("#Project").addClass("public_class_content_show")
        }else if($(this).attr("data-content")=="first"){
            $("#First").siblings().removeClass("public_class_content_show")
            $("#First").addClass("public_class_content_show")
        }else if($(this).attr("data-content")=="cooperation"){
            $("#Cooperation").siblings().removeClass("public_class_content_show")
            $("#Cooperation").addClass("public_class_content_show")
        }
    },function () {
        $(this).removeClass("public_class_content_show")
    })
    
    //职业路径图的鼠标滑过样式
    $(".path a",this).hover(function () {
        $(this).siblings().removeClass("path_on")
        $(this).addClass("path_on")
    },function () {
        $(this).removeClass("path_on")
    })

    //知识体系图反转样式
    $(".kw_system li",this).hover(function () {
        console.log(this)
        $(this).children("a").css({
            "animation":"mymove1 0.5s linear",
            "backface-visibility":"hidden",
            "-webkit-animation-fill-mode":"forwards"
        })
        $(this).children("div").css({
            "animation":"mymove2 0.5s linear",
            "backface-visibility":"visible",
            "-webkit-animation-fill-mode":"forwards"
        })

    },function () {
        $(this).children("a").css({
            "animation":"mymove2 0.5s linear",
            "backface-visibility":"visible",
            "-webkit-animation-fill-mode":"forwards"
        })
        $(this).children("div").css({
            "animation":"mymove1 0.5s linear",
            "backface-visibility":"hidden",
            "-webkit-animation-fill-mode":"forwards"
        })
    })

    //精品推荐课程鼠标滑过事件
    $(".excellent li a",this).hover(function () {
        $(this).children(".excellent_li_author").animate({
            "opacity":"0.9"
        },500)
    },function () {
        $(this).children(".excellent_li_author").animate({
            "opacity":"0"
        },500)
    })

    
    //wiki鼠标滑过事件
    $(".wiki a>div",this).hover(function () {
        $(this).children("div").children("img").css({
            "animation":"mymove3 1s linear",
            "-webkit-animation-fill-mode":"forwards"
        })
        $(this).children("span").show()
        $(this).parents("a").css({
            "border-color":"limegreen"
        })
    },function () {
        $(this).children("div").children("img").css({
            "animation":"mymove4 1s linear",
            "-webkit-animation-fill-mode":"forwards"
        })
        $(this).children("span").hide()
        $(this).parents("a").removeAttr("style")
    })

    //合作企业左右点击事件
    var k=0;
    $(".Cooperation_cto ul li:first").clone().appendTo(".Cooperation_cto ul")
    $(".Cooperation_cto ul li:nth-child(2)").clone().appendTo(".Cooperation_cto ul")
    $(".Cooperation_cto ul li:nth-child(3)").clone().appendTo(".Cooperation_cto ul")
    $(".Cooperation_cto ul li:nth-child(4)").clone().appendTo(".Cooperation_cto ul")
    $(".Cooperation_cto ul li:nth-child(5)").clone().appendTo(".Cooperation_cto ul")
    $(".Cooperation_cto ul li:nth-child(6)").clone().appendTo(".Cooperation_cto ul")
    var size2=$(".Cooperation_cto ul li").size();
    $(".Cooperation_cto_btnr").on("click",function () {
        k++;
        if(k==(size2-5)){
            k=0;
            $(".Cooperation_cto ul").css({
                "left":"0px"
            })
        }
        $(".Cooperation_cto ul").animate({
            "left":-160*(k+1)+"px"
        })
    })

    $(".Cooperation_cto_btnl").on("click",function () {
        k--;
        if(k==-1){
            k=size2-6;
            $(".Cooperation_cto ul").css({
                "left":-160*(size2-6)+"px"
            })
        }
        $(".Cooperation_cto ul").animate({
            "left":-160*k+"px"
        })
    })
    //鼠标滑过按钮出现
    $(".content_border").hover(function () {
        $(".Cooperation_cto_btn span").css({
            "visibility":"visible"
        })
    },function () {
        $(".Cooperation_cto_btn span").removeAttr("style")
    })


    //合作院校的左右点击事件
    var j=0;
    $(".Cooperation_sch ul li:first").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(2)").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(3)").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(4)").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(5)").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(6)").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(7)").clone().appendTo(".Cooperation_sch ul")
    $(".Cooperation_sch ul li:nth-child(8)").clone().appendTo(".Cooperation_sch ul")
    var size3=$(".Cooperation_sch ul li").size();
    $("#Cooperation_sch_btnr").on("click",function () {
           j++;
        if(j==(size3-7)){
            j=1;
            $(".Cooperation_sch ul").css({
                "left":"0px"
            })
        }
        $(".Cooperation_sch ul").animate({
            "left":-130*(j+1)+"px"
        })
    })

    $("#Cooperation_sch_btnl").on("click",function () {
         j--;
        if(j==-1){
            j=size3-8;
            $(".Cooperation_sch ul").css({
                "left":-130*j+"px"
            })
        }
        $(".Cooperation_sch ul").animate({
            "left":-130*(j-1)+"px"
        })
    })
    //鼠标滑过按钮出现
    $(".Cooperation_sch_content").hover(function () {
        $(".Cooperation_sch_btn span").css({
            "visibility":"visible"
        })
    },function () {
        $(".Cooperation_sch_btn span").removeAttr("style")
    })

    //媒体报道左右点击事件
    var a=0;
    $(".Reported_content_img ul li:first").clone().appendTo(".Reported_content_img ul")
    $(".Reported_content_img ul li:nth-child(2)").clone().appendTo(".Reported_content_img ul")
    $(".Reported_content_img ul li:nth-child(3)").clone().appendTo(".Reported_content_img ul")
    $(".Reported_content_img ul li:nth-child(4)").clone().appendTo(".Reported_content_img ul")
    $(".Reported_content_img ul li:nth-child(5)").clone().appendTo(".Reported_content_img ul")
    var size4=$(".Reported_content_img ul li").size();
    $("#Reported_content_btnr").on("click",function () {
        a++;
        if(a==(size4-5)){
            a=1;
            $(".Reported_content_img ul").css({
                "left":-178*a+"px"
            })
        }
        $(".Reported_content_img ul").animate({
            "left":-178*a+"px"
        })
    })

    $("#Reported_content_btnl").on("click",function () {
        a--;
        if(a==-1){
            a=size4-5;
            $(".Reported_content_img ul").css({
                "left":-180*a+"px"
            })
        }
        $(".Reported_content_img ul").animate({
            "left":-180*(a-1)+"px"
        })
    })
    //鼠标滑过按钮出现
    $(".Reported_content").hover(function () {
        $(".Reported_content_btn span").css({
            "visibility":"visible"
        })
    },function () {
        $(".Reported_content_btn span").removeAttr("style")
    })



})


