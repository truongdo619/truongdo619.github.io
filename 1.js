 $(function(){
	 
 	function print()
 	{
 		window.print();
 	}

 	$("#home").click(function()
 	{
 		$('html').animate({scrollTop:0},1000,'easeInOutExpo');
 		return false;
 	})

 	$("#about").click(function()
 	{
 		$('html').animate({scrollTop:$('.about').offset().top},1000,'easeInOutExpo');
 		return false;
 	})

 	$("#resume").click(function()
 	{
 		$('html').animate({scrollTop:$('.resume').offset().top},1000,'easeInOutExpo');
 		return false;
 	})

 	$("#portfolio").click(function()
 	{
 		$('html').animate({scrollTop:$('.portfolio').offset().top},1000,'easeInOutExpo');
 		return false;
 	})

 	$("#contact").click(function()
 	{
 		$('html').animate({scrollTop:$('.contact').offset().top},1000,'easeInOutExpo');
 		return false;
 	})

 	$("#comment").click(function()
 	{
 		$('html').animate({scrollTop:$('.comment').offset().top},1000,'easeInOutExpo');
 		return false;
 	})

 	$(window).scroll(function()
 	{
 		if ($(window).scrollTop() > 650)
 			$('.logo').addClass("out");
 		else
 			$('.logo').removeClass("out");
 	})
})  
 