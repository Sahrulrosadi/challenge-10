import express  from "express"
import dotenv from 'dotenv'
import quizRoute from "./routes/quiz.route.js"
import connection from "./models/connection2.js"
import authRoute from "./routes/auth.route.js"
import loggingMiddleware from "./middlewares/loggingMiddleware.js"
import errorHandler from "./middlewares/errorHandler.js"


const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(loggingMiddleware)
app.get('/', (req, res) => res.json({msg:'hello quiz'}))
app.use('/quiz', quizRoute)
app.use('/auth', authRoute)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`) 
})
// connection.getConnection((err)=>{
//     if(err){
//         console.log('Error Connecting to database : ', err)
//     } else {
//         console.log('Connection to database success');
//     }
// })
