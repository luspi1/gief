import Inputmask from "inputmask";
import AirDatepicker from "air-datepicker";

// Маска телефона
const phoneInputs = document.querySelectorAll('.phone-input');

if (phoneInputs) {
  phoneInputs.forEach(input => {
    Inputmask({
      "mask": "+7 999 999-99-99",
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(input);
  })
}

// Маска СНИЛС на странице редактирования профиля

const editProfileSnils = document.querySelector('.edit-profile-page__input-snils');

if (editProfileSnils) {
  Inputmask({
    "mask": "999-999-999-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(editProfileSnils);
}

// Маска паспорта на странице редактирования профиля

const editProfilePassport = document.querySelector('.edit-profile-page__input-passport');

if (editProfilePassport) {
  Inputmask({
    "mask": "9999 999999",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(editProfilePassport);
}

// Маска даты выдачи на странице редактирования профиля

const editProfileDateIssue = document.querySelector('.edit-profile-page__input-date');

if (editProfileDateIssue) {
  Inputmask({
    "mask": "99.99.9999",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(editProfileDateIssue);
}

// Маска кода подразделения на странице редактирования профиля

const editProfileDivision = document.querySelector('.edit-profile-page__input-division');

if (editProfileDivision) {
  Inputmask({
    "mask": "999-999",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(editProfileDivision);
}

// Маска инпутов с датой

const dateInputs = document.querySelectorAll('.custom-date-input');

if (dateInputs) {
  dateInputs.forEach(dateInput => {
    Inputmask({
      "mask": "99.99.9999",
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(dateInput);
  })
}









