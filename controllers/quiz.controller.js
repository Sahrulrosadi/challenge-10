import Quiz from "../models/Quiz.js"
import Answers from "../models/Answers.js"


export const create = (req, res) => {
    const newQuiz = new Quiz({
        pertanyaan: req.body.pertanyaan
    })

    Quiz.create(newQuiz, (err, data) => {
        if(err) res.status(500).send({msg:"Exist some error"})
        res.send(data)
    })
}

export const createAnswers = (req, res) => {
    const newAnswers = new Answers({
        answer: req.body.answer,
        id_questions: req.body.id_questions
    })

    Answers.createAnswers(newAnswers, (err, data) => {
        if(err) res.status(500).send({msg:"Exist some error"})
        res.send(data)
    })
}

export const findAll = (req, res) => {
    Quiz.getAll((err, data) => {
        if(err) res.status(500).send({msg: "exist some error"})
        res.send(data)
    })
}

export const findOne = (req, res)=>{
    Quiz.findById(req.params.id, (err, data)=>{
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found student with id : ${req.params.id}`
                })
                return
            }else{
                res.status(500).send({msg:"exist some error"})
            }
        }else{
            res.send(data)
        }
          
    })
}


export const update = (req, res) =>{
    const quizData = new Quiz(req.body)
    Quiz.update(req.params.id, quizData, (err, data) => {
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found question with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg:"exist some error"})
            }
        } else {
            res.send(data)
        }
    })
 }


export const destroy = (req, res) => {
    Quiz.delete(req.params.id, (err, data) =>{
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found question with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg:"exist some error"})
            }
        } else {
            res.send({msg: "success delete question"})
        }
    
    })
}