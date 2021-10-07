const TAG_DEFINE = {
    SERVER: {
        start: "Server is running on port %s",
    },
    SCHEMA: {
        USER: "User",
        VOUCHER: "Voucher",
        GIFT: "Gift",
        PAYMENT: "Payment",
        PRODUCT: "Product",
        IMAGE: "Image",
        CATEGORY: "Category",
        CATEGORY_DETAIL: "CategoryDetail",
        BILL: "Bill",
        SOCIAL_MEDIA: "Social media",
        ACCESSORY: "Accessory",
        PET_TYPE: "PetType",
        ORDER: "Order"
    },
    SERVICE: {
        start: "WELCOME TO AZP SERVER",
        SOCIAL: {
            web: "WEB",
            facebook: "FACEBOOK",
            instagram: "INSTAGRAM",
        },
        PAYMENT: {
            cash: "CASH",
            visa: "VISA",
            momo: "MOMO",
        },
    },
    STATUS: {
        active: "active",
        unactive: "unactive",
        sucess: "SUCCESS",
        failed: "FAILED",
    },
    CODE: {
        PAYMENT: {
            cash: "CA",
            visa: "VS",
            momo: "MO",
        },
    },
    ERROR: {
        start: "Server failed",
        404: "%s not found",
        401: "Invalid %s"
    },
    RESULT: {
        200: " thành công",
        500: " thất bại",
        DATABASE: {
            connect: {
                success: "Database connection success",
                failed: "Database connection failed",
            },
        },
        PRODUCT: {
            create: "Thêm sản phẩm",
            getList: "Lấy danh sách sản phẩm",
            update: "Cập nhật sản phẩm",
            getDetail: "Lấy chi tiết sản phẩm",
            delete: "Xóa sản phẩm",
        },
        CATEGORY: {
            create: "Thêm danh mục",
            getList: "Lấy danh sách danh mục",
            update: "Cập nhật danh mục",
            getDetail: "Lấy chi tiết danh mục",
            delete: "Xóa danh mục",
        },
        CATEGORY_DETAIL: {
            create: "Thêm chi tiết danh mục",
            getList: "Lấy danh sách chi tiết danh mục",
            update: "Cập nhật chi tiết danh mục",
            getDetail: "Lấy chi tiết danh mục",
            delete: "Xóa chi tiết danh mục",
        },
        AUTH: {
            getDetail: "Lấy chi tiết tài khoản",
            update: "Cập nhật tài khoản",
            LOGIN: {
                success: "Đăng nhập",
                failed: "Đăng nhập",
                exist: "Tài khoản không tồn tại",
                wrong_pass: "Sai mật khẩu",
            },
            REGISTER: {
                success: "Đăng ký",
                failed: "Đăng ký",
            },
        },
        SOCIAL_MEDIA: {
            create: "Thêm mạng xã hội",
            getList: "Lấy danh sách mạng xã hội",
            update: "Cập nhật mạng xã hội",
            getDetail: "Lấy chi tiết mạng xã hội",
        },
        BILL: {
            create: "Thêm hóa đơn",
            getList: "Lấy danh sách hóa đơn",
            update: "Cập nhật hóa đơn",
            getDetail: "Lấy chi tiết hóa đơn",
            delete: "Xóa hóa đơn",
        },
        PET_TYPE:{
            GET_LIST: "Lấy danh sách loại thú cưng",
            GET_DETAIL: "Lấy chi tiết loại thú cưng",
            CREATE: "Tạo loại thú cưng",
            UPDATE: "Cập nhật loại thú cưng",
            DELETE: "Xóa loại thú cưng"
        },
        ORDER:{
            GET_LIST: "Lấy danh sách đơn hàng",
            GET_DETAIL: "Lấy chi tiết đơn hàng",
            CREATE: "Tạo đơn hàng",
            UPDATE: "Cập nhật đơn hàng",
            DELETE: "Xóa đơn hàng"
        }
    },
    STORE: {
        FURNITURE: "Furniture",
        AA_PET: "aa-pet",
    },
    VALIDATION: {
        USER: {
            name: "Họ tên không hợp lệ",
            phone: "SDT không hợp lệ",
            address: "Địa chỉ không hợp lệ",
            password: "Mật khẩu không hợp lệ",
            email: "Email không hợp lệ",
            unavailableEmail: "Email đã được đăng ký",
            unavailablePhone: "SDT đã được sử dụng",
            invalidUser: "Email hoặc mật khẩu không hợp lệ",
        }
    }
};

export default TAG_DEFINE;