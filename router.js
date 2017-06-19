const router = require('express').Router();
const Fetch = require('node-fetch')
const PR = require('./public/js/Process.js')


router.get('/api/:params', (req, res) => {
/// bloomberg cant use sort by method
  console.log(req.params, process.env.uRl, process.env.key)
  let UR = "https://newsapi.org/v1/articles?source="+req.params.params+"&"+process.env.key


  Fetch(UR)
       .then(data => {return data.json()})
       .then(data => res.json(data))
       .catch(err => console.log(err))
})


router.get('/', (req, res) => {
      res.render('index')
})





module.exports = router;
