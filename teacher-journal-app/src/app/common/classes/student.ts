export class Student {
    constructor (
        public _id: number,
        public name: {
            first: string,
            last: string,
        },
        public address: string,
        public description: string
    ) { }
}
