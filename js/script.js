var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
	this.gallery = items;
	var person = $scope.per= 'test';
	this.cannon = can_items;

	this.digital = dig_items;
	this.villager = vill_items;
	this.chand = chand_items;
	this.door = door_items;
	this.indexholder = 0;


	this.cannon_low = can_items_low;
	
	 this.villager_low = vill_items_low;
	 this.chand_low = chand_items_low;
	 this.door_low = door_items_low;



	$scope.picIndex = [{
	title: 'Boss Portraits',
	image: 'img/quietus_s.png',
	link: 'boss.html'
}] 

$scope.pageHolder = [{
	title: 'Boss Portraits',
	image: 'img/quietus_s.png',
	link: 'boss.html'
}] 

$scope.changePage = function(item){
	if(item == 'digital'){
			$scope.pageHolder = dig_items;
	}
	else if(item == 'villager'){
		$scope.pageHolder = vill_items;
	}
	else if(item == 'cannon'){
		$scope.pageHolder = can_items;
	}
	else if(item == 'chand'){
		$scope.pageHolder = chand_items;
	}
	else if(item == 'door'){
		$scope.pageHolder = door_items;
	}
}

$scope.setindex = function(item){
	$scope.indexholder = item;
	$scope.picIndex[0] = $scope.pageHolder[$scope.indexholder];

	}

	$scope.addIndex = function(item){
	$scope.indexholder = $scope.indexholder +1;

	if($scope.indexholder >= $scope.pageHolder.length){
		$scope.indexholder = 0;
	}
	$scope.picIndex[0] = $scope.pageHolder[$scope.indexholder];
	}

	$scope.subIndex = function(item){
	$scope.indexholder = $scope.indexholder -1;
	if($scope.indexholder < 0){
		$scope.indexholder = $scope.pageHolder.length - 1;
	}
	$scope.picIndex[0] = $scope.pageHolder[$scope.indexholder];
	}
	
	$scope.javalog = function(item){
		console.log($scope.picIndex[0]);
		console.log($scope.indexholder);
		
	}
});

var holderIndex = [{}];
var items = [{
	title: 'Villagers',
	image: 'img/villagers/2.png',
	link: 'villager.html'

} , {

	title: 'Boss Portraits',
	image: 'img/quietus_s.png',
	link: 'boss.html'
} , {
	title: 'Chandelier',
	image: 'img/chand/1.png',
	link: 'chand.html'

} , {
	
	
	title: 'Temple Door',
	image: 'img/door/door1.png',
	link: 'door.html'
} , {
title: 'Digital 2D illustrations',
	image:'img/illustration.png',
	link: 'digital.html'
} , {
	title: 'Boss Projectile',
	image: 'img/can.png',
	link: 'projectile.html'
}];


var can_items = [{
	
	image: 'img/cannon/can.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_0.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_1.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_2.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_3.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_4.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_5.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/can_6.png',
	description: 'sky.html'
}, {
	image: 'img/cannon/texture.png',
	description: 'sky.html'

}];



var can_items_low = [{
	
	image: 'img/cannon/low/can.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_0.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_1.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_2.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_3.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_4.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_5.png',
	description: 'sky.html'
} , {
	image: 'img/cannon/low/can_6.png',
	description: 'sky.html'
}, {
	image: 'img/cannon/low/texture.png',
	description: 'sky.html'

}];




var dig_items = [{
	title: 'Rendered Logo',
	image: 'img/illustration.png',
	description: 'sky.html'
} , {
	title: 'Long-Tailed Tit ',
	image: 'img/bird.png',
	description: 'sky.html'
} , {
	title: 'Owl Fox Gryphon',
	image: 'img/noct.png',
	description: 'sky.html'
} , {
	title: 'Fox',
	image: 'img/fox.png',
	description: 'sky.html'

}];


var vill_items = [{

	image: 'img/villagers/1.png',
	description: 'sky.html'
} , {	image: 'img/villagers/2.png',
	description: 'sky.html'
} , {	image: 'img/villagers/3.png',
	description: 'sky.html'
} , {	image: 'img/villagers/4.png',
	description: 'sky.html'
} , {		image: 'img/villagers/6.png',
	description: 'sky.html'
} , {	image: 'img/villagers/7.png',
	description: 'sky.html'
} , {	image: 'img/villagers/8.png',
	description: 'sky.html'
} , {	image: 'img/villagers/9.png',
	description: 'sky.html'
} , {		image: 'img/villagers/11.png',
	description: 'sky.html'
} , {	image: 'img/villagers/12.png',
	description: 'sky.html'
} , {	image: 'img/villagers/13.png',
	description: 'sky.html'
} , {	image: 'img/villagers/14.png',
	description: 'sky.html'
} , {	image: 'img/villagers/15.png',
	description: 'sky.html'

}];


var vill_items_low = [{

	image: 'img/villagers/low/1.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/2.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/3.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/4.png',
	description: 'sky.html'
} , {		image: 'img/villagers/low/6.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/7.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/8.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/9.png',
	description: 'sky.html'
} , {		image: 'img/villagers/low/11.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/12.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/13.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/14.png',
	description: 'sky.html'
} , {	image: 'img/villagers/low/15.png',
	description: 'sky.html'

}];

var chand_items = [{
	
	image: 'img/chand/1.png',
	description: 'sky.html'
} , {
	image: 'img/chand/2.png',
	description: 'sky.html'
} , {
	image: 'img/chand/3.png',
	description: 'sky.html'
} , {
	image: 'img/chand/4.png',
	description: 'sky.html'
} , {
	image: 'img/chand/5.png',
	description: 'sky.html'
} , {
	image: 'img/chand/6.png',
	description: 'sky.html'
} , {
	image: 'img/chand/7.png',
	description: 'sky.html'
} , {
	image: 'img/chand/8.png',
	description: 'sky.html'
} , {
	image: 'img/chand/texture.png',
	description: 'sky.html'
}];

var chand_items_low = [{
	
	image: 'img/chand/low/1.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/2.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/3.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/4.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/5.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/6.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/7.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/8.png',
	description: 'sky.html'
} , {
	image: 'img/chand/low/texture.png',
	description: 'sky.html'
}];

var door_items = [{
	
	image: 'img/door/door1.png',
	description: 'sky.html'
} , {
	image: 'img/door/door2.png',
	description: 'sky.html'
} , {
	image: 'img/door/door3.png',
	description: 'sky.html'
} , {
	image: 'img/door/door4.png',
	description: 'sky.html'
} , {
	image: 'img/door/door5.png',
	description: 'sky.html'
} , {
	image: 'img/door/door6.png',
	description: 'sky.html'
} , {
	image: 'img/door/texture.png',
	description: 'sky.html'
}];

var door_items_low = [{
	
	image: 'img/door/low/door1.png',
	description: 'sky.html'
} , {
	image: 'img/door/low/door2.png',
	description: 'sky.html'
} , {
	image: 'img/door/low/door3.png',
	description: 'sky.html'
} , {
	image: 'img/door/low/door4.png',
	description: 'sky.html'
} , {
	image: 'img/door/low/door5.png',
	description: 'sky.html'
} , {
	image: 'img/door/low/door6.png',
	description: 'sky.html'
} , {
	image: 'img/door/low/texture.png',
	description: 'sky.html'
}];