const feedbackForm = document.querySelector('.feedback__form')
import JustValidate from 'just-validate';

if (feedbackForm) {

  const firstNameInput = feedbackForm.querySelector('.feedback__field[name="first_name"]')
  const firstNameErrorMessage = feedbackForm.querySelector('.feedback__error-message_fields')

  const agreementInput = feedbackForm.querySelector('.feedback__field[name="agreement_check"]')
  const agreementErrorMessage = feedbackForm.querySelector('.feedback__error-message_agreement')

  feedbackForm.addEventListener('input', (e) => {
    const inputTarget = e.target


    if (inputTarget.value) {
      inputTarget.classList.add('feedback__field_active')
    } else {
      inputTarget.classList.remove('feedback__field_active')
    }
  })

  const validationFeedback = new JustValidate(feedbackForm);
  validationFeedback
    .addField('.feedback__field[name="first_name"]', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      ],
      {
        errorsContainer: '.feedback__error-message_fields'
      }
    )
    .addField('.feedback__checkbox', [
      {
        rule: 'required',
        errorMessage: 'Необходимо ваше согласие на обработку персональных данных',
      },
      ],
      {
        errorsContainer: '.feedback__error-message_agreement'
      }
    )


}

