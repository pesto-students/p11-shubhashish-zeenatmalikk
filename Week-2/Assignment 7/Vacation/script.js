function showAlert(alertId) {
    const bootstrapAlert = document.querySelector("#" + alertId);
    const collapse = new bootstrap.Collapse(bootstrapAlert); 
    collapse.show();
 }
 
 const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
 modalYesBtn.addEventListener("click", function () {    
    const sendBtn = document.querySelector("#send-message-btn");
    sendBtn.style.display = "none";
    showAlert("conf-alert");
 });

 // Get a reference to the modal and the alert elements
var contactModal = document.getElementById('contact-modal');
var confAlert = document.getElementById('conf-alert');
var sendMessageBtn = document.getElementById('send-message-btn');

// Add an event listener to the modal when it is hidden
contactModal.addEventListener('hidden.bs.modal', function () {
    // Show the Alert
    confAlert.style.display = 'block';

    // Hide the "Send message" button
    sendMessageBtn.style.display = 'none';
});
