import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, User, Building2, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Query Submitted', description: 'Our representative will get back to you within 24 hours.' });
    setForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="bg-[#0B0F19] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
          >
            Contact <span className="text-white/30">Us</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            We'd love to hear from you! Reach out for inquiries or collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Get in Touch */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 text-white flex flex-col shadow-2xl"
          >
            <h2 className="text-3xl font-black mb-6">Get in Touch</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-10">
              Akiko Sherman Infotech Pvt. Ltd. is an independent division under Sherman group of companies.
            </p>

            <div className="space-y-8 flex-1">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-white/50 mb-1">Head Office</h4>
                    <p className="text-xs leading-relaxed text-white/90">
                      DCM Building, 3rd Floor, 3L & 3M, Barakhamba Road, New Delhi - 110001
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-white/50 mb-1">Corporate Office</h4>
                    <p className="text-xs leading-relaxed text-white/90">
                      2C/2, New Rohtak Road, Near Liberty Cinema, New Delhi - 110005
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-white/50 mb-1">Canada Branch</h4>
                    <p className="text-xs leading-relaxed text-white/90">
                      200-7404 King George Blvd Surrey BC, Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white/90">+91-8851599751</p>
                  <p className="text-sm font-bold text-white/90">+91-9319008126</p>
                  <p className="text-sm font-bold text-white/90 text-white/50 font-medium">+91-9319008129 <span className="text-[10px] opacity-60">(For Other Queries)</span></p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1">
                  <a href="mailto:info@shermanindia.com" className="block text-sm font-bold hover:underline">info@shermanindia.com</a>
                  <a href="mailto:suvidit@shermanindia.com" className="block text-sm font-bold hover:underline">suvidit@shermanindia.com</a>
                  <a href="mailto:manu@shermanindia.com" className="block text-sm font-bold hover:underline">manu@shermanindia.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Submit Query Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 glass p-10 md:p-12 rounded-[2.5rem] border border-white/5"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-black text-white mb-2">Submit Query</h2>
              <p className="text-white/40 text-sm">
                Fill the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-black tracking-widest mb-1 ml-1">
                    <User className="w-3 h-3" /> Your Name
                  </div>
                  <Input 
                    className="h-14 bg-white/5 border-white/10 rounded-2xl text-white focus:border-primary transition-all" 
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-black tracking-widest mb-1 ml-1">
                    <Smartphone className="w-3 h-3" /> Phone Number
                  </div>
                  <Input 
                    className="h-14 bg-white/5 border-white/10 rounded-2xl text-white focus:border-primary transition-all" 
                    placeholder="Enter Mobile No."
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-black tracking-widest mb-1 ml-1">
                    <Mail className="w-3 h-3" /> Email Address
                  </div>
                  <Input 
                    type="email"
                    className="h-14 bg-white/5 border-white/10 rounded-2xl text-white focus:border-primary transition-all" 
                    placeholder="Enter Email Id"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-black tracking-widest mb-1 ml-1">
                    <Building2 className="w-3 h-3" /> Company / Organization Name
                  </div>
                  <Input 
                    className="h-14 bg-white/5 border-white/10 rounded-2xl text-white focus:border-primary transition-all" 
                    placeholder="Enter Company"
                    value={form.company}
                    onChange={e => setForm({...form, company: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-black tracking-widest mb-1 ml-1">
                  <Send className="w-3 h-3" /> Your Message
                </div>
                <Textarea 
                  className="min-h-[160px] bg-white/5 border-white/10 rounded-[2rem] text-white focus:border-primary transition-all p-6" 
                  placeholder="Enter Query"
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  required
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="h-16 px-12 rounded-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl">
                  <Send className="w-4 h-4 mr-3" /> Send Query
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
