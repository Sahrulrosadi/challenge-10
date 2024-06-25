import { Router } from "express";
import { create, findAll, findOne, update, createAnswers, destroy} from "../controllers/quiz.controller.js";
import authJwt from "../middlewares/authJwt.js";
const quizRoute = Router()


quizRoute.use(authJwt)
quizRoute.get('/get', findAll)
quizRoute.get('/get/:id', findOne)
quizRoute.post('/post', create)
quizRoute.post('/post/answer', createAnswers)
quizRoute.put('/put/:id', update)
quizRoute.delete('/delete/:id', destroy)

export default quizRoute