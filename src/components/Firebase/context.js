import React, { createContext, useContext } from 'react';
import {app, auth, db} from './firebase'

// Crear contexto
const FirebaseContext = createContext(null);

// Hook personalizado para usar Firebase
export const useFirebase = () => useContext(FirebaseContext);

// Proveedor de contexto
export const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ app, auth, db }}>
    {children}
  </FirebaseContext.Provider>
);


export default FirebaseContext;