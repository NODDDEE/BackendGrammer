class Person {
  name: string;
  email: string;
  birthday: string;

  constructor(name: string, email: string, birthday: string) {
    this.name = name;
    this.email = email;
    this.birthday = birthday;
  }

  introduce() {
    return `이름: ${this.name}, 이메일: ${this.email}, 생일: ${this.birthday}`;
  }

  static multipleNumbers = (x: number, y: number) => {
    return x * y;
  }; // Person.multipleNumbers(1, 2); Prototype
}

const lsj = new Person("lsj", "lsj02021@gmail.com", "2-2-06");

console.log(lsj.introduce());
