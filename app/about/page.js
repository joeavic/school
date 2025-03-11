// pages/about.js
'use client'
import React from 'react';
import Header from '../../components/Header';
import Head from 'next/head';

export default function About() {
  return (
    <>
    
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-96 mb-8">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">About Nosegay Public School</h1>
              <p className="text-lg italic">Nurturing minds, building character, shaping the future</p>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full relative">
              {/* Replace with your actual school image */}
              <img
                src="/api/placeholder/1200/500"
                alt="Nosegay Public School Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* School History */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003366]">Our History</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="mb-4 text-black">
                  Founded in 1995, Nosegay Public School has been a beacon of educational excellence in the region for nearly three decades. What began as a small institution with a handful of students has grown into a prestigious educational establishment serving thousands of families.
                </p>
                <p className="mb-4 text-black">
                  Our school was established with the vision of providing holistic education that balances academic excellence with character development. Over the years, we have continuously evolved our teaching methodologies and infrastructure to meet the changing needs of education while staying true to our core values.
                </p>
                <p className='text-black'>
                  Today, Nosegay Public School stands as a testament to our founders' vision, offering state-of-the-art facilities, a diverse curriculum, and a nurturing environment where students can discover and develop their unique potential.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#003366]">Key Milestones</h3>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>1995 - School founded with 50 students</li>
                    <li>2000 - Expanded to include secondary education</li>
                    <li>2005 - Built new campus with modern facilities</li>
                    <li>2010 - Received national recognition for academic excellence</li>
                    <li>2015 - Introduced innovative STEM curriculum</li>
                    <li>2020 - Celebrated 25 years of educational service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003366]">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Our Mission</h3>
              <p className='text-black'>
                To provide quality education that nurtures intellectual curiosity, fosters personal growth, and instills values of integrity, respect, and responsibility. We strive to create a learning environment that empowers students to become lifelong learners and responsible global citizens.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">Our Vision</h3>
              <p className='text-black'>
                To be recognized as a center of educational excellence that prepares students to meet the challenges of a rapidly changing world with confidence, creativity, and compassion. We envision our graduates as well-rounded individuals who contribute positively to society and lead meaningful lives.
              </p>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003366]">Our Leadership</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/api/placeholder/160/160"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-[#003366]">Principal</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/api/placeholder/160/160"
                    alt="Vice Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-[#003366]">Vice Principal</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/api/placeholder/160/160"
                    alt="Academic Coordinator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-[#003366]">Academic Coordinator</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003366]">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Excellence</h3>
              <p className='text-black'>We strive for excellence in everything we do, encouraging our students to reach their highest potential.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Respect</h3>
              <p className='text-black'>We foster a culture of respect for self, others, and the environment, celebrating diversity and inclusivity.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.25 2.25m-15-15l2.25 2.25m13.5-13.5L15.75 6M4.5 19.5l2.25-2.25m19.5 0l-2.25-2.25m-7.5 7.5h3m-3 0h-3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Innovation</h3>
              <p className='text-black'>We embrace innovation in teaching and learning, preparing our students for the challenges of tomorrow.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Integrity</h3>
              <p className='text-black'>We uphold the highest standards of integrity, honesty, and ethics in all our actions and decisions.</p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#003366] text-white p-8 rounded-md text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Nosegay Family</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We invite you to be part of our educational journey. Schedule a visit to our campus to experience the Nosegay difference firsthand.
          </p>
          <button className="bg-white text-[#003366] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
            Schedule a Visit
          </button>
        </section>
      </main>
      
    </>
  );
}