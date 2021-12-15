import mongoose from "mongoose";
import tree from "mongoose-data-tree";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import CategoryBaseField from "./baseField";
import mongodb from 'mongodb'

const AAPetCategoryField = {
    ...CategoryBaseField,

    childCate: {
        type: [],
    },
};

export const CategorySchema = new mongoose.Schema(
    { ...AAPetCategoryField },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
CategorySchema.add({
    childCate: { type: [new mongoose.Schema(AAPetCategoryField)], default: [] },
});

CategorySchema.plugin(tree);
const CategoryModel = mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.CATEGORY,
        TAG_DEFINE.STORE.AA_PET
    ),
    CategorySchema
);
export default CategoryModel;

// class CompositeCategory extends mongoose.Model {
//     AddChildCate(rootCategory, child, nodeId): void {
//         if (rootCategory._id.equals(nodeId)) {
//             rootCategory.child_cate.push(child);
//             // console.log(rootCategory);
//             return;
//         } else {
//             rootCategory.child_cate.forEach((item) => {
//                 this.AddChildCate(item, child, nodeId);
//             });
//         }
//     }

//     // RemoveChildCate(rootCategory, nodeId): void {
//     //     if (rootCategory._id.equals(nodeId)) {
//     //         logger.info('success')
//     //         rootCategory.child_cate = rootCategory.child_cate.filter(item => item._id !== nodeId);
//     //         console.log(rootCategory);
//     //         return;
//     //     } else {
//     //         rootCategory.child_cate.forEach((item) => {
//     //             this.RemoveChildCate(item, nodeId);
//     //         });
//     //     }
//     // }

//     FindChild(rootCategory, nodeId) {
//         let result = null;
//         if (rootCategory._id.equals(nodeId)) {
//             return rootCategory.child_cate;
//         } else {
//             rootCategory.child_cate.forEach((item) => {
//                 result = this.FindChild(item, nodeId);
//             });
//         }

//         return result;
//     }
// }

// CategorySchema.loadClass(CompositeCategory);
