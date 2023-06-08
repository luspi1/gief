const addWorkBtn = document.querySelector('.portfolio-page__add-work-btn')
const cancelWorkBtn = document.querySelector('.portfolio-page__close-btn')

const addWorkForm = document.querySelector('.portfolio-page__form')
const workList = document.querySelector('.portfolio-page__works')


const showForm = () => {
  addWorkForm.classList.add('portfolio-page__form_active')
  workList.classList.remove('portfolio-page__works_active')
}

const showWorkList = () => {
  addWorkForm.classList.remove('portfolio-page__form_active')
  workList.classList.add('portfolio-page__works_active')
}


if (addWorkBtn) {
  addWorkBtn.addEventListener('click', (e) => {
    e.preventDefault()
    showForm()
  })
}

if (cancelWorkBtn) {
  cancelWorkBtn.addEventListener('click', (e) => {
    e.preventDefault()
    showWorkList()
  })
}


