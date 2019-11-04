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

const apiurl ="https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=fb1810611c8e388faff4d5b3c5e89d50";
let request = new XMLHttpRequest();

request.open("GET", apiurl, true);
request.send();

console.log(request);

request.onload = function(){
  if (request.readyState === 4 && request.status === 200){
      let myData = JSON.parse(request.responseText);

      document.getElementById('mike').innerHTML = myData.main.temp + "&#8451 <br>" + myData.weather[0].description;
      document.getElementById('icon')
      console.log(myData);
  }
}



element =  document.getElementById('nike');

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log(device.cordova);
  element.innerHTML = 'Device Name: '     + device.name     + '<br>' +
                      'Device Cordova: '  + device.cordova  + '<br>' +
                      'Device Platform: ' + device.platform + '<br>' +
                      'Device UUID: '     + device.uuid     + '<br>' +
                      'Device Version: '  + device.version;
};
// Dom7
var $$ = Dom7;

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
