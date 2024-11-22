// hace que desapareaca el offcanvas al seleccionar una opción

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


// hace que las animaciones se vean cada vez que se scrolea la página.

// carrusel

const carousel = document.querySelector('#carouselExampleIndicators');


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                carousel.classList.remove('fadeInUp'); 
                void carousel.offsetWidth; 
                carousel.classList.add('fadeInUp'); 
            }
        });
    },
    {
        threshold: 0.2, 
    }
);


observer.observe(carousel);

// proyectos

const proyecto = document.querySelector('.project');


const observer1 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                proyecto.classList.remove('fadeInUp'); 
                void carousel.offsetWidth; 
                proyecto.classList.add('fadeInUp'); 
            }
        });
    },
    {
        threshold: 0.2, 
    }
);


observer1.observe(proyecto);

// habilidades

const habilidad = document.querySelector('.habil');


const observer2 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                habilidad.classList.remove('fadeInUp'); 
                void carousel.offsetWidth; 
                habilidad.classList.add('fadeInUp'); 
            }
        });
    },
    {
        threshold: 0.5, 
    }
);


observer2.observe(habilidad);






