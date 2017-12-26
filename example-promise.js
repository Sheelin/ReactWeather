// function getTempPromise (location) {
//   return new Promise( function (resolve, reject){
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('success', temp);
// }, function (err){
//   console.log('error', err);
// });


function addPromise (a,b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject("at least one argument was not a number");
    }
  });
}

addPromise(7,2).then(function (result){
  console.log("success", result);
}, function (message){
  console.log(message);
});

addPromise(7,"hi").then(function (result){
  console.log("success", result);
}, function (message){
  console.log(message);
});
