app.controller('trithemiusController', function ($scope, $filter, $http) {


    $scope.functionTypeArray = ["Linear", "Quadratic", "Motto"];

    $scope.payload = "";
    $scope.key = 1;
    $scope.functionType = $scope.functionTypeArray[0];
    $scope.motto = "abcdefg";


    $scope.trithemiusDecode = function trithemiusDecode() {
        $http({
            method: "PUT",
            url: "/trithemius/decode",
            data: {
                "payload": $scope.payload,
                "key": $scope.key,
                "functionType" : $scope.functionType,
                "motto": $scope.motto
            }
        })
            .then(function (response) {
                $scope.payload = response.data.payload;
            }, function (response) {
                alert("Something went wrong! " + response.data.message);
            })
    };

    $scope.trithemiusEncode = function trithemiusEncode() {
        $http({
            method: "PUT",
            url: "/trithemius/encode",
            data: {
                "payload": $scope.payload,
                "key": $scope.key,
                "functionType": $scope.functionType,
                "motto": $scope.motto
            }
        })
            .then(function (response) {
                $scope.payload = response.data.payload;
            }, function (response) {
                alert("Something went wrong! " + response.data.message);
            });
    };

    $scope.showContent = function($fileContent){
        $scope.payload = $fileContent;
    };
});

