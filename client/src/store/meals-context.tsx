import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "./categories-context";
export type meal = {
  id: number;
  category: number;
  image: string;
  name: string;
  price: number;
  extras: {
    price: number;
    name: string;
  }[];
};
// export const DUMMY_MEALS: meal[] = [
//   {
//     id: "sf1",
//     category: Categories.SEAFOOD,
//     image: "https://i.ytimg.com/vi/RW1EzOoGul8/maxresdefault.jpg",
//     name: "Stir-fried Octopus",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 11,
//       },
//       {
//         name: "Peanut",
//         price: 12,
//       },
//       {
//         name: "Noodle",
//         price: 13,
//       },
//     ],
//   },
//   {
//     id: "sf3",
//     category: Categories.SEAFOOD,
//     image:
//       "https://haisanhuubo.com/wp-content/uploads/2020/02/cua-hoang-de-sot-me.jpg",
//     name: "King Crab",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "sf4",
//     category: Categories.SEAFOOD,
//     image:
//       "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/07/Honey-Garlic-Shrimp-main-1.jpg",
//     name: "Honey Garlic Shrimp",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "sf5",
//     category: Categories.SEAFOOD,
//     image:
//       "https://plazaprincipal.com.co/wp-content/uploads/2021/04/FILETE-DE-SALMON-X-300-gr..jpg",
//     name: "Filete de Salmon",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "sf6",
//     category: Categories.SEAFOOD,
//     image:
//       "https://previews.123rf.com/images/mikhailkayl/mikhailkayl1701/mikhailkayl170100024/71728861-escargots-de-bourgogne-snails-with-herbs-butter-gourmet-dish-in-french-traditional-with-parsley-and-.jpg",
//     name: "Herd Butter Snail",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "hp1",
//     category: Categories.HOTPOT,
//     image:
//       "https://images.chinahighlights.com/allpicture/2019/11/f289e92dea8a49a0a6a5f807_cut_800x500_61.jpg",
//     name: "Chinese Hot Pot",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "hp2",
//     category: Categories.HOTPOT,
//     image:
//       "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1515196442/celebration-hot-pot-sun-0218.jpg",
//     name: "Mushroom Hot Pot",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "cc1",
//     category: Categories.CUPCAKE,
//     image:
//       "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw8d80b1bd/images/project/WLRECIP-151/Butter-Cupcake-Recipe.jpg?sw=800&sh=800",
//     name: "Butter Cupcake",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "cc2",
//     category: Categories.CUPCAKE,
//     image:
//       "https://cachlambanhflan.net/wp-content/uploads/2017/09/cach-lam-banh-cupcake-socola-bang-lo-vi-song-1.jpg",
//     name: "Chocolate Cupcake",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "cc3",
//     category: Categories.CUPCAKE,
//     image:
//       "https://cdn.tgdd.vn/Files/2021/08/17/1375924/huong-dan-cach-lam-cupcake-tra-xanh-mem-xop-don-gian-tai-nha-202201151447398338.jpg",
//     name: "Matcha Cupcake",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "cc4",
//     category: Categories.CUPCAKE,
//     image:
//       "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Classic-Vanilla-Cupcakes-CMS.jpg",
//     name: "Basic Cupcake",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "cc5",
//     category: Categories.CUPCAKE,
//     image:
//       "https://dammeamthuc.com/wp-content/uploads/2017/03/Coconut-Cupcakes-7.jpg",
//     name: "Coconut Cupcake",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "sf2",
//     category: Categories.SEAFOOD,
//     image:
//       "https://www.gannett-cdn.com/presto/2020/08/11/USAT/22590cb0-c271-4dad-9cbc-37f373f7c2f9-seafood-hero.png?crop=1197,898,x6,y0&quality=50&width=640",
//     name: "Shrimp",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "dr1",
//     category: Categories.DRINK,
//     image: "https://bepxua.vn/wp-content/uploads/2021/02/coca.jpg",
//     name: "Cocacola",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "hp3",
//     category: Categories.HOTPOT,
//     image:
//       "https://cdn-www.vinid.net/4c4483c8-hotpot-story-he-thong-mien-nam-gia-chi-250.jpg",
//     name: "Thailand Hot Pot",
//     price: 123,
//     extras: [
//       {
//         name: "Salad",
//         price: 10,
//       },
//       {
//         name: "Sauce",
//         price: 10,
//       },
//       {
//         name: "Peanut",
//         price: 10,
//       },
//       {
//         name: "Noodle",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "isc1",
//     category: Categories.ICESCREAM,
//     image:
//       "https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg",
//     name: "Chocolate Icecream",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
//   {
//     id: "fr1",
//     category: Categories.FRUIT,
//     image:
//       "https://cdn.shopify.com/s/files/1/0550/8212/3450/products/or100000102_2_2d49344a-5985-493c-bd61-872fc5ddcdc7_600x600_crop_center.jpg?v=1623744601",
//     name: "Apple",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "sl1",
//     category: Categories.SALAD,
//     image:
//       "https://cdn.tgdd.vn/2021/03/CookRecipe/Avatar/rocket-salad-dua-leo-lua-thumbnail.jpg",
//     name: "Rocket Salad",
//     price: 123,
//     extras: [
//       {
//         name: "Ketchup",
//         price: 10,
//       },
//       {
//         name: "Mayonnaise",
//         price: 10,
//       }
//     ],
//   },
//   {
//     id: "sl2",
//     category: Categories.SALAD,
//     image:
//       "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ff973413-868b-4b81-8f4d-ab1fae08e485.jpg",
//     name: "Salmon Salad",
//     price: 123,
//     extras: [
//       {
//         name: "Ketchup",
//         price: 10,
//       },
//       {
//         name: "Mayonnaise",
//         price: 10,
//       }
//     ],
//   },
//   {
//     id: "sl3",
//     category: Categories.SALAD,
//     image:
//       "https://image-us.eva.vn/upload/2-2019/images/2019-05-24/cach-lam-salad-tron-vua-ngon-vua-thanh-mat-giup-ban-giai-nhiet-mua-he-cach-lam-salad-5-1558683763-824-width600height400.jpg",
//     name: "Apple Salad",
//     price: 123,
//     extras: [
//       {
//         name: "Ketchup",
//         price: 10,
//       },
//       {
//         name: "Mayonnaise",
//         price: 10,
//       }
//     ],
//   },
//   {
//     id: "sl4",
//     category: Categories.SALAD,
//     image: "https://www.thatlangon.com/wp-content/uploads/2021/09/unnamed.jpg",
//     name: "Avocado Salad",
//     price: 123,
//     extras: [
//       {
//         name: "Ketchup",
//         price: 10,
//       },
//       {
//         name: "Mayonnaise",
//         price: 10,
//       }
//     ],
//   },
//   {
//     id: "sl5",
//     category: Categories.SALAD,
//     image:
//       "https://tiengphap.vn/wp-content/uploads/2020/08/nhung-cong-thuc-lam-salad-kieu-phap-don-gian-ma-vo-cung-ngon-mieng.jpg",
//     name: "France Salad",
//     price: 123,
//     extras: [
//       {
//         name: "Ketchup",
//         price: 10,
//       },
//       {
//         name: "Mayonnaise",
//         price: 10,
//       }
//     ],
//   },
//   {
//     id: "sl6",
//     category: Categories.SALAD,
//     image:
//       "https://wiki-travel.com.vn/Uploads/Picture/myyen97-191922021928-Nicoise-salad-phap.jpg",
//     name: "Italia Salad",
//     price: 123,
//     extras: [
//       {
//         name: "Ketchup",
//         price: 10,
//       },
//       {
//         name: "Mayonnaise",
//         price: 10,
//       }
//     ],
//   },
//   {
//     id: "j1",
//     category: Categories.JUICE,
//     image:
//       "https://hoadangducluong.com/wp-content/uploads/2020/12/nuoc-ep-cam-1.jpg",
//     name: "Orange Juice",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "j2",
//     category: Categories.JUICE,
//     image:
//       "https://opt.toiimg.com/recuperator/img/toi/m-66750633/66750633.jpg&width=500&resizemode=4",
//     name: "Pineapple Juice",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "j3",
//     category: Categories.JUICE,
//     image:
//       "https://betterlifelovers.com/wp-content/uploads/2021/06/kivi-e1615221440524.jpg",
//     name: "Kiwi Juice",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "j4",
//     category: Categories.JUICE,
//     image:
//       "https://pncfoods.com/wp-content/uploads/2021/06/Strawberry-Juice.jpg",
//     name: "Strawberry Juice",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "j5",
//     category: Categories.JUICE,
//     image: "https://visitnj.org/sites/default/files/NewJerseyCider.jpg",
//     name: "Apple Juice",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "j6",
//     category: Categories.JUICE,
//     image:
//       "https://vaya.in/recipes/wp-content/uploads/2018/05/Carrot-Juice.jpg",
//     name: "Carrot Juice",
//     price: 123,
//     extras: [],
//   },
//   {
//     id: "cc6",
    // category: Categories.CUPCAKE,
//     image:
//       "https://media.cooky.vn/images/blog-2016/cach-phan-biet-2-loai-banh-cupcake-voi-muffin-3.jpg",
//     name: "Muffin Cupcake",
//     price: 123,
//     extras: [
//       {
//         name: "Milk",
//         price: 10,
//       },
//       {
//         name: "Chocolate",
//         price: 10,
//       },
//       {
//         name: "Matcha",
//         price: 10,
//       },
//     ],
//   },
// ];
let DUMMY_MEALS: meal[] = []
const initialContext: {
  category: number;
  categoryName: string;
  items: meal[];
} = {
  category: Categories.NONE,
  categoryName: "Please choose meal category!!!",
  items: [],
};
const mealsSlice = createSlice({
  name: "meals",
  initialState: initialContext,
  reducers: {
    setProduct: function (state,action){
      DUMMY_MEALS = action.payload
    }, 
    chooseCategoryHandler: (state, action) => {
      state.category = action.payload.id;
      state.categoryName = action.payload.name;
      state.items = DUMMY_MEALS.filter(
        (item) => item.category === action.payload.id
      );
    },
  },
});

export const MealsAction = mealsSlice.actions;
export default mealsSlice.reducer;
