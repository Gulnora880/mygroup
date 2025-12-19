// Данные студентов (можно заменить на свои)
const studentsData = [
  {
    id: 1,
    name: "Иван",
    surname: "Иванов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "ivanov@edu.ru",
  },
  {
    id: 2,
    name: "Мария",
    surname: "Петрова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "petrova@edu.ru",
  },
  {
    id: 3,
    name: "Алексей",
    surname: "Сидоров",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "sidorov@edu.ru",
  },
  {
    id: 4,
    name: "Екатерина",
    surname: "Смирнова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "smirnova@edu.ru",
  },
  {
    id: 5,
    name: "Дмитрий",
    surname: "Кузнецов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "kuznetsov@edu.ru",
  },
  {
    id: 6,
    name: "Анна",
    surname: "Васильева",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "vasilyeva@edu.ru",
  },
  {
    id: 7,
    name: "Сергей",
    surname: "Попов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "popov@edu.ru",
  },
  {
    id: 8,
    name: "Ольга",
    surname: "Новикова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "novikova@edu.ru",
  },
  {
    id: 9,
    name: "Андрей",
    surname: "Морозов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "morozov@edu.ru",
  },
  {
    id: 10,
    name: "Наталья",
    surname: "Волкова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "volkova@edu.ru",
  },
  {
    id: 11,
    name: "Павел",
    surname: "Алексеев",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "alekseev@edu.ru",
  },
  {
    id: 12,
    name: "Юлия",
    surname: "Лебедева",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "lebedeva@edu.ru",
  },
  {
    id: 13,
    name: "Михаил",
    surname: "Семенов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "semenov@edu.ru",
  },
  {
    id: 14,
    name: "Елена",
    surname: "Егорова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "egorova@edu.ru",
  },
  {
    id: 15,
    name: "Артем",
    surname: "Павлов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "pavlov@edu.ru",
  },
  {
    id: 16,
    name: "Татьяна",
    surname: "Козлова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "kozlova@edu.ru",
  },
  {
    id: 17,
    name: "Владимир",
    surname: "Степанов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "stepanov@edu.ru",
  },
  {
    id: 18,
    name: "Светлана",
    surname: "Николаева",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "nikolaeva@edu.ru",
  },
  {
    id: 19,
    name: "Константин",
    surname: "Орлов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "orlov@edu.ru",
  },
  {
    id: 20,
    name: "Алиса",
    surname: "Андреева",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "andreeva@edu.ru",
  },
  {
    id: 21,
    name: "Георгий",
    surname: "Макаров",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "makarov@edu.ru",
  },
  {
    id: 22,
    name: "Виктория",
    surname: "Захарова",
    gender: "female",
    group: "ИС-101",
    birthYear: 2003,
    email: "zakharova@edu.ru",
  },
  {
    id: 23,
    name: "Роман",
    surname: "Борисов",
    gender: "male",
    group: "ИС-101",
    birthYear: 2002,
    email: "borisov@edu.ru",
  },
];

// Элементы DOM
const studentsContainer = document.getElementById("studentsContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const filterBtns = document.querySelectorAll(".filter-btn");
const studentModal = document.getElementById("studentModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

// Текущий фильтр
let currentFilter = "all";
let currentSearch = "";

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  renderStudents(studentsData);
  setupEventListeners();
});

// Рендер студентов
function renderStudents(students) {
  studentsContainer.innerHTML = "";

  students.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";
    studentCard.dataset.gender = student.gender;

    // Пытаемся загрузить фото, если нет - используем иконку
    const photoPath = `student.id.jpeg`;

    studentCard.innerHTML = `
            <div class="photo-container">
                <img src="student.id.jpeg" alt="" 
                     class="student-photo" onerror="this.onerror=null; this.src='student.id.jpeg'; this.parentElement.innerHTML='<i class=\"fas fa-user no-photo\"></i>';">
            </div>
            <div class="student-info">
                <h3>${student.surname} ${student.name}</h3>
                <div class="student-id">Студент ID: ${student.id
                  .toString()
                  .padStart(3, "0")}</div>
                <div class="student-details">
                    <p><i class="fas fa-users"></i> Группа: ${student.group}</p>
                    <p><i class="fas fa-birthday-cake"></i> Год рождения: ${
                      student.birthYear
                    }</p>
                </div>
            </div>
        `;

    studentCard.addEventListener("click", () => openStudentModal(student));
    studentsContainer.appendChild(studentCard);
  });
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Поиск
  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") performSearch();
  });

  // Сброс
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    applyFilters();
  });

  // Фильтры
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Модальное окно
  closeModal.addEventListener("click", () => {
    studentModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === studentModal) {
      studentModal.style.display = "none";
    }
  });
}

// Выполнение поиска
function performSearch() {
  currentSearch = searchInput.value.toLowerCase().trim();
  applyFilters();
}

// Применение фильтров
function applyFilters() {
  let filteredStudents = studentsData;

  // Применяем текстовый поиск
  if (currentSearch) {
    filteredStudents = filteredStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(currentSearch) ||
        student.surname.toLowerCase().includes(currentSearch)
    );
  }

  // Применяем фильтр по полу
  if (currentFilter !== "all") {
    filteredStudents = filteredStudents.filter(
      (student) => student.gender === currentFilter
    );
  }

  // Обновляем счетчик
  document.getElementById("studentCount").textContent = filteredStudents.length;

  // Рендерим отфильтрованных студентов
  renderStudents(filteredStudents);
}

// Открытие модального окна с информацией о студенте
function openStudentModal(student) {
  const photoPath = `images/student${student.id}.jpg`;
  const age = new Date().getFullYear() - student.birthYear;

  modalBody.innerHTML = `
        <img src="${photoPath}" alt="${student.name} ${student.surname}" 
             class="modal-photo" onerror="this.onerror=null; this.src=''; this.style.display='none';">
        <h2>${student.surname} ${student.name}</h2>
        <div class="modal-details">
            <p><strong>ID студента:</strong> ${student.id
              .toString()
              .padStart(3, "0")}</p>
            <p><strong>Группа:</strong> ${student.group}</p>
            <p><strong>Год рождения:</strong> ${
              student.birthYear
            } (${age} лет)</p>
            <p><strong>Пол:</strong> ${
              student.gender === "male" ? "Мужской" : "Женский"
            }</p>
            <p><strong>Email:</strong> ${student.email}</p>
        </div>
    `;

  studentModal.style.display = "block";
}
