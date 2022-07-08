import React, {useState} from 'react'
import "../css/nav.css";


    // Insert nav tabs here
const navLinks = [
  { navLinkId: 'Home', scrollToId: 'homeContainer'},
  { navLinkId: 'Advantages', scrollToId: 'advantagesContainer' },
  { navLinkId: 'Contact', scrollToId: 'contactContainer' } // etc.
]



    // function for making one navigation link components
const NavLink = ({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({
			behavior: 'smooth', // gives an ease-in-out effect to our scroll
		});
	};

    

	return (
		<span 
		 	id={navLinkId} 
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''} 
		 	onClick={handleClick}
		>
			{navLinkId}
		</span>
	);
};



    // Navigation component itself
const NavigationBar2 = () => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	return (
	    <nav>
                {/* Iteratively add nav links using the 'map' method */}
	      {navLinks.map(
		({navLinkId, scrollToId}) =>
		  <NavLink 
			navLinkId={navLinkId} 
			scrollToId={scrollToId} 
			activeNavLinkId={activeNavLinkId}
			setActiveNavLinkId={setActiveNavLinkId} 
		  />
	      )}
	    </nav>
	  )
};


export default NavigationBar2;