// Saves options to chrome.storage
const saveOptions = () => {
    const saveComments = document.getElementById("saveComments").checked;

    chrome.storage.sync.set({
        saveComments: saveComments
      }, function() {

        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
      });

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {

  // Use default value saveComments = false.
  chrome.storage.sync.get({
    saveComments: false
  }, function(items) {
    document.getElementById('saveComments').checked = items.saveComments;
  });
}


document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
    saveOptions);
