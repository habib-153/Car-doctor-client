import person from "./../../../assets/images/about_us/person.jpg";
import parts from "./../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-[600px] ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="rounded-lg w-3/4 shadow-2xl" />
          <img src={parts} className="absolute h-[250px] right-8 top-1/2 rounded-lg w-1/2 shadow-2xl border-8 border-white" />
        </div>

        <div className="lg:w-1/2">
            <h2 className="text-[#FF3811] font-bold text-xl">About Us</h2>
          <h1 className="text-5xl font-bold text-[#151515]">We are qualified & of experience in this field</h1>
          <p className="py-6 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <p className="py-6 text-[#737373]">
          the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. . 
          </p>
          <button className="btn text-white btn-info rounded bg-[#FF3811] hover:bg-[#ca3719]">
          Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
