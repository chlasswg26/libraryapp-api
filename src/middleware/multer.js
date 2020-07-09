const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const helper = require('../helpers');

const multerStorage = multer({
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
          callback(null, './public/images'), file;
    },
    filename: (request, file, callback) => {
      let customFileName = crypto.randomBytes(18).toString('hex'),
        fileExtension = file.originalname.split('.')[1];
      callback(null, customFileName + '.' + fileExtension);
    },
  }),
  fileFilter: function(request, file, callback){
      const filetypes = /jpg|jpeg|png|svg|gif/;
      const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = filetypes.test(file.mimetype);
      if (mimetype && extname) {
        return callback(null, true);
      } else {
        return callback('Filetype not allowed!', false);
      }
  },
  limits: {
      fileSize: 8 * 1024 * 1024,
  },
});

module.exports = {
    multer: function(request, response, next){
        const upload = multerStorage.single('image');
        upload(request, response, function(error){
            if (error instanceof multer.MulterError) {
                return helper.response(response, 500, { message: error.message });
            } else if (error) {
                return helper.response(response, 500, { message: error });
            } else {
                next();
            }
        });
    }
}
