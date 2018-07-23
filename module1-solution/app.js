(function () {
    'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.checkLunch = function() {
    if($scope.menu == undefined || $scope.menu == "") {
      $scope.message = "Please enter data first";
      $scope.messageStyle = {"color": "red"};
      $scope.textboxStyle = {"border-color": "red"};
    }
    else {
      var items = $scope.menu.split(",");
      var numberOfItems = items.length;
      for(var i = 0; i < items.length; i++) {
        if(items[i].trim() == "") //empty
          numberOfItems--; //one less item
      }
      $scope.messageStyle = {"color": "green"};
      $scope.textboxStyle = {"border-color": "green"};
      $scope.message = (numberOfItems <= 3)? "Enjoy!":"Too much!"
    }

  }
}
})();
