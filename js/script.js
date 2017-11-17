
// initialize fb js setup for login

window.fbAsyncInit = function () {
    FB.init({
      appId: '158507548217296',
      cookie: true,
      xfbml: true,
      version: 'v2.11'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

    FB.AppEvents.logPageView();

  };

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    console.log('Logged in and authenticated');
    testAPI();
  } else {
    console.log('Not authenticated');
    document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
}
