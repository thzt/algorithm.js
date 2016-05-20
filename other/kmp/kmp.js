// test
var position=kmp('BBC ABCDAB ABCDABCDABDE','ABCDABD');
console.log(position);

// main

function kmp(target,pattern){
	var next=getNextArray(pattern);

	var i=0,j=0;
	var position=-1;

	while(true){
		if(i+pattern.length>target.length){
			break;
		}

		if(j==pattern.length){
			position=i;
			break;
		}

		if(target[i+j]==pattern[j]){
			j++;
			continue;
		}

		var move=kmpMove(i,j,next);		
		i=move.i;
		j=move.j;
	}

	return position;
}

// private

function kmpMove(i,j,next){
	if(j==0){
		return {
			i:i+1,
			j:0
		};
	}
	
	return {
		i:i+j-next[j-1],
		j:next[j-1]
	};
}

function getNextArray(str){
	var arr=str.split('');
	
	var p=0;
	var next=[0];
	
	for(var i=1;i<arr.length;i++){
		if(arr[i]==arr[p]){
			next[i]=p+1;
			p++;
			continue;
		}

		while(true){
			if(p==0){
				next[i]=0;
				break;
			}

			p=next[p-1];
			if(arr[i]==arr[p]){
				next[i]=p+1;
				p++;
				break;
			}
		}
	}

	return next;
}
