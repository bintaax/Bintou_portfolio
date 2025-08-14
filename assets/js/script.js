// Burger
  document.addEventListener("DOMContentLoaded", () => {
    let burger = document.getElementById("burger");
    let header = document.getElementById("header");

    burger.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  });

// Téléchargement du CV
document.querySelector("#telechargerCV").addEventListener('click', function(){
    const LIEN = document.createElement('a');
    LIEN.href="CV_Bintou_SYLLA.pdf";
    LIEN.download="CV_BintouSYLLA";
    LIEN.click();

});

// Formuulaire
  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".contact-form form");
    let loading = document.querySelector(".loading");
    let sentMessage = document.querySelector(".sent-message");
    let errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      loading.style.display = "block";
      sentMessage.style.display = "none";
      errorMessage.style.display = "none";

      // Simulation de l'envoi
      setTimeout(() => {
        loading.style.display = "none";
        sentMessage.style.display = "block";
        form.reset();
      });
    });
  });

// Animation du texte
  document.addEventListener("DOMContentLoaded", () => {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      new Typed('.typed', {
        strings: typedElement.getAttribute('data-typed-items').split(','),
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
      });
    }
  });