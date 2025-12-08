"use client";

import React from 'react';
import Image from 'next/image';

export default function Resume() {
    const contactInfo = {
        email: "bala.subburaj@outlook.com",
        phone: "+91 9003112971", // Placeholder
        address: "Chennai, India", // Placeholder
        website: "www.bala.ai.in"
    };

    const socialLinks = {
        linkedin: "linkedin.com/in/bala",
        github: "github.com/bala"
    };

    const education = [
        {
            school: "Sri Venkateswara College of Engineering and Technology",
            degree: "Master of Computer Applications (MCA)",
            period: "2008 - 2011"
        },
        {
            school: "V.O.C. College, Tuticorin",
            degree: "Bachelor of Science - Physics",
            period: "2004 - 2007"
        }
    ];

    const experiences = [
        {
            company: "Redington Limited",
            role: "Project Manager & Project Team Lead",
            period: "2019 - Present",
            description: "Managed end-to-end delivery of mobile and web applications (Android, iOS, Flutter, React Native, KMP) and cloud adoption (AWS, GCP, Azure). Led engineering teams as technical architect and delivery coordinator, ensuring alignment between technical execution and business goals."
        },
        {
            company: "METAPLORE Solutions",
            role: "Tech Lead",
            period: "2017 - 2019",
            description: "Hands-on implementation of applications across Android, iOS, .NET, Node.js. Responsible for app lifecycle."
        },
        {
            company: "SAADHVI TECHNOLOGY",
            role: "Senior Software Engineer",
            period: "2016 - 2017",
            description: "Developed E-commerce platforms and IoT solutions. Integrated indoor navigation SDKs."
        },
        {
            company: "EGB Systems & Solutions",
            role: "Software Engineer",
            period: "2015",
            description: "Delivered digital transformation and enterprise mobility solutions."
        },
        {
            company: "Mitosis Technologies",
            role: "Software Engineer",
            period: "2014 - 2015",
            description: "Designed location-aware shopping apps and digital wallets."
        },
        {
            company: "BrainchildTechnologies",
            role: "Android Developer",
            period: "2012 - 2014",
            description: "Developed apps for smart dental equipment and IoT coffee machines."
        }
    ];

    const skills = [
        { name: "Mobile (Android/iOS/Flutter/KMP)", level: 95 },
        { name: "Full Stack (.NET/Node/React)", level: 90 },
        { name: "Cloud & DevOps (AWS/Azure/CI/CD)", level: 85 },
        { name: "project Management & Leadership", level: 90 },
        { name: "System Architecture", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Automation Testing (Appium/Postman/Scripts/Performance)", level: 85 }
    ];



    return (
        <div className="min-h-screen bg-gray-100 py-10 flex justify-center font-sans print:p-0 print:bg-white">
            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        print-color-adjust: exact;
                        -webkit-print-color-adjust: exact;
                    }
                    .no-print {
                        display: none !important;
                    }
                }
            `}</style>

            {/* Download Button */}
            <button
                onClick={() => window.print()}
                className="no-print fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50 flex items-center gap-2 font-bold"
                aria-label="Download Resume"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
            </button>

            <div className="w-[210mm] min-h-[297mm] h-[297mm] bg-white shadow-2xl flex overflow-hidden print:shadow-none print:w-full print:h-screen">
                {/* Left Sidebar */}
                <div className="w-[32%] bg-[#333333] text-white overflow-hidden relative flex flex-col">
                    {/* Top Yellow Shape */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-[#fdc844] z-0"></div>

                    {/* Profile Image Section */}
                    <div className="relative z-10 p-5 flex flex-col items-center mt-6">
                        <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-xl mb-6 bg-gray-200">
                            <img
                                src="/profile-cropped.png"
                                alt="Balamurugan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="px-6 pb-6 relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-1 h-6 bg-[#fdc844]"></div>
                            <h2 className="text-lg font-bold tracking-widest text-white uppercase">Contact Me</h2>
                        </div>

                        <div className="space-y-4 text-[11px] text-gray-300 font-light">
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5">📞</span>
                                <div><p>{contactInfo.phone}</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5">📧</span>
                                <div className="break-all"><p>{contactInfo.email}</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5">🌐</span>
                                <div><p>{contactInfo.website}</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5">🔗</span>
                                <div className="break-all"><p>linkedin.com/in/balamurugan-subburaj</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5">📍</span>
                                <div className="leading-relaxed"><p>{contactInfo.address}</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="px-6 pb-6 relative z-10 flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-1 h-6 bg-[#fdc844]"></div>
                            <h2 className="text-lg font-bold tracking-widest text-white uppercase">Education</h2>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx}>
                                    <h3 className="font-bold text-white text-[11px] uppercase mb-1">{edu.school}</h3>
                                    <p className="text-gray-400 text-[10px] mb-1 uppercase">{edu.degree}</p>
                                    <p className="text-[#fdc844] text-[10px] font-bold">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="mt-auto h-8 w-full bg-[#1a1a1a] flex items-center justify-center">
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-[68%] bg-white p-6 relative flex flex-col">
                    {/* Top Decoration Line */}
                    <div className="absolute top-12 left-0 w-6 h-1 bg-[#fdc844]"></div>

                    {/* Header */}
                    <div className="mb-8 mt-4 pl-4">
                        <h1 className="text-4xl font-black text-[#333333] uppercase leading-none tracking-tight mb-2">
                            Balamurugan<br /><span className="text-[#fdc844]">Subburaj</span>
                        </h1>
                        <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mt-2">Project Manager & Tech Lead</p>
                    </div>

                    {/* About Me */}
                    <div className="mb-8 relative">
                        <h2 className="text-lg font-bold text-[#333333] uppercase mb-3 flex items-center gap-3">
                            About Me
                        </h2>
                        <div className="absolute left-[-2rem] top-1.5 bottom-0 w-[1px] bg-gray-200">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#fdc844] rounded-full"></div>
                        </div>
                        <p className="text-gray-600 text-[11px] leading-relaxed text-justify">
                            I am a Technology Leader, Project Manager, and Senior Mobile + Full Stack Developer with a proven track record of delivering enterprise-grade solutions. I bridge the gap between complex engineering and business value. My expertise spans Mobile Engineering (Android, iOS, KMP), Full Stack, and AI-driven automation.
                        </p>
                    </div>

                    {/* Job Experience */}
                    <div className="mb-8 relative">
                        <h2 className="text-lg font-bold text-[#333333] uppercase mb-4 flex items-center gap-3">
                            Job Experience
                        </h2>
                        <div className="absolute left-[-2rem] top-1.5 bottom-0 w-[1px] bg-gray-200">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#fdc844] rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute left-[-2.35rem] top-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full border border-white"></div>

                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-gray-800 text-[11px] uppercase">{exp.role}</h3>
                                        <span className="text-[10px] font-bold text-gray-500">{exp.period}</span>
                                    </div>
                                    <p className="text-[10px] font-bold text-gray-500 italic mb-1">{exp.company}</p>
                                    <p className="text-gray-600 text-[10px] leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills - Moved back to Main Column */}
                    <div className="relative mt-8">
                        <h2 className="text-lg font-bold text-[#333333] uppercase mb-4 flex items-center gap-3">
                            Skills
                        </h2>
                        <div className="absolute left-[-2rem] top-1.5 bottom-0 w-[1px] bg-gray-200">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#fdc844] rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-[10px] font-bold text-gray-700 uppercase">{skill.name}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#fdc844]"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Corner Decoration */}
                        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#fdc844] transform rotate-45 translate-y-8 translate-x-8 z-0"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
