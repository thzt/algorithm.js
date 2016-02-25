/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	var len1=a.length,
		len2=b.length,
		len=Math.max(len1,len2);

	var flag=0;
	var c='';

	for(var i=0;i<len;i++){
		var x=a[len1-1-i]==null?0:+a[len1-1-i];
		var y=b[len2-1-i]==null?0:+b[len2-1-i];

		var sum=x+y+flag;

		flag=Math.floor(sum/2);
        c=sum%2+c;
	}
	if(flag!=0){
        c=flag+c;
    }

	return c;
};
