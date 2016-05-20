//test
var index=findIndex('BBC ABCDAB ABCDABCDABDE','ABCDABD');
console.assert(index==15);

//- - -
function findIndex(target,pattern){
	
	//i表示target当前比对字符的位置，j表示pattern当前比对字符位置
	var i=0,j=0;

	//position是匹配到pattern时，target上的开始比对位置
	var position=-1;

	while(true){

		//如果比对到了target结尾，就退出
		if(i==target.length){
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

		//如果比对失败，则从target下一个字符开始重新比对
		i++;
		j=0;
	}

	return position;
}

