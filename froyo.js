//Enter a list of commom separated froyo flavros.
//vanilla, vanilla, vanilla, strawberry, coffee, coffee
//When viewing browser console, a table listing of how many of each flavor has been ordered appears
//Ordered 3 vanilla, 2 coffee, and 1 strawberry
let froyo = prompt(
    "What Froyo flavor would you like: Vanilla, Strawberry, or Coffee?"
  );
  let output = createMessage(froyo);
  console.log(output);
  
const froyo = {
    flavors: "vanilla","strawberry","coffee"
}
console.table(froyo)