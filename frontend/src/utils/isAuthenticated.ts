export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken");
  return !!token; // Retorna true se o token existir, senão false
};
