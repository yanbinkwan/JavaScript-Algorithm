function quickSort(arr, start, end){
    if(start >= end) return;
    let pivot = portition(arr,start, end);
    quickSort(arr, start, pivot-1);
    quickSort(arr, pivot+1, end);
}

// 分治 (双边循环法)
function portition(arr, start, end){
    // 获取pivot 
    let pivot = arr[start];
    let leftPoint = start;
    let rightPoint = end;
    
    while(leftPoint != rightPoint){
         // 比中间值大向右移动
         while(leftPoint<rightPoint && arr[rightPoint] > pivot) rightPoint --;
        // 比中间值小向左移动
        while(leftPoint<rightPoint && arr[leftPoint] <= pivot) leftPoint ++;
       
        // 交换两点的指向的值
        if(leftPoint < rightPoint){
            let t = arr[leftPoint];
            arr[leftPoint] = arr[rightPoint];
            arr[rightPoint] = t;
        }
    }
    // 中间值和重合点交换
    arr[start] = arr[leftPoint];
    arr[leftPoint] = pivot;
    return leftPoint;
}


// 有问题
const arr = [4,4,6,5,3,2,8,1];
quickSort(arr,0, arr.length - 1);
console.log(arr);
