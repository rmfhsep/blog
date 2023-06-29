## Abstract class (추상 클래스)
추상 클래스는 이름과 같이 추상적이기 때문에 직접적인 사용은 불가하다.
대신 사용하고자 하는 class에서 추상클래스를 상속받아서 사용이 가능하다.
그리고 추상 클래스는 객체 인스턴스화할 수 없다는 것을 알고 있다는 전제하에 사용한다.

### 프로퍼티 구현 방법
추상클래스도 기존 클래스와 동일하게 프로퍼티와 메소드가 존재하고 클래스에서 추상클래스를 상속받아와서 그 클래스에서 구현할 수 있다.

```ts
abstract class Animal {
  private _age: number;
  
  constructor (theAge: number) {
    this._age = theAge;
  }
  
  get age() {
    return this._age;
  }
  
  set age(theAge: number) {
    this._age = theAge;
  }
}
```
추상 클래스는 객체로 생성할 수 없다. 그렇기 때문에 동물이 포함되는 Dog와 Cat 클래스를 구현한다. 추상 클래스인 Animal 클래스를 구체 클래스에 extends 키워드를 사용하여 상속한다.

```ts
class Dog extends Animal {
  constructor(theAge: number) {
    super(theAge);
  }
}

class Cat extends Animal {
  constructor(theAge: number) {
    super(theAge);
  }
}
```

Dog와 Cat은 abstract 키워드가 없는 구체 클래스이므로 객체를 생성할 수 있다.
```ts
const dog: Dog = new Dog(5);
const cat: Cat = new Cat(3);

console.log(`Dog Age: ${dog.age}`); 
// Dog Age: 5

console.log(`Cat Age: ${cat.age}`); 
// Cat Age: 3
```

Dog와 Cat 객체에는 추상 클래스 Animal의 모든 속성과 함수가 존재하므로 Animal 클래스의 속성과 함수를 호출 할 수 있다.

## 추상 함수
추상 클래스에서는 abstract 키워드를 사용하여 추상 함수를 정의할 수 있다. 추상 함수는 추상 클래스와 연결되는 모든 구체 클래스에서 정의해야 한다.

```ts
abstract class Animal {
  private _age: number;
  
  constructor (theAge: number) {
    this._age = theAge;
  }
  
  get age() {
    return this._age;
  }
  
  set age(theAge: number) {
    this._age = theAge;
  }
  
  // 추상 함수
  public abstract makeSound(): void;
}
```

추상 함수는 구현이 존재하지 않으며, 구체 클래스에서 구현한다. 
함수의 이름 그리고 반환 타입과 매개 변수만 추상 클래스에서 정의한다.
```ts
class Dog extends Animal {
  constructor(theAge: number) {
    super(theAge);
  }

  makeSound(): void {
    console.log('멍');
  }
}

class Cat extends Animal {
  constructor(theAge: number) {
    super(theAge);
  }

  makeSound(): void {
    console.log('야옹');
  }
}

const dog: Dog = new Dog(5);
const cat: Cat = new Cat(3);

dog.makeSound(); // 멍
cat.makeSound(); // 야옹
```


