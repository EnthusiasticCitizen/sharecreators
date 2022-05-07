;(function () {
    function check(data = []) {
        let flag = true
        data.every((item) => {
            let isCheck = item.getAttribute('data-require')
            if (isCheck && !item.value) {
                flag = false
                return false
            }
            return true
        })
        return flag
    }
    const sendEmail = (e) => {
        e.preventDefault()
        let flag = check && check(Array.from(e.target))
        flag &&
            emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID).then(
                (result) => {
                    console.log(result.text)
                    alert('发送成功！')
                },
                (error) => {
                    console.log(error.text)
                    alert('发送失败！')
                }
            )
    }

    const form = document.querySelector('#form')
    form.addEventListener('submit', sendEmail)
})()
