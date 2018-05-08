(function(){
	'use strict';
	var app = angular.module('application',[]);//ชื่อโมดูล, โมดูลที่เกี่ยวข้อง (จะกล่าวถึงในภายหลัง)
	
	app.controller('storeController',function(){
		this.sushi = {
			name: 'Panu',
			price:200,
			description: 'พจนธารี'
			};
	});
	
})();//Best Practice for Javascript
	
	