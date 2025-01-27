import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

function FoodCard({ item }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const[,refetch]=useCart()
  const handleFoodCart = () => {
    
    if (user && user.email) {
      //sent cart item to the database
      const cartItem = {
        menuId:item?._id,
        email: user?.email,
        name: item?.name,
        image: item?.image,
        price:item?.price
      }
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
      });
      toast.success(`${item?.name} added`)
//refetch cart to update the cart items
      refetch()

      
    } else {
      toast.error("Please login to add to the cart");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card bg-base-100 w-96  shadow-xl">
      <figure>
        <img src={item.image} alt="food" />
      </figure>
      <p className="bg-slate-800 mr-5 mt-3 p-2 text-white absolute right-0 ">
        ${item.price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions flex flex-col items-center">
          <button
            onClick={handleFoodCart}
            className="btn btn-outline border-0 border-b-4 uppercase mb-8 border-orange-400 hover:text-orange-400  "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
