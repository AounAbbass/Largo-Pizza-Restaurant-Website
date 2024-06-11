import p1_img from "./5 Pizza Deal.png";
import p2_img from "./Any 2 Deal.png";
import p3_img from "./Manager Special Deal.png";
import p4_img from "./Sub Special Deal.png";

let all_product = [
  {
    id: 1,
    name: "Party Special",
    description1: "5 X-Large Pizzas with 2-Topping",
    category: "deals",
    image: p1_img,
    price1: 75.99,
  },
  {
    id: 2,
    name: "Two for One",
    category: "deals",
    description1: "2 Small Pizzas",
    description2: "2 Medium Pizzas",
    description3: "2 Large Pizzas",
    description4: "2 X-Large Pizzas",
    image: p2_img,
    price1: 18.99,
    price2: 22.99,
    price3: 27.99,
    price4: 32.99,
  },
  {
    id: 3,
    name: "Manager's Special",
    category: "deals",
    description1: "1-12inch Sub, Order of Fries & Can of Soda",
    description2: "10 Buffalo Wings, Order of Fries & Can of Soda",
    image: p3_img,
    price1: 17.99,
    price2: 17.99,
  },
  {
    id: 4,
    name: "Sub Special",
    category: "deals",
    description1: "2-4inch Subs, 2 Bags of Chips & 2 Cans of Soda",
    description2: "2-4inch Subs, 2 Order of Fries & 2 Cans of Soda",
    image: p4_img,
    price1: 18.99,
    price2: 21.99,
  },
  
];

export default all_product;
