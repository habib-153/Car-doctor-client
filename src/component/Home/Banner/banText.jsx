const BanText = () => {
  return (
    <div className="absolute h-full gap-5 transform -translate-y-1/2  left-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
      <div className="md:max-w-3xl space-y-3 md:space-y-5 text-white pt-[5%] md:pt-[25%] pl-6">
        <h2 className="text-2xl md:text-6xl font-bold">
          Affordable Price For Car Servicing
        </h2>
        <p className="text-lg">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="flex gap-4 ">
          <button className="btn text-white btn-info rounded bg-[#FF3811] hover:bg-[#ca3719]">
            Discover More
          </button>
          <button className="btn text-white btn-outline rounded">Latest Project</button>
        </div>
      </div>
    </div>
  );
};

export default BanText;
