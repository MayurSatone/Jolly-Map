import { Link, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiSearch, FiBriefcase, FiDollarSign, FiUsers } from 'react-icons/fi'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 h-screen max-h-[950px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Find The Job That <span className="text-indigo-300">Fits</span> Your Life
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 leading-relaxed">
              Join millions of professionals discovering their dream careers with our platform. 
              We match talent with opportunity using advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/jobs" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  Find Jobs <FiArrowRight />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-indigo-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                How It Works
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects top talent with leading companies across industries
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <FiUsers size={48} />, number: "10M+", label: "Active Job Seekers" },
              { icon: <FiBriefcase size={48} />, number: "500K+", label: "Companies Hiring" },
              { icon: <FiSearch size={48} />, number: "2M+", label: "Jobs Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-indigo-600 mb-6 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools and resources to accelerate your career growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Smart Job Matching",
                  description: "Our AI analyzes your skills and preferences to recommend perfect job matches.",
                  icon: <FiCheckCircle className="text-indigo-600" size={24} />
                },
                {
                  title: "Salary Insights",
                  description: "Get real-time salary data to negotiate your best offer with confidence.",
                  icon: <FiDollarSign className="text-indigo-600" size={24} />
                },
                {
                  title: "Career Guidance",
                  description: "Personalized career path recommendations based on market trends.",
                  icon: <FiBriefcase className="text-indigo-600" size={24} />
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dashboard preview" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Interactive Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Track your applications, save favorite jobs, and get personalized recommendations all in one place.
              </p>
              <button className="text-indigo-600 font-medium hover:underline flex items-center gap-2">
                Learn more <FiArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Top Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities in the most in-demand fields
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: 'Software Development', jobs: '120K+ Jobs', icon: '💻' },
              { name: 'Data Science', jobs: '85K+ Jobs', icon: '📊' },
              { name: 'Digital Marketing', jobs: '65K+ Jobs', icon: '📈' },
              { name: 'Healthcare', jobs: '150K+ Jobs', icon: '🏥' },
              { name: 'Finance', jobs: '95K+ Jobs', icon: '💰' },
              { name: 'Design', jobs: '45K+ Jobs', icon: '🎨' },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-500 mb-4">{category.jobs}</p>
                    <Link 
                      to="/jobs" 
                      className="text-indigo-600 font-medium hover:underline flex items-center gap-2"
                    >
                      Browse Jobs <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who transformed their careers
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "Found my dream job within two weeks of using this platform! The interface is intuitive and job recommendations were spot on.",
                name: "Sarah Johnson",
                role: "Senior UX Designer at TechCorp",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "As a recruiter, I've been able to find quality candidates much faster than with other platforms. Highly recommended!",
                name: "Michael Chen",
                role: "Talent Acquisition at InnovateCo",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "The salary insights helped me negotiate a 20% higher offer than I expected. This service pays for itself!",
                name: "David Rodriguez",
                role: "Data Scientist at AnalyticsPro",
                avatar: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              Join thousands of professionals who found their perfect job match with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/jobs" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0"
                >
                  Get Started Now <FiArrowRight />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobFinder</h3>
              <p className="text-gray-400">
                Connecting talent with opportunity through innovative technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} JobFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home