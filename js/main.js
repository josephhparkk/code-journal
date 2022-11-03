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

  clickGoToEntryPage(event);
  unorderedList.prepend(renderEntry(newFormData));

});
var unorderedList = document.querySelector('ul');

function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'column-full entries');

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'row');
  li.appendChild(div2);

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'column-half image');
  div2.appendChild(div3);

  var img = document.createElement('img');
  img.setAttribute('class', 'pictures');
  img.setAttribute('src', entry.imageUrl);
  div3.appendChild(img);

  var div4 = document.createElement('div');
  div4.setAttribute('class', 'column-half description');
  div2.appendChild(div4);

  var head2 = document.createElement('h2');
  var paragraph = document.createElement('p');
  head2.textContent = entry.title;
  paragraph.textContent = entry.notes;
  div4.appendChild(head2);
  div4.appendChild(paragraph);

  return li;
}
var noEntryMessage = document.querySelector('.no-message');
var formContainerPage = document.querySelector('.form-container');
var entryContainerPage = document.querySelector('.entry-container');

window.addEventListener('DOMContentLoaded', function (event) {
  if (data.view === 'entries') {
    clickGoToEntryPage(event);
  } else if (data.view === 'entry-form') {
    clickNewForNewEntry(event);
  }
  for (var i = 0; i < data.entries.length; i++) {
    entryContainerPage.append(renderEntry(data.entries[i]));
  }
});

var entriesTab = document.querySelector('.entries-tab');
entriesTab.addEventListener('click', clickGoToEntryPage);

function clickGoToEntryPage(event) {
  formContainerPage.classList.add('hidden');
  entryContainerPage.classList.remove('hidden');
  noEntryMessage.classList.add('hidden');
  data.view = 'entries';
}

var newButton = document.querySelector('.new-button');
newButton.addEventListener('click', clickNewForNewEntry);

function clickNewForNewEntry(event) {
  entryContainerPage.classList.add('hidden');
  formContainerPage.classList.remove('hidden');
  data.view = 'entry-form';
}
