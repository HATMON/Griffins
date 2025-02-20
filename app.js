const App = () => {
    return (
        <div className="bg-gray-100">
            {/* Header */}
            <header className="bg-black text-white">
                <div className="container mx-auto flex justify-between items-center py-2 px-4">
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">+021-95-51-84</span>
                        <span className="text-sm">email@email.com</span>
                        <span className="text-sm">1734 Stonecoal Road</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">KSH</span>
                        <span className="text-sm">My Account</span>
                        <span className="text-sm">Your Wishlist</span>
                        <span className="text-sm">Your Cart</span>
                    </div>
                </div>
            </header>
            {/* Navbar */}
            <nav className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    <div className="text-2xl font-bold text-red-600">Griffins.</div>
                    <div className="flex items-center space-x-4">
                        <select className="border border-gray-300 rounded px-2 py-1">
                            <option>All Categories</option>
                        </select>
                        <input className="border border-gray-300 rounded px-2 py-1" placeholder="Search here" type="text"/>
                        <button className="bg-red-600 text-white px-4 py-1 rounded">Search</button>
                    </div>
                    <ul className="flex space-x-4">
                        <li><a className="text-gray-700" href="#">Home</a></li>
                        <li><a className="text-gray-700" href="#">Hot Deals</a></li>
                        <li className="relative dropdown">
                            <a className="text-gray-700" href="#">Categories</a>
                            <ul className="absolute hidden dropdown-menu bg-white shadow-lg rounded mt-2">
                                <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="#">Laptops</a></li>
                                <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="#">Smartphones</a></li>
                                <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="#">Cameras</a></li>
                                <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="#">Accessories</a></li>
                                <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="#">Samsung Phones</a></li>
                                <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="#">Monitors</