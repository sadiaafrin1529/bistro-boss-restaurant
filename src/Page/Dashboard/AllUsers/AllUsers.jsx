import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { PiUsersThreeFill } from "react-icons/pi";
import { BsTrash3Fill } from "react-icons/bs";
import { toast } from "sonner";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  const handleDelete = (item) => {
    //  axiosSecure
    //    .delete(`/users/${item._id}`)
    //    .then((res) => {
    //      console.log(res);
    //      if (res.data.deletedCount > 0) {
    //        refetch();
    confirmAlert({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete ${item?.name}?`,
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              axiosSecure.delete(`/users/${item._id}`).then((res) => {
                console.log(res);
                if (res.data.deletedCount > 0) {
                  refetch();
                  toast.success(`${item?.name} has been deleted successfully!`);
                }
              });
            } catch (error) {
              console.error("Error deleting user:", error);
              toast.error("Failed to delete user!");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleMakeAdmin = (item) => {
    console.log("Making admin:", item);
    axiosSecure.patch(`/users/admin/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch()
        toast.success(`${item.name} is an Admin Now`);
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Users"} subheading={"How Many?"} />
      <div className="text-[20px] text-center font-bold">
        Total Users: {users?.length}
      </div>
      <div className="overflow-x-auto mt-5 px-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-300 text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  {item?.role === "admin" ? 
                    "Admin"
                  : 
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      className="btn bg-orange-500"
                    >
                      <PiUsersThreeFill className="text-[18px] text-white" />
                    </button>
                  }
                </td>
                <td>
                  <BsTrash3Fill
                    onClick={() => handleDelete(item)}
                    className="text-red-500 text-[18px] cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
