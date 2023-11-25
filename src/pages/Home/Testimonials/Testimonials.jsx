import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../../../Components/Container/Container";
import Testimonial from "../../../Components/Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios.get("/testiomonials.json").then((res) => setTestimonials(res.data));
  }, []);
  console.log(testimonials);
  return (
    <Container>
      <div className="pb-20">
        <div className="text-center py-10">
         <h2 className="text-4xl font-bold text-center my-10">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials?.map((testimonial, idx) => (
            <Testimonial key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;