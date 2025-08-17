import Image from "next/image";
import ALX_LOGO from "@/public/assets/alx_logo.png";
const Footer = () => {
  return (
    <>
      {/* Green accent bar */}
      <div className="h-4 bg-[#34967C]"></div>

      {/* Black accent bar */}
      <div className="bg-[#222222] text-white px-3 md:px-6">
        <div className="px-10 lg:flex lg:flex-row lg:justify-between lg:gap-8 lg:items-start lg:py-8">
          {/* Logo and Description */}
          <div className="block mb-8 g:mb-0 lg:flex-shrink-0 lg:max-w-md">
            <h2 className="text-2xl font-bold mb-4 pt-0">
              <Image src={ALX_LOGO} alt="ALX Logo" width={50} height={50} />
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8  lg:gap-16">
            {/* {" Explore Sections "} */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Apartments in Dubai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hotels in New York
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Villa in Spain
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mansion in Indonesia
                  </a>
                </li>
              </ul>
            </div>
            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brand
                  </a>
                </li>
              </ul>
            </div>
            {/* Help Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cancel booking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refunds Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="border-t border-gray-600">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* Cancellation Policy Notice */}
              <div className="text-center mb-4 sm:px-5 md:px-2  lg:text-left">
                <p className="text-gray-400 text-sm">
                  Some hotel requires you to cancel more than 24 hours before
                  check-in. Details{" "}
                  <a href="#" className="text-[#34967C] hover:underline">
                    here
                  </a>
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Policy service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies Policy
                </a>
                {/* Partners link appears only on desktop */}
                <a
                  href="#"
                  className="hover:text-white transition-colors hidden lg:inline"
                >
                  Partners
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
