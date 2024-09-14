import express from 'express';
import cors from 'cors'
import signin from './routes/signin'
import signup from './routes/signup'
import authentication from './routes/authentication'
import aplainpage from './routes/aplainpage/aplainpage'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Server is up! Hare Krishna!" })
});

app.use('/signin', signin)
app.use('/signup', signup)
app.use('/authentication', authentication)
app.use('/aplainpage', aplainpage)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});