
// querySelectors functions
var photoUrl = document.querySelector('.text-input-URL');
var title = document.querySelector('.text-input-title');
var notes = document.querySelector('.notes');
var updatePhotos = document.querySelector('.pictures');
var newForm = document.querySelector('#journal-form');
var resetPhoto = document.querySelector('.pictures');
var unorderedList = document.querySelector('ul');
var noEntryMessage = document.querySelector('.no-message');
var formContainerPage = document.querySelector('.form-container');
var entryContainerPage = document.querySelector('.entry-container');
var entriesTab = document.querySelector('.entries-tab');
var newButton = document.querySelector('.new-button');
var newEntryHeader = document.querySelector('h1');
var imgHolder = document.querySelector('.pictures');

photoUrl.addEventListener('input', uploadPhoto);
entriesTab.addEventListener('click', clickGoToEntryPage);
newButton.addEventListener('click', clickNewForNewEntry);
unorderedList.addEventListener('click', editRenderedElement);

// list of function
function uploadPhoto(event) {
  updatePhotos.setAttribute('src', photoUrl.value);
}

newForm.addEventListener('submit', submitEntry);

function submitEntry(event) {
  event.preventDefault();
  if (data.editing !== null) {
    data.editing.title = newForm.elements.title.value;
    data.editing.imageUrl = newForm.elements.url.value;
    data.editing.notes = newForm.elements.notes.value;

    var list = document.querySelectorAll('li');
    for (var k = 0; k < data.entries.length; k++) {
      var listId = list[k].getAttribute('data-entry-id');
      if (data.editing.entryId.toString() === listId) {
        list[k].replaceWith(renderEntry(data.editing));
      }
    }
    for (var h = 0; h < data.entries.length; h++) {
      if (data.entries[h].entryId === data.editing.entryId) {
        data.entries[h].title = data.editing.title;
        data.entries[h].imageUrl = data.editing.imageUrl;
        data.entries[h].notes = data.editing.notes;
      }
    }
  } else {
    var newFormData = {
      title: newForm.elements.title.value,
      imageUrl: newForm.elements.url.value,
      notes: newForm.elements.notes.value,
      entryId: data.nextEntryId
    };
    data.nextEntryId++;
    data.entries.unshift(newFormData);
    unorderedList.prepend(renderEntry(newFormData));
  }
  data.editing = null;
  clickGoToEntryPage(event);
}

function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'column-full entries');
  li.setAttribute('data-entry-id', entry.entryId);

  var div1 = document.createElement('div');
  div1.setAttribute('class', 'row');
  li.appendChild(div1);

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'column-half image');
  div1.appendChild(div2);

  var img = document.createElement('img');
  img.setAttribute('class', 'pictures');
  img.setAttribute('src', entry.imageUrl);
  div2.appendChild(img);

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'column-half');
  div1.appendChild(div3);

  var div4 = document.createElement('div');
  div4.setAttribute('class', 'row');
  div3.appendChild(div4);

  var div5 = document.createElement('div');
  div5.setAttribute('class', 'column-full description');
  div4.appendChild(div5);

  var head2 = document.createElement('h2');
  head2.textContent = entry.title;
  div5.appendChild(head2);

  var aTag = document.createElement('a');
  aTag.setAttribute('class', 'edit-tag');
  div5.appendChild(aTag);

  var editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fas fa-pen');
  aTag.appendChild(editIcon);

  var paragraph = document.createElement('p');
  paragraph.textContent = entry.notes;
  div4.appendChild(paragraph);

  return li;

}

window.addEventListener('DOMContentLoaded', function (event) {
  if (data.view === 'entries') {
    clickGoToEntryPage(event);
  } else if (data.view === 'entry-form') {
    clickNewForNewEntry(event);
  }
  for (var i = 0; i < data.entries.length; i++) {
    unorderedList.append(renderEntry(data.entries[i]));
  }
});

// Go to entries page when you click "ENTRIES" on top
function clickGoToEntryPage(event) {
  formContainerPage.classList.add('hidden');
  entryContainerPage.classList.remove('hidden');
  noEntryMessage.classList.add('hidden');
  data.view = 'entries';
  newForm.reset();
  resetPhoto.setAttribute('src', 'images/placeholder-image-square.jpg');
}

// go to 'NEW ENTRY' page when you click 'NEW'
function clickNewForNewEntry(event) {
  entryContainerPage.classList.add('hidden');
  formContainerPage.classList.remove('hidden');
  newEntryHeader.textContent = 'New Entry';
  data.view = 'entry-form';
}

function editRenderedElement(event) {

  var clickedEntry = event.target.closest('li');
  var clickedId = clickedEntry.getAttribute('data-entry-id');
  for (var j = 0; j < data.entries.length; j++) {
    if (clickedId === data.entries[j].entryId.toString()) {
      data.editing = data.entries[j];
      title.value = data.entries[j].title;
      photoUrl.value = data.entries[j].imageUrl;
      notes.value = data.entries[j].notes;
      imgHolder.setAttribute('src', data.entries[j].imageUrl);
    }
  }
  if (event.target && event.target.matches('.fa-pen')) {
    clickNewForNewEntry(event.target);
    newEntryHeader.textContent = 'Edit Entry';
  }
}
