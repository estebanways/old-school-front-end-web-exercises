
/**************************************** 
	JavaScript Document
	
	Name Site: Simple JavaScript Gallery
	Date: June 2013
	Version: 1.0
	Author: Rolando Aguilar Ulate
*****************************************/


var width_img = 600;
var cant_img = 8;
var position = [];
var current_position = 0;
var last_position;

function setPositions(step)
{
	for(var i=0; i<cant_img; i++)
	{
		position[i] = i*-step;
	}
}

function moveLeft()
{
	last_position = current_position;
	current_position++;
	if (current_position == position.length)
	{
		current_position = 0;
	}
	if (last_position != current_position)
	{
		$("#images").animate({left: position[current_position]});
	}
}

function moveRight()
{
	last_position = current_position;
	current_position--;
	if (current_position < 0)
	{
		current_position = position.length-1;
	}
	if (last_position != current_position)
	{
		$("#images").animate({left: position[current_position]});
	}
}

$(document).ready(function()
{
	setPositions(width_img);
	$("#leftArrow").click(function()
	{
		moveRight();
	});
	$("#rightArrow").click(function()
	{
		moveLeft();
	});
});