(function() {
    
  var libraryStorage = {};

  function librarySystem(libraryName, array, callback) {
    
    if(arguments.length === 1){
      var currentLibrary = libraryStorage[libraryName];
      var dependencyArray = [];

      if(currentLibrary.array.length > 0) {
        
        dependencyArray = currentLibrary.array.map(function(val) {
          return libraryStorage[val].callback();
        });

        if(currentLibrary.haveIrun === false) {
          currentLibrary.haveIrun = true; 
          return currentLibrary.value = currentLibrary.callback.apply(this, dependencyArray);
        }                 
      } else if(currentLibrary.haveIrun) {
          return currentLibrary.value;
      } else {
          currentLibrary.haveIrun = true;
          return currentLibrary.value = currentLibrary.callback();
        }

    } else if (arguments.length > 1) {
      libraryStorage[libraryName] = {
        callback: callback,
        array: array,
        haveIrun: false
      }
    }
  }

  window.librarySystem = librarySystem;

})();