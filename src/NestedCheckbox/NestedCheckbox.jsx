import { useState } from "react";
import "./nestedcheckbox.css";

const CheckboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          { id: 3, name: "Orange" },
          { id: 4, name: "Lemon" }
        ]
      },
      {
        id: 5,
        name: "Berries",
        children: [
          { id: 6, name: "Strawberry" },
          { id: 7, name: "Blueberry" }
        ]
      },
      {
        id: 8,
        name: "Tropical",
        children: [
          { id: 9, name: "Mango" },
          { id: 10, name: "Banana" }
        ]
      },
      {
        id: 11,
        name: "Apple"
      },
    ]
  }
];

const Checkboxes = ({ data, checked, setChecked }) => {

const handleCheckboxChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // 1. Cascade Down (Update children based on parent)
      const updateChildren = (currentNode) => {
        currentNode.children?.forEach((child) => {
          newState[child.id] = isChecked;
          if (child.children) updateChildren(child);
        });
      };
      updateChildren(node);

      // 2. Cascade Up (Update parents based on children)
      const verifyChecked = (currentNode) => {
        if (!currentNode.children) return newState[currentNode.id] || false;

        const childrenStatus = currentNode.children.map((child) => verifyChecked(child));

        const isAllChecked = childrenStatus.every((status) => status === true);

        newState[currentNode.id] = isAllChecked;
        return isAllChecked;
      };

      // Run verification from the root
      CheckboxesData.forEach((rootNode) => verifyChecked(rootNode));

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input type="checkbox" checked={checked[node.id] || false} onChange={(event) => handleCheckboxChange(event.target.checked, node)} />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
