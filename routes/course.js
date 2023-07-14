import {Router} from 'express';
import path from 'path'
// import Course from '../models/Courses.js';
import fs from 'fs' 
const router = Router()

// const user = []

router.get('/', (req,res)=>{
  console.log(res)
  res.render('index', {
    title:'Mraziz||Courses',
    token: false,
  })
})

// router.post('/', (req,res)=>{
//   user.push({firstname: req.body.firstname, lastname: req.body.lastname})
//   console.log(user);
//   res.redirect('/')
// })
router.get('/course', (req,res)=>{
  res.render('course', {
    title:'Course',
    isCourses: true,    
  })

})

// router.get('/video', (req,res)=>{
//   res.sendFile(path.join(__dirname, '..', '/views/video.hbs'))
  
//     // // Ensure there is a range given for the video
//     // const range = req.headers.range;
//     // if (!range) {
//     //   res.status(400).send("Requires Range header");
//     // }
  
//     // // get video stats (about 11MB)
//     // const videoPath = "Aerial Shot of a Lighthouse.mp4";
//     // const videoSize = fs.statSync(videoPath).size;
//     // console.log(videoSize)
  
//     // // Parse Range
//     // // Example: 'bytes=6750208-'
//     // const CHUNK_SIZE = 5 * 10 ** 5; // ~500 KB => 500000 Bytes
//     // const start = Number(range.replace(/\D/g, ""));// 'bytes=6750208-' => 6750208
//     // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
//     // console.log(start,end);
  
//     // // Create headers
//     // const contentLength = end - start + 1;
//     // const headers = {
//     //   "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//     //   "Accept-Ranges": "bytes",
//     //   "Content-Length": contentLength,
//     //   "Content-Type": "video/mp4",
//     // };
  
//     // // HTTP Status 206 for Partial Content
//     // res.writeHead(206, headers);
  
//     // // create video read stream for this particular chunk
//     // const videoStream = fs.createReadStream(videoPath, { start, end });
  
//     // // Stream the video chunk to the client
//     // videoStream.pipe(res);




// })
router.get('/teacher', (req,res)=>{
  res.render('teacher',{
    title:'Teachers',
    isTeacher:true,
  })
  

})

export default router