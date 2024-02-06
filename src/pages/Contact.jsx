import React from "react";

export default function Contact() {
    return (
        <div className="space-y-8 text-white">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-white dark:text-gray-400">
                    We'd love to hear from you. Fill out the form below or use the contact details on the right.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="font-bold text-white mr-4 align-center">Name</label>
                        <input id="name" placeholder="Enter your name" type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 text-white" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-bold text-white mr-4 align-center">Email</label>
                        <input id="email" placeholder="Enter your email" type="email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 text-white" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="font-bold text-white mr-4 align-top">Message</label>
                        <textarea id="message" placeholder="Enter your message" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 min-h-[100px] text-white" />
                    </div>
                    <div className="ml-20">
                        <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-4">Submit</button>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Contact Details</h3>
                        <p className="text-white dark:text-gray-400">Imperium Cinema</p>
                        <p className="text-white dark:text-gray-400">1234 Cinema Lane</p>
                        <p className="text-white dark:text-gray-400">Movietown, MV 56789</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Phone</h3>
                        <p className="text-white dark:text-gray-400">(123) 456-7890</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-white dark:text-gray-400">contact@imperiumcinema.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
