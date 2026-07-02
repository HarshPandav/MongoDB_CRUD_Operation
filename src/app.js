const express = require('express')
const Note = require('./models/note.model.js')

const app = express()
app.use(express.json())

module.exports = app

app.post('/notes', async (req, res) => {
    const data = req.body
    await Note.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

app.get('/notes', async (req,res) => {
    const notes = await Note.find()

    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })
})

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id    
    
    await Note.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    
    await Note.findOneAndUpdate({
        _id : id
    },
    {
        description: description
    }
)
    res.status(200).json({
        message: "note updated successfully"
    })
})