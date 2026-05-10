import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
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
          setTimeout(() => setSubmitStatus(''), 5000);
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-6">
              <a
                href="mailto:praveenkumar050305@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                praveenkumar050305@gmail.com
              </a>
              <a
                href="tel:+91-9025476583"
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                +91-9025476583
              </a>
              <div className="flex gap-4 mt-8 pt-8 border-t border-white/10">
                <a
                  href="https://github.com/praveenKUMAR-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 text-gray-300 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/praveen-kumar-mohan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 text-gray-300 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 glass-card p-8 rounded-2xl">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>}
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                    errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1 ml-1">{errors.subject}</p>}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1 ml-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-center font-medium bg-emerald-400/10 py-2 rounded-lg"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium bg-red-400/10 py-2 rounded-lg"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;