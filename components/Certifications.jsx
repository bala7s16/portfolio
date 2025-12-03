export default function Certifications() {
    const certifications = [
        {
            name: "Redington Academy – Learn Copilot",
            issuer: "Microsoft Global Partner Solutions (GPS)",
            link: "https://www.credly.com/badges/18c50f6b-e8d0-4b8e-bc4d-e746119bf6c8/public_url?trk=public_profile_certification-title"
        },
        {
            name: "Generative AI Mastermind",
            issuer: "Outskill",
            link: "https://in.linkedin.com/school/outskillcom/?trk=public_profile_profile-section-card_subtitle-click"
        },
        {
            name: "Kotlin Multiplatform Masterclass - KMP&KMM - Android & iOS",
            issuer: "Udemy",
            link: "https://www.linkedin.com/company/udemy?trk=public_profile_profile-section-card_subtitle-click"
        },
        {
            name: "UI/UX with Figma and Adobe XD",
            issuer: "Udemy",
            link: "https://www.linkedin.com/company/udemy?trk=public_profile_profile-section-card_subtitle-click"
        },
        {
            name: "Applying Lean, DevOps, and Agile to Your IT Organization",
            issuer: "LinkedIn",
            link: "https://www.linkedin.com/learning/certificates/ca6c5ca449f306d753e2d2b1d11e8e5773435be860f18407664cffb2d52a556a?trk=public_profile_certification-title"
        },
        {
            name: "Develop Your Communication Skills and Interpersonal Influence",
            issuer: "LinkedIn",
            link: "https://www.linkedin.com/learning/certificates/08d32cbabc1ecd10b9765d02b7b080d36db5bc4c61aa3967ce05f4b228b5bf29?trk=public_profile_certification-title"
        },
        {
            name: "Lean Technology Strategy: Building High-Performing Teams",
            issuer: "LinkedIn",
            link: "https://www.linkedin.com/learning/certificates/b83930076d8c54c8e7868b9c07830965b7da8e68bb459f30425f3782f451987a?trk=public_profile_certification-title"
        },
        {
            name: "Lean Technology Strategy: Running Agile at Scale",
            issuer: "LinkedIn",
            link: "https://www.linkedin.com/learning/certificates/f2240dcbbfa403d6820bd7779cdc51e4f6eb5a3972a2889541a4f2c759b71f1f?trk=public_profile_certification-title"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Licenses & Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    📜
                                </div>
                                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2">{cert.name}</h3>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{cert.issuer}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
