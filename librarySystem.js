(function() {
	
  var libraryStorage = {};

  function librarySystem(libraryName, array, callback) {
    
  if(arguments.length === 1){
    var todaysLibrary = libraryStorage[libraryName];
    var dependencyArray = [];

    if(todaysLibrary.array.length > 0) {
      dependencyArray = todaysLibrary.array.map(function(val) {
        return libraryStorage[val].callback();
	  });

	return todaysLibrary.callback.apply(this, dependencyArray);
			
     } else {
         return todaysLibrary.callback();
     }

  } else if (arguments.length > 1) {
      libraryStorage[libraryName] = {
    	callback: callback,
    	array: array
      }
    }
  }

  window.librarySystem = librarySystem;

})();
