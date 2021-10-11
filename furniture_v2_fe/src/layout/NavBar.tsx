import Wrapper from "../Component/Wrapper";
import "../style/header.scss";
import TAG_DEFINE from "../constant/tagDefine";
import Icon from "../Component/Icon";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Authentication from "./Authentication";
import { getRestProps } from '../Util/functions';
import { registerAction, loginAction, logoutAction, checkUserAction } from '../action/authAction';
import { Action, Dispatch } from "redux";
import { connect } from "react-redux";
import {Dropdown, Menu} from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useJwt } from "react-jwt";

interface Props extends Omit<getRestProps, "restProps"> {
    key?: number
}

interface RootState extends Omit<getRestProps, "restProps"> {
    auth: any
}

const ProfileNavigate: React.FC<Props> = (props: Props) => {
    return (
        <Menu>
            <Menu.Item icon={<Icon type="profile"/>}>
                Thông tin cá nhân
            </Menu.Item>
            <Menu.Item icon={<Icon type="cash"/>}>
                Lịch sử giao dịch
            </Menu.Item>
            <Menu.Item onClick={() => props.logoutAction()} icon={<Icon type="logout"/>}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    )
}

const NavBar: React.FC<Props> = props => {
    const location = useLocation(),
    [isHome, setIsHome] = useState(false),
    [isModalOpened, setIsModalOpened] = useState(false),
    [action, setAction] = useState(TAG_DEFINE.PAGE.CUSTOMER.auth.login.title),
    token = localStorage.getItem("fnt_token") || "",
    {decodedToken, isExpired} = useJwt(token);

    useEffect(() => {
        const path = location.pathname === "/";
        if(path) {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [location]);

    useEffect(() => {
        if(props.auth.isLogged && token && !isExpired) {
            props.checkUserAction(token);
        } 
    }, [props.auth.isLogged])

    const openModal = (actionParams: string) => {
        setIsModalOpened(true);
        setAction(actionParams)
    }

    const closeModal = () => setIsModalOpened(false)
    const renderNav = () => {
        if(isHome) {
            return  <Wrapper className="w-100">
                        <ul className="row w-100">
                            <Link 
                                to={"/"}
                                className={clsx("float-left furniture_header__nav-link furniture_header__nav-link--home ml-5")}>
                                <h5 
                                    className={clsx("font-weight-bold p-2 furniture_header__nav-link furniture_header__nav-link--logo")}
                                >
                                    {TAG_DEFINE.PAGE.LOGO}
                                </h5>
                            </Link>
                            {
                                Object.values(TAG_DEFINE.PAGE.HEADER).length > 0 && Object.values(TAG_DEFINE.PAGE.HEADER).map((title: getRestProps, index) => 
                                    <Link 
                                        style={{height: "50px"}}
                                        to={title.path}
                                        key={index}
                                        className={clsx("float-left furniture_header__nav-link furniture_header__nav-link--home ml-5")}>
                                        <h5 
                                            className={clsx("font-weight-bold p-2", title.bold ? "furniture_header__nav-link furniture_header__nav-link--logo" : "mt-3", title.float && title.float === "right" ? "text-right" : "float-left")}
                                        >
                                            {title.title}
                                        </h5>
                                    </Link>
                                )
                            }
                            {
                                token && !isExpired && props.auth.isLogged ? <Wrapper className="furniture_header__nav-wrapper--right d-flex"> 
                                    <Dropdown 
                                        placement="bottomLeft" 
                                        overlay={<ProfileNavigate {...props}/>}
                                        arrow
                                    >
                                            <li style={{height: "50px"}} className={clsx("furniture_header__nav-link furniture_header__nav-link--home ml-5")}>
                                                <h5 className={clsx("font-weight-bold p-2 mt-3")}>
                                                    {props.auth.info?.name || ""}
                                                </h5>
                                            </li> 
                                    </Dropdown>
                                </Wrapper>: 
                                <Wrapper className="furniture_header__nav-wrapper--right d-flex">
                                    <li onClick={() => openModal(TAG_DEFINE.PAGE.CUSTOMER.auth.register.key)} className={clsx("furniture_header__nav-link furniture_header__nav-link--home ml-5")}>
                                        <h5 className={clsx("font-weight-bold p-2 mt-3")}>
                                            {TAG_DEFINE.PAGE.CUSTOMER.auth.register.title}
                                        </h5>
                                    </li>
                                    <li onClick={() => openModal(TAG_DEFINE.PAGE.CUSTOMER.auth.login.key)} className={clsx("furniture_header__nav-link furniture_header__nav-link--home ml-5")}>
                                        <h5 className={clsx("font-weight-bold p-2 mt-3")}>{TAG_DEFINE.PAGE.CUSTOMER.auth.login.title}</h5>
                                    </li>
                                </Wrapper> 
                            }
                        </ul>
                    </Wrapper>   
        }
        else {
            return (
                <Wrapper className="w-100">
                    <ul className="row d-flex">
                    <Link 
                        to={"/"}
                        className={clsx("float-left furniture_header__nav-link furniture_header__nav-link ml-5")}>
                        <h5 
                            className={clsx("font-weight-bold p-2 furniture_header__nav-link furniture_header__nav-link--logo")}
                        >
                            {TAG_DEFINE.PAGE.LOGO}
                        </h5>
                    </Link>
                        {
                            Object.values(TAG_DEFINE.PAGE.HEADER).length > 0 && Object.values(TAG_DEFINE.PAGE.HEADER).map((title: getRestProps, index) => 
                                <Link 
                                    to={title.path}
                                    key={index}
                                    className={clsx("float-left furniture_header__nav-link ml-5")}>
                                    <h5 className={clsx("font-weight-bold p-2", title.bold ? "furniture_header__nav-link--logo" : "mt-3")}>
                                        {title.title}
                                    </h5>
                                </Link>
                            )
                        }
                        {
                            token && !isExpired && props.auth.isLogged ? <Wrapper className="furniture_header__nav-wrapper--right d-flex"> 
                                <Dropdown 
                                    placement="bottomLeft" 
                                    overlay={<ProfileNavigate {...props}/>}
                                    arrow
                                >
                                        <li style={{height: "50px"}} className={clsx("furniture_header__nav-link furniture_header__nav-link ml-5")}>
                                            <h5 className={clsx("font-weight-bold p-2 mt-3")}>
                                                {props.auth.info?.name || ""}
                                            </h5>
                                        </li> 
                                </Dropdown>
                            </Wrapper> : 
                            <Wrapper className="furniture_header__nav-wrapper--right d-flex">
                                <li onClick={() => openModal(TAG_DEFINE.PAGE.CUSTOMER.auth.register.key)} className={clsx("furniture_header__nav-link furniture_header__nav-link ml-5")}>
                                    <h5 className={clsx("font-weight-bold p-2 mt-3")}>
                                        {TAG_DEFINE.PAGE.CUSTOMER.auth.register.title}
                                    </h5>
                                </li>
                                <li onClick={() => openModal(TAG_DEFINE.PAGE.CUSTOMER.auth.login.key)} className={clsx("furniture_header__nav-link furniture_header__nav-link ml-5")}>
                                    <h5 className={clsx("font-weight-bold p-2 mt-3")}>{TAG_DEFINE.PAGE.CUSTOMER.auth.login.title}</h5>
                                </li>
                            </Wrapper> 
                        }
                    </ul>
                </Wrapper>
            )
        }
    }

    return (
        <Wrapper 
            // style={{backgroundImage: `url("/wood.png")`}} 
            className={clsx("w-100 furniture_header__nav-wrapper", isHome ? "position-absolute" : "position-static", props.className)}
        >
            {renderNav()}
            <Authentication 
                {...props}
                changeModal={openModal}
                action={action}
                onCancel={closeModal}
                visible={isModalOpened}/>
        </Wrapper>
    )
}

const mapStateToProps = (state: RootState) => ({
    auth: state.authReducer
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    registerAction: (data: any) => {
        dispatch(registerAction(data));
    },
    loginAction: (data: any) => {
        dispatch(loginAction(data));
    },
    logoutAction: () => {
        dispatch(logoutAction());
    },
    checkUserAction: (token: string) => {
        dispatch(checkUserAction(token))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);