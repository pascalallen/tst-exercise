import { useContext } from 'react';
import { StoresContext } from '../stores/Stores';

const useStore = (store) => {
  const storeContext = useContext(StoresContext)[store];

  if (!storeContext) {
    throw new Error('invalid store');
  }

  return storeContext;
};

export default useStore;
