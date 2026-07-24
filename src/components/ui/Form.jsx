import React, { useState } from 'react';


const Form = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setStatusMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/sudais.datasceince@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    subject: subject,
                    message: message,
                    _subject: 'New Submission from BraxSystems Landing Page'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage('Thank you! Your message has been sent successfully.');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setStatus('error');
                setStatusMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('Failed to connect to the server. Please try again later.');
        }
    };

    return (
        <div className="w-full">
            <a href="/" className="inline-block mb-8 text-primary-bg border-2 border-primary-bg px-4 py-2 font-bold uppercase hover:bg-primary-bg hover:text-primary-text transition-colors duration-300">
                &larr; Back to Home
            </a>
            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 w-full p-8 border-4 border-primary-bg bg-primary-text shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-full">
                    <label className="block font-black uppercase tracking-widest mb-2 text-primary-bg">Your Email</label>
                    <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-4 bg-primary-text text-primary-bg border-4 border-primary-bg focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300 font-bold placeholder:text-gray-500" 
                        placeholder="YOU@EXAMPLE.COM" 
                    />
                </div>
                
                <div className="w-full">
                    <label className="block font-black uppercase tracking-widest mb-2 text-primary-bg">Subject</label>
                    <input 
                        type="text" 
                        required 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-4 bg-primary-text text-primary-bg border-4 border-primary-bg focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300 font-bold placeholder:text-gray-500" 
                        placeholder="WHAT IS THIS ABOUT?" 
                    />
                </div>

                <div className="w-full">
                    <label className="block font-black uppercase tracking-widest mb-2 text-primary-bg">Message</label>
                    <textarea 
                        required 
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-4 bg-primary-text text-primary-bg border-4 border-primary-bg focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300 font-bold placeholder:text-gray-500 resize-none" 
                        placeholder="YOUR MESSAGE DETAILS..." 
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full px-8 py-5 bg-primary-bg text-primary-text border-4 border-primary-bg hover:bg-primary-text hover:text-primary-bg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none font-black uppercase text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
            </form>

            {statusMessage && (
                <div className={`mt-8 p-6 text-lg font-black uppercase tracking-wider border-4 text-center ${
                    status === 'success' 
                        ? 'bg-primary-text text-primary-bg border-primary-bg' 
                        : 'bg-primary-bg text-primary-text border-primary-bg'
                }`}>
                    {statusMessage}
                </div>
            )}
        </div>
    );
};

export default Form;