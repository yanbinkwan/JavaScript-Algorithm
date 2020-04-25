function quickSort(arr, start, end){
    // 函数栈
    var stack = [{start,end}];
    while(stack.length>0){
        const param = stack.pop();
        // 获取基准元素
        const pivot = partition(arr, param.start, param.end);
        // 根据基准元素分成两部分，把每一部分的起止下标入栈
        if(param.start < pivot - 1){
            stack.push({start: param.start, end: pivot});
        }
        if((pivot + 1) < param.end){
            stack.push({start: pivot + 1, end:param.end});
        }
    }
}

// 分治(单边循环)
function partition(arr, start, end){    
    // 基准元素选择第一个也可随机选择
    let pivot = arr[start];
    // 小于基准元素的边界
    let point = start;
    for(let i = start + 1;i < end; i++){
        if(arr[i] < pivot){
            point ++;
            let t = arr[point];
            arr[point] = arr[i];
            arr[i] = t;
        }
    }
    arr[start] = arr[point];
    arr[point] = pivot;
    return point;
}


const arr = [4,4,6,5,3,2,8,1];
quickSort(arr, 0, arr.length);
console.log(arr);