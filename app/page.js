// app/page.js
import Banner from '@/components/Banner';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Banner />

      {/* Welcome Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-64 w-full md:h-96">
                <Image
                  src="/images/principal.jpg"
                  alt="Principal"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Welcome to Nosegay Public School</h2>
              <p className="text-gray-700 mb-6">
                Nosegay Public School is committed to providing quality education with a focus on
                overall development of students. Our school aims to create a nurturing environment
                where students can discover their potential and grow into responsible citizens.
              </p>
              <p className="text-gray-700 mb-6">
                With a team of dedicated teachers and state-of-the-art facilities, we strive to
                provide the best educational experience for our students.
              </p>
              <Link
                href="/about"
                className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/news1.jpg"
                  alt="News 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 10, 2025</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Annual Sports Day</h3>
                <p className="text-gray-700 mb-4">
                  The annual sports day will be held on March 15th. All students are encouraged to participate.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/news2.jpg"
                  alt="News 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2025</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Science Exhibition</h3>
                <p className="text-gray-700 mb-4">
                  Students from grades 6-10 presented their innovative science projects at the annual exhibition.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/news3.jpg"
                  alt="News 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2025</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Parent-Teacher Meeting</h3>
                <p className="text-gray-700 mb-4">
                  The quarterly parent-teacher meeting will be held on March 20th to discuss student progress.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Modern Library</h3>
              <p className="text-gray-700">
                Our library has a vast collection of books, journals, and digital resources to support learning.
              </p>
            </div>

            {/* Facility 2 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Computer Labs</h3>
              <p className="text-gray-700">
                Well-equipped computer labs with the latest technology to enhance digital literacy.
              </p>
            </div>

            {/* Facility 3 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Sports Facilities</h3>
              <p className="text-gray-700">
                Extensive sports facilities including playgrounds, courts, and equipment for various games.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}