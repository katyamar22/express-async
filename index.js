// Declare packages (express, body parser, and nodemon)
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// Declare port
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// MOCK DATABASE
let data = [
    {
        id: 1,
        fullName: 'John Doe',
        position: 'Software Engineer'
    },
    {
        id: 2,
        fullName: 'Chris Wilson',
        position: 'Secretary'
    },
    {
        id: 3,
        fullName: 'Nivid Tylers',
        position: 'Head of HR'
    },
    {
        id: 4,
        fullName: 'Cecila Garcia',
        position: 'HR'
    },
    {
        id: 5,
        fullName: 'Albert Brown',
        position: 'Data Scientest'
    },
    {
        id: 6,
        fullName: 'Tyler Johnson',
        position: 'Marketing'
    },
    {
        id: 7,
        fullName: 'Darien Culp',
        position: 'Software Engineer'
    },
    {
        id: 8,
        fullName: 'Kyra River',
        position: 'Project Manage'
    },
    {
        id: 9,
        fullName: 'Jeremy Smith',
        position: 'Finance'
    },
    {
        id: 10,
        fullName: 'Alicia White',
        position: 'Accountant'
    },
];

// GET => retrieve all entries from the database
app.get('/api/data',(req, res) => {
    setTimeout(() => {
        res.json(data);
    }, 1000) // DELAY
})

// POST => Add a new entry to the database
app.post('api/data',(req, res) => {
    const newData = req.body;
    setTimeout(() => {
        data.push(newData);
        res.status(201).send('Data added succesfully');
    }, 1000) //DELAY
})

// PUT => 
app.put('api/data/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    setTimeout(() => {
        const index = data.findIndex( item => item.id === id);
        if (index !== -1) {
            db[index] = updateData;
            res.status('Data updated succesfully');
        } else {
            res.status(404).send('Data not found');
        }
    }, 1000) 
})

// DELETE
app.delete('api/data/:id',(req, res) => {
    const id = parseInt(req.params.id);
    setTimeout(() => {
        const index = db.findIndex(item => item.id === id);
        if (index !== -1) {
                data.splice(index, 1);
                res.send('Data deleted successfully');
            } else {
                res.status(404).send('Data not found');
            }
        }, 1000)
    });
