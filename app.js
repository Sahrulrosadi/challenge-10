import express  from "express"
import dotenv from 'dotenv'
import quizRoute from "./routes/quiz.route.js"
const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.json({msg:'hello quiz'}))
app.use('/quiz', quizRoute)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
    
})
