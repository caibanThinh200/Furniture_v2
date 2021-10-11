import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "UploadFiles"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = new Date().toISOString().replace(/:/g, '-') + file.originalname.includes("jfif") ? file.originalname.replace("jfif", "png") : file.originalname
      cb(null, uniqueSuffix)
    }
});
  
const upload = multer({ storage: storage });
export default upload;
  