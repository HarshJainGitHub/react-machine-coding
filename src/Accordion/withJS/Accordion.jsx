import React, { useState } from "react";
import "./accordion.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-title" type="submit" onClick={() => handleToggle(index)}>
            {item.title}
            { openIndex === index ? <FaChevronUp /> : <FaChevronDown /> }
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
