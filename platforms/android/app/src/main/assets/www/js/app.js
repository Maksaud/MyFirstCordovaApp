// Dom7
var $$ = Dom7;

const apiurl ="https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=302e0eb61aed37406da750c13726b58e";
let request = new XMLHttpRequest();

request.open("GET", apiurl, true);
request.send();

console.log(request);
  request.onload = function(){
    if (request.readyState === 4 && request.status === 200){
        let myData = JSON.parse(request.responseText);

        document.getElementById('mike').innerHTML = myData.main.temp + "&#8451 <br>" + myData.weather[0].description;
        console.log(myData);
        weatherForIcon = myData.weather[0].main;
        if(weatherForIcon = "Clouds"){
            document.getElementById('icon').className = "wi wi-cloud";
        }
        else if(weatherForIcon = "Rain"){
            document.getElementById('icon').className = "wi wi-rain";
        }
        else if(weatherForIcon = "Clear"){
            document.getElementById('icon').className = "wi day-sunny";
        }
    }
  }

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}



// One signal notification
/*
document.addEventListener('deviceready', function(){
  var notificationOpenedCallback = function(jsonData){
    console.log('notificationOpenedCallback:' + JSON.stringify(jsonData));
  };
  window.plugins.OneSignal.setSubscription(true);
  window.plugins.OneSignal.enableNotificationWhenActive(true);
  window.plugins.OneSignal.StartInt("ea01cda0-63de-4b6f-ad8b-42b9e3491e8c").handleNotificationOpened(notificationOpenedCallback).endint();
},false);
*/
// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.







document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("ea01cda0-63de-4b6f-ad8b-42b9e3491e8c")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);



//search

$(function() {
// click ajax call
    $("#search").on("click", function() {
    	var searchTerm = $("#searchTerm").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
		$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
          // plop data
        	success: function(data, status, jqXHR) {
        		//console.log(data);
        		$("#sike").html();
        		for(var i=0;i<data[1].length;i++){
        			$("#sike").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        		}

        	}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
        
    });
});







element =  document.getElementById('nike');

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log(device.cordova);
  element.innerHTML = 'Device Modal: '              + device.model         + '<br>' +
                      'Device Cordova: '            + device.cordova      + '<br>' +
                      'Device Platform: '           + device.platform     + '<br>' +
                      'Device UUID: '               + device.uuid         + '<br>' +
                      'Device Manufacturer: '       + device.manufacturer + '<br>' +
                      'Device Version: '            + device.version;
};


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

//add event listener
//document.addEventListener("deviceready", onDeviceReady, false);

//device.name -> Gives the name of device.
//device.cordova -> Gives current version of cordova running on device.
//device.platrof -> Gives the name of platform.
//device.uuid -> Gives the UUID.
//device.version -> Gives the Android Version.







/*$(document).ready(function(){
  options = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: (window.screen.height/100) * 80,
  camera: CameraPreview.CAMERA_DIRECTION.BACK,
  toBack: false,
  tapPhoto: true,
  tapFocus: false,
  previewDrag: false
};
});
opened = false;

$('#camera').click(function(){
  switch(opened){
    case false:
      CameraPreview.startCamera(options);
      break;
    case true:
      CameraPreview.stopCamera();
      break;
  }
});*/
