export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Cinema Advantages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        <div className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16 h-16 text-green-500"><path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm72 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-120 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-97.2 78.8-176 176-176c8.8 0 16 7.2 16 16s-7.2 16-16 16c-79.5 0-144 64.5-144 144z" /></svg>
          <h2 className="text-lg font-semibold">Discounts</h2>
          <p className="text-sm text-center">Enjoy exclusive discounts on tickets and concessions.</p>
        </div>
        <div className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-16 h-16 text-blue-500"><path fill="#3b82f6" d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z" /></svg>
          <h2 className="text-lg font-semibold">Early Access</h2>
          <p className="text-sm text-center">Get early access to tickets for highly anticipated movies.</p>
        </div>
        <div className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-16 h-16 text-purple-500"><path fill="#8000ff" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" /></svg>
          <h2 className="text-lg font-semibold">Special Events</h2>
          <p className="text-sm text-center">Attend special events such as premieres and Q&A sessions.</p>
        </div>
        <div className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16 h-16"><path fill="#FFD43B" d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 .3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32H32zM87.7 224L69 96H443L424.3 224H87.7z"/></svg>
          <h2 className="text-lg font-semibold">Free Drink</h2>
          <p className="text-sm text-center">Get a free drink on your birthday and other special occasions.</p>
        </div>
        <div className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-16 h-16 text-red-500"><path fill="#ff0000" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
          <h2 className="text-lg font-semibold">Reserved Seating</h2>
          <p className="text-sm text-center">Reserve your favorite seat in advance for a hassle-free experience.</p>
        </div>
        <div className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-16 h-16 text-indigo-500" ><path fill="#6ba1ff" d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>
          <h2 className="text-lg font-semibold">Loyalty Points</h2>
          <p className="text-sm text-center">Earn points on every purchase and redeem them for free tickets and concessions.</p>
        </div>
      </div>
    </main>
  )
}

