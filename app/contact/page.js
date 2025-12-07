"use client";

import toast from 'react-hot-toast';

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        const loadingToast = toast.loading('Sending message...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Message sent successfully!', { id: loadingToast });
                e.target.reset();
            } else {
                toast.error('Failed to send message. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.', { id: loadingToast });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Let's Connect</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Let’s build exceptional products together.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <div className="space-y-8 lg:pr-12">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:mail@bala.ai.in" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📧</div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Email</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">mail@bala.ai.in</p>
                                </div>
                            </a>

                            <a href="tel:9003112971" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group">
                                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📱</div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Phone</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">9003112971</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/balamurugan-subburaj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🔗</div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">LinkedIn</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">View Profile</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700">
                        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Send a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                                    <input name="name" type="text" required className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                                    <input name="email" type="email" required className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                                <input name="subject" type="text" required className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                                <textarea name="message" required className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-40 resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
