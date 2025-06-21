import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mic, 
  Trophy, 
  Gift, 
  Users, 
  Shield, 
  Bot, 
  Music,
  Gamepad2,
  Calendar,
  Star,
  Zap
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Text Channels',
      description: 'Berbagai channel untuk diskusi topik yang berbeda-beda',
      gradient: 'from-blue-500 to-cyan-500',
      details: ['General Chat', 'Gaming Discussion', 'Art & Creative', 'Tech Talk', 'Random']
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: 'Voice Channels',
      description: 'Ruang voice chat untuk ngobrol santai dan gaming bersama',
      gradient: 'from-green-500 to-emerald-500',
      details: ['General Voice', 'Gaming Rooms', 'Music Listening', 'Study Together', 'Private Rooms']
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Custom Bots',
      description: 'Bot khusus dengan fitur-fitur menarik untuk server',
      gradient: 'from-purple-500 to-violet-500',
      details: ['Music Bot', 'Moderation Bot', 'Game Bot', 'Utility Bot', 'Fun Commands']
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Tournaments',
      description: 'Turnamen game reguler dengan hadiah menarik',
      gradient: 'from-yellow-500 to-orange-500',
      details: ['Mobile Legends', 'Valorant', 'Among Us', 'Fall Guys', 'Custom Games']
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Giveaways',
      description: 'Giveaway rutin dengan berbagai hadiah menarik',
      gradient: 'from-pink-500 to-rose-500',
      details: ['Discord Nitro', 'Game Keys', 'E-Wallet', 'Merchandise', 'Special Roles']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Moderation',
      description: 'Sistem moderasi yang ketat untuk menjaga kenyamanan',
      gradient: 'from-red-500 to-pink-500',
      details: ['Auto Moderation', 'Active Staff', 'Clear Rules', 'Fair Punishment', '24/7 Support']
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Music Features',
      description: 'Fitur musik untuk mendengarkan lagu bersama-sama',
      gradient: 'from-indigo-500 to-purple-500',
      details: ['High Quality Audio', 'Playlist Support', 'Queue System', 'Volume Control', 'Skip Voting']
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Events',
      description: 'Event rutin yang seru dan menghibur untuk semua member',
      gradient: 'from-teal-500 to-cyan-500',
      details: ['Movie Night', 'Game Night', 'Art Contest', 'Trivia Quiz', 'Karaoke Night']
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Leveling System',
      description: 'Sistem level dan reward untuk member aktif',
      gradient: 'from-amber-500 to-yellow-500',
      details: ['XP System', 'Level Roles', 'Leaderboard', 'Special Perks', 'Achievement Badges']
    }
  ];

  const specialFeatures = [
    {
      title: 'Partnership Program',
      description: 'Program kemitraan untuk server dan content creator lain',
      icon: <Users className="h-12 w-12" />,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Custom Roles',
      description: 'Sistem role yang beragam dengan warna dan permission khusus',
      icon: <Zap className="h-12 w-12" />,
      gradient: 'from-green-600 to-teal-600'
    },
    {
      title: 'Active Community',
      description: 'Komunitas yang aktif 24/7 dengan member dari berbagai negara',
      icon: <Gamepad2 className="h-12 w-12" />,
      gradient: 'from-pink-600 to-red-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Animated Background */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Fitur-Fitur{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Unggulan
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Jelajahi berbagai fitur menarik yang membuat Kaze Serenity menjadi tempat yang istimewa
          </motion.p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                
                <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Fitur Khusus
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fitur-fitur eksklusif yang membedakan Kaze Serenity dari server Discord lainnya
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl blur-2xl"
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 flex items-center justify-center text-white shadow-2xl mx-auto`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Merasakan Semua Fitur Ini?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Bergabunglah dengan ribuan member lainnya dan nikmati pengalaman Discord yang tak terlupakan
            </p>
            
            <motion.a
              href="https://discord.gg/kazeindo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl"
            >
              <MessageSquare className="h-6 w-6 mr-3" />
              Join Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;