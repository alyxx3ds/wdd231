document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
    displayCourses('all');
});

const courses = [
    { code: 'WDD230', name: 'Web Development', completed: true },
    { code: 'CSE121', name: 'Introduction to Programming', completed: false },
    { code: 'WDD331', name: 'Advanced CSS', completed: true },
    { code: 'CSE122', name: 'Data Structures', completed: false }
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