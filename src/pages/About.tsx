import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MessageSquare, Shield, Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Komunitas Positif',
      description: 'Ruang yang ramah dan inklusif di mana setiap orang merasa dihargai dan dihormati.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Koneksi Bermakna',
      description: 'Jalinlah persahabatan yang baik dengan orang-orang yang berpikiran sama.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Percakapan Menarik',
      description: 'Berpartisipasilah dalam diskusi tentang permainan, seni, musik, dan banyak lagi.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Lingkungan Aman',
      description: 'Moderasi aktif memastikan pengalaman positif bagi semua anggota.',
      gradient: 'from-purple-500 to-violet-500',
    },
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900" />
        
        {/* Floating Background Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 dark:from-indigo-800/20 dark:to-purple-800/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
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

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <img
                src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
                alt="Kaze Serenity"
                className="h-24 w-24 mx-auto"
              />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Tentang{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kaze Serenity
              </span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"
            />
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kaze Serenity lebih dari sekadar server Discord – ini adalah tempat perlindungan bagi para gamer, 
              kreator, dan pencari ketenangan untuk terhubung, tumbuh, dan bersemangat dalam lingkungan yang 
              ramah dan suportif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu komunitas kami dalam menciptakan lingkungan yang positif dan mendukung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-800 dark:text-indigo-300">
                  Misi Kami
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Untuk menciptakan ruang daring yang dinamis tempat para anggota merasa dihargai, 
                didukung, dan terinspirasi. Kami berusaha untuk membina hubungan yang tulus, 
                merayakan kreativitas, dan memberikan pelarian positif dari tekanan kehidupan sehari-hari.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-300">
                  Visi Kami
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Menjadi komunitas Discord terdepan yang dikenal karena kehangatan, inklusivitas, 
                dan inovasinya. Kami membayangkan masa depan di mana setiap anggota dapat berkembang, 
                mengekspresikan diri dengan bebas, dan menemukan rumah kedua mereka di dunia digital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beberapa milestone yang telah kami capai bersama komunitas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '5,000+', label: 'Active Members', icon: <Users className="h-8 w-8" /> },
              { number: '50+', label: 'Events Hosted', icon: <Award className="h-8 w-8" /> },
              { number: '2+', label: 'Years Strong', icon: <Heart className="h-8 w-8" /> },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-900 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-800"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;