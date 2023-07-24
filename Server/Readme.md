Routes

1. Admin Routes
<!-- PRODUCTS ROUTES -->
<!-- ADD PRODUCTS -->
    *   "/admin/products"- To add new Products
        METHOD: POST
        BodyParameters: productName, productDescription, productPrice productType,  productDiscount, productImage,
        Route : PUBLIC

<!-- Delete Products -->
    *   "/admin/products"- To add new Products
        METHOD: DELETE
        URL_Parameters: ProductID(Models-_id)
        Route : PUBLIC

<!-- Edit Products -->
    *   "/admin/products/:id"- To add new Products
        METHOD: PUT
        BodyParameters: productID, productName, productDescription, productPrice productType,  productDiscount, productImage,
        Route : PUBLIC


---------------------------------------------------------------------------------
<!-- COUPON ROUTES -->
<!-- Add Coupon -->
    *   "/admin/coupon" - To add a coupon
        METHOD: POST
        BodyParameters:couponName, discount, maxUsage, expiryDate 
        ROUTE : PUBLIC
<!-- GET COUPON DETAILS -->
    *   "/admin/coupons/?name=FLAT50" - To Get a coupon
        METHOD: GET
        SEARCH_QUERY: name
        ROUTE : PUBLIC
<!-- Delete Coupon -->
    *   "/admin/coupon"- To add new Products
        METHOD: DELETE
        URL_Parameters: CouponID(Models-_id)
        Route : PUBLIC
---------------------------------------------------------------------------------
<!-- FOODTYPE ROUTES -->
<!-- ADD FOODTYPE -->
*   "/admin/type"- To add new FoodType
        METHOD: POST
        body_Parameters:foodType,foodDescription 
        Route : PUBLIC
<!-- EDIT FOODTYPE -->
*   "/admin/type/:id"- To Edit foodType
        METHOD: PUT
        body_Parameters:foodType,foodDescription 
        Route : PUBLIC


<!-- JWT Creation -->
*   "/test" - To get JWT
        METHOD: GET
        ROUTE : PUBLIC



2. USER ROUTES


<!-- ADD TO WISHLIST -->
    *   "/user/wishlist/:productID"- To add new Products
        METHOD: GET
        URL_PARAMS: productID
        Route : PUBLIC
<!-- Remove From Wishlist  -->
    
    *   "/user/wishlist/:productID"- To remove  Products
        METHOD: DELETE
        URL_PARAMS: productID
        Route : PUBLIC