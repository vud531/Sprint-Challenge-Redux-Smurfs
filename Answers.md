1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- .map, .filter, .reduce
- Object.create()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions - actions that modify the current state, action + current state = new state
- reducers - store the initial state and interpret/dispatch actions coming in
- store - manage state of the whole application, and pass state down as props to child component, contains reducer, recieves actions

- store is known as a single source of truth because it manages the state of our application seprately, and then passes states as props to visual components

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- application state - states of the whole application, for example, user login state, your signup state, 
- component state - individual state of the component such as inputs state and button click state of a log in form, etc ...
1.  What is middleware? 
 - a third party program that connect different features of different software together
 - for example: redux middleware provide a interaction between dispaching an action and handling an action in reducers  
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 - allows redux to run asynchronously
 - allows actions to return function in stead of an object
1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
