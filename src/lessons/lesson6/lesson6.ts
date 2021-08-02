console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string
    surname: string
    groupNumber: number
    progress: number[]
    averageMark: number
}

class Student implements IStudent {
    name: string
    surname: string
    groupNumber: number
    progress: number[]
    averageMark: number

    constructor(name: string,
                surname: string,
                groupNumber: number,
                progress: number[]) {
        this.name = name
        this.surname = surname
        this.groupNumber = groupNumber
        this.progress = progress
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark / this.progress.length)
    }

    private static sortStudent(s1: IStudent, s2: IStudent) {
        if (s1.averageMark > s2.averageMark) {
            return 1
        } else if (s1.averageMark < s2.averageMark) {
            return -1
        } else {
            return 0
        }
    }

    static sort(arr: Array<IStudent>) {
        const temp = [...arr]
        return temp.sort(this.sortStudent)
    }

    private static isAllMarksEqual(marks: number[], mark: number) {
        return marks.every(mk => mk === mark)
    }

    private static filterStudent(arr: Array<IStudent>) {
        const result: Array<IStudent> = []
        arr.forEach(s => {
            if (this.isAllMarksEqual(s.progress, 4) || this.isAllMarksEqual(s.progress, 5)) {
                result.push(s)
            }
        })
        return result
    }

    static printGoodStudent(arr: Array<IStudent>) {
        this.filterStudent(arr).forEach(s => {
            console.log(`Student - ${s.surname}, Group - ${s.groupNumber}`)
        })
    }
}

let students = []
students.push(new Student('Jeka', 'Plugarev', 1, [4, 4, 4, 4]))
students.push(new Student('Katy', 'Plugareva', 2, [5, 3, 5, 4]))
students.push(new Student('Mila', 'Plugareva', 3, [5, 5, 5, 5]))

console.log(students)
console.log(Student.sort(students))
Student.printGoodStudent(students)


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class Test {
    param1: string
    param2: string

    constructor(param1: string = 'Hello', param2: string = 'Bye') {
        this.param1 = param1
        this.param2 = param2
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};