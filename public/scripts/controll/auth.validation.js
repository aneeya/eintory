
class Auth {
  constructor(diabledBtn) {
    this.diabledBtn = diabledBtn
    this.checkedEmail = false
    this.checkedPassword = false
  }

  isChecked(target) {
    if(target.id === 'email') {
      const emailCondition =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

      return emailCondition.test(target.value)
    } else {
      return target.value.length >= 8
    }
  }
  
  activeButton() {
    if(this.checkedEmail && this.checkedPassword) {
      this.diabledBtn.disabled = false
    } else {
      this.diabledBtn.disabled = true
    }
  }

  noticeAuthValidation(condition, target, text) {
    const { style, previousElementSibling } = target
    style.border = !condition ? 
                   '2px solid var(--color-red-200)' :
                   '1px solid var(--color-bgray-200)'
    previousElementSibling.firstElementChild.innerText = text
  }
  

  checkingValue(target, ischecked, text) {
    const messeage = !ischecked ? text : ''
    this.noticeAuthValidation(ischecked, target, messeage)
    this.activeButton()
  }
}

export default Auth