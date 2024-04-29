// const obj = {
//     username: 'Muhammad Farhan',
//     age: 19,
//     email:'muhmmadfarhan0318@gmail.com',
//     city: 'karachi',
//     greetUser: function ( name1) {
//         // console.log('hello world in funtion');
//         return `return Hello ${this.username} and ${name1}`
//     },
//     hobbies: ['circket','football',],

// }



// console.log(obj.username);
// console.log(obj.city);
// obj.email = 'farhansmit0318@gmail.com'
// console.log(obj.email);
// delete obj.age
// console.log(obj.greetUser('farhanhanif'));
// console.log(obj.hobbies[0]);
// console.log(obj.age);
// console.log(obj);







function submint() {
    
const username = document.querySelector('#inputname')
const email = document.querySelector('#inputemail')
const age = document.querySelector('#inputage')
const city = document.querySelector('#inputcity')

    let obj = {
        username: username.value,
        email: email.value,
        age: age.value,
        city: city.value,
    }


    console.log(obj);

}



