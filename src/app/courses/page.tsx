import Image from "next/image";

export default function CoursePage() {
  // Sample course data
  const courses = [
    {
      id: 1,
      thumb: "https://cdn.ostad.app/course/cover/2024-11-07T13-34-17.205Z-Untitled-1%20(18).jpg", // Placeholder image URL
      title: "Python, Django & React",
      enrolled: 1200,
    },
    {
      id: 2,
      thumb: "https://cdn.ostad.app/course/cover/2024-12-19T15-48-52.487Z-Full-Stack-Web-Development-with-Python,-Django-&-React.jpg", // Placeholder image URL
      title: "Data Science & Machine Learning with Python for Beginners",
      enrolled: 850,
    },
    {
      id: 3,
      thumb: "https://cdn.ostad.app/course/cover/2024-12-18T15-24-44.114Z-Untitled-1%20(21).jpg", // Placeholder image URL
      title: "Database of the Web",
      enrolled: 450,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Free Online Courses</h1>
          <p className="text-xl text-gray-600">Learn and grow with our free online courses</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
              {/* Thumbnail */}
              <Image
                width={500}
                height={300}
                src={course.thumb}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Course Details */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>

                {/* Enrolled Count */}
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">{course.enrolled}</span> students enrolled
                </p>

                {/* Enroll Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// export default function CoursePage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Python, Django & React</h1>
//           <h2 className="text-2xl font-semibold text-gray-600">Full Stack Web Development with Python, Django & React</h2>
//         </div>

//         {/* SQL Section */}
//         <div className="bg-white p-8 rounded-lg shadow-md mb-8">
//           <h3 className="text-3xl font-bold text-gray-800 mb-6">SQL: Manual & Automated Testing</h3>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h4 className="text-xl font-semibold text-gray-700 mb-2">SQL</h4>
//               <ul className="list-disc list-inside text-gray-600">
//                 <li>Standard Texting</li>
//                 <li>Maintaining Texting</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Data Analytics Section */}
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h3 className="text-3xl font-bold text-gray-800 mb-6">Data Analytics Job Ready Program</h3>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h4 className="text-xl font-semibold text-gray-700 mb-2">Data Science & Machine Learning with Python for Beginners</h4>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h4 className="text-xl font-semibold text-gray-700 mb-2">Database of the web</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }