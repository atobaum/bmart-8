import React, { useReducer, useContext } from 'react';

type CartItem = {
  id: number;
  product: {
    content: string;
    discount: number;
    id: number;
    img_url: string;
    name: string;
    price: number;
  };
  createdAt: Date;
  count: number;
};

const initState: CartItem[] = [];

const reducer = (state: CartItem[], action: any) => {
  const payload = action.payload;
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'SET_COUNT':
      return state.map((item) => {
        return item.id === payload.id
          ? { ...item, count: payload.count }
          : item;
      });
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

export function useCartState(): CartItem[] {
  return useContext(StoreContext);
}

export function useCartDispatch() {
  return useContext(DispatchContext);
}
