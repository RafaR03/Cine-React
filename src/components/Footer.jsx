import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Imperium Cinema</h3>
          <p>1234 Movie St, Film City, 90001</p>
          <div className="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6 w-6"><path fill="#ffffff" d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" alt="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" className="h-6 w-6" /></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@imperiumcinema.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p>Mon - Fri: 10:00 AM - 9:00 PM</p>
          <p>Sat - Sun: 10:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <a className="text-sm ml-4 hover:underline" href="#">
            About
          </a>
          <a className="text-sm ml-10 hover:underline" href="#">
            Terms & Conditions
          </a>
          <a className="text-sm ml-10 hover:underline" href="#">
            Privacy Policy
          </a>
        </div>
        <div className="md:text-center">
          <p className="text-sm">© 2024 Imperium Cinema. All rights reserved.</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm">Website by Rafael Ruz Castañeda</p>
        </div>
      </div>
    </footer>
  )
}
