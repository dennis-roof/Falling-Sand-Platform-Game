var game = new Game();
game.player = new Player();

jQuery(function()
{
	var $view = jQuery('#view');
	var map = [];
	/*
	map.push([0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0]);
	map.push([0,4,4,4,0,0,0,0]);
	map.push([1,1,1,1,1,1,1,1]);
	*/
	/*
	map.push([0,0,2,2,2,2,0,0,0,0,0,3,3,3,3,3,0,0,0]);
	map.push([0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,2,0,0,0,0,0,0,0,0,3,3,3,3,0,0]);
	map.push([0,0,0,0,2,0,0,0,0,0,0,0,3,3,3,3,0,0,0]);
	map.push([1,1,1,1,1,1,0,0,1,0,0,0,0,3,3,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0,1,0,0,0,0,3,3,3,0,0,0]);
	map.push([0,0,0,1,1,1,1,1,1,0,0,0,0,3,3,0,0,0,0]);
	map.push([0,0,0,2,2,2,0,0,1,0,0,0,3,3,3,0,0,1,0]);
	map.push([0,0,0,0,0,0,0,0,1,0,0,0,0,3,0,0,0,1,0]);
	map.push([1,1,1,1,2,2,2,0,1,0,0,0,0,1,1,1,1,1,0]);
	map.push([0,0,0,0,0,0,2,0,1,0,0,0,0,3,0,0,0,0,0]);
	map.push([0,0,1,1,1,1,1,1,1,0,1,0,0,3,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,2,0,0,1,0,0,3,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0]);
	map.push([0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	map.push([0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,3,0,0,0]);
	map.push([0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0]);
	map.push([0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0]);
	map.push([0,0,4,4,4,4,0,0,4,4,0,0,4,4,4,4,4,4,0]);
	map.push([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	*/
	

	map.push([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]);
	map.push([1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	map.push([1,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,1,0,0,0,1,1,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,1,1,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,1,1,1,1,1,1,1,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1]);
	map.push([1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	map.push([1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1]);
	map.push([1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	map.push([1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,0,1,0,0,0,0,0,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,1,1,0,0,3,3,3,0,1,1,1,3,3,3,3,1,0,1,0,0,0,0,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,1,1,3,3,3,3,3,1,0,1,3,3,3,3,1,0,1,0,0,0,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,4,4,4,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
	map.push([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	
	
	//console.log('start');
	
	var mapDetails = {
	    0: {type: 'air', ignore: true,    color: '#000000'},
	    1: {type: 'solid', ignore: true,  color: '#FFFFFF'},
	    2: {type: 'liquid', reaction: {}, color: '#6666FF'},
	    3: {type: 'solid', reaction: {},  color: '#FFAA99'},
	    4: {type: 'gas', reaction: {},    color: '#99FF99'}
	};
	
	var mapSwitches = {
		'2,10': {x: 21, y: 13, toBlock: 0},
		'36,35': {x: 45, y: 14, toBlock: 0},
		'39,35': {x: 31, y: 22, toBlock: 0},
		'42,35': {x: 31, y: 23, toBlock: 0},
		'70,13': {x: 78, y: 7, toBlock: 0},
		'70,16': {x: 60, y: 27, toBlock: 0},
		'70,19': {x: 60, y: 28, toBlock: 0},
		'71,25': {x: 27, y: 37, toBlock: 0},
		'68,25': {x: 28, y: 37, toBlock: 0},
		'42,40': {x: 36, y: 45, toBlock: 0},
		'34,47': {x: 32, y: 52, toBlock: 0},
		'32,47': {x: 32, y: 53, toBlock: 0},
		'30,53': {x: 30, y: 63, toBlock: 0}
	};
	
	var fps = 20;
	setInterval(function() {
    	map = cycle(map, mapDetails, mapSwitches);
	}, 1000/fps);
	
	var arrow = {left: 37, up: 38, right: 39, down: 40};
	var arrow2 = {left: 65, up: 87, right: 68, down: 83 };
	
	$(document).keydown(function(e) {
		var keyCode = e.keyCode || e.which;
		
		if (keyCode === arrow.left || keyCode === arrow2.left) {
			game.player.direction = 'left';
		} else if (keyCode === arrow.right || keyCode === arrow2.right) {
			game.player.direction = 'right';
		}
		
		if (keyCode === arrow.up || keyCode === arrow2.up) {
			game.player.jump = true;
		}

	});
	
	$(document).keyup(function(e){
		var keyCode = e.keyCode || e.which;
		
		if ( (keyCode === arrow.left || keyCode === arrow2.left) && game.player.direction === 'left' ){
			game.player.direction = '';
		} else if ( (keyCode === arrow.right || keyCode === arrow2.right) && game.player.direction === 'right' ){
			game.player.direction = '';
		}
	});
	
	$('#left').on('mousedown touchstart', function() {
		game.player.direction = 'left';
	});
	$('#left').on('mouseup touchend', function() {
		game.player.direction = '';
	});
	
	$('#right').on('mousedown touchstart', function() {
		game.player.direction = 'right';
	});
	$('#right').on('mouseup touchend', function() {
		game.player.direction = '';
	});
		
	$('#up').on('mousedown touchstart', function() {
		game.player.jump = true;
	});
	
	$('#reset').on('mousedown touchstart', function() {
		location.reload();
	});
});

var frame = 0;
var time = 0;
var cycle = function(map, mapDetails, mapSwitches)
{
    var timeStart = new Date();
    map = game.cycle(map, mapDetails, mapSwitches);
    var timeEnd = new Date();
    time += (timeEnd.getTime() - timeStart.getTime());
    frame += 1;

    if (frame % 10 == 0) {
        //myLog('fps: ' + (frame / (time/1000)));
        //console.log('fps: ' + (frame / (time/1000)));
    }
    
    return map;
}

function Player() {
	//this.$player = jQuery('#player');
	this.startX = 15;
	this.startY = 15;
	this.x = this.startX;
	this.y = this.startY;
	
	this.playerSize = 8;
	this.playerHalfSize = this.playerSize >> 1;
	
	this.blockSize = 6;
	
	this.gravity = 1;
	this.velocity = 0;
	this.maxVelocity = 5;
	
	this.direction = '';
	this.jump = false;
	
	this.getMapPosition = function(x, y, map) {
		var indexX = (x / this.blockSize) >> 0;
		var indexY = (y / this.blockSize) >> 0;
		
		if (map[indexY] !== undefined && map[indexY][indexX] !== undefined) {
			return map[indexY][indexX];
		} else {
			return 1;
		}
	};
	
	//this.blockType = [1,3];
	this.detectCollision = function(x, y, map)
	{
		//var mapXdown = (((x - this.playerHalfSize) / this.blockSize) + 0.5) >> 0;
		//var mapYdown = (((y - this.playerHalfSize) / this.blockSize) + 0.5) >> 0;
		var mapXdown = (((x) / this.blockSize) + 0.0) >> 0;
		var mapYdown = (((y) / this.blockSize) + 0.0) >> 0;

		//var mapXup = (((x + this.playerHalfSize) / this.blockSize) + 0.5) >> 0;
		//var mapYup = (((y + this.playerHalfSize) / this.blockSize) + 0.5) >> 0;
		var mapXup = (((x + this.playerSize) / this.blockSize) + 0.0) >> 0;
		var mapYup = (((y + this.playerSize) / this.blockSize) + 0.0) >> 0;

		var blockUpperLeft = map[mapYdown][mapXdown];
		var blockUpperRight = map[mapYdown][mapXup];
		var blockLowerLeft = map[mapYup][mapXdown];
		var blockLowerRight = map[mapYup][mapXup];
		/*
		console.log(this.x/this.blockSize + ',' + this.y/this.blockSize);
		console.log(mapXdown + ':' + mapYdown);
		console.log(mapXup + ':' + mapYup);
		
		console.log(blockUpperLeft);
		console.log(blockUpperRight);
		console.log(blockLowerLeft);
		console.log(blockLowerRight);
			*/	
		if (blockUpperLeft === 1 || blockUpperLeft === 3 ||
				blockUpperRight === 1 || blockUpperRight === 3 ||
				blockLowerLeft === 1 || blockLowerLeft === 3 ||
				blockLowerRight === 1 || blockLowerRight === 3) {
			//console.log('collision detected');
			return true;
		}
		
		//console.log('path is free');
		return false;
	};
	
	this.fall = function(map) {
		var newY = this.y+(this.velocity === 0 ? this.gravity : this.velocity);
		
		//var nextBlock = this.getMapPosition(this.x, newY+this.playerSize, map);
		//console.log(this.x + ', ' + this.y);
		//console.log(nextBlock);
		if (! this.detectCollision(this.x, newY, map)) {
			//console.log('update');
			this.y = newY;
			this.velocity += this.gravity;
			if (this.velocity > this.maxVelocity) {
				this.velocity = this.maxVelocity;
			}
		} else {
			this.y += this.blockSize - ((this.y+this.playerSize) % this.blockSize) - 1;
			this.velocity = 0;
		}
	};
	
	this.walk = function(map) {
		if (this.direction !== '') {
			//console.log(this.$player);
			var newX = this.x + (this.direction === 'right' ? 5 : -5);
			
			//var nextBlock = this.getMapPosition(newX, this.y+this.playerSize, map);
			//console.log(this.x + ', ' + this.y);
			if (! this.detectCollision(newX, this.y, map)) {
				this.x = newX;
			}
		}
	};
	
	this.jumpUp = function(map) {
		if (this.jump) {
			//console.log('jump: ' + this.velocity);
			this.jump = false;
			
			var newY = this.y+this.gravity;
			//var nextBlock = this.getMapPosition(this.x, newY+this.playerSize, map);
			
			if (this.velocity === 0 && this.detectCollision(this.x, newY, map)) {
				this.velocity -= this.blockSize;
			}
		}
	};
	
	this.death = function(map) {
		var thisBlock = this.getMapPosition(this.x+this.playerHalfSize, this.y+this.playerHalfSize, map);
		if (thisBlock !== 0) {
			this.x = this.startX;
			this.y = this.startY;
		}
	};
	
	this.reposition = function() {
		//document.getElementById('player').style.left = (this.x-this.playerHalfSize) + 'px';
		//document.getElementById('player').style.top = (this.y-this.playerHalfSize) + 'px';
		document.getElementById('player').style.left = (this.x) + 'px';
		document.getElementById('player').style.top = (this.y) + 'px';
		//this.$player.css('left', this.x + 'px');
		//this.$player.css('top', this.y + 'px');
	};
	
	this.move = function(map) {
		this.walk(map);
		this.fall(map);
		this.jumpUp(map);
		this.death(map);
		this.reposition();
	};
}

function Game() {
	this.player = undefined;
	
	this.createMaskMap = function(map) {
	    var maskMap = [];
	    for (var y=0; y<map.length; y++) {
	        maskMap.push([]);
	    }
	    
	    return maskMap;
	};
	
	this.validNextPosition = function(type, otherType) {
		return otherType === 'air' || (type === 'liquid' && otherType === 'gas') || (type === 'solid' && otherType === 'gas') || (type === 'gas' && (otherType !== 'gas' && otherType !== 'solid'));
	};
	
	this.checkPosition = function(cellNumber, x, y, map, maskMap, mapDetails) {
	    if (y >= 0 && y < map.length && x >= 0 && x < map[y].length) {
	        var type = mapDetails[cellNumber]['type'];
	        var otherCellNumber = map[y][x];
	        var otherType = mapDetails[otherCellNumber]['type'];
	
			//console.log('checking position ' + x + ',' + y + ' for type ' + type);
	        if (this.validNextPosition(type, otherType) && maskMap[y][x] !== 1) {
	        	//console.log('it is okay');
	            return true;
	        }
	    }
	    
	    return false;
	};
	
	this.floatPosition = function(number, x, y, map, mapDetails, maskMap, vDirection, hDirection) {
		//console.log(x + ', ' + y);
		if (y < 0 || y > map.length || x < 0 || x > map[y].length) { return false; }
	    var currentNumber = map[y][x];
	    while (((vDirection > 0 && x < map[y].length-1) || (vDirection < 0 && x > 0)) && currentNumber === number) {
	        x += vDirection;
	        currentNumber = map[y][x];
	    }
	    
	    var type = mapDetails[number]['type'];
	    var otherType = mapDetails[currentNumber]['type'];
	    if (this.validNextPosition(type, otherType) && maskMap[y][x] !== 1) {
	        return {x: x, y: y};
	    } else if ((vDirection < 0 && x < map[y].length-1) || (vDirection > 0 && x > 0)) {
	        currentNumber = map[y-hDirection][x-vDirection];
	    	otherType = mapDetails[currentNumber]['type'];
	        if (this.validNextPosition(type, otherType) && maskMap[y-hDirection][x-vDirection]) {
	            return {x: x-vDirection, y: y-hDirection};
	        }
	    }
	    
	    return false;
	};
	
	this.changePosition = function(x, y, newX, newY, map) {
	    var cell = map[y][x];
	    var otherCell = map[newY][newX];
	    
	    map[y][x] = otherCell;
	    map[newY][newX] = cell;
	    
	    //console.log('from ' + x + ',' + y + ' to ' + newX + ',' + newY);
	    
	    return map;
	};
	
	this.updateMap = function(map, maskMap, mapDetails) {
		var y = map.length;
		while (y--) {
			var x = map[y].length;
			while (x--) {
	            var cellNumber = map[y][x];
	            if (mapDetails[cellNumber]['ignore'] === undefined && maskMap[y][x] !== 1) {
	                var coords = undefined;
	                var hDirection = (mapDetails[cellNumber]['type'] === 'gas' ? -1 : 1);
	                
	                if (this.checkPosition(cellNumber, x, y+hDirection, map, maskMap, mapDetails)) {
	                    map = this.changePosition(x, y, x, y+hDirection, map);
	                    maskMap[y][x] = 1;
	                    this.updateCell(x, 0, y, 0, map, mapDetails);
	                    maskMap[y+hDirection][x] = 1;
	                    this.updateCell(x, 0, y, hDirection, map, mapDetails);
	                } else if (this.checkPosition(cellNumber, x-1, y+hDirection, map, maskMap, mapDetails)) {
	                    map = this.changePosition(x, y, x-1, y+hDirection, map);
	                    maskMap[y][x] = 1;
	                    this.updateCell(x, 0, y, 0, map, mapDetails);
	                    maskMap[y+hDirection][x-1] = 1;
	                    this.updateCell(x, -1, y, hDirection, map, mapDetails);
	                } else if (this.checkPosition(cellNumber, x+1, y+hDirection, map, maskMap, mapDetails)) {
	                    map = this.changePosition(x, y, x+1, y+hDirection, map);
	                    maskMap[y][x] = 1;
	                    this.updateCell(x, 0, y, 0, map, mapDetails);
	                    maskMap[y+hDirection][x+1] = 1;
	                    this.updateCell(x, 1, y, hDirection, map, mapDetails);
	                } else if (mapDetails[cellNumber]['type'] !== 'solid') {
	                    if (coords = this.floatPosition(cellNumber, x, y+hDirection, map, mapDetails, maskMap, -1, hDirection)) {
	                        map = this.changePosition(x, y, coords['x'], coords['y'], map);
	                        maskMap[y][x] = 1;
	                        this.updateCell(x, 0, y, 0, map, mapDetails);
	                        maskMap[ coords['y'] ][ coords['x'] ] = 1;
	                        this.updateCell(coords['x'], 0, coords['y'], 0, map, mapDetails);
	                    } else if (coords = this.floatPosition(cellNumber, x, y+hDirection, map, mapDetails, maskMap, 1, hDirection)) {
	                        map = this.changePosition(x, y, coords['x'], coords['y'], map);
	                        maskMap[y][x] = 1;
	                        this.updateCell(x, 0, y, 0, map, mapDetails);
	                        maskMap[ coords['y'] ][ coords['x'] ] = 1;
	                        this.updateCell(coords['x'], 0, coords['y'], 0, map, mapDetails);
	                    }
	                }
	            }
	        }
	    }
	    
	    return {map: map, maskMap: maskMap};
	};
	
	this.updateCell = function(x, xn, y, yn, map, mapDetails) {
		//return;
		document.getElementById('cell-' +(x+xn)+ '-' +(y+yn)).style['background'] = mapDetails[ map[y+yn][x+xn] ]['color'];
		//document.getElementById('cell-' +(x+xn)+ '-' +(y+yn)).setAttribute('style', 'float: left; width: 6px; height: 6px; background-color: '+mapDetails[ map[y+yn][x+xn] ]['color']);
	};
	
	/* This is much faster than using (el.innerHTML = str) when there are many
	existing descendants, because in some browsers, innerHTML spends much longer
	removing existing elements than it does creating new ones. */
	this.replaceHtml = function(el, html) {
	        var oldEl = (typeof el === "string" ? document.getElementById(el) : el);
	        var newEl = document.createElement(oldEl.nodeName);
	        // Preserve the element's id and class (other properties are lost)
	        newEl.id = oldEl.id;
	        newEl.className = oldEl.className;
	        // Replace the old with the new
	        newEl.innerHTML = html;
	        oldEl.parentNode.replaceChild(newEl, oldEl);
	        /* Since we just removed the old element from the DOM, return a reference
	        to the new element, which can be used to restore variable references. */
	        return newEl;
	};
	 
	this.drawView = function(map, mapDetails, mapSwitches) {
		var html = '';
		
		for (var y=0, yLength=map.length; y<yLength; y++) {
			for (var x=0, xLength=map[y].length; x<xLength; x++) {
				var cellNumber = map[y][x];
				var hexColor = mapDetails[ cellNumber ]['color'];
				
				var cellId = 'cell-' +x+ '-' +y;
				
				html += '<div id="'+cellId+'" style="float: left; width: 6px; height: 6px; background-color: '+hexColor+';"></div>';
			}
			html += '<div style="clear: left;"></div>';
		}
		
		for (var key in mapSwitches) {
			var indexX = parseInt(key.split(',')[0]);
			var indexY = parseInt(key.split(',')[1]);
			
			var x = indexX * this.player.blockSize;
			var y = indexY * this.player.blockSize;
			
			var switchId = 'switch-'+indexX+'-'+indexY;
			
			html += '<div id="'+switchId+'" style="position: absolute; top: '+y+'px; left: '+x+'px; width: 6px; height: 6px; background-color: #FF0000;"></div>';
		}
		
		this.replaceHtml('view', html);
	};
	
	/*
	this.drawSwitches = function(map, mapSwitches) {
		for (var key in mapSwitches) {
			var indexX = parseInt(key.split(',')[0]);
			var indexY = parseInt(key.split(',')[1]);
			
			var x = indexX * this.player.blockSize;
			var y = indexY * this.player.blockSize;
			
			var switchId = 'switch-'+indexX+'-'+indexY;
			
			document.getElementById('view').innerHTML += '<div id="'+switchId+'" style="position: absolute; top: '+y+'px; left: '+x+'px; width: 6px; height: 6px; background-color: #FF0000;"></div>';
		}
	};
	*/
	
	this.triggerSwitches = function(map, maskMap, mapSwitches, mapDetails) {
		//var indexX = ((this.player.x / this.player.blockSize)+0.5) >> 0;
		//var indexY = ((this.player.y / this.player.blockSize)+0.5) >> 0;
		var indexX = ((this.player.x / this.player.blockSize)+0.5) >> 0;
		var indexY = ((this.player.y / this.player.blockSize)+1) >> 0;
		
		var switchIndex = indexX + ',' + indexY;
		
		//console.log(switchIndex);
		
		if (mapSwitches[switchIndex] !== undefined && ! mapSwitches[switchIndex]['done']) {
			//console.log('switch');
			var switchX = mapSwitches[switchIndex]['x'];
			var switchY = mapSwitches[switchIndex]['y'];
			var toBlock = mapSwitches[switchIndex]['toBlock'];
			
			map[switchY][switchX] = toBlock;
			maskMap[switchY][switchX] = 1;
			this.updateCell(switchX, 0, switchY, 0, map, mapDetails);
			
			var switchId = 'switch-'+switchIndex.split(',')[0]+'-'+switchIndex.split(',')[1];

			document.getElementById(switchId).style.backgroundColor = '#00FF00';
			
			mapSwitches[switchIndex]['done'] = true;
		}
		
		return {map: map, maskMap: maskMap};
	};
	
	this.cycleNumber = 0;
	this.maskMap = [];
	this.cycle = function(map, mapDetails, mapSwitches) {
    	

		if (this.cycleNumber === 0) {
	    	maskMap = this.createMaskMap(map);
	    	this.drawView(map, mapDetails, mapSwitches);
	    	//this.drawSwitches(map, mapSwitches);
	    	
	    	this.first = false;
	   	}
	   	
	    if (this.cycleNumber % 2 === 0) {
		    var result = this.updateMap(map, maskMap, mapDetails);
		    map = result['map'];
		    maskMap = result['maskMap'];
		    
		    //maskMap = this.updatingView(map, maskMap, mapDetails);
		    maskMap = this.createMaskMap(map);
	    	//this.drawView(map, mapDetails, mapSwitches);
	    }
	    
	    this.player.move(map);
	    
	    var result = this.triggerSwitches(map, maskMap, mapSwitches, mapDetails);
	    map = result['map'];
	    maskMap = result['maskMap'];
	    
	    this.cycleNumber++;
	    
	    return map;
	};
}
