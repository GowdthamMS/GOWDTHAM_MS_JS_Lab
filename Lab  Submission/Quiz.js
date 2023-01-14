//Quiz
questions;
score;
questionIndex;
//isEnded
getQuestionByIndex;
checkOptionWithAnswer;
//Question
questionText;
answer;
choices;
//isCorrectAnswer
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}
Quiz.prototype.isEnded = function () {
    return;
};
Quiz.prototype.getQuestionByIndex = function () {
    return;
};
Quiz.prototype.checkOptionWithAnswer = function (userAnswer) {
};
function Question(questionText, choices, answer) {
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function (userAnswer) {
    return this.answer === userAnswer;
};
question1 = new Question("who is father of computer", ["1", "2"], "1");
question1.isCorrectAnswer("2");
