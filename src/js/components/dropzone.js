import { Dropzone } from "dropzone";

//Dropzone для фото профиля

const profilePhoto = document.querySelector('#profile-dropzone');

if (profilePhoto) {
  let profileDropzone = new Dropzone(profilePhoto, {
    maxFilesize: 5,
    url: "test.txt",
    maxFiles: 1,
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#profile-add',
  });

}


//Dropzone для работ в портфолио

const portfolioPhoto = document.querySelector('#portfolio-dropzone');

if (portfolioPhoto) {
  let portfolioDropzone = new Dropzone(portfolioPhoto, {
    maxFilesize: 2.5,
    url: "test.txt",
    maxFiles: 5,
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#portfolio-add',
  });

}









