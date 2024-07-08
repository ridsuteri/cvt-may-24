// 1. using callback
// 2. using promise
// i. using .then().catch()
// ii. using async await

function doLoginWithCallback(username, password, callback) {
  let status = false;
  setTimeout(() => {
    if (username == "admin" && password == "admin123") status = true;
    callback(status);
  }, 2000);
}

function showFeed(status) {
  if (status == true) {
    console.log("Showing feed for the logged in user");
  } else {
    console.log("Login not successful");
  }
}

doLoginWithCallback("admin", "admin123", showFeed);

// callback hell
// doLogin(showFeed(reactToPosts(changeSettings)))
