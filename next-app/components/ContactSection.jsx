"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailIcon, PhoneIcon, Twitter, Instagram, Send, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
    }, 2000);
  };

  return (
    <div id="contact" className={`relative flex min-h-screen w-full items-center justify-center p-4 py-24 bg-white overflow-hidden`}>
      {/* Background Gradient Mesh specific to this section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-pink-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse delay-700"></div>
      </div>

      <div className="mx-auto max-w-5xl w-full scale-[1.0] lg:scale-[1.05] relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5"
        >
            
            {/* Left Side: Brand & Info */}
            <div className="lg:col-span-2 bg-gray-50/50 p-10 flex flex-col justify-between border-r border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4D9FFF] to-[#FFD1BA]"></div>
                
                <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Get in touch</h3>
                    <p className="text-gray-500 mb-10 leading-relaxed text-lg font-medium">
                        Have a question about the app? Need a custom enterprise plan? We're here to help you create.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: MailIcon, title: "Email", value: "hello@mypov.app", color: "bg-blue-100 text-blue-600" },
                            { icon: PhoneIcon, title: "Phone", value: "+1 (555) 000-0000", color: "bg-green-100 text-green-600" },
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 group cursor-default"
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} transition-transform group-hover:scale-110`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.title}</div>
                                    <div className="text-gray-900 font-medium">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:text-blue-500 hover:border-blue-200 transition-all cursor-pointer">
                            <Twitter className="w-4 h-4" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:text-pink-500 hover:border-pink-200 transition-all cursor-pointer">
                            <Instagram className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="lg:col-span-3 p-10 bg-white/80">
                <AnimatePresence mode="wait">
                    {!isSent ? (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>First Name</Label>
                                    <Input placeholder="Jane" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Last Name</Label>
                                    <Input placeholder="Doe" required />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input type="email" placeholder="jane@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <Label>Message</Label>
                                <Textarea placeholder="Tell us about your project..." />
                            </div>

                            <Button 
                                type="submit" 
                                variant="gradient" 
                                className="w-full h-12 text-lg font-bold shadow-blue-200"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                ) : (
                                    <Send className="w-4 h-4 mr-2" />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </motion.form>
                    ) : (
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-gray-500 mt-2 max-w-xs mx-auto">
                                    Thanks for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </div>
                            <Button variant="outline" onClick={() => setIsSent(false)}>
                                Send another
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
