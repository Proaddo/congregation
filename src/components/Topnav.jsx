import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isClickMode, setIsClickMode] = useState(false);

  const handleMenuClick = (idx) => {
    setIsClickMode(true);
    setOpenMenu(openMenu === idx ? null : idx);
    setOpenSubMenu(null);
  };

  const handleSubMenuClick = (dIdx) => {
    setIsClickMode(true);
    setOpenSubMenu(openSubMenu === dIdx ? null : dIdx);
  };

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blanglore Provinces", href: "/bangalore-province"},
    {
      label: "Formation",
      dropdown: [
        {
          label: "Formation",
          subItems: [
            { label: "Come & See", href: "/formation/come-and-see" },
            { label: "Student Candidates", href: "/formation/student-candidates" },
            { label: "Pre-Novitiate", href: "/formation/pre-novitiate" },
            { label: "Novitiate", href: "/formation/novitiate" },
            { label: "Juniorate", href: "/formation/juniorate" },
            { label: "Tertiate", href: "/formation/tertiate" },
          ],
        },
        { label: "Vocation Animation", href: "/vocation-animation" },
      ],
    },
    {
      label: "Sacred Mission",
      dropdown: [
        { label: "Educational", href: "/sacred-mission/educational" },
        { label: "Pastoral", href: "/sacred-mission/pastoral" },
        { label: "Medical", href: "/sacred-mission/medical" },
        { label: "Social", href: "/sacred-mission/social" },
        { label: "Care of the Differently Abled", href: "/sacred-mission/care" },
        { label: "Hostel", href: "/sacred-mission/hostels" },
        { label: "Youth Ministry", href: "/sacred-mission/youth" },
      ],
    },
    {
      label: "Founder's memorial",
      href: "/founders-memorial"
    },
    {
      label: "superior-general-message",
      href: "superior-general-message"
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-700 to-red-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24"> {/* Increased height */}
          {/* Logo - Made larger */}
          <div className="flex items-center gap-4 ml-2">
            <img
              src="/src/assets/bethany-logo.png"
              alt="Bethany Logo"
              className="h-20 w-auto object-contain rounded-md border-2 border-white shadow-lg"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-0"> {/* Changed to space-x-0 */}
            {navigationItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => !isClickMode && setOpenMenu(idx)}
                onMouseLeave={() => !isClickMode && setOpenMenu(null)}
              >
                {item.dropdown ? (
                  <button 
                    className="text-white hover:brightness-110 px-4 py-3 flex items-center gap-1 text-sm font-semibold transition-colors" // Added px-4 py-3
                    onClick={() => handleMenuClick(idx)}
                  >
                    {item.label} <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:brightness-110 px-4 py-3 text-6 font-semibold block transition-colors" // Added px-4 py-3
                    onClick={() => {
                      setOpenMenu(null);
                      setOpenSubMenu(null);
                      setIsClickMode(false);
                    }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && openMenu === idx && (
                  <div 
                    className="absolute left-0 mt-0 w-56 bg-gradient-to-b from-red-700 to-red-900 text-white rounded-b shadow-xl z-50" // Changed shadow
                    onMouseEnter={() => !isClickMode && setOpenMenu(idx)}
                    onMouseLeave={() => !isClickMode && setOpenMenu(null)}
                  >
                    {item.dropdown.map((drop, dIdx) =>
                      drop.subItems ? (
                        <div
                          key={dIdx}
                          className="relative group"
                          onMouseEnter={() => !isClickMode && setOpenSubMenu(dIdx)}
                          onMouseLeave={() => !isClickMode && setOpenSubMenu(null)}
                        >
                          <div 
                            className="flex items-center justify-between px-4 py-3 hover:bg-red-800 cursor-pointer transition-colors" // Added py-3
                            onClick={() => handleSubMenuClick(dIdx)}
                          >
                            {drop.label} <ChevronRight className="w-4 h-4" />
                          </div>

                          {/* Submenu */}
                          {openSubMenu === dIdx && (
                            <div 
                              className="absolute top-0 left-full w-56 bg-gradient-to-b from-red-700 to-red-900 text-white rounded-r shadow-xl" // Changed shadow
                            >
                              {drop.subItems.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={sub.href}
                                  className="block px-4 py-3 hover:bg-red-800 transition-colors" // Added py-3
                                  onClick={() => {
                                    setOpenMenu(null);
                                    setOpenSubMenu(null);
                                    setIsClickMode(false);
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={dIdx}
                          to={drop.href}
                          className="block px-4 py-3 hover:bg-red-800 transition-colors" // Added py-3
                          onClick={() => {
                            setOpenMenu(null);
                            setIsClickMode(false);
                          }}
                        >
                          {drop.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-red-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />} {/* Increased icon size */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1"> {/* Reduced space-y */}
            {navigationItems.map((item, idx) => (
              <div key={idx}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === idx ? null : idx)
                      }
                      className="w-full flex justify-between items-center text-white px-5 py-3 hover:bg-red-800 transition-colors" // Added px-5 py-3
                    >
                      {item.label} <ChevronDown className="w-4 h-4" />
                    </button>

                    {openMenu === idx && (
                      <div className="pl-4 bg-gradient-to-b from-red-700 to-red-900 rounded">
                        {item.dropdown.map((drop, dIdx) =>
                          drop.subItems ? (
                            <div key={dIdx}>
                              <button
                                onClick={() =>
                                  setOpenSubMenu(
                                    openSubMenu === dIdx ? null : dIdx
                                  )
                                }
                                className="w-full flex justify-between items-center text-white px-5 py-3 hover:bg-red-800 transition-colors" // Added px-5 py-3
                              >
                                {drop.label} <ChevronRight className="w-4 h-4" />
                              </button>
                              {openSubMenu === dIdx && (
                                <div className="pl-4">
                                  {drop.subItems.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={sub.href}
                                      className="block px-5 py-3 hover:bg-red-800 text-white transition-colors" // Added px-5 py-3
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={dIdx}
                              to={drop.href}
                              className="block px-5 py-3 hover:bg-red-800 text-white transition-colors" // Added px-5 py-3
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {drop.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-5 py-3 text-white hover:bg-red-800 transition-colors" // Added px-5 py-3
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topnav;