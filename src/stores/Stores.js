import { createContext } from 'react';
import RootStore from './RootStore';

export const storesInstance = new RootStore();
export const StoresContext = createContext(storesInstance);
export const StoresProvider = StoresContext.Provider;
