const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB limit
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('avatar');

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Upload route
router.post('/upload', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            res.status(400).json({ msg: err });
        } else {
            if (req.file === undefined) {
                res.status(400).json({ msg: 'No file selected!' });
            } else {
                const avatarUrl = `uploads/${req.file.filename}`;
                res.status(200).json({
                    msg: 'File uploaded!',
                    file: avatarUrl
                });
            }
        }
    });
});

module.exports = router;
