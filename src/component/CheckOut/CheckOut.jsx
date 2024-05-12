/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, service_id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    //const due_amount = form.due_amount.value;

    const booking ={
        customerName: name,
        email,
        image: img,
        date,
        service: title,
        service_id: service_id,
        price: price,
    }
    console.log(booking)
    
    fetch('https://car-doctor-server-rust-six.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
            icon: 'success',
            title: 'Order placed successfully',
            showConfirmButton: true,
            //timer: 1500
          })
        }
        
    })

  }
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Booked service: {title}</h2>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handleBookService} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" name="name"
                placeholder="name" defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name="email"
                placeholder="email" defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text" defaultValue={'$'+ price}
                name="due_amount"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary btn-block">Confirm Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
