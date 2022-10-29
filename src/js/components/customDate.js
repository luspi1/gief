import AirDatepicker from "air-datepicker";

const dateInputs = document.querySelectorAll('.custom-date-input');

if (dateInputs) {
  dateInputs.forEach(dateInput => {
    new AirDatepicker(dateInput);
  })
}

