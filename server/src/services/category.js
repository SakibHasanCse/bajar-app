import Category from './../model/category'
import slug from 'slug'

const categoryService = {
    createCategory: (req, res) => {
        const { name, image } = req.body
        try {
            const slug = slug(name);
            const newCategory = new Category({
                name,
                slug,
                image
            })
            newCategory.save((err, category) => {
                if (err) {
                    return res.status(404).json({ error: err })
                }
                return res.status(201).json(category)
            })
        } catch (err) {

            return res.status(500).json({
                error: err
            })
        }

    },
    allCategory: (req, res) => {
        try {
            Category.find().then((category) => {
                return res.status(200).json(category)
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

    }

}

export default categoryService