const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require("mongodb");
const cors = require('cors');

const STUDENTS_COLLECTION = "students";
const SUBJECTS_COLLECTION = "subjects";
const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
//app.use(express.static(__dirname));
app.use(express.static(__dirname + 'dist/teacher-journal-app'));
app.use(bodyParser.json());

mongodb.MongoClient.connect( process.env.MONGODB_UI || "mongodb://admin:ebadap92@ds347367.mlab.com:47367/students", function (err, database) {
  if (err) {
   console.log(err);
   process.exit(1);
  } else {
  db = database;
  console.log("Database connection ready", database);

  const server = app.listen(port, function () {
    console.log("App now running on port", port);
  });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/teacher-journal-app/index.html'));
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/getStudents", function(req, res) {
  db.collection(STUDENTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
     handleError(res, err.message, "Failed to get students!");
    } else {
      res.status(200).json(docs);  
    }
  });
});

app.get("/api/getSubjects", function(req, res) {
  db.collection(SUBJECTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
     handleError(res, err.message, "Failed to get subjects!");
    } else {
      res.status(200).json(docs);  
    }
  });
});

app.post("/api/addStudent", function(req, res) {
  const newStudent = req.body;
  
  db.collection(STUDENTS_COLLECTION).insertOne(newStudent, function(err, doc) {
    if (err) {
     handleError(res, err.message, "Failed to create new student!");
    } else {
      res.status(201).json(doc);
    }
  });
});

app.post("/api/addSubject", function(req, res) {
  const newSubject = req.body;
  
  db.collection(SUBJECTS_COLLECTION).insertOne(newSubject, function(err, doc) {
    if (err) {
     handleError(res, err.message, "Failed to create new subject!");
    } else {
      res.status(201).json(doc);
    }
  });
});

app.put("/api/updateSubject", function(req, res) {
  const updatedSubject = req.body;
  
  db.collection(SUBJECTS_COLLECTION).updateOne({_id: updatedSubject._id}, updatedSubject, function(err, doc) {
    if (err) {
     handleError(res, err.message, "Failed to update subject!");
    } else {
      res.status(204).end();
    }
  });

});
