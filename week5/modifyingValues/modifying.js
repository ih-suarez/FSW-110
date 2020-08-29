document.logInBox.addEventListener('submit', function(){
    
    const userEmail = document.logInBox.mail.value
    const userName = document.logInBox.user.value
    const password = document.logInBox.passW.value

    alert(`${userEmail} is in our system... ${userName} and ${password} are correct.`)
})
    
