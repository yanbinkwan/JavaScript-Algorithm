function quickSort(arr, start, end){
    if(start >= end) return;
    let pivot = partition(arr,start, end);
    quickSort(arr,start, pivot);
    quickSort(arr,pivot+1, end);
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
