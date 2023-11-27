const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// MongoDB connection
mongoose.connect('mongodb+srv://shreyansh:1234@savingsapp.sehtrvf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Answer schema and model
const answerSchema = new mongoose.Schema({
//   Question  
  responses: {type: String},
}); 
const Answer = mongoose.model('Answer', answerSchema);

// Route to store answers
app.post('/api/store-answers', async (req, res) => {
  try {
    const answers = req.body['answersJSON']; // Assuming the request body has an 'answers' array
    // Save each answer to the database
    const savedAnswers = await Answer.insertMany(  [ {
        responses: req.body['answersJSON'],
      }]);
    res.status(201).json({ message: 'Answers stored successfully', savedAnswers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error storing answers' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
