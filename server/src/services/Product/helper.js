import path, { dirname } from 'path';
import multer from 'multer';
import { uid } from 'uid';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(__dirname), '..', 'image', 'product'))
    },
    filename: (req, file, cb) => {
        cb(null, uid() + "_" + file.originalname)
    }
})
const upload = multer({ storage })
export const productImage = upload.array('productImage', 8)