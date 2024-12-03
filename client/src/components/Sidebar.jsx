import React, { useState } from 'react'; // for managing local component state
import { Link, useNavigate } from 'react-router-dom'; // link = navigation & useNavigate = programmatic routing

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => 
(
    // rendering an icon with dynamic styling & behavior
    <div 
        // adds styles dynamically based on active state, disabled status & passed styles
        className={`w-[48px] h-[48px] rounded-[10px] 
                    ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center 
                    ${!disabled && 'cursor-pointer'} 
                    ${styles}`}
        onClick={handleClick}  // calling handleClick function when icon is clicked
    >
        {!isActive ? // checking if icon is active
        (
            <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" /> // display icon normally if not active
        ) : 
        (
            // add grayscale effect if icon is not active
            <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
        )}
    </div>
);

const Sidebar = () => 
{
    const navigate = useNavigate(); // initializes navigate function for programmatic navigation
    const [isActive, setIsActive] = useState('dashboard'); // manages active state of current navigation link

    return (
        // main sidebar container with sticky positioning & vertical layout
        <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
            <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} /> {/* render the logo as an icon */}
            </Link>

            {/* nav links container with a dark bg & rounded corners */}
            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
                {/* mapping through nav links & render them as icons */}
                <div className="flex flex-col justify-center items-center gap-3">
                    {navlinks.map((link) => 
                    (
                        <Icon 
                            key={link.name} 
                            {...link} 
                            isActive={isActive} 
                            handleClick={() => 
                            {
                                if(!link.disabled) 
                                {   // updates active state & navigates if link is not disabled
                                    setIsActive(link.name);
                                    navigate(link.link);
                                }
                            }}
                        />
                    ))}
                </div>
                
                {/* renders bottom sun icon for potential toggle functionality */}
                <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} /> 
            </div>
        </div>
    )
}

export default Sidebar