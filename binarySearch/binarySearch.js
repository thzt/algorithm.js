//library
(function(global){
    'use strict'
    
    global.binarySearch=binarySearch;

    function binarySearch(value,startIndex,endIndex){
	var array=this,
	    length=array.length;

	return (function recursiveSearch(startIndex,endIndex){
	    if(startIndex>=endIndex){
		return -1;
	    }
	    
	    var midIndex=Math.floor((startIndex+endIndex)/2),
		midValue=array[midIndex];

	    if(midValue===value){
		return midIndex;
	    }

	    if(midValue>value){
		return recursiveSearch(startIndex,midIndex);
	    }

	    return recursiveSearch(midIndex+1,endIndex);
	}(0,length));
    }
}(window));



//use case
(function(global){
    'use strict'

    var binarySearch=global.binarySearch,
	array=[1,2,3,5,8],
	index;
    
    index=binarySearch.call(array,5);
    console.assert(index===3);

    index=binarySearch.call(array,4);
    console.assert(index===-1);
}(window));
