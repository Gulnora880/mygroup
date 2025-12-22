
        // Данные для таблицы
        const subjects = [
            "Технический китайский", 
            "Физика", 
            "Философия, филосифия национальных и общечеловеческих ценностей", 
            "Дискретная математика", 
            "Python для Data Science", 
            "Web-Программирование", 
            "Современные скриптовые языки программирования"
        ];
        
        // Генерация имен студентов
        const students = [];
        const lastNames = ["Абдиева", "Абдилазизов", "Абдираимова", "Абдилманапова", "Абдуманапов", "Азамова", "Асанова", "Балтабаев", "Боркошова", "Гламидинова", "Жумаева", "Куштарбек кызы", "Райимжанов", "Равшанов", "Рустамбаев", "Садибакасова", "Сайпидинова", "Тагаев", "Хажиматова", "Шарабидинов", "Эгемназарова", "Эмилбек кызы","Долоема" ];
        const firstNames = ["Бегимай", "Нурлан", "Сезимай", "Наргиза", "Нурислам", "Гулнора", "Сагынай", "Адилет", "Аяна", "Айдай", "Жаңылай", "Бегимай", "Мухаммедюсуф", "Мухаммедрасул", "Нозимжон", "Бүуркия", "Гулина", "Өмүрбек", "Нозаним", "Ырысгелди", "Гүлшанай", "Арууке","Элайым"];
        
        // Создаем 23 уникальных студента
        for (let i = 0; i < 23; i++) {
            const lastName = lastNames[i % lastNames.length];
            const firstName = firstNames[i % firstNames.length];
            const middleInitial = String.fromCharCode(65 + (i % 26)); // A, B, C, ...
            students.push({
                id: i + 1,
                name: `${lastName} ${firstName} ${middleInitial}.`,
                grades: []
            });
            
            // Генерируем случайные оценки от 2 до 5
            for (let j = 0; j < subjects.length; j++) {
                // 80% оценок 3-5, 20% оценок 2-3
                const random = Math.random();
                let grade;
                if (random < 0.8) {
                    grade = Math.floor(Math.random() * 3) + 3; // 3, 4 или 5
                } else {
                    grade = Math.floor(Math.random() * 2) + 2; // 2 или 3
                }
                students[i].grades.push(grade);
            }
        }
        
        // Переменные для отслеживания изменений
        let editedGrades = new Map(); // Для хранения измененных оценок
        let lastUpdated = new Date();
        
        // Функция для обновления времени последнего изменения
        function updateLastUpdated() {
            lastUpdated = new Date();
            const formattedTime = lastUpdated.toLocaleTimeString('ru-RU', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            document.getElementById('last-updated').textContent = formattedTime;
        }
        
        // Функция для обновления счетчика измененных оценок
        function updateEditedCount() {
            document.getElementById('edited-count').textContent = editedGrades.size;
        }
        
        // Функция для создания таблицы
        function createTable() {
            const tableHead = document.querySelector('#grades-table thead tr');
            const tableBody = document.querySelector('#grades-table tbody');
            const tableFoot = document.querySelector('#grades-table tfoot');
            
            // Создаем заголовки для предметов
            subjects.forEach(subject => {
                const th = document.createElement('th');
                th.textContent = subject;
                th.title = `Предмет: ${subject}`;
                tableHead.appendChild(th);
            });
            
            // Добавляем заголовок для среднего балла
            const avgTh = document.createElement('th');
            avgTh.textContent = 'Средний балл';
            tableHead.appendChild(avgTh);
            
            // Создаем строки для студентов
            students.forEach(student => {
                const tr = document.createElement('tr');
                
                // Ячейка с именем студента
                const nameTd = document.createElement('td');
                nameTd.className = 'student-col';
                
                const studentInfo = document.createElement('div');
                studentInfo.className = 'student-info';
                
                const avatar = document.createElement('div');
                avatar.className = 'student-avatar';
                avatar.textContent = student.name.charAt(0);
                
                const name = document.createElement('span');
                name.className = 'student-name';
                name.textContent = student.name;
                
                studentInfo.appendChild(avatar);
                studentInfo.appendChild(name);
                nameTd.appendChild(studentInfo);
                tr.appendChild(nameTd);
                
                // Ячейки с оценками
                let total = 0;
                student.grades.forEach((grade, index) => {
                    const td = document.createElement('td');
                    
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'grade';
                    input.value = grade;
                    input.maxLength = 1;
                    input.dataset.studentId = student.id;
                    input.dataset.subjectIndex = index;
                    
                    // Проверяем, была ли оценка изменена
                    const gradeKey = `${student.id}-${index}`;
                    if (editedGrades.has(gradeKey)) {
                        input.classList.add('edited');
                        input.value = editedGrades.get(gradeKey);
                    }
                    
                    // Обработчик изменения оценки
                    input.addEventListener('change', function() {
                        const newGrade = parseInt(this.value);
                        const studentId = parseInt(this.dataset.studentId);
                        const subjectIndex = parseInt(this.dataset.subjectIndex);
                        
                        if (isNaN(newGrade) || newGrade < 2 || newGrade > 5) {
                            alert('Оценка должна быть числом от 2 до 5');
                            this.value = students[studentId - 1].grades[subjectIndex];
                            this.classList.remove('edited');
                            
                            // Удаляем из измененных
                            editedGrades.delete(`${studentId}-${subjectIndex}`);
                            updateEditedCount();
                        } else {
                            // Сохраняем изменение
                            editedGrades.set(`${studentId}-${subjectIndex}`, newGrade);
                            this.classList.add('edited');
                            updateEditedCount();
                            updateLastUpdated();
                            
                            // Пересчитываем средний балл студента
                            calculateStudentAverage(studentId);
                        }
                    });
                    
                    // Ограничиваем ввод только цифрами
                    input.addEventListener('input', function() {
                        this.value = this.value.replace(/[^2-5]/g, '');
                    });
                    
                    td.appendChild(input);
                    tr.appendChild(td);
                    total += parseInt(input.value);
                });
                
                // Ячейка со средним баллом
                const avgTd = document.createElement('td');
                const avgDiv = document.createElement('div');
                avgDiv.className = 'average';
                avgDiv.id = `avg-${student.id}`;
                avgDiv.textContent = (total / subjects.length).toFixed(2);
                avgTd.appendChild(avgDiv);
                tr.appendChild(avgTd);
                
                tableBody.appendChild(tr);
            });
            
            // Создаем строку с средними по предметам
            const footTr = document.createElement('tr');
            const footLabelTd = document.createElement('td');
            footLabelTd.className = 'student-col';
            footLabelTd.innerHTML = '<strong>Средний по предмету</strong>';
            footTr.appendChild(footLabelTd);
            
            // Рассчитываем и выводим средние по предметам
            for (let i = 0; i < subjects.length; i++) {
                const td = document.createElement('td');
                const avgDiv = document.createElement('div');
                avgDiv.className = 'subject-average';
                avgDiv.id = `subject-avg-${i}`;
                
                let total = 0;
                students.forEach(student => {
                    const gradeKey = `${student.id}-${i}`;
                    total += editedGrades.has(gradeKey) ? 
                             parseInt(editedGrades.get(gradeKey)) : 
                             student.grades[i];
                });
                
                avgDiv.textContent = (total / students.length).toFixed(2);
                td.appendChild(avgDiv);
                footTr.appendChild(td);
            }
            
            // Пустая ячейка для выравнивания
            const emptyTd = document.createElement('td');
            footTr.appendChild(emptyTd);
            
            tableFoot.appendChild(footTr);
            
            // Устанавливаем счетчики
            document.getElementById('student-count').textContent = students.length;
            document.getElementById('subject-count').textContent = subjects.length;
            updateEditedCount();
            updateLastUpdated();
        }
        
        // Функция для расчета среднего балла студента
        function calculateStudentAverage(studentId) {
            const student = students[studentId - 1];
            let total = 0;
            
            for (let i = 0; i < subjects.length; i++) {
                const gradeKey = `${studentId}-${i}`;
                total += editedGrades.has(gradeKey) ? 
                         parseInt(editedGrades.get(gradeKey)) : 
                         student.grades[i];
            }
            
            const avgElement = document.getElementById(`avg-${studentId}`);
            avgElement.textContent = (total / subjects.length).toFixed(2);
            
            // Также обновляем средние по предметам
            calculateSubjectAverages();
        }
        
        // Функция для расчета средних по предметам
        function calculateSubjectAverages() {
            for (let i = 0; i < subjects.length; i++) {
                let total = 0;
                
                students.forEach(student => {
                    const gradeKey = `${student.id}-${i}`;
                    total += editedGrades.has(gradeKey) ? 
                             parseInt(editedGrades.get(gradeKey)) : 
                             student.grades[i];
                });
                
                const avgElement = document.getElementById(`subject-avg-${i}`);
                avgElement.textContent = (total / students.length).toFixed(2);
            }
        }
        
        // Функция сброса всех изменений
        function resetAllGrades() {
            if (editedGrades.size === 0) return;
            
            if (confirm('Вы уверены, что хотите сбросить все изменения оценок?')) {
                editedGrades.clear();
                
                // Обновляем отображение оценок
                students.forEach(student => {
                    for (let i = 0; i < subjects.length; i++) {
                        const input = document.querySelector(`input[data-student-id="${student.id}"][data-subject-index="${i}"]`);
                        input.value = student.grades[i];
                        input.classList.remove('edited');
                    }
                    
                    // Пересчитываем средний балл
                    calculateStudentAverage(student.id);
                });
                
                updateEditedCount();
                updateLastUpdated();
                alert('Все изменения сброшены!');
            }
        }
        
        // Функция для пересчета всех средних значений
        function calculateAllAverages() {
            // Пересчитываем средние для всех студентов
            students.forEach(student => {
                calculateStudentAverage(student.id);
            });
            
            // Пересчитываем средние по предметам
            calculateSubjectAverages();
            
            alert('Все средние значения пересчитаны!');
        }
        
        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            createTable();
            
            // Назначаем обработчики для кнопок
            document.getElementById('reset-btn').addEventListener('click', resetAllGrades);
            document.getElementById('calculate-btn').addEventListener('click', calculateAllAverages);
            
            // Добавляем инструкцию
            console.log('Инструкция:');
            console.log('1. Нажмите на любую оценку для редактирования');
            console.log('2. Введите новую оценку от 2 до 5');
            console.log('3. Нажмите Enter или кликните вне поля для сохранения');
            console.log('4. Используйте кнопку "Сбросить" для отмены всех изменений');
            console.log('5. Используйте кнопку "Рассчитать средние" для пересчета всех средних значений');
        });