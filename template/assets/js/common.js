//定义一个函数判断是手机端还是pc端
function isMobile() {
    if (
        window.navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
    ) {
        return true // 移动端
    } else {
        return false // PC端
    }
}
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
