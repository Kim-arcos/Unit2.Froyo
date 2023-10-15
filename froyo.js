//Enter a list of commom separated froyo flavros.
//vanilla, vanilla, vanilla, strawberry, coffee, coffee
//When viewing browser console, a table listing of how many of each flavor has been ordered appears
//Ordered 3 vanilla, 2 coffee, and 1 strawberry
  let userInputString = prompt(
    "What Froyo flavor would you like: Vanilla, Strawberry, or Coffee?"
  );
  console.log(`You ordered: \n${userInputString}`);

  function getFroyoObj (froyoOrder) {
    const froyoArray = froyoOrder.split(",");
    const froyoObj = {};
    for (let i = 0; i < froyoArray.length; i++) {
      const currentFlavor = froyoArray[i];
      if (!froyoObj[currentFlavor]) {
        froyoObj[currentFlavor] = 1;
    } else {
      froyoObj[currentFlavor] +=1;
    }
}
return froyoObj;
  }
  console.table(getFroyoObj(userInputString));
  //I followed along with the class repo. Still trying to see how it works lol
