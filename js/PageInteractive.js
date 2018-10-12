$(document).ready(function() {
	//分辨率变化
	$(window).resize(function(){
		if(screen.width > 768){
			$(".trigger").attr("class","trigger");
			$(".search-toggle").attr("class","search-toggle");
		    $(".navline").attr("class","navline");
		    $(".input-search-div").attr("class","input-search-div");
		    $(".blackground").attr("class","blackground");
		}
	});
	//搜索开关
	$(".trigger").click(function() {
		$(this).toggleClass("is-active");
		$(".navline").toggleClass("navlineactive");
		$(".login").toggleClass("loginactive");
		$(".input-search-div").toggleClass("input-search-divactive");
		$(".uncoil-first").attr("class","uncoil-first");
		$(".uncoil-second").attr("class","uncoil-second");
		$("#list-first-title-id").removeClass("list-first-title-active");
		$("#list-first-title-id").addClass("list-first-title");
		$("#list-second-title-id").removeClass("list-second-title-active");
		$("#list-second-title-id").addClass("list-second-title");
		$(".shopping").toggleClass("shoppingactive");
		$(".blackground").toggleClass("blackgroundon");
	});
	//选项按钮
	$(".search-toggle").click(function() {
		$(this).toggleClass("is-active");
		$(".input-search-div").toggleClass("input-search-divactive");
	});
	$(".blackground").click(function(){
		$(".trigger").attr("class","trigger");
		$(".navline").attr("class","navline");
		$(".input-search-div").attr("class","input-search-div");
		$(".uncoil-first").attr("class","uncoil-first");
		$(".uncoil-second").attr("class","uncoil-second");
		$("#list-first-title-id").removeClass("list-first-title-active");
		$("#list-first-title-id").addClass("list-first-title");
		$("#list-second-title-id").removeClass("list-second-title-active");
		$("#list-second-title-id").addClass("list-second-title");
		$(".login").attr("class","login");
		$(".shopping").attr("class","shopping");
		$(".center").attr("class","center");
		$(".footer").attr("class","footer");
		$(".blackground").attr("class","blackground");
	})
	//列表按钮
	$(".list-first-title").click(function() {
		$(".uncoil-first").toggleClass("uncoil-first-active");
		$(".uncoil-second").attr("class","uncoil-second");
		$(".list-first-title").toggleClass("list-first-title-active");
		$("#list-second-title-id").removeClass("list-second-title-active");
		$("#list-second-title-id").addClass("list-second-title");
		if($(document).width() < 768){
		}
	});
	$(".list-second-title").click(function() {
		$(".uncoil-second").toggleClass("uncoil-second-active");
		$(".uncoil-first").attr("class","uncoil-first");
		$(".list-second-title").toggleClass("list-second-title-active");
		$("#list-first-title-id").removeClass("list-first-title-active");
		$("#list-first-title-id").addClass("list-first-title");
		if($(document).width() < 768){
		}
	});
	//搜索框
	$(".search-inputbox").focusin(function(){
		//子列表焦点
		$(".uncoil-first").attr("class","uncoil-first");
		$(".uncoil-second").attr("class","uncoil-second");
		$("#list-first-title-id").removeClass("list-first-title-active");
		$("#list-first-title-id").addClass("list-first-title");
		$("#list-second-title-id").removeClass("list-second-title-active");
		$("#list-second-title-id").addClass("list-second-title");
		if($(document).width() > 940){
			$(".input-search").css("border-bottom","2px solid rgb(29, 141, 250)");
		}
	});
	$(".search-inputbox").focusout(function(){
		if($(document).width() > 940){
			$(".input-search").css("border-bottom","2px solid rgb(34, 34, 34)");
		}
	});
});