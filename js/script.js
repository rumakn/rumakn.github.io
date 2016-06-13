var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
	this.gallery = items;
	var person = $scope.per= 'test';
});

var items = [{
	title: 'Skyboxes',
	image: 'img/skyboxPre.png',
	link: 'sky.html'
} , {
	title: 'Digital 2D illustrations',
	image:'img/illustration.png',
	link: 'digital.html'
} , {
	title: '3D models',
	image:'img/moth2.png',
	link: '3Dmodels.html'
} , {
	title: 'Animations',
	image:'img/yawnPause.png',
	link: 'animation.html'
} , {
	title: 'Sculptures',
	image:'img/sculpturePre.png',
	link: 'sculpture.html'
} , {
	title: 'Traditional 2D art',
	image:'img/Trad.png',
	link: 'traditional2D.html'
}];


