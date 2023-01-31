import React, { createContext, useContext } from "react";

export const SearchFieldContext = createContext();
export const useSearchField = () => useContext(SearchFieldContext);
