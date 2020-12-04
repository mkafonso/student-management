export const routesConfig = {
  root: {
    title: "Dashboard",
    path: "/",
  },
  students: {
    title: "Estudantes",
    path: "/estudantes",
  },
  partners: {
    title: "Instituições",
    path: "/instituicoes",
  },
  partnersRegister: {
    title: "Cadastrar Instituição",
    path: "/instituicoes/cadastro",
  },
  finances: {
    title: "Financeiro",
    path: "/financeiro",
  },
  reports: {
    title: "Relatório",
    path: "/relatorios",
  },
  settings: {
    title: "Configurações",
    path: "/configuracoes",
  },
  signIn: {
    title: "Login",
    path: "/login-usuario",
  },
};

export const getTitleByPath = (path) => {
  if (!path) return null;

  let findTitle = null;

  Object.keys(routesConfig).forEach((route) => {
    if (routesConfig[route].path === path) {
      findTitle = routesConfig[route].title;
    }
  });

  return findTitle;
};

export default routesConfig;
