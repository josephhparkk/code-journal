var photoUrl = document.querySelector('.text-input-URL');
var updatePhotos = document.querySelector('.pictures');
photoUrl.addEventListener('input', uploadPhoto);

function uploadPhoto(event) {
  updatePhotos.setAttribute('src', photoUrl.value);
}

// var inputData = {};
// var form = document.querySelector('main');
var saveButton = document.querySelector('.button');
saveButton.addEventListener('submit', saveData);

function saveData(event) {
  event.preventDefault();

}
