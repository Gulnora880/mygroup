
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });

    
    document.addEventListener("click", function (event) {
      if (
        !mobileMenu.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
        mobileMenu.classList.remove("active");
      }
    });
  }

  
  
  
  setupQuickLinks();

  
  updateCurrentDate();
});


  


function setupQuickLinks() {
  const scheduleLink = document.getElementById("scheduleLink");
  const materialsLink = document.getElementById("materialsLink");

  if (scheduleLink) {
    scheduleLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        "Расписание загружается...\nВ реальном проекте здесь будет переход к расписанию."
      );
      
    });
  }

  if (materialsLink) {
    materialsLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        "Переход к учебным материалам...\nСсылка на Google Drive или другую систему."
      );
      
    });
  }
}


function updateCurrentDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString("ru-RU", options);

 
  console.log(`Сегодня: ${dateString}`);
}


window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(function () {
    document.body.style.opacity = "1";
  }, 100);
});
