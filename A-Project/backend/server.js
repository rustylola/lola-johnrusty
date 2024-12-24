import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import "dotenv/config";
const app = express();

let jobs = [
    {id:nanoid(), company:'apple', position:'front-end'},
    {id:nanoid(), company:'google', position:'back-end'},
]

if(process.env.NODE_ENV === 'DEVELOPMENT'){
    app.use(morgan("dev"));
}

app.use(express.json());

app.post('/', (req,res) => {
    console.log(req);
    res.json({message: 'data received ', data: req.body});
});

app.get('/', (req,res) => {
    res.send('Hello world');
});

// GET ALL JOBS
app.get('/api/jobs', (req,res) => {
    res.status(200).json({jobs});
});

// CREATE JOB
app.post('/api/jobs', (req,res) => {
    const {company, position} = req.body;
    console.log(req);
    if(!company || !position) {
        return res.status(400).json({message:"Bad Request, please check your data..."});
    }
    const id = nanoid(10);
    const job = {id, company, position};
    jobs.push(job);
    res.status(201).json({job});
});

// GET SINGLE JOB
app.get('/api/jobs/:id', (req, res) => {
    const {id} = req.params;
    const job = jobs.find((job) => job.id === id);
    if(!job) {
        return res.status(404).json({message: 'Job Not exist'})
    }
    res.status(201).json({job});
});

// EDIT JOB
app.patch('/api/jobs/:id', (req, res) => {
    const {company, position} = req.body;
    console.log(req);
    if(!company || !position) {
        return res.status(400).json({message:"Bad Request, please check your data..."});
    }
    const {id} = req.params;
    const job = jobs.find((job) => job.id === id);
    if(!job) {
        return res.status(404).json({message: 'Job Not exist'})
    }
    job.company = company;
    job.position = position;

    res.status(201).json({message: "Job Modified successful.",job});
});

// DELETE JOB
app.delete('/api/jobs/:id', (req, res) => {
    const {id} = req.params;
    const job = jobs.find((job) => job.id === id);
    if(!job) {
        return res.status(404).json({message: 'Job Not exist'})
    }
    const newJobs = jobs.filter((job) => job.id !== id );
    jobs = newJobs;
    res.status(201).json({message: "Job Delete.",jobs});
});

// Resource not found middleware
app.use('*', (req,res) =>{
    res.status(404).json({message: "Not Found"});
});

// Error Middleware
app.use((err,req,res, next) =>{
    console.log(err)
    res.status(500).json({message: "Something went wrong."});
});

const port = process.env.PORT || 510

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port} ...`);
})