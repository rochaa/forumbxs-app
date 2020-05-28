import { AnswerModel } from '../answers/answer.model';

export class QuestionModel {
    constructor(
        public id: string,
        public text: string,
        public user: string,
        public creationDate: Date,
        public likes: number,
        public answers: AnswerModel[]) { }
}