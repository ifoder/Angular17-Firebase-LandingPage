document.addEventListener("DOMContentLoaded", function () {
  // <!-- FB SDK LOAD START -->
  window.fbAsyncInit = function () {
    FB.init({
      appId: "433102075972990",
      cookie: true,
      xfbml: true,
      version: "v5.0",
    });
    FB.AppEvents.logPageView();
  };
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
  // <!-- FB SDK LOAD END -->
});

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log(response);
  if (response.status === "connected") {
    console.log("logged in!");
    testAPI();
  } else {
    console.log("please login");
  }
}
