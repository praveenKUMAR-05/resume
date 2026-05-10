import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      }
    } else {
      setErrors(newErrors);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="praveenkumar050305@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#4A90E2]"
              >
                <Mail size={20} />
                praveenkumar050305@gmail.com
              </a>
              <a
                href="tel:+91-9025476583"
                className="flex items-center gap-3 text-gray-300 hover:text-[#4A90E2]"
              >
                <Phone size={20} />
                +91-9025476583
              </a>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/praveenKUMAR-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#4A90E2]"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/praveen-kumar-m-083896281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#4A90E2]"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] ${
                  errors.name ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] ${
                  errors.subject ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full p-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] ${
                  errors.message ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors"
            >
              Send Message
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;