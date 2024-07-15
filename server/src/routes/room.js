const { Router } = require('express'); 
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/rooms/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({ storage: storage })
const router = Router(); 

const { addNewRoom } = require('../controllers/room');
const Room = require('../models/room');

router.post('/room',upload.single('roomPhoto'),  addNewRoom)
// router.post('/room', addNewRoom)
module.exports = router



  