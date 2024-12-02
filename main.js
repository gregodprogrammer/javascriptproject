// document.querySelector('#myHeader').innerText = 'Programming Class';
// console.log(document.getElementById("myHeader").innerText);
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.item').innerHTML);
//    console.log(document.querySelectorAll('.item'));

// items = document.querySelectorAll('.item');
// items.forEach(item => {
//     console.log(item);
// });

// changeText = () => {
//     if (
//         document.getElementById('myHeader').innerText != 'Programming Class') {
//         document.getElementById('myHeader').innerText = 'Programming Class';
//         document.querySelector('#name').value = 'Something else';
//         document.querySelector('#email').value = 'anotheremail@gmail.com';

//     } else {
//         document.getElementById('myHeader').innerText = 'JS For Beginners';
//         document.querySelector('#name').value = '';
//         document.querySelector('#email').value = '';
//         document.querySelector('#myHeader').style.background = '#ccc'
//     }
// }

// validate user input

// checkName = () => {
//     if (document.querySelector('#name').value.length < 6 ) {
//         document.querySelector('.btn').style.background = 'red';
//         document.querySelector('.msg').innerText = 'Invalid Characters';
//     } else {
//         document.querySelector('.btn').style.background = 'blue';
//     }
// }


// document.querySelector('#myHeader').addEventListener('click', () => {
//     changeText();
// });


// document.querySelector('.darkmode').addEventListener('click', () => {
//     document.querySelector('body').classList.add('bg-dark');
// })

// document.querySelector('.container').addEventListener('click', () => {
//     document.querySelector('body').classList.remove('bg-dark');
// })



// const name = document.querySelector('#name');
// const email = document.querySelector('#email');


// validateInput = () => {
//     if (document.querySelector('#name').value.length < 6 || document.querySelector('#email').value.length < 6) {
//         document.querySelector('.btn').style.background = 'red';
//         document.querySelector('.msg').innerText = 'Invalid Characters';
//         document.querySelector('.btn').setAttribute = ('disabled', '');
//     } else {
//         document.querySelector('.btn').style.background = 'blue';
//         document.querySelector('.btn').removetAttribute = ('disabled');


//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     name.addEventListener('input', (e) => {
//         validateInput();

//     });

// });

// email.addEventListener('input', (e) => {
//     validateInput();

// });


// document.querySelector('.addUser').addEventListener('click', (e) => {
//     document.querySelector('.btn').style.background = 'blue';
// });

// changeBtnText = () => {
//     document.querySelector('.btn').style.background = 'blue';
// }
// document.addEventListener('DOMContentLoaded', () => {
//     btn = document.querySelector('.btn');
//     btn.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log('Button Clicked');
//         console.log(event.target.value);
//         name.value = '';
//         email.value = '';
//     });

// });




// checkEmail = () => {
//     if (document.querySelector('#email').value.length < 6) {
//         document.querySelector('.btn').style.background = 'red';
//         document.querySelector('.msg').innerText = 'Invalid Characters';
//     } else {
//         document.querySelector('.btn').style.background = 'blue';
//     }
// }

// resetHeader = ()=> {
//     document.getElementById('myHeader').innerHTML = 'JS For Beginners';
// }
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const users = document.querySelector('#users');

document.addEventListener('DOMContentLoaded', () => {
    myform.addEventListener('submit', (e) => {
        e.preventDefault();

        if (nameInput.value === '' || emailInput.value === '') {
            // alert('fields cannot be empty');
            msg.innerHTML = 'Fields cannot be Empty'
            msg.classList.add('error');

            setInterval(() => {
                msg.remove();
            }, 3000)
        } else {

            const li = document.createElement('li');
            li.innerHTML = `${nameInput.value}  ${emailInput.value}`;

            users.appendChild(li);

            nameInput.value = '';
            emailInput.value = '';
        }
    });
});
