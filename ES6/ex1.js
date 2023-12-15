// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
let arr = [1,2,3,4,5,6,7,8,9]
let newArr = arr.map((item) => {
    if(item > 5) {
        return item
    }
})
console.log(newArr);
let reuslt = newArr.filter((item) => item !== undefined)
console.log(reuslt);