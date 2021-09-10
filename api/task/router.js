// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Task.getProjects()
  .then(tasks => {
    res.status(200).json(tasks)
  })
})

router.post('/', (req, res) => {
  Task.createProject(req.body)
    .then(task => {
      res.status(201).json(task)
    })
})

module.exports = router;
