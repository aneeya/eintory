import authValidate from "./controll/auth.validation.js";


  const get = (select) => document.querySelector(select);
  const getAll = (select) => document.querySelectorAll(select);
  const createEl = (tag) => document.createElement(tag)

const $emailInput = get('input#email');
const $passwordInput = get('input#password');

function emailValidate(e) {
  const { value } = e.target
  const emailCondition =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

  authValidate(emailCondition.test(value), e.target, '!email형식이 아닙니다.')
}

function passwordValidate(e) {
  const { value } = e.target
  const passwordCondition = (value) => value.length >= 8

  authValidate(passwordCondition(value), e.target, '!8자리이상 입력해주세요')
}


window.addEventListener('DOMContentLoaded', () => {
  $emailInput.focus()
})

$emailInput.addEventListener('change', emailValidate);
$passwordInput.addEventListener('change', passwordValidate)