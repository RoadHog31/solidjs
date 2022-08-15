//The interface segregation principle states that an entity should never be forced to implement an interface that contains elements which it will never use. For example, a Penguin should never be forced to implement a Bird interface if that Bird interface includes functionality relating to flying, as penguins (spoiler alert) cannot fly.

// Now, this functionality is a little more difficult to demonstrate using JavaScript, due to its lack of interfaces. However, we can demonstrate it by using composition.

// Composition is a subject all by itself, but I’ll give a very high level introduction: Instead of inheriting an entire class, we can instead add chunks of functionality to a class. Here’s an example that actually addresses the interface segregation principle:

//What this example does is to add the flying functionality (or interface) only to the class(es) that require it. This means that penguins won’t be given the ability to fly, whereas birds will.
// This is one method of adhering to the interface segregation principle, but it is a fairly rough example (as, once again, JavaScript doesn’t play well with interfaces).


export const flyer = {
    fly() {
        console.log(`Flap flap, I'm flying!`);
    },
};

// export default Rectangle class;
export default flyer;