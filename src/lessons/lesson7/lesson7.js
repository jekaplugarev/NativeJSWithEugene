console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    constructor(name = 'Animal') {
        this.name = name
    }
    walk () {
        `${this.name} walking`
    }
    eat () {
        `${this.name} eating`
    }
    sleep () {
        `${this.name} sleeping`
    }
}

let dog = new Animal('Dog')

dog.eat()

// function Animal(name = 'Animal') {
//     this.name = name
// }
//
// Animal.prototype = {
//     constructor: Animal,
//     walk () {
//         `${this.name} walking`
//     },
//     eat () {
//         `${this.name} eating`
//     },
//     sleep () {
//         `${this.name} sleeping`
//     }
// }


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {
    constructor(name = 'Monkey') {
        super(name)
    }
    roar () {
        `${this.name} roar`
    }
    climb () {
        `${this.name} climb`
    }
}

let monkey = new Monkey()

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    constructor(name = 'Human') {
        super(name)
    }
    speak () {
        `${this.name} speak`
    }
    think () {
        `${this.name} think`
    }
}

let human = new Human()

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

function Animal2(name = 'Animal') {
    this.name = name
}

Animal2.prototype = {
    constructor: Animal2,
    walk () {
        `${this.name} walking`
    },
    eat () {
        `${this.name} eating`
    },
    sleep () {
        `${this.name} sleeping`
    }
}

function Monkey2(name = 'Monkey') {
    return new Animal2(name)
}

Monkey2.prototype = {
    constructor: Monkey2,
    walk () {
        `${this.name} walking`
    },
    roar () {
        `${this.name} roar`
    },
    climb () {
        `${this.name} climb`
    }
}

// Task 05
// Используя метод Apply реализовать свой собственный метод bind

Function.prototype.customBind = function (ctx, ...args) {
    const self = this
    return function (...args2) {
        return self.apply(ctx, [...args, ...args2])
    }
}

Function.prototype.customBind2 = function (ctx, ...args) {
    ctx._temp = this
    return function (...args2) {
        return ctx._temp(...args, ...args2)
    }
}

let obj = {
    name: 'Evgen',
    sayName() {
        console.log(this.name)
    }
}

let obj2 = {
    name: 'Vlad',
}

obj.sayName.customBind(obj2)


// just a plug
export default () => {
};