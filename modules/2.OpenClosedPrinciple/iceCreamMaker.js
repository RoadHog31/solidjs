// https://thefullstack.xyz/solid-javascript/
//Ice cream maker module...
// Note: You can have only one default export per file.

// OpenClosed principle - Bad example:
// let iceCreamFlavors = ['chocolate', 'vanilla'];
// let iceCreamMaker = {
//   makeIceCream(flavor) {
//     if (iceCreamFlavors.indexOf(flavor) > -1) {
//       console.log('Great success. You now have ice cream.');
//     } else {
//       console.log('Epic fail. No ice cream for you.');
//     }
//   },
// };
// export default iceCreamMaker;















//OpenClosed principle - Good example...
// If I have to open the JS file your module and make a modification in order to extend it, you’ve failed the open closed principle.
let iceCreamFlavors = [];

let iceCreamMaker = {

  makeIceCream(flavor) {

    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
  addFlavor(flavor) {
    iceCreamFlavors.push(flavor);
    return iceCreamFlavors
  },
};

// export default iceCreamMaker;
export { iceCreamMaker, iceCreamFlavors };

// 1. "Open For Extension" - It is possible to extend the behavior of the module as the
// requirements of the application change (i.e. change the behavior of the module).
// 2. "Closed For Modification" - Extending the behavior of the module does not
// result in the changing of the source code or binary code of the module itself. 