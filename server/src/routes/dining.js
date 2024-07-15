const { Router } = require('express'); 
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/dining/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({ storage: storage })
const router = Router(); 

const { addNewDiningCategory } = require('../controllers/dining');
const Dining = require('../models/dining');

router.post('/dining',upload.single('diningPhoto'),  addNewDiningCategory)
module.exports = router



  