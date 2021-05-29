import path, { dirname } from 'path';
import multer from 'multer';
import { uid } from 'uid';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(__dirname), '..', 'image', 'category'))
    },
    filename: (req, file, cb) => {
        cb(null, uid() + "_" + file.originalname)
    }
})
const upload = multer({ storage })
export const categoryImage = upload.single('categoryImage')

export const createCategoryList = (categories, parentId = null) => {
    console.log("categories", categories, parentId)
    let categoryList = [];
    let category;
    if (parentId == null) category = categories.filter(cat => cat.parentId == undefined);
    else category = categories.filter(cat => cat.parentId == parentId);

    for (let cat of category) {
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            image: cat.image,
            children: createCategoryList(categories, cat._id)
        })
    }
    return categoryList;

};

