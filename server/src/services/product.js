import Product from '../model/product';
const productService = {
    createProduct: (req, res) => {
        const productData = req.body
        try {
            const newProduct = new Product(productData)
            Product.save(newProduct, (err, product) => {
                if (err) throw err;
                return res.status(200).json({
                    success: true,
                    product
                })
            })
        } catch (error) {
            throw new Error(`Product not created for " ${productData.title} "`)
        }
    },
    updateProduct: (req, res) => {

    },
    singleproduct: (req, res) => {
        res.send("hi")
    },
    deleteProduct: (req, res) => {

    }


}
export default productService