import Product from '../../model/product';
import slug from 'slug';
import { stripHtml } from 'string-strip-html'
import { ObjectId } from 'mongodb'

const productService = {

    createProduct: (req, res) => {
        let { title, description, price, category, size, color, stock, brand, sku, createdBy } = req.body,
            images = [],
            product = new Product();

        if (req.files.length > 0) {
            images = req.files.map(file => {
                return { img: file.filename }
            })
        }


        product.title = title
        product.slug = slug(title)
        product.mtitle = `${title} | ${process.env.APP_NAME}`
        product.description = description
        product.mdesc = stripHtml(description.substring(0, 160)).result
        product.price = price
        product.image = images
        product.size = size && size.split(',')
        product.color = color && color.split(',')
        product.sku = sku;
        product.category = category;
        product.stock = parseInt(stock)
        product.brand = brand;

        if (ObjectId.isValid(createdBy)) product.createdBy = createdBy;
        else return res.status(404).json({ error: "createdBy is not a valid id" })

        try {
            product.save((err, data) => {
                if (err) {
                    return res.status(404).json({
                        error: err
                    })
                }
                return res.status(200).json({
                    success: true,
                    data
                })


            })
        } catch (error) {
            throw new Error(`Product not created for " ${productData.title} "`)
        }
    },
    allProducts: (req, res) => {
        let { sort, skip, limit, page } = req.params;
        if (!limit) limit = 20;
        if (!sort) sort = { createdAt: -1 }
        if (!skip) skip = limit * Math.max(0, page)

        Product.find()
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .then(product => {
                res.status(200).json(product)
            }).catch(error => {
                return res.status(400).json({
                    error: error
                })
            })

    },
    updateProduct: (req, res) => {
        const { slug } = req.params
        try {
            return res.status(200).json({ message: 'Product updated successfully' })

        } catch (error) {
            return res.status(500).json({ error: "Internal server error" })
        }
    },
    singleproduct: (req, res) => {
        const { slug } = req.params
        try {
            Product.findOne({ slug }).exec((err, product) => {
                if (err || !product) {
                    return res.status(400).json({ error: 'Product not found' })
                }
                res.status(200).json(product)
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Internal server error" })
        }
    },
    deleteProduct: (req, res) => {
        const { slug } = req.params
        console.log(slug)
        try {
            Product.findOne({ slug }).exec((err, product) => {
                if (err || !product) {
                    return res.status(400).json({ error: 'Product not found' })
                }
                Product.deleteOne({ slug }).exec((err, data) => {
                    console.log("data", data)
                    if (err) {
                        return res.status(400).json({ error: 'Product deleted field' })
                    }
                    res.status(200).json({ message: "Product delete successfully" })
                })

            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Internal server error" })
        }
    }


}
export default productService