import { useReducer, createContext } from "react";

const createApiContext = (reducer: any, actions: any, defaultValue: any) => {
  const Context = createContext(defaultValue);

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundActions: any = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

export default createApiContext;
