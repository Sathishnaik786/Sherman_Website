import { motion } from 'framer-motion';

const clients = [
  'Indian Air Force',
  'Ministry of Home Affairs',
  'NIC',
  'Ministry of Defense',
  'NHPC',
  'Indian Navy',
  'NTPC',
  'Ministry of External Affairs',
  'Coal India',
  'Indian Railways',
  'BHEL',
  'ONGC'
];

export function Clients() {
  return (
    <section id="clients" className="py-32 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white"
          >
            Trusted by <span className="text-white/30">Nations & Leaders</span>
          </motion.h2>
          <p className="text-white/40 mt-6 text-sm font-bold uppercase tracking-widest">
            A strategic technology partner for national infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="glass p-8 rounded-2xl flex items-center justify-center text-center group cursor-default h-32 border border-white/5 transition-all duration-300"
            >
              <span className="text-white/40 font-black text-sm uppercase tracking-tighter group-hover:text-primary transition-colors leading-tight">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
