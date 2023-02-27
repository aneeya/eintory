export default function authValidate(condition, target, text) {
  const { style, previousElementSibling } = target
  if(condition) {
    previousElementSibling.firstElementChild.innerText = ''
    style.border = '1px solid var(--color-bgray-200)'
  } else {
    previousElementSibling.firstElementChild.innerText = text
    style.border = '2px solid var(--color-red-200)'
  }

}