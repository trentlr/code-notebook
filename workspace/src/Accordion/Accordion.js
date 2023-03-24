import { useState } from "react";

import { faqs } from "./DummyData";

import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";

function Accordion() {

    const [ clicked, setClicked ] = useState("0");

    const handleToggle = (index) => {
        if ( clicked === index ) {
            return setClicked( "0" )
        }
        setClicked(index)
    }


    return(
        <ul className="accordion">
            <AccordionHeader/>
            {faqs.map((faq, index) => (
                <AccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active={clicked === index}/>
            ))}
        </ul>
    )
}

export default Accordion;