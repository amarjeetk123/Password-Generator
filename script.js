const resultEl = document.getElementById('result')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const upper_case_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower_case_set = "abcdefghijklmnopqrstuvwxyz"
const number_set = "1234567890"
const symbol_set = "!@#$%^&*()-+/"

const get_random_data = (data_set) =>{
    return data_set[Math.floor(Math.random() * data_set.length)]
}

const total_character = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')

function generatePassword(password = "") {
   
    if(uppercaseEl.checked){
        password = password + get_random_data(upper_case_set)
    }
    if(lowercaseEl.checked){
        password = password + get_random_data(lower_case_set)
    }
    if(numbersEl.checked){
        password = password + get_random_data(number_set)
    }
    if(symbolsEl.checked){
        password = password + get_random_data(symbol_set)
    }

    if(password.length <= total_character.value){
       return generatePassword(password)
    }
    
    // resultEl.innerText = password
resultEl.innerText = trim_password(password , total_character.value)
    // console.log(password)
}


generateEl.addEventListener('click', () => {
     generatePassword()
})

// code for copy the text
clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText) // all the three terms are keyword...
})


// function for trim the password

const trim_password = (str , num) => {
if(str.length > num){
    let sub_string = str.substring(0,num);
    return sub_string;
}
else{
    return str;
}
}

