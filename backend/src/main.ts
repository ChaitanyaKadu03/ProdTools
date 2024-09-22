import express from 'express';
import cors from 'cors'
import signin from './routes/signin'
import signup from './routes/signup'
import authentication from './routes/authentication'
import aplainpage from './routes/aplainpage/aplainpage'
import taskFlow from './routes/taskFlow/taskFlow'
import httpTracer from './routes/httpTracer/httpTracer'
import httpTracerData from './routes/httpTracer/httpTracerData'

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
app.use('/taskflow', taskFlow)
app.use('/httptracer/gethttp', httpTracer)
app.use('/httptracer/data', httpTracerData)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});