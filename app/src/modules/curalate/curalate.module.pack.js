/*********************************
**	Module: curalate
*********************************/


;(function(window, document, undefined) {
'use strict';

(function(window, document, undefined) {

angular
    .module(
        'curalate.main.package',
        ['ngRoute', 'ngResource']
    )


})(window, document);


(function(window, document, undefined) {

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


})(window, document);


(function(window, document, undefined) {

angular
    .module('curalate.main.package')
    .directive('instagramUgc', instagramUgc);


/*
 * Directive for highlighting the rows and columns on hover
 */

instagramUgc.$inject = ["$sce"];

function instagramUgc($sce) {
    var $ = jQuery;

	var gridData = function() {
		return {
            imgCount : 0,
    		currentImage : 0,
    		nextImage : 1,
    		prevImage : 1
        }
	}

	var actions = {
		setCurrentImage : function(dataObj, ind) {
			dataObj.currentImage = ind > (dataObj.imgCount - 1)
				? 0
				: ind < 0
					? (dataObj.imgCount - 1)
					: ind;

			dataObj.nextImage = (dataObj.currentImage + 1) > (dataObj.imgCount - 1)
				? 0
				: (dataObj.currentImage + 1) < 0
					? (dataObj.imgCount - 1)
					: (dataObj.currentImage + 1);

			dataObj.prevImage = (dataObj.currentImage - 1) > (dataObj.imgCount - 1)
				? 0
				: (dataObj.currentImage - 1) < 0
					? (dataObj.imgCount - 1)
					: (dataObj.currentImage - 1);

			dataObj.expanded
				&& dataObj.expandedArr.indexOf(dataObj.currentImage) < 0
				&& dataObj.expandedArr.push(dataObj.currentImage);

		}
	}

    console.log(this);
    return {
        restrict : 'A',
        scope : {
            productId : '=instagramUgc'
        },
        templateUrl: '/app/templates/curalate/instagram.html',
        link : function (scope, elem, attrs) {

            if (typeof Curalate === "undefined") {
                return false;
            }



            var reel = new Curalate.FanReel({ code: "uogallery", productId: scope.productId });
            reel.retrieve()
                .success(function(response) {

                    for (var i = 0; i < response.items.length; i++) {
                        console.log(response.items[i])
                        response.items[i].user.username = $sce.trustAsHtml(response.items[i].user.username);
                        response.items[i].caption = $sce.trustAsHtml(response.items[i].caption);
                    };

                    scope.$apply(function(){
                        scope.actions = actions;
                        scope.gridData = new gridData();
                        scope.gridData.imgCount = response.items.length;
                        scope.status = response.status;
                        scope.items = response.items;
                    })

                })
                .failure(function(errorMessage) {
                    console.log('failure');
                });

        }
    }
}


})(window, document);

})(window, document);
