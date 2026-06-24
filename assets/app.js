(function () {
  var status = window.HAMZA_SITE_STATUS || {};
  var maintenanceEnabled = status.maintenance === true;

  if (!maintenanceEnabled) {
    return;
  }

  document.documentElement.classList.add("site-maintenance");
  document.body.classList.add("site-maintenance");
  document.title = "Website in Bearbeitung | Hamza Alkhaled";

  var title = document.getElementById("maintenance-title");
  var message = document.getElementById("maintenance-message");

  if (title && status.title) {
    title.textContent = status.title;
  }

  if (message && status.message) {
    message.textContent = status.message;
  }
})();
