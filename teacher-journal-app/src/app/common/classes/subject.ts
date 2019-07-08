export class Subject {
    constructor (
        public _id: number,
        public name: string,
        public teacher: string,
        public cabiner: number,
        public description: string,
        public marks: Marks[]
    ) {}
}

export class Marks {
    constructor (
        public date: string,
        public studentsMarks: number[]
    ) {}
}
