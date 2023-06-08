import { Dropzone } from "dropzone";
import {sendData, showInfoModal} from "../_functions";

//Dropzone для фото профиля

const profilePhoto = document.querySelector('#profile-dropzone');

if (profilePhoto) {
  let profileDropzone = new Dropzone(profilePhoto, {
    maxFilesize: 5,
    url:  "/include/ajax/upload_person_file.php",
    maxFiles: 1,
    thumbnailWidth: 100,
    thumbnailHeight: 100,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#profile-add',
    removedfile: async function (file) {
      const data = {
        filetype: "avatar",
        id_person_image: file._removeLink.dataset.id
      }

      const jsonData = JSON.stringify(data)
      const response = await sendData(jsonData, '/include/ajax/delete_image.php')
      const finishedResponse = await response.json()

      const {status, errortext} = finishedResponse

      if (status === 'ok') {
        if (file.previewElement != null && file.previewElement.parentNode != null) {
          file.previewElement.parentNode.removeChild(file.previewElement);
        }
      } else {
        showInfoModal(errortext)
      }
    }
  });

  profileDropzone.on("error", function (file) {
    showInfoModal('Ошибка 404')
    file.previewElement.parentNode.removeChild(file.previewElement);
  })

  profileDropzone.on("sending", function (file, xhr, formData) {
    formData.append("filetype", "person_photo");
  });

  profileDropzone.on("success", function (file, response) {
    const resObj = JSON.parse(response)
    const {status, errortext, id_person_image} = resObj

    if (status !== 'ok') {
      showInfoModal(errortext)
      file.previewElement.parentNode.removeChild(file.previewElement);
    } else {
      file._removeLink.setAttribute('data-id', id_person_image)
    }
  });

  const existingImages = profilePhoto.querySelectorAll('.dz-preview')

  if (existingImages) {
    existingImages.forEach(el => {

      const deleteBtn = el.querySelector('.dz-remove')

      deleteBtn.addEventListener('click', async (e) => {
        const data = {
          filetype: "person_photo",
          id_person_image: e.target.dataset.id
        }

        const jsonData = JSON.stringify(data)
        const response = await sendData(jsonData, '/include/ajax/delete_image.php')
        const finishedResponse = await response.json()

        const {status, errortext} = finishedResponse
        if (status === 'ok') {
          el.parentNode.removeChild(el);
        } else {
          showInfoModal(errortext)
        }
      })
    })
  }
}


//Dropzone для работ в портфолио

const portfolioPhoto = document.querySelector('#portfolio-dropzone');

if (portfolioPhoto) {

  const downloadPortfolioBtn = document.querySelector('.portfolio-page__photo-download');
  const portfolioScript = downloadPortfolioBtn.dataset.url
  const portfolioMoreData = downloadPortfolioBtn.dataset.formData
  const processedData = Object.entries(JSON.parse(portfolioMoreData))


  let portfolioDropzone = new Dropzone(portfolioPhoto, {
    maxFilesize: 2.5,
    url: portfolioScript,
    maxFiles: 5,
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#portfolio-add',
    removedfile: async function (file) {
      const data = {
        filetype: "portfolio",
        id_portfolio_image: file._removeLink.dataset.id
      }

      const jsonData = JSON.stringify(data)
      const response = await sendData(jsonData, '/include/ajax/delete_image.php')
      const finishedResponse = await response.json()

      const {status, errortext} = finishedResponse

      if (status === 'ok') {
        if (file.previewElement != null && file.previewElement.parentNode != null) {
          file.previewElement.parentNode.removeChild(file.previewElement);
        }
      } else {
        showInfoModal(errortext)
      }
    }
  });


  portfolioDropzone.on("error", function (file) {
    showInfoModal('Ошибка 404')
    file.previewElement.parentNode.removeChild(file.previewElement);
  })

  portfolioDropzone.on("sending", function (file, xhr, formData) {
    processedData.forEach(el => {
      formData.append(el[0], el[1]);
    })
  });

  portfolioDropzone.on("success", function (file, response) {
    const resObj = JSON.parse(response)
    const {status, errortext, id_portfolio_image} = resObj

    if (status !== 'ok') {
      showInfoModal(errortext)
      file.previewElement.parentNode.removeChild(file.previewElement);
    } else {
      file._removeLink.setAttribute('data-id', id_portfolio_image)
    }
  });

}









