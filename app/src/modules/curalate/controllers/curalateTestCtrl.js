angular
    .module('curalate.main.package')
    .controller('curalate.testCtrl', gameboardCtrl);


gameboardCtrl.$inject = [
    '$rootScope',
    '$scope',
    '$timeout'
];

function gameboardCtrl(
    $rootScope,
    $scope,
    $timeout
) {

    /*
     * set vars
     */
    var vm = this; // View Model



    /*
     * set view model attachments
     */
    vm.testVar = "This is just a test."

    /*
     * set $scope attachments
     */


    /*
     * set $rootScope attachments
     */
     $rootScope.pageTitle = "Curalate Test Page";

}
