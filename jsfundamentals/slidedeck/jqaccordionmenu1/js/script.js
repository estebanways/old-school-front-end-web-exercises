function Slide(){     
this.boton=null;
}

Slide.prototype.accordion=function (){

    activeItem = $("#accordion li:first");
    $(activeItem).addClass('active');

    $("#accordion li").click(function(){
        $(activeItem).animate({width: "40px"}, {duration:500, queue:false});
        $(this).animate({width: "950px"}, {duration:500, queue:false});
        activeItem = this;
    });

};

var slide1 = new Slide();


window.onload=function(){ 
	slide1.accordion();
};