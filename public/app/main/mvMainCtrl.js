angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
  	{name: 'NodeJS for Dummies', featured: true, published: new Date('6/8/2016')},
    {name: 'NodeJS for Ninja', featured: true, published: new Date('6/8/2016')},
    {name: 'Super Duper Expert NodeJS', featured: false, published: new Date('6/1/2016')},
  ];
});