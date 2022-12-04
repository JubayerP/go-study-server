const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');
const skills = require('./data/skills.json')


app.get('/', (req, res) => {
    res.send('GoStudy is Running');
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const singleCourse = courses.find(course => course.id === id);
    res.send(singleCourse);
})

app.get('/skills', (req, res) => {
    res.send(skills)
})

app.listen(port, () => {
    console.log(`Go study is serving on ${port}`);
})