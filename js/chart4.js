
var PhoneInputs = document.querySelectorAll('.js-phone-input');
var phoneBeginning = '+7 (';
var phoneMask = {
    mask: '+{7} (000) 000-00-00',
};

var phoneValidationSetup = function (phoneInputs, inputMask) {
    phoneInputs.forEach(function (phoneInput) {
        var cellularPhone = IMask(phoneInput, inputMask);
        phoneInput.addEventListener('focus', function () {
            if (cellularPhone.value === '') {
                cellularPhone.value = phoneBeginning;
            }
        });
    });
};

phoneValidationSetup(PhoneInputs, phoneMask);
