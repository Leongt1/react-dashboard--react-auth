import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';

import "./burgerMenu.scss";

const BurgerMenu = ({ toggleBurgerMenu }) => {
	
	const [isClicked, setIsClicked] = useState(false);

	const burgerButtonClickHandler = () => {
    setIsClicked(!isClicked);

    toggleBurgerMenu(isClicked);
  };

	return (
		<button 
      className="burger-btn" 
      onClick={burgerButtonClickHandler}
    >
			<HiMenuAlt1 
        id="burger-icon" 
        className={isClicked ? "close" : ""} 
      />
			<AiOutlineClose
        id="close-icon"
				className={!isClicked ? "open" : ""}
			/>
		</button>
	);
};

export default BurgerMenu;
