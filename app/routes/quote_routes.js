 module.exports = function(app, db) {
   app.post('/quotes', (req, res) => {
     console.log(req.body)
     res.send(req.body)
   })
 }
