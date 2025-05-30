import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const existingIndex = basket.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket[existingIndex].quantity += 1;
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (index) => {
    const updatedBasket = [...basket];
    updatedBasket[index].quantity += 1;
    setBasket(updatedBasket);
  };

  const decreaseQuantity = (index) => {
    const updatedBasket = [...basket];
    if (updatedBasket[index].quantity > 1) {
      updatedBasket[index].quantity -= 1;
      setBasket(updatedBasket);
    }
  };

  const removeFromBasket = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1); // Məhsulu sil
    setBasket(updatedBasket);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        increaseQuantity,
        decreaseQuantity,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
