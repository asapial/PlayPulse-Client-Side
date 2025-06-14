import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInformation = () => {
  return (
    <section className="bg-base-300 py-20 px-6 h-[600px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="text-accent-600 mb-8">
          Have questions, feedback, or a recipe to share? We’d love to hear from you!
        </p>

        <div className="space-y-6 text-accent-700 text-base">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-primary w-5 h-5" />
            <span>
              Email:{" "}
              <a href="mailto:support@plateful.com" className="text-primary hover:underline">
                support@playpulse.com
              </a>
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-primary w-5 h-5" />
            <span>
              Phone:{" "}
              <a href="" className="text-primary hover:underline">
                +01 234 567 890
              </a>
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-primary w-5 h-5" />
            <span>Address: 123 Sports Lane, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
