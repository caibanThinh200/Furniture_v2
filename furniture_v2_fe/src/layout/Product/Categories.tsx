import { Divider, Dropdown } from "antd";
import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/tagDefine";
import {Dummy} from "../../constant/dummy";
import "../../style/categories.scss"
import Collapse from "../../Component/Collapse";
import Tree from "../../Component/Tree";
import { useState } from "react";
import { getRestProps } from "../../Util/functions";

interface Props extends Omit<getRestProps, "restProps"> {

}

const Categories: React.FC<Props> = props => {
    const [selectedCate ,setSelectedCate] = useState([]);

    const onCateSelected = (e: any) => {
        // setSelectedCate([...selectedCate, ...e]);
        props.onFilterChange(e);
    }

    const onExpanding = (e: any) => {
        props.onExpandChange(e);
    }
    
    return (
        <Wrapper className="furniture_product__filter mt-4">
            <Wrapper className="mt-3">
                <h2 className="text-center furniture_categories__title">
                    {
                        TAG_DEFINE.PAGE.CATEGORIES.title
                    }
                </h2>
            </Wrapper>
            <Wrapper className="furniture_product__filter__item">
                {/* {
                    TAG_DEFINE.PAGE.HOMEPAGE.CATEGORIES_BOX.length > 0 && TAG_DEFINE.PAGE.HOMEPAGE.CATEGORIES_BOX.map(item => 
                        <div></div>
                    )
                } */}
                <Tree 
                    data={props.categories} 
                    onSelectors={onCateSelected} 
                    onExpanding={onExpanding}
                />
            </Wrapper>
        </Wrapper>
    )
}

export default Categories;