



//////////
$(function() {
	$.getJSON("http://search.twitter.com/search.json?q=dmusicstud&rpp=3&include_entities=true&results_type=popular&callback=?",
		function(data) {
		//console.log(data);
		$("#data-msg").html("<p>Successfully awesome</p>");
		for (i=0, j=data.results.length; i<j; i++) {
			$("#data-output")
				.append("<li>" +
					"<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + data.results[i].text + "</p>" + "</li>");

	}
});
});


/////////

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "Parker Guitar",
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      
      $("<img/>").attr("src", item.media.m).appendTo("#data-output2");
      if ( i == 5 ) return false;
    
//console.log(data);
    });
  });



var x = document.getElementById("location");
var getLocation = function () {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else {
    x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition (position) {
  x.innerHTML='Geo/Location is: ' + 'Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n'
  };
///////////


/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
   
}

function alertDismissed() {
    
}

function showAlert() {
            alert(
                   'You are the winner!',  
                    alertDismissed,         
                    'Game Over',            
                    'Done'                  
                  );
                };*/

//navigator.notification.alert(message, alertCallback, [title], [buttonName])
/////////////

var picSrc;   
var destType; 

document.addEventListener("deviceready",onDeviceReady,false);
    
var onDeviceReady = function() {
        picSrc=navigator.camera.PictureSourceType;
        destType=navigator.camera.DestinationType;
    }

    
var onPhotoDataSuccess = function(imageData) {
        var smallImg = document.getElementById('smallImage');
        smallImg.style.display = 'block';
        smallImg.src = "data:image/jpeg;base64," + imageData;
    }

var onPhotoURISuccess = function(imageURI) {
        var largeImage = document.getElementById('largeImage');
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
    }

var capturePhoto = function() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

var capturePhotoEdit = function() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

var getPhoto = function(source) {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

var onFail = function(message) {
        alert('Failed because: ' + message);
    }

/////////

document.addEventListener("deviceready", onDeviceReady, false);

 var onDeviceReady = function() {
        var element = document.getElementById('deviceInfo');

        element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                            'Device Cordova: '  + device.cordova + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Model: '    + device.model     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />';
    }

//////////

var lang = function() {
      navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
      );
    }

/////////

var captureSuccess = function (mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }       
    }

var captureError = function (error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }

var captureAudio = function () {
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
    }

var uploadFile = function (mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://my.domain.com/upload.php",
            function(result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function(error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileName: name });   
    }

//////////

document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
 var onDeviceReady = function () {
        checkConnection();
    }

 var checkConnection = function () {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi ';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Gathering Twitter through: ' + states[networkState]);
    }

/////////
