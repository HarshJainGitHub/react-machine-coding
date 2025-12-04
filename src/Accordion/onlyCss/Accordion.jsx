import React from "react";
import "./accordion.css";

// toggle with css only
const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <input type="checkbox" id="item1" />
        <label for="item1" className="accordion-header">
          Accordion item 1
        </label>
        <div className="accordion-content">
          <p>
            Accordion item 1 Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Earum saepe quisquam repellendus nobis perferendis quibusdam
            quae error cum autem. Dignissimos obcaecati quae quasi optio
            accusamus ad repellendus, libero nemo! Veritatis.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <input type="checkbox" id="item2" />
        <label for="item2" className="accordion-header">
          Accordion item 2
        </label>
        <div className="accordion-content">
          <p>
            Accordion item 2 Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Earum saepe quisquam repellendus nobis perferendis quibusdam
            quae error cum autem. Dignissimos obcaecati quae quasi optio
            accusamus ad repellendus, libero nemo! Veritatis.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <input type="checkbox" id="item3" />
        <label for="item3" className="accordion-header">
          Accordion item 3
        </label>
        <div className="accordion-content">
          <p>
            Accordion item 3 Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Earum saepe quisquam repellendus nobis perferendis quibusdam
            quae error cum autem. Dignissimos obcaecati quae quasi optio
            accusamus ad repellendus, libero nemo! Veritatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
