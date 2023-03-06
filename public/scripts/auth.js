import { get } from "./common/getElement.js";
import Auth from "./controll/auth.validation.js";
import { signup } from "./api/auth.fetch.js";
  
const $emailInput = get('input#email');
const $passwordInput = get('input#password');
const $submitButton = get('button[type="submit"]');
const $signupForm = get('#form-signup');

const auth = new Auth($submitButton)

function inputValueValidate(e) {
  const isvaildated = auth.isChecked(e.target)
  let text;
  if(e.target.id === 'email') {
    auth.checkedEmail = isvaildated
    text = '!email형식이 아닙니다.'
  } else {
    auth.checkedPassword = isvaildated
    text = '!8자리이상 입력해주세요'
  }
  auth.checkingValue(e.target, isvaildated, text)
}

async function addNewUser(e) {
  e.preventDefault();
  try { 
    const data = new FormData(e.target)
    const newUser = {
      'email': data.get('email'),
      'password': data.get('password')
    }
    await signup(newUser);
  } catch {

  }

}

window.addEventListener('DOMContentLoaded', () => {
  $emailInput.focus()
})

$emailInput.addEventListener('change', inputValueValidate);
$passwordInput.addEventListener('change', inputValueValidate);
$signupForm.addEventListener('submit', addNewUser);