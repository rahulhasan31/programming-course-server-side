const express= require('express')
const app= express()
const cors= require('cors')

app.use(cors())
const port= process.env.PORT||5000

const categories= require('./Data/category.json')
const courses=require('./Data/CoursesDetails.json')

app.get('/', (req, res)=>{
    res.send('server running sei')
})

app.get('/categories', (req, res)=>{
   res.send(categories);
})

app.get('/category/:id', (req, res)=>{
    const id=req.params.id
    const categoryId=courses.filter(c=>c.course_id===id)
    res.send(categoryId)
})


app.get('/course/:id', (req, res)=>{
    const id= req.params.id
    const course=courses.find(c=>c._id === id)
    res.send(course)
})


app.get('/course', (req, res)=>{
    res.send(courses)
})


app.listen(port, ()=>{
  console.log('server coltese ',  port);
})