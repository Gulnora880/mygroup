// Данные студентов (исправлены пол и email)
const studentsData = [
  {
    id: 1,
    name: "Бегимай",
    surname: "Абдиева",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "abdijeva@edu.ru",
  },
  {
    id: 2,
    name: "Нурлан",
    surname: "Абдилазизов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "abdilazizov@edu.ru",
  },
  {
    id: 3,
    name: "Сезимай",
    surname: "Абдираимова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "abdiraimova@edu.ru",
  },
  {
    id: 4,
    name: "Наргиза",
    surname: "Абдилманапова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "abdilmanapova@edu.ru",
  },
  {
    id: 5,
    name: "Нурислам",
    surname: "Абдуманапов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "abdumanapov@edu.ru",
  },
  {
    id: 6,
    name: "Гулнора",
    surname: "Азамова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "azamova@edu.ru",
  },
  {
    id: 7,
    name: "Сагынай",
    surname: "Асанова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "asanova@edu.ru",
  },
  {
    id: 8,
    name: "Адилет",
    surname: "Балтабаев",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "baltabaev@edu.ru",
  },
  {
    id: 9,
    name: "Аяна",
    surname: "Боркошова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "borkoshova@edu.ru",
  },
  {
    id: 10,
    name: "Айдай",
    surname: "Гламидинова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "glamidinova@edu.ru",
  },
  {
    id: 11,
    name: "Жаңылай",
    surname: "Жумаева",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "zhumaeva@edu.ru",
  },
  {
    id: 12,
    name: "Бегимай",
    surname: "Куштарбек кызы",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "kushtarbek@edu.ru",
  },
  {
    id: 13,
    name: "Мухаммедюсуф",
    surname: "Райимжанов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "raimzhanov@edu.ru",
  },
  {
    id: 14,
    name: "Мухаммедрасул",
    surname: "Равшанов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "ravshanov@edu.ru",
  },
  {
    id: 15,
    name: "Нозимжон",
    surname: "Рустамбаев",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "rustambaev@edu.ru",
  },
  {
    id: 16,
    name: "Бүуркия",
    surname: "Садибакасова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "sadibakasova@edu.ru",
  },
  {
    id: 17,
    name: "Гулина",
    surname: "Сайпидинова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "saipidinova@edu.ru",
  },
  {
    id: 18,
    name: "Өмүрбек",
    surname: "Тагаев",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "tagaev@edu.ru",
  },
  {
    id: 19,
    name: "Нозаним",
    surname: "Хажиматова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "khazhimatova@edu.ru",
  },
  {
    id: 20,
    name: "Ырысгелди",
    surname: "Шарабидинов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "sharabidinov@edu.ru",
  },
  {
    id: 21,
    name: "Гүлшанай",
    surname: "Эгемназарова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "egemnazarova@edu.ru",
  },
  {
    id: 22,
    name: "Арууке",
    surname: "Эмилбек кызы",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "emilbek@edu.ru",
  },
  {
    id: 9,
    name: "Элайым",
    surname: "Долоева",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "doloeva@edu.ru",
  },
];
 

// DOM элементы
const studentsContainer = document.getElementById("studentsContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const filterBtns = document.querySelectorAll(".filter-btn");
const studentModal = document.getElementById("studentModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

// Переменные состояния
let currentFilter = "all";
let currentSearch = "";

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  renderStudents(studentsData);
  updateStudentCount();
  setupEventListeners();
});

// Функция рендера студентов
function renderStudents(students) {
  studentsContainer.innerHTML = "";

  if (students.length === 0) {
    studentsContainer.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <p>Студенты не найдены</p>
      </div>
    `;
    return;
  }

  students.forEach(function (student) {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";
    studentCard.setAttribute("data-gender", student.gender);

    // Определяем путь к фото
    const photoPath = `photos/student${student.id}.jpg`;
    const defaultIcon =
      student.gender === "male"
        ? '<i class="fas fa-male no-photo-icon"></i>'
        : '<i class="fas fa-female no-photo-icon"></i>';

    // Создаем HTML для карточки
    studentCard.innerHTML = `
      <div class="photo-container">
        <img src="${photoPath}" 
             alt="${student.name} ${student.surname}" 
             class="student-photo"
             onerror="this.style.display='none'; 
                      this.parentElement.querySelector('.no-photo-fallback').style.display='flex';">
        <div class="no-photo-fallback" style="display: none; width: 100px; height: 100px; background: #f0f0f0; border-radius: 50%; align-items: center; justify-content: center;">
          ${defaultIcon}
        </div>
      </div>
      <div class="student-info">
        <h3>${student.surname} ${student.name}</h3>
        <div class="student-id">Студент ID: ${String(student.id).padStart(
          3,
          "0"
        )}</div>
        <div class="student-details">
          <p><i class="fas fa-users"></i> ${student.group}</p>
          <p><i class="fas fa-birthday-cake"></i> ${student.birthYear}</p>
        </div>
      </div>
    `;

    // Добавляем обработчик клика
    studentCard.addEventListener("click", function () {
      openStudentModal(student);
    });

    studentsContainer.appendChild(studentCard);
  });
}

// Обновление счетчика студентов
function updateStudentCount(students = studentsData) {
  const countElement = document.getElementById("studentCount");
  if (countElement) {
    countElement.textContent = students.length;
  }
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Поиск
  if (searchBtn) {
    searchBtn.addEventListener("click", performSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        performSearch();
      }
    });
  }

  // Сброс
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      searchInput.value = "";
      currentSearch = "";
      renderStudents(studentsData);
      updateStudentCount();
    });
  }

  // Фильтры
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Убираем активный класс у всех кнопок
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });

      // Добавляем активный класс текущей кнопке
      btn.classList.add("active");

      // Устанавливаем текущий фильтр
      currentFilter = btn.getAttribute("data-filter");

      // Применяем фильтры
      applyFilters();
    });
  });

  // Закрытие модального окна
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      studentModal.style.display = "none";
    });
  }

  // Закрытие модального окна при клике вне его
  window.addEventListener("click", function (e) {
    if (e.target === studentModal) {
      studentModal.style.display = "none";
    }
  });
}

// Поиск студентов
function performSearch() {
  currentSearch = searchInput.value.toLowerCase().trim();
  applyFilters();
}

// Применение фильтров и поиска
function applyFilters() {
  let filteredStudents = studentsData;

  // Применяем текстовый поиск
  if (currentSearch) {
    filteredStudents = filteredStudents.filter(function (student) {
      return (
        student.name.toLowerCase().includes(currentSearch) ||
        student.surname.toLowerCase().includes(currentSearch) ||
        student.group.toLowerCase().includes(currentSearch)
      );
    });
  }

  // Применяем фильтр по полу
  if (currentFilter !== "all") {
    filteredStudents = filteredStudents.filter(function (student) {
      return student.gender === currentFilter;
    });
  }

  // Обновляем интерфейс
  updateStudentCount(filteredStudents);
  renderStudents(filteredStudents);
}

// Открытие модального окна
function openStudentModal(student) {
  const photoPath = `photos/student${student.id}.jpg`;
  const age = new Date().getFullYear() - student.birthYear;
  const genderText = student.gender === "male" ? "Мужской" : "Женский";

  // Создаем содержимое модального окна
  modalBody.innerHTML = `
    <div class="modal-photo-container">
      <img src="${photoPath}" 
           alt="${student.name} ${student.surname}" 
           class="modal-photo"
           onerror="this.style.display='none'; 
                    this.nextElementSibling.style.display='flex';">
      <div class="modal-no-photo" style="display: none; width: 150px; height: 150px; background: #f0f0f0; border-radius: 50%; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <i class="fas ${
          student.gender === "male" ? "fa-male" : "fa-female"
        }" style="font-size: 60px; color: #666;"></i>
      </div>
    </div>
    <h2>${student.surname} ${student.name}</h2>
    <div class="modal-details">
      <p><strong>ID студента:</strong> ${String(student.id).padStart(
        3,
        "0"
      )}</p>
      <p><strong>Группа:</strong> ${student.group}</p>
      <p><strong>Год рождения:</strong> ${student.birthYear} (${age} лет)</p>
      <p><strong>Пол:</strong> ${genderText}</p>
      <p><strong>Email:</strong> <a href="mailto:${student.email}">${
    student.email
  }</a></p>
    </div>
  `;

  // Показываем модальное окно
  studentModal.style.display = "block";
}

