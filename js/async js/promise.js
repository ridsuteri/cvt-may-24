// 1. using callback
// 2. using promise
// i. using .then().catch()

function showFeed(status) {
  return new Promise((resolve, reject) => {
    if (status == true) {
      resolve("Showing feed for the logged in user");
    } else {
      reject("Login not successful");
    }
  });
}

function doLoginWithPromise(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "admin" && password == "admin123") resolve(true);
      else reject(false);
    }, 20);
  });
}

// __________ i. using .then().catch() __________
doLoginWithPromise("admin", "admin123")
  .then((result) => {
    //incase promise resolves successfully
    return showFeed(result); //this line effectively returns another promise
  })
  // promise returned from inside is being handled here
  .then((innerResult) => {
    console.log(innerResult);
  })
  .catch((result) => {
    // incase promise gets rejected
    console.log("Something went wrong!!");
  });


// ii. ________using async await________
async function logStatus(){
    try{
        let status = await doLoginWithPromise('admin', "admin13")
        let message = await showFeed(status);
        console.log(message)
    }
    catch(e){
        console.log('Something went wrong',e)
    }
}

logStatus();