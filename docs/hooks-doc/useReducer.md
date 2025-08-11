1. What is useReducer?
    useReducer is an alternative to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
    It’s especially useful for managing state transitions in a predictable way, similar to Redux, but inside a component.

2. Syntax
    const = [sate, dispatch] = useReducer(reducerFunc,initialState);
    reducer → A function that decides how the state changes based on the action.
    initialState → The starting value for the state.
    dispatch → A function to send an action object to the reducer.

3. Parameters
    function reducerFunc(state,action){
        switch(action.type){
            case "increment":
                return {count : state.count + 1};
            case "decrement" :
                return {count : state.count - 1};
            default:
                return state;
        }
    }
    Initial state – Can be a value or a function returning a value.
    Lazy initialization (optional) – For expensive state setup.