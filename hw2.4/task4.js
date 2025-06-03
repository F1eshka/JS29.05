let audiences = [
    { name: "Ауд. 101", seats: 15, faculty: "Фізика" },
    { name: "Ауд. 203", seats: 18, faculty: "Математика" },
    { name: "Ауд. 305", seats: 12, faculty: "Інформатика" },
    { name: "Ауд. 202", seats: 20, faculty: "Фізика" },
    { name: "Ауд. 404", seats: 10, faculty: "Математика" }
];

function showAllAudiences() {
    console.log("Усі аудиторії:");
    audiences.forEach(a => {
        console.log(`${a.name} — ${a.seats} місць, факультет: ${a.faculty}`);
    });
}

function showAudiencesByFaculty(facultyName) {
    console.log(`\nАудиторії для факультету "${facultyName}":`);
    audiences
        .filter(a => a.faculty.toLowerCase() === facultyName.toLowerCase())
        .forEach(a => {
            console.log(`${a.name} — ${a.seats} місць`);
        });
}

function showSuitableAudiencesForGroup(group) {
    console.log(`\nАудиторії для групи "${group.name}" (${group.students} студентів, факультет: ${group.faculty}):`);
    audiences
        .filter(a =>
            a.faculty.toLowerCase() === group.faculty.toLowerCase() &&
            a.seats >= group.students
        )
        .forEach(a => {
            console.log(`${a.name} — ${a.seats} місць`);
        });
}

function sortAudiencesBySeats() {
    audiences.sort((a, b) => a.seats - b.seats);
}

function sortAudiencesByName() {
    audiences.sort((a, b) => a.name.localeCompare(b.name));
}
