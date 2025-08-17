import { Search, User, Menu } from "lucide-react";

const Header = () => {
  const propertyTypes = [
    { name: "Rooms", icon: "🏠" },
    { name: "Mansion", icon: "🏰" },
    { name: "Countryside", icon: "🌾" },
    { name: "Villa", icon: "🏖️" },
    { name: "Tropical", icon: "🌴" },
    { name: "New", icon: "✨" },
    { name: "Amazing pool", icon: "🏊" },
    { name: "Beach house", icon: "🏖️" },
    { name: "Island", icon: "🏝️" },
    { name: "Camping", icon: "⛺" },
    { name: "Apartment", icon: "🏢" },
    { name: "House", icon: "🏡" },
    { name: "Lakefront", icon: "🏞️" },
    { name: "Farm house", icon: "🚜" },
    { name: "Treehouse", icon: "🌳" },
    { name: "Cabins", icon: "🛖" },
    { name: "Castles", icon: "🏰" },
  ];

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-[#34967C] text-white text-sm py-2 px-4 flex items-center justify-center">
        <span>
          📧 Overseas trip? Get the latest information on travel guides
        </span>
        <button className="ml-2 bg-black text-white px-3 py-1 rounded text-xs">
          More info
        </button>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm">
        {/* Mobile and tablet layout */}
        <div className="lg:hidden px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Menu className="w-6 h-6 text-gray-600" />
              <div className="text-xl font-bold text-pink-500">alx</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
              <User className="w-8 h-8 text-gray-600 border rounded-full p-1" />
            </div>
          </div>

          {/* Search bar for mobile/tablet */}
          <div className="relative">
            <input
              type="text"
              placeholder="Where to"
              className="w-full border rounded-full px-4 py-3 pr-12 text-gray-600"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-pink-500">alx</div>

            {/* Search section */}
            <div className="flex items-center bg-white border rounded-full shadow-sm max-w-2xl flex-1 mx-8">
              <div className="px-6 py-3 border-r">
                <div className="text-xs font-medium text-gray-700 mb-1">
                  Location
                </div>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="text-sm text-gray-500 bg-transparent outline-none w-full"
                />
              </div>
              <div className="px-6 py-3 border-r">
                <div className="text-xs font-medium text-gray-700 mb-1">
                  Check in
                </div>
                <div className="text-sm text-gray-500">Add dates</div>
              </div>
              <div className="px-6 py-3 border-r">
                <div className="text-xs font-medium text-gray-700 mb-1">
                  Check out
                </div>
                <div className="text-sm text-gray-500">Add dates</div>
              </div>
              <div className="px-6 py-3">
                <div className="text-xs font-medium text-gray-700 mb-1">
                  People
                </div>
                <div className="text-sm text-gray-500">Add guests</div>
              </div>
              <div className="pr-2">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <button className="text-teal-600 bg-teal-50 px-4 py-2 rounded-full text-sm font-medium">
                  Sign in
                </button>
                <button className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property type filters */}
        <div className="border-t px-4 lg:px-6 py-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-fit cursor-pointer group"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <span className="text-xs text-gray-600 group-hover:text-gray-800 whitespace-nowrap">
                  {type.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
