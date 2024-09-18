function fetchStudentInfo() {
    const studentId = document.getElementById('studentId').value;

    if (studentId.length !== 10) {
        alert('Please enter a 10-digit Student ID.');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'students.xml', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            const student = xml.querySelector(`student[id="${studentId}"]`);
           
            if (student) {
                const name = student.querySelector('name').textContent;
                const email = student.querySelector('email').textContent;
                const address = student.querySelector('address').textContent;
                const contact = student.querySelector('contact').textContent; // Fetch the contact number

                document.getElementById('studentData').innerHTML = `
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${address}</td>
                    <td>${contact}</td>
                `;
            } else {
                document.getElementById('studentData').innerHTML = '<td colspan="4">Student Not Found</td>';
            }
        }
    };
    xhr.send();
}