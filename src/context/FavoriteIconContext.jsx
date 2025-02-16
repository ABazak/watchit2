import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => {
    // Загружаем избранные фильмы из localStorage при первом рендере
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Сохраняем избранные фильмы в localStorage при изменении favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (film) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/auth/login"); // Перенаправление на страницу логина
      return;
    }

    if (!favorites.find((item) => item.id === film.id)) {
      setFavorites([...favorites, film]);
    }
  };

  const removeFavorite = (filmId) => {
    setFavorites(favorites.filter((item) => item.id !== filmId));
  };

  const isFavorite = (filmId) => {
    return favorites.some((item) => item.id === filmId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
