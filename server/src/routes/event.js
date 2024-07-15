const { Router } = require('express'); 
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/event/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({ storage: storage })
const router = Router(); 

const { addNewEvent } = require('../controllers/event');
const Event = require('../models/event');

router.post('/event',upload.single('eventPhoto'),  addNewEvent)
module.exports = router



  