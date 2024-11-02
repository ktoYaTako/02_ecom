export const loadFavoritesFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('favorites');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Ошибка при загрузке избранных из localStorage", err);
      return undefined;
    }
  };
  
  export const saveFavoritesToLocalStorage = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('favorites', serializedState);
    } catch (err) {
      console.error("Ошибка при сохранении избранных в localStorage", err);
    }
  };