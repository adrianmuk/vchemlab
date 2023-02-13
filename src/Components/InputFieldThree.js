import '../App.css';
import React, { useState } from 'react';

function InputFieldThree({setTopColorProp}) {
    //Input Bottom Chemical
    const [selectedChemical, setSelectedChemical] = useState("");
    //const [topColor, setTopColor] = useState("");

    const chemicals = [
        { name: "Acetic Acid", color: "red" },
        { name: "Sulfuric Acid", color: "yellow" },
        { name: "Hydrogen Peroxide", color: "blue" },
        { name: "Sodium Hydroxide", color: "green" },
        { name: "Nitric Acid", color: "orange" }
    ];  


    const handleChange = (e) => {
        setSelectedChemical(e.target.value);
        setTopColorProp(chemicals.find(chemical => chemical.name === e.target.value).color);
        //setTopColorProp(topColor); 
    }


    return(
        <select value={selectedChemical} onChange={handleChange}>
            {chemicals.map((chemical, index) => (
                <option key={index} value={chemical.name} style={{ color: chemical.color }}>
                    {chemical.name}
                </option>
            ))}
        </select>
    );
}
export default InputFieldThree;