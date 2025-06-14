
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Abhinav Goel</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Experience</a>
          <a href="#" className="hover:text-blue-500">Projects</a>
          <a href="#" className="hover:text-blue-500">Skills</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Business Analyst with a Computer Science Edge</h2>
        <p className="text-lg max-w-xl mx-auto">
          Bridging the gap between business insights and technical solutions. Skilled in analytics, data visualization, and full-stack thinking.
        </p>
      </section>

      {/* About Section */}
      <section className="p-10 bg-white">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p>
          I'm a results-oriented Business Analyst currently pursuing an MBA in Business Analytics with a background in Computer Science Engineering.
          I thrive on translating data into strategic decisions and building scalable solutions using my technical foundation.
        </p>
      </section>

      {/* Experience Section */}
      <section className="p-10 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-4">Experience</h3>
        <div>
          <h4 className="text-xl font-bold">Business Analyst Intern - ABC Analytics</h4>
          <p className="text-sm text-gray-600">Jan 2024 – May 2024</p>
          <ul className="list-disc ml-6">
            <li>Analyzed customer churn data and identified key KPIs using Excel and SQL.</li>
            <li>Created dashboards in Power BI for weekly stakeholder reports.</li>
            <li>Collaborated with dev team to improve reporting automation.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-bold">Technical Intern - XYZ Software Solutions</h4>
          <p className="text-sm text-gray-600">Jul 2022 – Sep 2022</p>
          <ul className="list-disc ml-6">
            <li>Built Python scripts to clean and process unstructured data.</li>
            <li>Worked on a small feature for an internal full-stack application.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-10 bg-white">
        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold">Sales Performance Dashboard</h4>
            <p>Power BI dashboard analyzing regional sales and profitability KPIs.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Customer Segmentation with Python</h4>
            <p>Used K-means clustering to segment retail customers and create actionable personas.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Mini HRMS Web App</h4>
            <p>Developed a basic CRUD-based HR management app using HTML, CSS, JS, and Firebase.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-10 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Business/Analytics Tools</h4>
            <ul className="list-disc ml-6">
              <li>Excel, Power BI, SQL</li>
              <li>Python (Pandas, Numpy)</li>
              <li>Alteryx (Basic), Qualtrics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Technical/CS Tools</h4>
            <ul className="list-disc ml-6">
              <li>HTML, CSS, JavaScript</li>
              <li>Firebase, GitHub</li>
              <li>Problem Solving & Algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Let’s Connect</h3>
        <p>Want to collaborate or hire me? Reach out via the links below.</p>
        <div className="flex justify-center mt-4 space-x-6 text-2xl">
          <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-700"><FaGithub /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Abhinav Goel. All rights reserved.</p>
      </footer>
    </div>
  );
}
