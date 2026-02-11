//  Find the largest number in an array with only positive numbers
let arr=[10,87,45,100,98,150,47];
let largest=arr[0];
let smallest=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log("The largest number is :",largest);
for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log("The smallest number is :",smallest);
