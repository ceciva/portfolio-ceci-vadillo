

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function () {
      
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      if (offcanvasElement) {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.hide();
      }
    });
  });
});




