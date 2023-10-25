/* eslint-disable react/prop-types */

const ServiceCard = ({service}) => {
    const {title, img, price} = service
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-6 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className="text-lg text-[#FF3811] font-bold">Price: ${price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;