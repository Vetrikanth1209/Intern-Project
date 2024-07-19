const { default: mongoose } = require('mongoose')
const uri = 'mongodb+srv://vetrikanth:vetree1209@cluster0.vf6xd7d.mongodb.net/assignment?retryWrites=true&w=majority&appName=Cluster0';  // Replace with your MongoDB connection string
mongoose.connect(uri, console.log("Connected to DB"));