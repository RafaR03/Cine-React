export default function Offers() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-12">
            <div className="container grid items-center gap-4 px-4 md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-200 md:text-4xl/tight ml-4">Cinema Offers</h2>
                    <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ml-4">
                        Choose from a variety of offers for your next cinema trip.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-2">
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Happy Mondays</h3>
                        <p className="text-sm mb-4">Get 20% off on your cinema visit on mondays.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Weekday Discount</h3>
                        <p className="text-sm mb-4">Get 30% off your ticket for any films.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Popcorn and Drink Combo</h3>
                        <p className="text-sm mb-4">Get 50% off on drinks with the purchase of your popcorn.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Matinee or Early Bird Specials</h3>
                        <p className="text-sm mb-4">Get 40% off on the tickets for the films before 12:00 a.m.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Student Discounts</h3>
                        <p className="text-sm mb-4">Get 10% off if you present an student credential.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Double Features or Movie Marathons</h3>
                        <p className="text-sm mb-4">Get 50% off if you watch a marathon of a film series.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Happy Friday</h3>
                        <p className="text-sm mb-4">Get 20% off on your cinema visit on mondays.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Drink and Popcorn Combo</h3>
                        <p className="text-sm mb-4">Get 30% off on popcorns with the purchase of your drink.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                    <div className="border rounded-lg bg-gray-300 p-6">
                        <h3 className="text-lg font-semibold m-2">Snacks and Drink Combo</h3>
                        <p className="text-sm mb-4">Get 50% off on snacks with the purchase of your drinks.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get the offer</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
