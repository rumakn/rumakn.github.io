var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
	this.gallery = items;
	var person = $scope.per= 'test';
	this.cannon = can_items;
	this.sundial = dial_items;
	this.villager = vill_items;
});

var items = [{
	title: 'Boss Portraits',
	image: 'img/ignus_s.png',
	link: 'boss.html'
} , {
	title: 'Digital 2D illustrations',
	image:'img/illustration.png',
	link: 'digital.html'
} , {
	title: 'Skyboxes',
	image: 'img/skyboxPre.png',
	link: 'sky.html'

} , {
	title: 'Sundial',
	image: 'img/sundial/dial1.png',
	link: 'sundial.html'
} , {

	title: 'Villagers',
	image: 'img/villagers/2.png',
	link: 'villager.html'

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
}];

var dial_items = [{
	
	image: 'img/sundial/dial1.png',
	description: 'sky.html'
} , {
	image: 'img/sundial/dial2.png',
	description: 'sky.html'
} , {
	image: 'img/sundial/dial3.png',
	description: 'sky.html'
} , {
	image: 'img/sundial/dial4.png',
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