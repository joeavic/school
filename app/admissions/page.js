// pages/admissions.js
"use client"
import React from 'react';
import Head from 'next/head';
import { useState } from 'react';

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('process');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Admissions | NoseGay Public School</title>
        <meta name="description" content="Admissions information for Nosegay Public School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <div className="relative bg-blue-900 h-64 md:h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admissions</h2>
          <p className="text-lg max-w-2xl">Join our community of learners and embark on a journey of academic excellence and holistic development</p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Welcome to NoseGay Public School Admissions</h3>
            <p className="text-gray-700 max-w-4xl mb-4">
              We are delighted that you are considering Nosegay Public School for your child's education. Our admissions process is designed to be straightforward and supportive, ensuring that we find the right fit for your child's educational journey.
            </p>
            <p className="text-gray-700 max-w-4xl">
              Nosegay Public School is committed to providing a nurturing environment where students can excel academically, develop their talents, and grow into responsible global citizens. We welcome applications from families who share our vision and values.
            </p>
          </section>
          
          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <button 
                    className={`inline-block py-2 px-4 font-medium ${activeTab === 'process' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('process')}
                  >
                    Admission Process
                  </button>
                </li>
                <li className="mr-2">
                  <button 
                    className={`inline-block py-2 px-4 font-medium ${activeTab === 'criteria' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('criteria')}
                  >
                    Eligibility Criteria
                  </button>
                </li>
                <li className="mr-2">
                  <button 
                    className={`inline-block py-2 px-4 font-medium ${activeTab === 'fees' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('fees')}
                  >
                    Fee Structure
                  </button>
                </li>
                <li>
                  <button 
                    className={`inline-block py-2 px-4 font-medium ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('faq')}
                  >
                    FAQs
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-12">
            {activeTab === 'process' && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Admission Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-lg">Application Submission</h4>
                      <p className="text-gray-700">Complete the online application form or collect a physical form from the school office. Submit the form along with required documents and application fee.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-lg">Entrance Assessment</h4>
                      <p className="text-gray-700">For classes II and above, students are required to take an entrance assessment to evaluate their academic readiness. For Pre-Primary and Class I, an informal interaction is conducted.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-lg">Parent Interview</h4>
                      <p className="text-gray-700">Parents are invited for an interaction with the school administration to understand mutual expectations and the school's philosophy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-lg">Offer of Admission</h4>
                      <p className="text-gray-700">Based on the assessment results, interview, and availability of seats, admission offers are made. Parents are required to complete the admission formalities within the stipulated time.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-lg text-blue-900 mb-2">Required Documents</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Completed application form</li>
                    <li>Birth certificate (original and photocopy)</li>
                    <li>Four passport-sized photographs</li>
                    <li>Transfer Certificate from previous school (for classes II and above)</li>
                    <li>Report cards from the previous two years</li>
                    <li>Address proof</li>
                    <li>Aadhar Card (if available)</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'criteria' && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Eligibility Criteria</h3>
                
                <h4 className="font-semibold text-lg mt-6 mb-2">Age Requirements</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="py-2 px-4 text-left">Class</th>
                        <th className="py-2 px-4 text-left">Age Requirement (as on 31st March)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 px-4">Pre-Nursery</td>
                        <td className="py-2 px-4">2.5 - 3.5 years</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Nursery</td>
                        <td className="py-2 px-4">3.5 - 4.5 years</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">KG</td>
                        <td className="py-2 px-4">4.5 - 5.5 years</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Class I</td>
                        <td className="py-2 px-4">5.5 - 6.5 years</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Other Classes</td>
                        <td className="py-2 px-4">Age appropriate for the class</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="font-semibold text-lg mt-6 mb-2">Academic Requirements</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>For Pre-Primary: No academic prerequisites</li>
                  <li>For Classes I-V: Basic age-appropriate literacy and numeracy skills</li>
                  <li>For Classes VI and above: Satisfactory performance in previous classes and entrance assessment</li>
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <span className="font-semibold">Note:</span> Admission is subject to availability of seats in the respective classes. The school reserves the right to determine the final eligibility and admission of a student.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'fees' && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Fee Structure</h3>
                <p className="text-gray-700 mb-4">
                  The fee structure for the academic year 2024-25 is outlined below. All fees are in Indian Rupees (INR).
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="py-2 px-4 text-left">Fee Component</th>
                        <th className="py-2 px-4 text-left">Pre-Primary</th>
                        <th className="py-2 px-4 text-left">Classes I-V</th>
                        <th className="py-2 px-4 text-left">Classes VI-VIII</th>
                        <th className="py-2 px-4 text-left">Classes IX-XII</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 px-4 font-medium">Registration Fee (One-time)</td>
                        <td className="py-2 px-4">₹2,000</td>
                        <td className="py-2 px-4">₹2,000</td>
                        <td className="py-2 px-4">₹2,000</td>
                        <td className="py-2 px-4">₹2,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Admission Fee (One-time)</td>
                        <td className="py-2 px-4">₹25,000</td>
                        <td className="py-2 px-4">₹30,000</td>
                        <td className="py-2 px-4">₹35,000</td>
                        <td className="py-2 px-4">₹40,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Security Deposit (Refundable)</td>
                        <td className="py-2 px-4">₹10,000</td>
                        <td className="py-2 px-4">₹10,000</td>
                        <td className="py-2 px-4">₹10,000</td>
                        <td className="py-2 px-4">₹10,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Tuition Fee (Quarterly)</td>
                        <td className="py-2 px-4">₹18,000</td>
                        <td className="py-2 px-4">₹22,000</td>
                        <td className="py-2 px-4">₹25,000</td>
                        <td className="py-2 px-4">₹28,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Development Fee (Annual)</td>
                        <td className="py-2 px-4">₹12,000</td>
                        <td className="py-2 px-4">₹15,000</td>
                        <td className="py-2 px-4">₹18,000</td>
                        <td className="py-2 px-4">₹20,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="font-semibold text-lg mt-6 mb-2">Additional Fees</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Transport Fee: Varies based on distance (₹2,000 - ₹4,000 per quarter)</li>
                  <li>Examination Fee: ₹1,000 per term (Classes VI and above)</li>
                  <li>Computer Lab Fee: ₹1,200 per annum</li>
                  <li>Science Lab Fee: ₹1,500 per annum (Classes VI and above)</li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-lg text-blue-900 mb-2">Payment Schedule</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>1st Quarter: April 1-15</li>
                    <li>2nd Quarter: July 1-15</li>
                    <li>3rd Quarter: October 1-15</li>
                    <li>4th Quarter: January 1-15</li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Note:</span> The fee structure is subject to revision for each academic year. A late fee of ₹100 per day is applicable for payments made after the due date.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'faq' && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">1. When does the admission process begin?</h4>
                    <p className="text-gray-700 mt-1">
                      The admission process for the next academic year typically begins in September-October of the previous year. For mid-session admissions, applications are accepted subject to the availability of seats.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">2. Is there a waitlist if seats are not available?</h4>
                    <p className="text-gray-700 mt-1">
                      Yes, we maintain a waitlist for each class. As and when seats become available, candidates on the waitlist are considered based on their position.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">3. Are there any scholarships available?</h4>
                    <p className="text-gray-700 mt-1">
                      Yes, the school offers merit scholarships to deserving students based on academic excellence, sports achievements, and financial need. Details are available from the school office.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">4. What is the student-teacher ratio?</h4>
                    <p className="text-gray-700 mt-1">
                      We maintain a student-teacher ratio of 25:1 to ensure personalized attention to each student.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">5. Do you provide transportation facilities?</h4>
                    <p className="text-gray-700 mt-1">
                      Yes, the school provides transportation facilities covering most areas of the city. The transport fee varies based on the distance from the school.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">6. What co-curricular activities are offered?</h4>
                    <p className="text-gray-700 mt-1">
                      We offer a wide range of co-curricular activities including sports, music, dance, art, debate, robotics, and more. Students are encouraged to participate in these activities for holistic development.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Call to Action */}
          <section className="bg-blue-900 text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Take the first step towards providing your child with a quality education that nurtures their intellectual, physical, and emotional growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
                Online Application
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-800 transition duration-300">
                Download Form
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}