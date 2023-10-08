import Choices from "choices.js"


document.querySelectorAll('.custom-select select').forEach(el => {
  const choices = new Choices(el, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  })
})
