import Category from '../../model/category'
import slugify from 'slug'
import { ObjectId } from 'mongodb'
import { createCategoryList } from './helper';

const categoryService = {
    createCategory: (req, res) => {
        const { name, parentId } = req.body,
            slug = slugify(name);
        try {
            Category.findOne({ slug: slug }).exec((err, data) => {
                if (err || data) {
                    return res.status(400).json({ error: 'Category Already Exists ,Try agin' })
                }
                const newCategory = new Category({
                    name,
                    slug
                })
                if (req.file) newCategory.image = `${process.env.SERVER_URL}/public/${req.file.filename}`
                if (ObjectId.isValid(parentId)) newCategory.parentId = parentId;

                newCategory.save((err, category) => {
                    if (err) {
                        return res.status(404).json({ error: err })
                    }
                    return res.status(201).json(category)
                })
            })

        } catch (err) {
            return res.status(500).json({
                error: err
            })
        }

    },
    allCategory: (req, res) => {
        try {
            Category.find()
                .then((category) => {
                    let categoryList = createCategoryList(category)
                    return res.status(200).json({ categoryList })
                }).catch((err) => {
                    return res.status(400).json({ error: err })
                })

        } catch (error) {
            return res.status(400).json({ error })
        }
    },
    singleCategory: (req, res) => {
        try {
            const { slug } = req.params
            Category.findOne(slug).then((category) => {
                return res.status(200).json(category)
            }).catch((err) => {
                return res.status(400).json({ error: err })
            })

        } catch (error) {
            return res.status(400).json({ error })
        }
    },
    updateCategory: (req, res) => {

    },
    deleteCategory: (req, res) => {
        try {
            const { slug } = req.params
            Category.findOne({ slug: slug }).exec((err, data) => {
                if (err || !data) {
                    return res.status(400).json({ error: `category not found with "${slug}"` })
                }
                Category.deleteOne(slug).then((category) => {
                    return res.status(200).json(category)
                }).catch((err) => {
                    return res.status(400).json({ error: err })
                })
            })


        } catch (error) {
            return res.status(400).json({ error })
        }
    }

}

export default categoryService