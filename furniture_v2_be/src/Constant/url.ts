const PATH: any = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*",
        upload: "/fnt-media",
    },
    PRODUCT: {
        baseURL: "/product",
        excel: "/excel",
        filter: "/filter",
        detail: "/detail/:id",
        category: "/cate/:categoryId",
        category_detail: "/cate-detail/:category_detail_id"
    },
    PRODUCT_TYPE: {
        baseURL: "/product-type",
    },
    CATEGORY: {
        baseURL: "/cate",
        child: "/child/:categoryId",
        detailChild: "/child/:categoryId/:categoryDetailId",
        deleteChild: "/child/:categoryId/:categoryDetailId",
    },
    CATEGORY_DETAIL: {
        baseURL: "/cate-detail",
    },
    AUTH: {
        detail: "/detail/:id",
        baseURL: "/auth",
        login: "/login",
        register: "/register",
        infoJWT: "/token",
    },
    SOCIAL_MEDIA: {
        baseURL: "/media",
    },
    BILL: {
        baseURL: "/bill",
    },
    ACCESSORY: {
        baseURL: "/accessory",
    },
};

export default PATH;