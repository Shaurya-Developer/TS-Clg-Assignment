interface obj {
  [prop: string]: string;
}

const jsonData: obj[] = [
  { "day 1": "Reach the destination" },
  { "day 2": "City Tour in a company tourist bus" },
  { "day 2": "Breakfast & Dinner" },
  { "day 3": "Visit Chang-La" },
  { "day 4": "Back to your home" },
];
const select = document.querySelector("#day")! as HTMLSelectElement;
const content = document.querySelector(".content")! as HTMLDivElement;

select.addEventListener("click", () => {
  const value = select.value;
  jsonData.forEach((data) => {
    if (data[value]) {
      const childElement = `<div>${data[value]}</div>`;
      content.innerHTML = childElement;
    }
  });
});
