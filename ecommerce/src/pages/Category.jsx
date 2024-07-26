import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from "../components/Item";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
const Category = ({ category, banner }) => {

  const {all_products} = useContext(ShopContext)
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt="" className="block my-7 mx-auto" />
        </div>
        <div className="flexBetween my-8 mx-2">
          <h5 >
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </h5>
     
        </div>
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>
        <div className="mt-16 text-center">
          <button className="medium-15 border border-[#ff7477] bg-[#ff7477] px-7 py-3 text-white transition-all hover:bg-[#fa6568] rounded-full">load more</button>
        </div>
      </div>
    </section>
  );
};

export default Category;
