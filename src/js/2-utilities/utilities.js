// ======================
// Utilities - Main Utilities
// ======================

// Create promise
function createPromise(callback){
    var promise = new Promise(function(resolve, reject) {
        callback;
        resolve("Success");
      });
    return promise;
};