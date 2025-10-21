const emailButton = document.querySelector(".email-button");
const thankYouPage = document.querySelector(".thanks-container");
const firstPage = document.querySelector('.sign-in-container');
const emailInput = document.querySelector('.email-input');
const emailAddress = document.querySelector('.email-name');
const dismissMessage = document.querySelector('.dismiss-message');
const termsAndConditionPopup = document.querySelector('.terms-popup');
const termsAndConditionBtn = document.querySelector('.terms-conditions-btn');
const termsAndConditionClosure = document.querySelector('.agree-plus-close-modal');


termsAndConditionBtn.addEventListener('click', () => {
    termsAndConditionPopup.showModal();
});
termsAndConditionClosure.addEventListener('click', () => {
    termsAndConditionPopup.close();
})


emailButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (emailInput.value.trim() === '') {
        emailInput.style.border = "3px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "hsla(4, 95.50%, 74.10%, 0.62)"
        document.querySelector('.email-input-error').style.display = 'block';
        
    } else {
        firstPage.style.display = "none";
        thankYouPage.style.display = "block";
        emailAddress.innerHTML = emailInput.value;
        return;
    }
});

dismissMessage.addEventListener('click', () => {
    window.close()
});