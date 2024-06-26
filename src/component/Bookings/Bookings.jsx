import {useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
//import axios from "axios";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useAuth()
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    //const url = `https://car-doctor-server-rust-six.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;
    useEffect(()=>{
        axiosSecure.get(url)
        .then(res => setBookings(res.data))

        // axios.get(url, {withCredentials: true})
        // .then(res =>{
        //   setBookings(res.data)
        // })


        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    },[url, axiosSecure])

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://car-doctor-server-rust-six.vercel.app/bookings/${id}`,{
                method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining)
                }
              });
          }
        });
    }

    const handleConfirm = id =>{
        fetch(`https://car-doctor-server-rust-six.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Order Confirmed',
                    showConfirmButton: true,
                })
                const remaining = bookings.filter(booking=> booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-2xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input  className="checkbox" />
          </label> */}
        </th>
        <th>Service</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingRow
        key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}
        ></BookingRow>)
      }
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Bookings;