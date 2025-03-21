// pages/academics.js
import React from 'react';
import Head from 'next/head';


export default function Academics() {
  // Academic programs data
  const academicPrograms = [
    {
      id: 'kindergarten',
      name: 'Kindergarten',
      grades: 'Nursery, Prep, UKG',
      description: 'Our Kindergarten program is designed to provide a nurturing and stimulating environment where children can learn through play and exploration.',
      subjects: ['Literacy', 'Numeracy', 'Sensory Activities', 'Art & Craft', 'Music & Movement', 'Social Skills'],
      features: ['Play-based learning', 'Interactive storytelling', 'Outdoor play areas', 'Thematic learning']
    },
    {
      id: 'primary',
      name: 'Primary School',
      grades: 'Grades 1-5',
      description: 'Our primary education program focuses on building strong foundations in core subjects while nurturing curiosity and creativity in young minds.',
      subjects: ['English', 'Mathematics', 'Environmental Studies', 'Hindi', 'Art & Craft', 'Physical Education'],
      features: ['Activity-based learning', 'Regular field trips', 'Digital learning tools', 'Value education']
    },
    {
      id: 'middle',
      name: 'Middle School',
      grades: 'Grades 6-8',
      description: 'The middle school program bridges primary and secondary education, helping students develop analytical thinking and subject specialization.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi/Sanskrit', 'Computer Science', 'Art & Music'],
      features: ['Project-based learning', 'Public speaking', 'Sports training', 'Life skills']
    },
    {
      id: 'secondary',
      name: 'Secondary School',
      grades: 'Grades 9-10',
      description: 'Our secondary education prepares students for board examinations while developing critical thinking and problem-solving abilities.',
      subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'Language', 'Computer Applications', 'Physical Education'],
      features: ['Board exam preparation', 'Career guidance', 'Specialized coaching', 'Laboratory sessions']
    }
  ];

  return (
    <>
      <Head>
        <title>Academics - Nosegay Public School</title>
        <meta name="description" content="Explore the academic programs, curriculum, teaching methodology, and extracurricular activities at Nosegay Public School." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-96 mb-8">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">Academic Excellence</h1>
              <p className="text-lg italic">Cultivating knowledge, fostering skills, inspiring innovation</p>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full relative">
              <img
                src="/api/placeholder/1200/500"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Educational Philosophy */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-[#23704a]">Our Educational Philosophy</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="mb-4 text-black text-black">
                  At Nosegay Public School, we believe that education should go beyond textbooks and examinations. Our educational philosophy is rooted in the belief that every child has unique potential that needs to be discovered, nurtured, and developed.
                </p>
                <p className="mb-4 text-black">
                  We follow a holistic approach to education that balances academic rigor with character development, physical fitness, and creative expression. Our curriculum is designed to develop critical thinking, problem-solving abilities, and effective communication skills while instilling values of empathy, integrity, and social responsibility.
                </p>
                <p className='text-black'>
                  We strive to create a learning environment that is stimulating, supportive, and inclusive, where students feel valued and empowered to take intellectual risks and pursue their passions.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#23704a]">Key Principles</h3>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Child centeric learning</li>
                    <li>Focus on values</li>
                    <li>Aesthetic learning</li>
                    <li>Integration of technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Academic Programs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#23704a]">Academic Programs</h2>
          
          <div className="space-y-6">
            {academicPrograms.map((program) => (
              <div key={program.id} className="bg-white p-6 shadow-md rounded-md">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="md:w-7/12">
                    <h3 className="text-xl font-bold text-[#23704a] mb-1">{program.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{program.grades}</p>
                    <p className="mb-4 text-black">{program.description}</p>
                    
                    <h4 className="font-semibold text-[#23704a] mb-2">Core Subjects</h4>
                    <div className="flex flex-wrap gap-2 mb-4 text-black">
                      {program.subjects.map((subject, index) => (
                        <span key={index} className="bg-blue-100 text-[#23704a] px-3 py-1 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-4/12 mt-4 md:mt-0">
                    <div className="bg-gray-100 p-4 rounded-md h-full">
                      <h4 className="font-semibold text-[#23704a] mb-2">Program Features</h4>
                      <ul className="space-y-2 text-black">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Assessment System */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#23704a]">Assessment System</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <p className="mb-6 text-black">
              Our assessment system is designed to be comprehensive, continuous, and balanced. We believe in evaluating not just academic knowledge but also skills, attitudes, and values. Our approach to assessment includes:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">Formative Assessment</h3>
                <p className='text-black'>
                  Ongoing assessments throughout the learning process to monitor progress and provide timely feedback. These include class participation, quizzes, projects, and homework.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#23704a]">Summative Assessment</h3>
                <p className='text-black'>
                  End-of-term and end-of-year assessments to evaluate cumulative learning outcomes. These include unit tests, term examinations, and final examinations.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#23704a]">Performance Assessment</h3>
                <p className='text-black'>
                  Evaluation of practical skills, applications, and real-world problem-solving abilities through lab work, presentations, and demonstrations.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-[#23704a]">Report Cards</h3>
              <p className='text-black'>
                Comprehensive report cards are issued at the end of each term, providing detailed feedback on academic performance, personal development, and areas for improvement. Parent-teacher meetings are scheduled after each reporting period to discuss student progress.
              </p>
            </div>
          </div>
        </section>
        
        {/* Extracurricular Activities */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#23704a]">Beyond Academics</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <p className="mb-6 text-black">
              At Nosegay Public School, we believe that education extends beyond the classroom. We offer a wide range of extracurricular activities that complement our academic program and help students develop holistically.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">Sports</h3>
                <p className="text-sm text-black">Cricket, basketball, football, athletics, swimming, badminton, and more.</p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black" >Arts</h3>
                <p className="text-sm text-black">Music, dance, drama, painting, crafts, and pottery.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#23704a]">Annual Events</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="font-medium text-[#23704a] mb-1">Cultural Festival</h4>
                  <p className="text-sm text-black">A celebration of diverse cultures through performances, exhibitions, and food.</p>
                </div>
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="font-medium text-[#23704a] mb-1">Sports Meet</h4>
                  <p className="text-sm text-black">Annual athletic competition showcasing physical fitness and sportsmanship.</p>
                </div>
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="font-medium text-[#23704a] mb-1">Science Exhibition</h4>
                  <p className="text-sm text-black">Display of innovative projects and experiments by students.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
                
                </>);
                };

                