// components/TestimonialSection.js
import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
    const testimonials = [
        {
            techStack:"UI UX designer",
            image: "https://s3-alpha-sig.figma.com/img/4028/4d07/45a39d9aa97561838795ce1885033527?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTp8UUvAnV3rxI2eZWFciD2QA94HiZdj5WRG6Zpd3PJ549K1xNjOsEA-wR2FwO47FuYiJFHCZ~YAgPOCp1thAbdWliageYnbUf8fVGVh-F0DU0cPgkjWEeQzHyp-KO0ANuX0gGMenUvf22s~09651lprWHDjWgEABLwHXTRuyaMmwtre9QAq8oHC5I5lWdu7O1U5i8Od2WG67RczvD0GITGpT-EUZNPwcLhUiujXzqaRBm4aQ8eGI2krGqc9-x~hi5d2M0LGX-7Elmd2Q5QSMN72zBdjzpFU6eq1Vk2QUtAcKbH63zU8t9uZxQaGg6cPBLBgKa-KR5wjOFMLakV79w__",
            name: 'Lade',
            text: "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable."
        },
        {
            techStack:"Frontend Developer",
            image: "https://s3-alpha-sig.figma.com/img/08ab/7ce8/49fbe4fe014ea76c772f913d67f25904?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKWZQ21hC1LXZGHOs1xP0ehD~YT4tavxfXPWnPLEHAQKcN5l90ljf0l3wskPpfF~XtlzVZ2kfl9IbSCKwCFKAjktqbZikeneL~ng9t-HYAoZfSfagPfFBDvLyKfqIXwwKs8m58JCmuEvz0j1iNqHCri5C~VzH5TA4vXf91VsJjYtpUA997D-OmUyqc~cwXh4bBsZUgyA~PXSpvNZpXwKX1vMGyt5pdxInWeXM1rCSxji3zSRV86ySOaBdrok9rv20ln-cLs2ZLCCi1z06leNuST~G5JoIdDFZK8kv2HhHTTaLncv~Cz5Bza7mOl00qO5yWVKENkJnmAj041wNr37pA__",
            name: 'Jesse',
            text: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable."
        },
        {
            techStack:"Backend Developer",
            image: "https://s3-alpha-sig.figma.com/img/4028/4d07/45a39d9aa97561838795ce1885033527?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTp8UUvAnV3rxI2eZWFciD2QA94HiZdj5WRG6Zpd3PJ549K1xNjOsEA-wR2FwO47FuYiJFHCZ~YAgPOCp1thAbdWliageYnbUf8fVGVh-F0DU0cPgkjWEeQzHyp-KO0ANuX0gGMenUvf22s~09651lprWHDjWgEABLwHXTRuyaMmwtre9QAq8oHC5I5lWdu7O1U5i8Od2WG67RczvD0GITGpT-EUZNPwcLhUiujXzqaRBm4aQ8eGI2krGqc9-x~hi5d2M0LGX-7Elmd2Q5QSMN72zBdjzpFU6eq1Vk2QUtAcKbH63zU8t9uZxQaGg6cPBLBgKa-KR5wjOFMLakV79w__",
            name: 'Raye',
            text: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise to protect my savings from being depleted by inflation."
        },
        {
            techStack:"Software tester",
            image: "https://s3-alpha-sig.figma.com/img/08ab/7ce8/49fbe4fe014ea76c772f913d67f25904?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKWZQ21hC1LXZGHOs1xP0ehD~YT4tavxfXPWnPLEHAQKcN5l90ljf0l3wskPpfF~XtlzVZ2kfl9IbSCKwCFKAjktqbZikeneL~ng9t-HYAoZfSfagPfFBDvLyKfqIXwwKs8m58JCmuEvz0j1iNqHCri5C~VzH5TA4vXf91VsJjYtpUA997D-OmUyqc~cwXh4bBsZUgyA~PXSpvNZpXwKX1vMGyt5pdxInWeXM1rCSxji3zSRV86ySOaBdrok9rv20ln-cLs2ZLCCi1z06leNuST~G5JoIdDFZK8kv2HhHTTaLncv~Cz5Bza7mOl00qO5yWVKENkJnmAj041wNr37pA__",
            name: 'Raye',
            text: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise to protect my savings from being depleted by inflation."
        },
        {
            techStack:"Mobile app developer",
            image: "https://s3-alpha-sig.figma.com/img/4028/4d07/45a39d9aa97561838795ce1885033527?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTp8UUvAnV3rxI2eZWFciD2QA94HiZdj5WRG6Zpd3PJ549K1xNjOsEA-wR2FwO47FuYiJFHCZ~YAgPOCp1thAbdWliageYnbUf8fVGVh-F0DU0cPgkjWEeQzHyp-KO0ANuX0gGMenUvf22s~09651lprWHDjWgEABLwHXTRuyaMmwtre9QAq8oHC5I5lWdu7O1U5i8Od2WG67RczvD0GITGpT-EUZNPwcLhUiujXzqaRBm4aQ8eGI2krGqc9-x~hi5d2M0LGX-7Elmd2Q5QSMN72zBdjzpFU6eq1Vk2QUtAcKbH63zU8t9uZxQaGg6cPBLBgKa-KR5wjOFMLakV79w__",
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
