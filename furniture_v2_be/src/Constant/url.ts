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
        category: "/category/:category_id",
        category_detail: "/category-detail/:category_detail_id",
    },
    CATEGORY: {
        baseURL: "/cate",
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
    PET_TYPE: {
        baseURL: "/pet-type",
    },
    ORDER: {
        baseURL: "/order",
        user_id: "/user/:id",
    },
};

export default PATH;