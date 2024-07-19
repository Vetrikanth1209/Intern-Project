require("./db")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Resource = require('./resource')
const Course = require('./course')
const Acc = require('./acc')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



////////////////////////////////////////////////////////////
app.post('/signup',async(req,res)=>{
    const newUser = new Acc(req.body)
    await newUser.save()
    res.json({"message":`${newUser} has been created `})
})


app.post('/signin',async(req,res)=>{
   try{
     const user = req.body.username
    const pass = req.body.password
    const preuser = await Acc.findOne({'$and':[{"username":{'$eq':user}},{"password":{'$eq':pass}}]})
    if(preuser){
        const cred = {
            "username":user,
            "password":pass
        }
        res.json(cred)
    }
    else{
        response.json({"message":"error"})
    }
   }catch(err){
    res.status(500).json({"error":err})
   }
})

/////////////////////////////////////////////////////////
app.post('/addresource',async(req,res)=>{
    const resource = new Resource(req.body)
    await resource.save()
    res.json({"Inserted data":resource})
})

app.get('/getallresource',async(req,res)=>{
    const all = await Resource.find()
    res.json({"details":all})
})

////////////////////////////////////////////////////////

app.post('/addcourse',async(req,res)=>{
    const resource = new Course(req.body)
    await resource.save()
    res.json({"Inserted data":resource})
})

app.get('/getallcourse',async(req,res)=>{
    const courses = await Course.find({}, 'coursename courseId'); 
    res.json(courses)
})


/////////////////////////////////////////////////////////

app.post('/fetchresourcebycourse', async (req, res) => {
    const { coursename } = req.body;
    try {
        const courses = await Course.find({ coursename: coursename });
        const courseIds = courses.map(course => course.courseId);
        const resources = await Resource.find({ courseId: { $in: courseIds } });
        const uniqueResourceNames = ((resources.map(resource => resource.resourceName)));
        res.status(200).json({ resourceNames: uniqueResourceNames });
    } catch (error) {
        console.error('Error fetching resource names:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.post('/fetchcoursebyexpert', async (req, res) => {
    const { courseExpert } = req.body;

    try {
        const courses = await Course.find({ courseExpert: courseExpert });
        const courseNames = courses.map(course => course.coursename); // Assuming 'coursename' is the field in your Course model
        res.status(200).json({ coursenames: courseNames });
    } catch (error) {
        console.error('Error fetching course expert:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.post('/fetchresourcebydate', async (req, res) => {
    const { enrolledDate } = req.body;
    try {
        const resourcesByDate = await Resource.find({ enrolledDate: enrolledDate });
        const resourceNames = resourcesByDate.map(resource => resource.resourceName);
        const uniqueResources = await Resource.find({ resourceName: { $in: resourceNames } });
        const uniqueResourceNames = ((uniqueResources.map(resource => resource.resourceName)));
        res.status(200).json({ resourceNames: uniqueResourceNames });
    } catch (error) {
        console.error('Error fetching resource names:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


//////////////////////////////////////////////////////////////////////////////////
app.listen(1234,()=>{
    console.log("Back end running at 1234")
})