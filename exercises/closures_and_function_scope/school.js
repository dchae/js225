"use strict";

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    getCourse(code) {
      return this.courses.find((course) => course.code === code);
    },
    addNote(code, note) {
      let course = this.getCourse(code);
      if (course) {
        course.note ??= "";
        if (course.note.length) course.note += "; ";
        course.note += note;
      }
    },
    updateNote(code, note) {
      let course = this.getCourse(code);
      if (course) course.note = note;
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) console.log([course.name, course.note].join(": "));
      });
    },
  };
}

let school = (function createSchool() {
  const students = [];
  const VALIDYEARS = ["1st", "2nd", "3rd", "4th", "5th"];

  return {
    addStudent(name, year) {
      if (VALIDYEARS.includes(year)) {
        let newStudent = createStudent(name, year);
        students.push(newStudent);
        return newStudent;
      }
      console.log("Invalid Year");
    },

    enrollStudent(student, name, code) {
      student.addCourse({ name, code });
    },

    addGrade(student, code, grade) {
      student.getCourse(code).grade = grade;
    },

    getReportCard(student) {
      student.listCourses().forEach((course) => {
        console.log(`${course.name}: ${course.grade ?? "In progress"}`);
      });
    },

    courseReport(courseName) {
      let count = 0;
      let total = 0;

      students.forEach((student) => {
        let grade = student
          .listCourses()
          .find((course) => course.name === courseName)?.grade;
        if (grade === undefined) return;
        console.log(`${student.name}: ${grade}`);

        total += grade;
        count++;
      });

      if (!count) return;

      console.log(`=${courseName} Grades=`);
      console.log(`---`);
      console.log(`Course Average: ${total / count}`);
    },
  };
})();

let paul = school.addStudent("Paul", "3rd");
school.enrollStudent(paul, "Math", 101);
school.addGrade(paul, 101, 95);
school.enrollStudent(paul, "Advanced Math", 102);
school.addGrade(paul, 102, 90);
school.enrollStudent(paul, "Physics", 202);

console.log(paul);
// {
//   name: 'paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

let mary = school.addStudent("Mary", "1st");
school.enrollStudent(mary, "Math", 101);
school.addGrade(mary, 101, 91);

console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

let kim = school.addStudent("Kim", "2nd");
school.enrollStudent(kim, "Math", 101);
school.addGrade(kim, 101, 93);
school.enrollStudent(kim, "Advanced Math", 102);
school.addGrade(kim, 102, 90);

console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard(paul);
school.courseReport("Math");
school.courseReport("Advanced Math");
school.courseReport("Physics");
