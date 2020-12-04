import { routesConfig } from "./routes";

describe("routesConfig", () => {
  describe("root", () => {
    it('should contain an attribute title with value equal to "Dashboard"', () => {
      expect(routesConfig.root.title).toEqual("Dashboard");
    });

    it('should contain an attribute path with value equal to "/"', () => {
      expect(routesConfig.root.path).toEqual("/");
    });
  });

  describe("students", () => {
    it('should contain an attribute title with value equal to "Estudantes"', () => {
      expect(routesConfig.students.title).toEqual("Estudantes");
    });

    it('should contain an attribute path with value equal to "/estudantes"', () => {
      expect(routesConfig.students.path).toEqual("/estudantes");
    });
  });

  describe("partners", () => {
    it('should contain an attribute title with value equal to "Instituições"', () => {
      expect(routesConfig.partners.title).toEqual("Instituições");
    });

    it('should contain an attribute path with value equal to "/instituicoes"', () => {
      expect(routesConfig.partners.path).toEqual("/instituicoes");
    });
  });

  describe("finances", () => {
    it('should contain an attribute title with value equal to "Financeiro"', () => {
      expect(routesConfig.finances.title).toEqual("Financeiro");
    });

    it('should contain an attribute path with value equal to "/financeiro"', () => {
      expect(routesConfig.finances.path).toEqual("/financeiro");
    });
  });

  describe("reports", () => {
    it('should contain an attribute title with value equal to "Relatório"', () => {
      expect(routesConfig.reports.title).toEqual("Relatório");
    });

    it('should contain an attribute path with value equal to "/relatorios"', () => {
      expect(routesConfig.reports.path).toEqual("/relatorios");
    });
  });

  describe("settings", () => {
    it('should contain an attribute title with value equal to "Configurações"', () => {
      expect(routesConfig.settings.title).toEqual("Configurações");
    });

    it('should contain an attribute path with value equal to "/configuracoes"', () => {
      expect(routesConfig.settings.path).toEqual("/configuracoes");
    });
  });

  describe("signIn", () => {
    it('should contain an attribute title with value equal to "Login"', () => {
      expect(routesConfig.signIn.title).toEqual("Login");
    });

    it('should contain an attribute path with value equal to "/login-usuario"', () => {
      expect(routesConfig.signIn.path).toEqual("/login-usuario");
    });
  });
});
