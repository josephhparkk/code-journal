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

/* ENTRIES:
Click 'SAVE' button on NEW ENTRY page --> lead to entries page
click 'NEW' --> go to new entry page

when an entry is SAVED --> show up in entries and need to show for every single one
newest one is saved on top

*/

var formContainerPage = document.querySelector('.form-container');
var entryContainerPage = document.querySelector('.entry-container');

function setEntriesPage(entry) {
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'container entry-container');
  div1.setAttribute('data-view', 'entries');

  var ul = document.createElement('ul');
  ul.setAttribute('class', 'row');
  div1.appendChild(ul);

  var li = document.createElement('li');
  li.setAttribute('class', 'column-full entries');
  ul.appendChild(li);

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
  div4.setAttribute('class', 'column-half');
  div3.appendChild(div4);

  var head2 = document.createElement('h2');
  var paragraph = document.createElement('p');
  head2.textContent = entry.title;
  paragraph.textContent = entry.notes;
  div4.appendChild(head2);
  div4.appendChild(paragraph);

  return div1;
}

window.addEventListener('DOMContentLoaded', function (entry) {
  if (data.view === 'entry-form') {
    entryFormView.className = 'entries';
    // entryFormView.classList.remove('entry-form');
    formContainerPage.className = 'hidden';
    entriesView.classList.remove('hidden');
  }
  for (var i = 0; i < data.entries.length; i++) {
    entryContainerPage.append(setEntriesPage(data.entries[i]));
  }
}
);

// var saveButton = document.querySelector('button');
// var formContainerPage = document.querySelector('.form-container');

var entryFormView = document.querySelector('entry-form');
var entriesView = document.querySelector('entries');
