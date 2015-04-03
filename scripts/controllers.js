angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LocationsCtrl', function($scope) {
  $scope.locations = [
    { name: 'Canada', id: 0 },
    { name: 'United States', id: 1 },
    { name: 'Mexico', id: 2 },
  ];
})

.controller('LocationCtrl', function($scope, $stateParams) {
  $scope.locationSet = [
    [
      { name: 'West Canada', id: 0},
      { name: 'East Canada', id: 1},
    ],
    [
      { name: 'Midwest', id: 2},
      { name: 'Northeast', id: 3},
      { name: 'South', id: 4},
      { name: 'West', id: 5},
    ],
    [
      { name: 'Central', id: 6},
      { name: 'East', id: 7},
      { name: 'North', id: 8},
      { name: 'South', id: 9},
      { name: 'West', id: 10},
    ],
  ];
  $scope.id = $stateParams.locationId;
});
