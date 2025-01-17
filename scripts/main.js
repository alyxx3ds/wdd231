document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
    displayCourses('all');
});

const courses = [
    { code: 'CSE 110', name: 'Intro to Programming', completed: true },
    { code: 'WDD 130', name: 'Web Fundamentals', completed: true },
    { code: 'CSE 111', name: 'Programming with Functions', completed: true },
    { code: 'CSE 210', name: 'Programming with Classes', completed: true },
    { code: 'WDD 131', name: 'Dynamic Web Fundamentals', completed: true },
    { code: 'WDD 231', name: 'Web Frontend Development I', completed: false }
];

function displayCourses(filter) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    const filteredCourses = courses.filter(course => filter === 'all' || course.code.startsWith(filter));

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.textContent = `${course.code} - ${course.name}`;
        if (course.completed) {
            courseElement.classList.add('completed');
        }
        courseList.appendChild(courseElement);
    });
}

function filterCourses(filter) {
    displayCourses(filter);
}

// Initialize with all courses
displayCourses('all');
