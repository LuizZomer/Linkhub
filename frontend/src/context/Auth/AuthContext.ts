import { reactive, provide, inject } from "vue";
import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";

interface IUserDecoded {
  id: string;
  username: string;
}

interface IAuthState {
  isLoggedIn: boolean;
  user: IUserDecoded | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): IAuthState => ({
    isLoggedIn: false,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => state.isLoggedIn,
  },
  actions: {
    /** ✅ Reutiliza a lógica de decodificação */
    setUserFromToken(token: string) {
      try {
        localStorage.setItem("authToken", token);
        this.user = jwtDecode<IUserDecoded>(token);
        this.isLoggedIn = true;
      } catch {
        this.logout();
      }
    },

    login(token: string) {
      this.setUserFromToken(token);
    },

    logout() {
      localStorage.removeItem("authToken");
      this.user = null;
      this.isLoggedIn = false;
    },

    initializeAuth() {
      const token = localStorage.getItem("authToken");
      if (token) {
        this.setUserFromToken(token);
      }
    },
  },
});
