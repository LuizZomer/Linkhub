import { reactive, provide, inject } from "vue";
import { jwtDecode } from "jwt-decode";

interface IUserDecoded {
  id: string;
  username: string;
}

interface IAuthState {
  isLoggedIn: boolean;
  user: IUserDecoded | null;
  login: (token: string) => void;
  logout: () => void;
}

const authState = reactive<IAuthState>({
  isLoggedIn: false,
  user: null,
  login(token) {
    localStorage.setItem("authToken", token);
    const decoded = jwtDecode<IUserDecoded>(token);

    authState.user = decoded;
    authState.isLoggedIn = true;
  },
  logout() {
    localStorage.removeItem("authToken");
    this.user = null;
    this.isLoggedIn = false;
  },
});

export const AuthContextSymbol = Symbol();

export const provideAuthContext = () => {
  // Fornece diretamente o estado de autenticação
  provide(AuthContextSymbol, authState);
};

export const useAuthContext = () => {
  const context = inject(AuthContextSymbol) as IAuthState;
  if (!context) {
    throw new Error(
      "AuthContext não encontrado! Certifique-se de usar o provider corretamente."
    );
  }
  return context;
};
