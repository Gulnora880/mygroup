// Данные студентов
const studentsData = [
  {
    id: 1,
    name: "Бегимай",
    surname: "Абдиева",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "abdijeva@edu.ru",
    phone: "+996558292325",
  },
  {
    id: 2,
    name: "Нурлан",
    surname: "Абдилазизов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "abdilazizov@edu.ru",
    phone: "+996220235423",
  },
  {
    id: 3,
    name: "Сезимай",
    surname: "Абдираимова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "abdiraimova@edu.ru",
    phone: "+996221717159",
  },
  {
    id: 4,
    name: "Наргиза",
    surname: "Абдилманапова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "abdilmanapova@edu.ru",
    phone: "+996558200107",
  },
  {
    id: 5,
    name: "Нурислам",
    surname: "Абдуманапов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "abdumanapov@edu.ru",
    phone: "+996774126630",
  },
  {
    id: 6,
    name: "Гулнора",
    surname: "Азамова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "azamova@edu.ru",
    phone: "+996704700727",
  },
  {
    id: 7,
    name: "Сагынай",
    surname: "Асанова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "asanova@edu.ru",
    phone: "+996225266005",
  },
  {
    id: 8,
    name: "Адилет",
    surname: "Балтабаев",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "baltabaev@edu.ru",
    phone: "+996706059128",
  },
  {
    id: 9,
    name: "Аяна",
    surname: "Боркошова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "borkoshova@edu.ru",
    phone: "+996220914360",
  },
  {
    id: 10,
    name: "Айдай",
    surname: "Гламидинова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "glamidinova@edu.ru",
    phone: "+996703725183",
  },
  {
    id: 11,
    name: "Элайым",
    surname: "Долоева",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "doloeva@edu.ru",
    phone: "+996222216056",
  },
  {
    id: 12,
    name: "Жаңылай",
    surname: "Жумаева",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "zhumaeva@edu.ru",
    phone: "+996701110054",
  },
  {
    id: 13,
    name: "Бегимай",
    surname: "Куштарбек кызы",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "kushtarbek@edu.ru",
    phone: "+996220914360",
  },
  {
    id: 14,
    name: "Мухаммедюсуф",
    surname: "Райимжанов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "raimzhanov@edu.ru",
    phone: "+996222112120",
  },
  {
    id: 15,
    name: "Мухаммедрасул",
    surname: "Равшанов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "ravshanov@edu.ru",
    phone: "+996990767575",
  },
  {
    id: 16,
    name: "Нозимжон",
    surname: "Рустамбаев",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "rustambaev@edu.ru",
    phone: "+996505553110",
  },
  {
    id: 17,
    name: "Бүуркия",
    surname: "Садибакасова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "sadibakasova@edu.ru",
    phone: "+996503001232",
  },
  {
    id: 18,
    name: "Гулина",
    surname: "Сайпидинова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "saipidinova@edu.ru",
    phone: "+996775465800",
  },
  {
    id: 19,
    name: "Өмүрбек",
    surname: "Тагаев",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "tagaev@edu.ru",
    phone: "+996700901234",
  },
  {
    id: 20,
    name: "Нозаним",
    surname: "Хажиматова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "khazhimatova@edu.ru",
    phone: "+996553747172",
  },
  {
    id: 21,
    name: "Ырысгелди",
    surname: "Шарабидинов",
    gender: "male",
    group: "Bd-1-24",
    birthYear: 2007,
    email: "sharabidinov@edu.ru",
    phone: "+996223753395",
  },
  {
    id: 22,
    name: "Гүлшанай",
    surname: "Эгемназарова",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "egemnazarova@edu.ru",
    phone: "+996507954490",
  },
  {
    id: 23,
    name: "Арууке",
    surname: "Эмилбек кызы",
    gender: "female",
    group: "Bd-1-24",
    birthYear: 2006,
    email: "emilbek@edu.ru",
    phone: "+996228081106",
  },
];

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

// Функция рендера студентов - УЛУЧШЕННАЯ ВЕРСИЯ
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

    // Пробуем разные пути к фото
    const photoPaths = [
      `photos/student${student.id}.jpg`,
      `photos/student${student.id}.jpeg`,
      `photos/student${student.id}.png`,
      `photos/${student.id}.jpg`,
      `photos/${student.surname.toLowerCase()}.jpg`,
      `photos/${student.name.toLowerCase()}.jpg`,
    ];

    // Создаем HTML для карточки
    studentCard.innerHTML = `
      <div class="photo-container">
        ${photoPaths
          .map(
            (path, index) => `
          <img src="${path}" 
               alt="${student.name} ${student.surname}" 
               class="student-photo ${index > 0 ? "hidden" : ""}"
               onerror="if(this.classList.contains('hidden')) {this.style.display='none'} else {this.style.display='none'; const next = this.parentElement.querySelector('img.hidden'); if(next) {next.classList.remove('hidden')}}">
        `
          )
          .join("")}
      </div>
      <div class="student-info">
        <h3>${student.surname} ${student.name}</h3>
        <div class="student-id">ID: ${String(student.id).padStart(3, "0")}</div>
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
        student.group.toLowerCase().includes(currentSearch) ||
        student.phone.includes(currentSearch)
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

// Открытие модального окна - УЛУЧШЕННАЯ ВЕРСИЯ
function openStudentModal(student) {
  const photoPaths = [
    `photos/student${student.id}.jpg`,
    `photos/student${student.id}.jpeg`,
    `photos/student${student.id}.png`,
    `photos/${student.id}.jpg`,
    `photos/${student.surname.toLowerCase()}.jpg`,
    `photos/${student.name.toLowerCase()}.jpg`,
  ];

  const age = new Date().getFullYear() - student.birthYear;
  const genderText = student.gender === "male" ? "Мужской" : "Женский";

  // Форматируем номер телефона для отображения
  const formattedPhone = formatPhoneNumber(student.phone);

  // Создаем WhatsApp ссылку
  const whatsappLink = `https://wa.me/${student.phone.replace(/\D/g, "")}`;

  // Создаем содержимое модального окна
  modalBody.innerHTML = `
    <div class="modal-photo-section">
      <div class="modal-photo-container">
        ${photoPaths
          .map(
            (path, index) => `
          <img src="${path}" 
               alt="${student.name} ${student.surname}" 
               class="modal-photo ${index > 0 ? "hidden" : ""}"
               onerror="if(this.classList.contains('hidden')) {this.style.display='none'} else {this.style.display='none'; const next = this.parentElement.querySelector('img.hidden'); if(next) {next.classList.remove('hidden')}}">
        `
          )
          .join("")}
      </div>
      <h2>${student.surname} ${student.name}</h2>
    </div>
    <div class="modal-details">
      <p><strong><i class="fas fa-id-card"></i> ID студента:</strong> ${String(
        student.id
      ).padStart(3, "0")}</p>
      <p><strong><i class="fas fa-users"></i> Группа:</strong> ${
        student.group
      }</p>
      <p><strong><i class="fas fa-birthday-cake"></i> Год рождения:</strong> ${
        student.birthYear
      } (${age} лет)</p>
      <p><strong><i class="fas ${
        student.gender === "male" ? "fa-mars" : "fa-venus"
      }"></i> Пол:</strong> ${genderText}</p>
      <p><strong><i class="fas fa-envelope"></i> Email:</strong> <a href="mailto:${
        student.email
      }">${student.email}</a></p>
      <p><strong><i class="fas fa-phone"></i> Телефон:</strong> 
        <a href="${whatsappLink}" target="_blank" class="whatsapp-link" title="Написать в WhatsApp">
          ${formattedPhone}
          <i class="fab fa-whatsapp whatsapp-icon"></i>
        </a>
      </p>
    </div>
    <div class="modal-actions">
      <a href="${whatsappLink}" target="_blank" class="whatsapp-btn">
        <i class="fab fa-whatsapp"></i> Написать в WhatsApp
      </a>
      <a href="tel:${student.phone}" class="call-btn">
        <i class="fas fa-phone"></i> Позвонить
      </a>
    </div>
  `;

  // Показываем модальное окно
  studentModal.style.display = "block";
}

// Функция форматирования номера телефона
function formatPhoneNumber(phone) {
  // Формат: +996 (XXX) XXX-XXX
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 13) {
    const countryCode = cleaned.substring(0, 4);
    const operator = cleaned.substring(4, 7);
    const part1 = cleaned.substring(7, 10);
    const part2 = cleaned.substring(10, 13);
    return `${countryCode} (${operator}) ${part1}-${part2}`;
  }
  return phone;
}