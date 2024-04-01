import sql from "./connection2.js";

const Quiz = function(question){
    this.pertanyaan = question.pertanyaan
}

Quiz.create = (newQuiz, result) => {
    sql.query ("INSERT INTO questions SET ? ", newQuiz, (err, res) => {
        if(err) result(err, null)
        result(null, {id: res.insertId, newQuiz})
    })
}

Quiz.getAll =(result) => {
    sql.query("SELECT q.id, q.pertanyaan, a.answer FROM questions q JOIN answers a ON q.id = a.id_questions",(err, res) => {
        if(err) result(err, null)
        result(null, res)
    })
}


Quiz.findById = (id, result) => {
    sql.query(`SELECT * FROM questions WHERE id = ${id}`, (err, res)=> {
        if(err) {
            result(err, null)
            return
        }

        // jika data ditemukan
        if(res.length) {
            result(null, res[0])
            return
        }
        // jika kosong
        result({type: 'not_found'}, null)
    } )
}

Quiz.update = (id, data, result) => {
    sql.query(" UPDATE questions SET pertanyaan = ?  WHERE id = ?", 
        [data.pertanyaan, id], (err, res) =>{
            if(err) {
                result(err, null)
                return
            }

            if(res.affectedRows === 0){
                result({type: 'not_found'}, null)
                return
            }

            result(null, {id: id, data})

        })
}


Quiz.delete = (id, result) =>{
    sql.query(" DELETE FROM questions WHERE id = ?", id, (err, res) => {
        if(err) {
            result(err, null)
            return
        }

        if(res.affectedRows === 0){
            result({type: 'not_found'}, null)
            return
        }

        result(null, res)

    })
}

export default Quiz 