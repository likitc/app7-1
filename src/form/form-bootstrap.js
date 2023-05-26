import React from 'react'

export default function FormBootstrap() {
    const textEmail = React.useRef()
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()
    const textPhone = React.useRef()

    const onBlurEmail = () => {
        let email = textEmail.current.value
        if (email !== '' && !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/)){
            
            alert ('รูปแบบ Email ไม่ถูกต้อง')
        }
    }
    const onBlurPassword = () => {
        let pswd = textPswd.current.value
        if (pswd !== '' && !pswd.match(/^([0-9a-zA-Z]{6,20})+$/)){
            textPswd.current.value = ''
            alert ('รหัสผ่านต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น')
        }
    }
    const onBlurPassword2 = () => {
        if (textPswd2.current.value !== textPswd.current.value){
            textPswd2.current.value = ''
            alert ('รหัสผ่านไม่ตรงกัน')
        }
    }
    const onBlurPhone = () => {
        let phone = textPhone.current.value
        if (phone !== '' && !phone.match(/^0([0-9]{1})+(-[0-9]{4})+(-[0-9]{4})$/)){
            alert ('รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง')
        }
    }

  return (
  <div class="container">
    <form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" ref={textEmail} onBlur={onBlurEmail}/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={textPswd} onBlur={onBlurPassword}/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password Confirm:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password confirm" name="pswd2" ref={textPswd2} onBlur={onBlurPassword2}/>
  </div>
  <div class="mb-3">
    <label for="tel" class="form-label">Phone:</label>
    <input type="tel" class="form-control" id="tel" placeholder="Ex.09-9999-9999" name="tel" ref={textPhone} onBlur={onBlurPhone} />
  </div>
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  </div>
  )
}
