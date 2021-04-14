const express = require('express');
const router = express.Router();
const path = require('path');
// const fs = require('fs');
const User = require ('../models/userInfoSchema');

const multer = require('multer');

// create the storage
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.resolve('./uploads');
        // console.log(folder);
      cb(null, folder)
    },
    filename: async (req, file, cb) => {
        // const extention = '.png';
        const extension = path.extname(file.originalname);
        // console.log(extension);
        const newFileName = file.fieldname + '-' + Date.now() + extension;
        // console.log(newFileName);

        // UPDATE CURRENT USER PHOTO 
        await User.findByIdAndUpdate(req.params.idUser, {photo: newFileName}, {new: true});
      cb(null, newFileName)
    }
  });


// File Filter
const myFileFilter = (req, file, cb) => {
    const allowedFileExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const extension = path.extname(file.originalname);
    // if (allowedFileExtensions.includes(extension)) {
    //     cb(null, true);
    //     console.log('extension ✔');
    // }
    // else {
    //     cb(null, false); 
    //     console.log('extension !!');
    // } 
    cb(null, allowedFileExtensions.includes(extension));
  }


// create the multer middleware (2 methods: dest/storage)
// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage: myStorage , fileFilter: myFileFilter, limits: {fileSize: 1024*1024*200}});


// upload 1 file
router.post('/uploadImage/:idUser', upload.single('FILE'), async(req, res) => {
    res.json({message: 'image uploaded successfully 🎈'})
});

// uploade multiple files 
router.post('/uploadMultipleImages', upload.array('FILE',3), async(req, res) => {
    res.json({message: 'images uploaded successfully 🎈'})
});

module.exports = router;