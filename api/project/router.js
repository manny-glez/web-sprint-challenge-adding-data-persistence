// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Project.getProjects()
  .then(projects => {
    res.status(200).json(projects)
  })
})

router.post('/', (req, res) => {
  Project.createProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
})

module.exports = router;
