(function () {
    var app = angular.module('main_app', []);

    app.controller('modulecontroller', ['$http', '$scope', function ($http, $scope) {
        var ctrll = this;
        this.modules = [];

        this.getmodule = function (address, id_div) {
            $http.get(address).success(function (data) {
                $("#" + id_div + "").html(data);
            }).error(function () {
                alert("Lỗi khi lấy module " + address);
            });
        }

        this.init = function () {
            ctrll.getmodule('../../PublicChat/Index', 'main_col_6');
        }

    }])
})();



