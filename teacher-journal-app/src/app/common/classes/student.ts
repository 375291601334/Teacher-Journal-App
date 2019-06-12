export class Student {
    constructor (
        public id: number,
        public name: {
            first: string,
            last: string,
        },
        public address: string,
        public description: string,
        //public averageBall?: number,
    ){}
}
