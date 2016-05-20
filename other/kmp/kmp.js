//test
var position=kmp('BBC ABCDAB ABCDABCDABDE','ABCDABD');
console.assert(position==15);

//- - -
//kmp algorithm
function kmp(target,pattern){

	//计算pattern的next数组
	var next=getNextArray(pattern);

	//i表示target当前比对字符的位置，j表示pattern当前比对字符位置
	var i=0,j=0;

	//position是匹配到pattern时，target上的开始比对位置
	var position=-1;

	while(true){

		//如果target上剩余字符不够了，退出
		if(i+pattern.length>target.length){
			break;
		}

		//如果比对到了pattern结尾，说明匹配成功，设置position，退出
		if(j==pattern.length){
			position=i;
			break;
		}

		//按着pattern，与target的第i个位置起的字符，逐个比对
		if(target[i+j]==pattern[j]){
			j++;
			continue;
		}

		//如果比对失败，则向后跳
		var move=kmpMove(i,j,next);		
		i=move.i;
		j=move.j;
	}

	return position;
}

//得到向后跳的位置
function kmpMove(i,j,next){

	//如果pattern中的第一个字符就不匹配，则向后跳一步
	if(j==0){
		return {
			i:i+1,
			j:0
		};
	}

	//以next数组为依据来跳
	return {
		i:i+j-next[j-1],
		j:next[j-1]
	};
}

//获取next数组
function getNextArray(str){

	//把pattern分割成数组
	var arr=str.split('');

	//前缀末尾位置
	var p=0;

	//初始化next数组，第1个元素为0
	var next=[0];

	//从索引1处开始，计算每个next值
	for(var i=1;i<arr.length;i++){

		//如果前缀末尾字符与后缀最后一个字符相等，则next值为前缀长度加一
		if(arr[i]==arr[p]){
			next[i]=p+1;
			p++;
			continue;
		}

		//依次使用次长公共序列或更短的公共序列来比对
		while(true){

			//如果前缀长度为0，则next值为0
			if(p==0){
				next[i]=0;
				break;
			}

			//否则，查找前缀的next值，作为新前缀，从这里开始和后缀最后一个字符比对
			p=next[p-1];

			//如果前缀末尾字符与后缀最后一个字符相等，则next值为前缀长度加一
			if(arr[i]==arr[p]){
				next[i]=p+1;
				p++;
				break;
			}
		}
	}

	return next;
}
