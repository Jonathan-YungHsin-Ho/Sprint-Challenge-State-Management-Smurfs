1. What problem does the context API help solve?

> The context API helps solve the problem of prop drilling by providing a way to share data throughout the component tree without having to explicitly pass or drill props through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

> `Actions` are objects that contain the information that we send from our application to the store in Redux. They have to have a `type` property, defined as a string constant, that lets the `reducers` know the type of action that needs to be performed.
>
> `Reducers` figure out how the application's state will update based on different `actions` that the store receives. They take in the `actions` that are sent to the store along with the previous state and returns the next state.
>
> The `store` is an object holds the application state in a Redux application and allows different components to access state when they're connect to it. The `store` is known as the 'single source of truth' in a Redux application because each application only has one single state object holding all of the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

> The difference between Application state and Component state is that application state is global while component state is local. For example, Redux use the `store` to hold application state, and any component anywhere in the app can access state by connecting to the store. On the other hand, component state is only available within a specific component, although it can be passed down to the component's children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

> `redux-thunk` is middleware for React Redux that extends the Redux store's ability beyond only doing simple synchronous updates when dispatching an action. It allows us to write async logic that interacts with the Redux store, like making AJAX requests. It changes our `action-creators` by allowing them to return a function instead of just an action object. The `action-creators` become thunks, functions that wrap an expression to delay its evaluation. The inner function of the `action-creator` now receives the store methods of `dispatch` and `getState` as parameters.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

> My favorite state management system from this sprint at this point is React Redux, because I appreciate the ability to employ middleware and the Redux DevTools to observe how state changes. Additionally, I appreciate the clarity of organization in the architecture of the application when using Redux, especially when using Redux Hooks like useSelector and useDispatch, which I find to be very helpful in clarifying how Redux organizes data flow.
