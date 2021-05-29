export const createCategoryList = (categories, parentId = null) => {
    console.log("categories", categories, parentId)
    let categoryList = [];
    let category;
    if (parentId == null) category = categories.filter(cat => cat.parentId == undefined);
    else category = categories.filter(cat => cat.parentId == parentId);

    for (let cat of categoryList) {
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