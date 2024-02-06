import { Link } from 'react-router-dom';


const OffersAdvant = () => {
    return (
        <div className="flex justify-between gap-4 p-4 mt-4 mb-4">
            <Link to="/Offers" className="flex flex-col items-center justify-center bg-gray-600 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-1/2 mb-4 ml-2 mr-2">
                <img alt="Offers" className="object-cover w-full h-64 rounded-lg" src="./img/cine-promo.jpg" />
                <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-300">Offers</h2>
            </Link>
            <Link to="/Advantages" className="flex flex-col items-center justify-center bg-gray-600 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-1/2 mb-4 mr-2">
                <img alt="Advantages" className="object-cover w-full h-64 rounded-lg" src="./img/cine-adv.png" />
                <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-300">Advantages</h2>
            </Link>
        </div>
    )
}

export default OffersAdvant;