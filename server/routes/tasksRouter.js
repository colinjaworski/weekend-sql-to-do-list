const express = require('express');
const { takeCoverage } = require('v8');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" order by "dateAdded";';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('catch error getting stuff', error);
      res.sendStatus(500);
    });
  });

router.post('/',  (req, res) => {
    let taco = req.body;
    console.log(`Adding new todo`, taco);
  
    let queryText = `INSERT INTO "tasks" ("task", "dateAdded")
                     VALUES ($1, $2);`;
    pool.query(queryText, [taco.task, taco.dateAdded])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new taco`, error);
        res.sendStatus(500);
      });
  });

router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete ID', reqId);
    let queryText = 'DELETE FROM "tasks" WHERE "id" = $1;'
    pool.query(queryText, [reqId])
        .then((result) => {
            console.log('task deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error making database query', queryText, error);
            res.sendStatus(500);
        })
  })
  router.put('/:id', (req, res) => {
    let reqId = req.params.id;
    let queryText = 'UPDATE "tasks" SET "isComplete" = true WHERE id = $1';
    pool.query(queryText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error making database query', queryText, error);
            res.sendStatus(500);
        })
  })
  

module.exports = router;
