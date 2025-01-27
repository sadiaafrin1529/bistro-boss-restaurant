import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import useCart from '../../../hooks/useCart'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'sonner';


function Cart() {
    const [cart,refetch] = useCart()
    const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    
const axiosSecure=useAxiosSecure()

    const handleDelete = (id) => {
         axiosSecure.delete(`/carts/${id}`)
           .then((res) => {
             if (res.data.deletedCount > 0) {
                 console.log(res);
                 refetch(); 
               toast.success("Item deleted successfully!"); // Provide user feedback
               // Refresh data if necessary
             }
           })
           .catch((error) => {
             console.error("Error deleting item:", error);
             toast.error("Failed to delete the item");
           });
    };

    return (
      <div>
        <SectionTitle heading={"Add more?"} subheading={"My Cart"} />
        <div className="flex justify-evenly">
          <p>Total order:{cart?.length}</p>
          <p>Total Price: {total}</p>
          <button className="btn btn-xs bg-blue-500 text-white">Pay </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    #
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart?.map((item ,index) => (
                <tr key={item?._id} >
                  <th>
                   {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>
                    {item?.name}
                    
                  </td>
                      <td>{ item?.price}</td>
                  <th>
                          <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-500">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Cart