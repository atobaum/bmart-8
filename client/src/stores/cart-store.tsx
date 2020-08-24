import React, { useReducer, useContext } from 'react';

const initState = {
  a: 1,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INC':
      return { ...state, a: state.a + 1 };
    default:
      return state;
  }
};
const DispatchContext = React.createContext<any>(null);
const StoreContext = React.createContext<any>(null);

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

export function useCart() {
  return useContext(StoreContext);
}

export function useCartDispatch() {
  return useContext(DispatchContext);
}
