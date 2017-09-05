app.controller('appPageController',
    function ($scope, $mdSidenav) {

    $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.contentPage = 'html/updating.html';


        $scope.getContentPage = function () {
            return $scope.contentPage;
        };


    }
);