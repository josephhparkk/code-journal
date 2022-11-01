var photoUrl = document.querySelector('.text-input-URL');
var updatePhotos = document.querySelector('.pictures');
photoUrl.addEventListener('input', uploadPhoto);

function uploadPhoto(event) {
  updatePhotos.setAttribute('src', photoUrl.value);
}

var newForm = document.querySelector('#journal-form');
var resetPhoto = document.querySelector('.pictures');

newForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var newFormData = {
    title: newForm.elements.title.value,
    imageUrl: newForm.elements.url.value,
    notes: newForm.elements.notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(newFormData);

  newForm.reset();
  resetPhoto.setAttribute('src', 'images/placeholder-image-square.jpg');
});
