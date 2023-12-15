// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const people = [
    {name: 'Duy', age: 20},
    {name: 'Hoang', age: 10},
    {name: 'Hiep', age: 30}
];
let [{name, age}, ...everyoneElse] = people;
console.log(everyoneElse);
console.log("Name: " + name);
console.log("Age: " + age);