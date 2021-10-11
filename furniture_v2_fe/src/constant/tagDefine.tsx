const TAG_DEFINE = {
    PAGE: {
        LOGO: "AZP",
        HEADER: {
            HOMEPAGE: {
                title: "Trang chủ",
                path: "/"
            },
            PRODUCT: {
                title: "Sản phẩm",
                path: "/product"
            },
            CONTACT: {
                title: "Liên hệ",
                path: "/contact"
            },
            ABOUT: {
                title: "Giới thiệu",
                path: "/about"
            }
        },
        HOMEPAGE: {
            BANNER: {
                title: "Banner",
                image: [
                    {
                        name: "banner1",
                        path: "/define/banner1.png",
                        active: true
                    },
                    {
                        name: "banner2",
                        path: "/define/banner.png",
                    },
                    {
                        name: "banner3",
                        path: "/define/banner2.jpg",
                    },
                ]
            },
            GUARANTEE: "CAM KẾT DỊCH VỤ TỐT NHẤT",
            QUOTE: "AZ PRICE FURNITURE tự hào là đơn vị cung cấp Nội Thất hàng đầu tại Việt Nam với dịch vụ Chuyên Nghiệp, Ân Cần, Tận Tâm với Khách Hàng. Chúng tôi luôn hy vọng sẽ đáp ứng được nhu cầu ngày càng cao của thị trường và mọi góp ý của Khách Hàng chính là giá trị giúp chúng tôi ngày càng hoàn thiện hơn ",
            BEST_SALED: "Sản phẩm bán chạy nhất",
            LATEST: "Sản phẩm mới nhất",
            BEST_DISCOUNT: "Sản phẩm giảm giá hot",
            CATEGORIES_BOX: [
                {
                    key: 1,
                    title: "Nội thất gia đình",
                    image: "/define/livingroom.png"
                },
                {
                    key: 2,
                    title: "Nội thất văn phòng",
                    image: "/define/office.png"
                },
                {
                    key: 3,
                    title: "Nội thất dự án",
                    image: "/define/project.png"
                }
            ],
            SERVICES_INTRO: {
                title: "Vì sao nên chọn AZP ?",
                content: [
                    {
                        key: 1,
                        title: "Chất lượng sản phẩm",
                        content: "Chúng tôi luôn cung cấp sản phẩm có chất lượng tốt nhất"
                    },
                    {
                        key: 2,
                        title: "Dịch vụ",
                        content: "Dịch vụ của chúng tôi luôn đem lại sự hài lòng cho khách hàng"
                    },
                    {
                        key: 3,
                        title: "Hỗ trợ 24/7",
                        content: "Chúng tôi sẵn sàng hỗ trợ mọi vấn đề của khách hàng"
                    },
                    {
                        key: 4,
                        title: "Vận chuyển nhanh chóng",
                        content: "Chúng tôi luôn đảm bảo sản phẩm đến tay khách hàng trong thời gian ngắn nhất, free ship TPHCM"
                    },
                    {
                        key: 5,
                        title: "Bảo hành dài hạn",
                        content: "Tất cả sản phẩm của chúng tôi đều được bảo hành từ 1 năm trở lên"
                    },
                ]   
            }
        },
        PRODUCT: {
            title: "Sản phẩm",
            filterResult: {
                color: ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geek", "blue", "purple"]
            }
        },
        CATEGORIES: {
            title: "Danh mục"
        },
        CART: {
            title: "Giỏ hàng",
            sumarize: "Thông tin thanh toán",
            contactInfo: "Thông tin liên hệ"
        },
        CUSTOMER: {
            profile: {
                title: "Thông tin cá nhân"
            },
            fullname: {
                title: "Họ tên"
            },
            phoneNum: {
                title: "SDT"
            },
            email: {
                title: "Email"
            },
            password: {
                title: "Mật khẩu"
            },
            address: {
                title: "Địa chỉ"
            },
            note: {
                title: "Ghi chú"
            },
            promotionCode: {
                title: "Mã giảm giá"
            },
            auth: {
                login: {
                    key: "login",
                    title: "Đăng nhập"
                },
                register: {
                    key: "register",
                    title: "Đăng ký"
                },
                profile: {
                    title: "Thông tin cá nhân"
                }
            }
        },
        ORDER: {
            confirmInfo: "Xác nhận thông tin"
        }
    },
    ACTION: {
        CART: {
            promotionCode: {
                inputCode: "Mời nhập mã giảm giá",
                submitCode: "Áp dụng"
            }
        },
        confirm: "Xác nhận",
    },
    VALIDATION: {
        require: "%s is required",
        invalid: "%s không hợp lệ"
    },
    RESULT: {
        success: "%s thành công",
        failed: "%s thất bại"
    },
    ERROR: {
        404: "Không tìm thấy %s",
        500: "Hệ thống đang có lỗi, vui lòng quay lại sau"
    }
}

export const formButtonLayout = {
    wrapperCol: { offset: 4, span: 16 }
}
export default TAG_DEFINE;