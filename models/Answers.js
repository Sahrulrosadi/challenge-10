import sql from "./connection2.js";

const Answers = function(jawaban){
    this.answer = jawaban.answer,
    this.id_questions = jawaban.id_questions
}

Answers.createAnswers =(newAnswers, result) => {
    sql.query ("INSERT INTO answers SET ?",  newAnswers, (err, res) => {
        if(err) result(err, null)
        result(null, newAnswers)
    })
}

export default Answers