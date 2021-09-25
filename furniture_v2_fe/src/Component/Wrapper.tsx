import clsx from "clsx";
import { useState, useEffect } from "react";
import "../style/component/Wrapper.scss"
import { getRestProps } from '../Util/functions';

interface Props extends Omit<getRestProps, "restProps">{
    children: any, 
    hoverable?: any, 
    className?: any, 
    shadow?: any, 
    AosAnimation?: any
}

const Wrapper: React.FC<Props> = ({children, hoverable, className, shadow, AosAnimation, ...rest}: Props) => {
    const [dataAos, setDataAos] = useState("");

    useEffect(() => {
        setDataAos(AosAnimation)
    }, [AosAnimation])

    return (
        <div {...rest}
            data-aos={dataAos}
            className={clsx(className, hoverable && "furniture-wrapper--hover",
                shadow && "furniture-wrapper--shadow")}>
            {children}
        </div>
    )   
}

export default Wrapper; 