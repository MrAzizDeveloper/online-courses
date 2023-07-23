import {Router} from 'express';



const router = Router()

router.get('/', (req,res)=>{
  console.log(res)
  res.render('index', {
    title:'Mraziz||Courses',
    token: false,
  })
})


router.get('/course', (req,res)=>{
  res.render('course', {
    title:'Course',
    isCourses: true,    
  })

})
router.get('/teacher', (req,res)=>{
  res.render('teacher',{
    title:'Teachers',
    isTeacher:true,
  })
  

})

export default router