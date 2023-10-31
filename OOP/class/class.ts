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

// sub class

class Client extends Person {
  phone: string;

  constructor(name: string, email: string, phone: string, birthday: string) {
    super(name, email, birthday);

    this.phone = phone;
  }
  show() {
    return super.introduce();
  }
}

const lsj2 = new Client("lsj", "lsj02022@gmail.com", "2-2-06", "서울");
lsj.introduce();

// lsj2가 실행되는 순서
// 1. client 객체에 client.introduce가 있는지 확인
// 2. 없기 때문에 Client.prototype에 있는지 확인 -> 하지만 없음
// 3. extends를 통해 관계가 만들어진 Client.prototype의 프로토타입인 Person.prototype에 메서드가 있는지 확인함 -> 여기에는 존재함
