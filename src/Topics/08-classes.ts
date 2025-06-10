
export class Person {
    constructor(
        public name: string,
        private address: string = 'No address',
    )
    {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York');
//     }
// }

export class Hero{
    public person: Person;
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
    }
}

// const ironman = new Person('Luis', 'TGZ');
const tony = new Person('Tony', 'New York')
const ironman = new Hero('Ironman', 45.0, 'Tony',tony)
console.log(ironman)