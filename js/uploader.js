var userID = getUrlParameter('usrID');
var localUserID = localStorage.getItem("validation");
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var Demo = (function() {

	function output(node) {
		var existing = $('#result .croppie-result');
		if (existing.length > 0) {
			existing[0].parentNode.replaceChild(node, existing[0]);
		}
		else {
			$('#result')[0].appendChild(node);
		}
	}

	function popupResult(result) {
		var html;
		console.log(result);
		if (result.html) {
			html = result.html;
		}
		if (result.src) {
			console.log(result.src);
			html = '<img src="' + result.src + '" />';
			
			//trim the result.src to remove extra whitespaces and remove the other characters
			// var trimThis = result.src;
			// var yesTrim = trimThis.trim();
			// yesTrim = yesTrim.substring(22);

			//save the crop image in database
			// $.ajax({
			// 	url: 'server/upload.php',
			// 	type: 'POST',
			// 	data: "imgdata="+yesTrim+"&userId="+localUserID,
			// 	success: function (response) {
			// 		console.log(response);
			// 		console.log(localUserID);
			// 	}
			// });

		}
		swal({
			title: '',
			html: true,
			text: html,
			allowOutsideClick: true
		});
		setTimeout(function(){
			$('.sweet-alert').css('margin', function() {
				var top = -1 * ($(this).height() / 2),
					left = -1 * ($(this).width() / 2);

				return top + 'px 0 0 ' + left + 'px';
			});
		}, 1);
	}

	function demoUpload() {
		var $uploadCrop;

		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            
	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            	});
	            	
	            }
	            
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}

		$uploadCrop = $('#upload-demo').croppie({
			viewport: {
				width: 300,
				height: 300,
				type: 'circle'
			},
			showZoomer: false,
			enableExif: true,
			boundary: { width: 300, height: 300 }
		});

		$('#upload').on('change', function () { readFile(this); });
		$('.upload-result').on('click', function (ev) {
			$uploadCrop.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				// popupResult({
				// 	src: resp
				// });
				$.ajax({
					url: 'server/upload.php',
					type: 'POST',
					data: "imgdata="+resp+"&userId="+localUserID,
					success: function (response) {
						Materialize.toast('Saved!', 3000, 'rounded');
						console.log(response);
						console.log(localUserID);
					}
				});
			});
		});
	}

	function placeUpload() {
		var $uploadCrop;

		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            
	            reader.onload = function (e) {
					$('#upload-place').addClass('ready');
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            	});
	            	
	            }
	            
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}

		$uploadCrop = $('#upload-place2').croppie({
			viewport: {
				width: 300,
				height: 300,
				type: 'square'
			},
			showZoomer: false,
			enableExif: true,
			boundary: { width: 300, height: 300 }
		});

		$('#upload2').on('change', function () { readFile(this); });
		$('#upload-place-result').on('click', function (ev) {
			$uploadCrop.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				// popupResult({
				// 	src: resp
				// });
				var placeUploadId = localStorage.getItem("editPlaceId");
				$.ajax({
					url: 'server/upload.php',
					type: 'POST',
					data: "imgdata2="+resp+"&placeId="+placeUploadId,
					success: function (response) {
						Materialize.toast('Saved!', 3000, 'rounded');
						console.log(response);
						console.log(placeUploadId);
					}
				});
			});
		});
	}

	function postUpload() {
		var $uploadCrop;

		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            
	            reader.onload = function (e) {
					$('#upload-post').addClass('ready');
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            	});
	            	
	            }
	            
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}

		$uploadCrop = $('#upload-post2').croppie({
			viewport: {
				width: 300,
				height: 300,
				type: 'square'
			},
			showZoomer: false,
			enableExif: true,
			boundary: { width: 300, height: 300 }
		});

		$('#upload3').on('change', function () { readFile(this); });
		$('#upload-post-result').on('click', function (ev) {
			$uploadCrop.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				// popupResult({
				// 	src: resp
				// });
				// console.log(resp);
				var postPlaceName = $("#postPlaceName").val();
				var postPlaceMun = $("#placeMun2").val();
				var postPlacePost = $("#placePost").val();
				$.ajax({
					url: 'server/upload.php',
					type: 'POST',
					data: "imgdata3="+resp+"&userId="+localUserID+"&placeName="+postPlaceName+"&placeMun="+postPlaceMun+"&post="+postPlacePost,
					success: function (response) {
						Materialize.toast('Saved!', 3000, 'rounded');
						console.log(response);
					}
				});
			});
		});
	}

	function init() {
		demoUpload();
		placeUpload();
		postUpload();
	}

	return {
		init: init
	};
})();


// Full version of `log` that:
//  * Prevents errors on console methods when no console present.
//  * Exposes a global 'log' function that preserves line numbering and formatting.
(function () {
  var method;
  var noop = function () { };
  var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
 
  while (length--) {
    method = methods[length];
 
    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
 
 
  if (Function.prototype.bind) {
    window.log = Function.prototype.bind.call(console.log, console);
  }
  else {
    window.log = function() { 
      Function.prototype.apply.call(console.log, console, arguments);
    };
  }
})();