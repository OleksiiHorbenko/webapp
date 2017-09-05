app.controller('caesarController', function ($scope, $filter, $http) {

    $scope.payload = "";
    $scope.key = 1;

    $scope.caesarDecode = function caesarDecode() {
        $http({
            method: "PUT",
            url: "/ceasar/decode",
            data: {
                "payload": $scope.payload,
                "key": $scope.key
            }
        })
            .then(function (response) {
                $scope.payload = response.data.payload;
            }, function (response) {
                alert("Something went wrong! " + response.data.message);
            })
    };

    $scope.caesarEncode = function caesarEncode() {
        $http({
            method: "PUT",
            url: "/ceasar/encode",
            data: {
                "payload": $scope.payload,
                "key": $scope.key
            }
        })
            .then(function (response) {
                $scope.payload = response.data.payload;
            }, function (response) {
                alert("Something went wrong! " + response.data.message);
            })
    };

    $scope.showContent = function($fileContent){
        $scope.payload = $fileContent;

    };
});



app.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {$fileContent:onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});

