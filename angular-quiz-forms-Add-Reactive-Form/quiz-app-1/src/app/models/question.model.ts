export interface Question {
    id: number;
    categoryId: number;
    questionText: string;
    options: string[];
    correctAnswer: string;
}