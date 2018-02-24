// alert("Connected!");
// $("body").hover(function(){
// 	$("#container").slideDown();
// });
$(".fa-pencil-square-o").click(function(){
$("#bottom").slideToggle("slow",function(){

});
});
var audio = new Audio('audio.mp3');
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete TO DO
$("ul").on("click","span",function(event){ 
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
	});
	event.stopPropogation();
});
$("input[type='text']").keypress(function(e){
	if(e.which===13)
	{
		audio.play();
		var inputText=$(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+inputText+"</li>");
		$(this).val("");

	}
});
// $(".fa-pencil-square-o").click(function(){
// 	$("input[type='text']").fadeToggle();
// })