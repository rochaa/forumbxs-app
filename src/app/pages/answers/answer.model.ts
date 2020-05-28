export class AnswerModel {
    constructor(
        public id: string,
        public text: string,
        public user: string,
        public creationDate: Date,
        public questionId: string,
    ) { }
}