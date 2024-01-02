// // const express = require('express')
// // const app=express()

// // const dbconfig = require('./db')
// // const roomsRouter=require('./routes/roomsRouter')

// // app.use(express.json()) // we receive parameter from the body. get room id from frontend when we click booknow

// // app.use('/api/rooms', roomsRouter)

// // const port=process.env.PORT || 5000;
// // app.listen(port, ()=>console.log('Hello server'));



// const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 5000;
// const dbconfig = require('./db')
// app.use(express.json());

// app.use(cors());
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });
// const roomsRoute = require("./routes/roomsRoute")
// const User = mongoose.model('User', userSchema);
// app.use('/api/rooms',roomsRoute)

// app.post('/api/user/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   const newUser = new User({ name, email, password });

//   try {
//     await newUser.save();
//     res.status(200).send('User registered successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.post('/api/user/login', async (req, res) => {
//   const { email, password } = req.body;
//   console.log('Received login request:', email, password); 

//   try {
//     const user = await User.findOne({ email, password });
//     console.log('User found:', user);

//     if (user) {
//       res.status(200).send('Login successful');
//     } else {
//       res.status(400).send('Login failed');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const dbconfig = require('./db')
const bookingsRoute=require('./routes/bookingsRoute')
app.use(express.json());
const roomsRoute = require("./routes/roomsRouter")

app.use(cors());
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);
app.use('/api/rooms',roomsRoute)
app.post('/api/user/register', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.status(200).send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', email, password); 

  try {
    const user = await User.findOne({ email, password });
    console.log('User found:', user);

    if (user) {
      res.status(200).send('Login successful');
    } else {
      res.status(400).send('Login failed');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});