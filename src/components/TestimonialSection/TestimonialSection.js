// components/TestimonialSection.js
import React from 'react';
import './TestimonialSection.css';
import testimonialImage1 from "./testimonialImage1.jpeg"
import testimonialImage2 from "./testimonialImage2.jpeg"
import testimonialImage3 from "./testimonialImage3.jpeg"

const TestimonialSection = () => {
    const testimonials = [
        {
            techStack:"UI UX designer",
            image: testimonialImage1,
            name: 'Lade',
            text: "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable."
        },
        {
            techStack:"Frontend Developer",
            image: testimonialImage2,
            name: 'Jesse',
            text: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable."
        },
        {
            techStack:"Backend Developer",
            image: testimonialImage3,
            name: 'Raye',
            text: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise to protect my savings from being depleted by inflation."
        },
        {
            techStack:"Software tester",
            image: testimonialImage1,
            name: 'Raye',
            text: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise to protect my savings from being depleted by inflation."
        },
        {
            techStack:"Mobile app developer",
            image: testimonialImage2,
            name: 'Raye',
            text: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise to protect my savings from being depleted by inflation."
        }
    ];

    return (
        <div className="testimonial-section">
            <h2>From The People Who Use Rise</h2>
            <p style={{ fontSize: "18px", fontWeight: "500px", textAlign:"center" }}>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p className="testimonial-card-text">{testimonial.text}</p>
                        <div >
                            <img src={testimonial.image} alt={testimonial.name} />
                            <p className="testimonial-card-image-text">  {testimonial.name} <span> {testimonial.techStack}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialSection;
