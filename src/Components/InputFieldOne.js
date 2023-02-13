import '../App.css';
import React, { useState } from 'react';

function InputFieldOne({setBottomColorProp, setChemIDProp }) {
    //Input Bottom Chemical
    const [selectedChemical, setSelectedChemical] = useState("");
    //const [bottomColor, setBottomColor] = useState("");
    
    const chemicals = [
        { name: "Acetic Acid", color: "red", chemID: "A1" },
        { name: "Sulfuric Acid", color: "yellow", chemID: "A2" },
        { name: "Hydrogen Peroxide", color: "blue", chemID: "A3" },
        { name: "Sodium Hydroxide", color: "green", chemID: "A4" },
        { name: "Nitric Acid", color: "orange", chemID: "A5" }
    ];  


    const handleChange = (e) => {
        setSelectedChemical(e.target.value);
        setBottomColorProp(chemicals.find(chemical => chemical.chemID === e.target.value).color); 
        setChemIDProp(chemicals.find(chemical => chemical.chemID === e.target.value).chemID)  
        //setBottomColorProp(bottomColor); 
    }


    return(
        <select value={selectedChemical} onChange={handleChange}>
            {chemicals.map((chemical, index) => (
                <option key={index} value={chemical.chemID} style={{ color: chemical.color }}>
                    {chemical.name}
                </option>
            ))}
        </select>
        
    );
}
export default InputFieldOne;