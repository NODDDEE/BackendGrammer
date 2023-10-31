const outerFn = (outerVariable: () => string) => {
  return (innerVariable: () => string) => {
    console.log("OuterFn: " + outerVariable);
    console.log("InnerFn: " + innerVariable);
  };
};

const newFn = outerFn(() => "outside");
console.log("newFn: " + newFn);
newFn(() => "inside");
