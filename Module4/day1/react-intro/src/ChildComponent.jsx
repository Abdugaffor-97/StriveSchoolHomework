import React from "react";

const ChildComponent = ({ strivers, counter, age }) => {
  return (
    <p>
      I'm a child component is: {strivers}, my counter is: {counter} age:{age}
    </p>
  );
};

export default ChildComponent;
