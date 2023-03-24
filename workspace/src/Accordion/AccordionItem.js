import { useRef } from "react";

function AccordionItem ({ faq, onToggle, active })  {

 const { question, answer } = faq;
 
 const contentHeight = useRef();

 return (
  <li className={`accordion_item ${active ? "active" : ""}`}>
   <button className="button" onClick={onToggle}>
    {question}
    <span className="control">{active ? "—" : "+"} </span>
   </button>
   <div ref={contentHeight} className="answer_wrapper" style={
        active ? { height: contentHeight.current.scrollHeight } 
        : { height: "0px" }
   }>
    <div className="answer">{answer}</div>
   </div>
  </li>
 );
};

export default AccordionItem;