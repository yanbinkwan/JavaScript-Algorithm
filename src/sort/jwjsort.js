
// 鸡尾酒排序
function jwjsort(arr){
	for(let i = 0; i < arr.length / 2; i++){
		let hasSorted = true;
		// 奇数从左向右
		for(let j = i; j < arr.length - i - 1; j++){
			if(arr[j] > arr[j+1]){
				arr[j] = arr[j] + arr[j+1];
				arr[j+1] = arr[j] - arr[j+1];
				arr[j] = arr[j] - arr[j+1];
				hasSorted = false;
			}
		}
		if(!hasSorted){
			hasSorted = true;
			for(let j = arr.length - i - 1; j > i; j --){
				if(arr[j] < arr[j-1]){
					arr[j] = arr[j] + arr[j-1];
					arr[j-1] = arr[j] - arr[j-1];
					arr[j] = arr[j] - arr[j-1];
					hasSorted = false;
				}
			}
			if(hasSorted) break;
		}else{
			break;
		}
	}

	return arr;
}
const arr = [2,3,4,5,6,7,8,1];
console.log(jwjsort(arr));