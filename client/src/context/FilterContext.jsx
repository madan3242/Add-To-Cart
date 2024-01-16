import { createContext, useState } from "react";

const initialFilter = {
  keyword: "",
  minPrice: 0,
  maxPrice: 250000,
  brand: "",
  category: "",
  rating: 0,
  currentPage: 1,
};

export const FilterContext = createContext({
  filter: initialFilter,
  setFilter: () => {}
});

export const FilterProvider = ({ children }) => {
    const initialState = {
      keyword: "",
      minPrice: 0,
      maxPrice: 250000,
      brand: "",
      category: "",
      rating: 0,
      currentPage: 1,
    };

    const setFilter = (name, value) => {
      setState({ 
        ...setState,
        [name]: value
      })
    }
    const [state, setState] = useState(initialState);
    return <FilterContext.Provider value={{ filter, setFilter}}>
        {children}
    </FilterContext.Provider>
}