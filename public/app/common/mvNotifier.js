angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
	return {
		notify: function(msg, option) {
			if (option==='success') {
				mvToastr.success(msg);
				console.log(msg);
			} else {
				mvToastr.error(msg);
				console.log(msg);
			}
		}
	}
})