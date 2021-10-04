const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json("/api/accounts")
  try {

  }catch (err) {
    next()
  }
})

router.get('/:id', (req, res, next) => {
  try {

  }catch (err) {
    next()
  }
})

router.post('/', (req, res, next) => {
  try {

  }catch (err) {
    next()
  }
})

router.put('/:id', (req, res, next) => {
  try {

  } catch (err) {
    next()
  }
}
);

router.delete('/:id', (req, res, next) => {
  try {

  }catch (err) {
    next()
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
