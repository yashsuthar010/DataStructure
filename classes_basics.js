class Student {
  constructor(firstname, lastname, year = 3) {
    this.first = firstname;
    this.last = lastname;
    this.grade = year;
    this.tardies = 0;
  }

  fullName() {
    return `your full name is ${this.first} ${this.last} in grade ${this.grade}`;
  }

  lateStudent() {
    this.tardies += 1;
    if (this.tardies >= 1) {
      return `GET YOUR ASS OUT OF SCHOOL`;
    }
    return `${this.first} ${this.last} is late for ${this.tardies} times`;
  }
}

let firstStudent = new Student("yash", "suthar");
let secondStudent = new Student("rahul", "suthar");

console.log(firstStudent.fullName());
console.log(secondStudent.lateStudent());
