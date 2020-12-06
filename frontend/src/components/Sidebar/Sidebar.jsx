import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import icons
import {
  MdDashboard,
  MdPeople,
  MdSchool,
  MdAttachMoney,
  MdInsertChart,
  MdSettings,
  MdExitToApp,
} from "react-icons/md";

// import styles
import { Container, MenuOptions } from "./styles";

// import components
import Separator from "../../commons/Separator";

// import libs
import { routesConfig } from "../../lib/routes";

// import services
import { auth } from "../../services/firebase/firebase.utils";

// import actions
import { clearCurrentUser } from "../../reducers/user/user.actions";

const Sidebar = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  return (
    <Container>
      <h1 className="sidebar-title">Base de dados</h1>
      <Separator />

      <MenuOptions>
        <div className="menu-item">
          <Link to="/">
            <button type="button" className="menu-item_option">
              <MdDashboard
                className="menu-item_icon"
                size={24}
                color="#4D4C59"
              />
              <span className="menu-item_label">Dashboard</span>
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/estudantes">
            <button type="button" className="menu-item_option">
              <MdPeople className="menu-item_icon" size={24} color="#4D4C59" />
              <span className="menu-item_label">Estudantes</span>
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/instituicoes">
            <button type="button" className="menu-item_option">
              <MdSchool className="menu-item_icon" size={24} color="#4D4C59" />
              <span className="menu-item_label">Instituições</span>
            </button>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/financeiro">
            <button type="button" className="menu-item_option">
              <MdAttachMoney
                className="menu-item_icon"
                size={24}
                color="#4D4C59"
              />
              <span className="menu-item_label">Financeiro</span>
            </button>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/relatorios">
            <button type="button" className="menu-item_option">
              <MdInsertChart
                className="menu-item_icon"
                size={24}
                color="#4D4C59"
              />
              <span className="menu-item_label">Relatório</span>
            </button>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/configuracoes">
            <button type="button" className="menu-item_option">
              <MdSettings
                className="menu-item_icon"
                size={24}
                color="#4D4C59"
              />
              <span className="menu-item_label">Configurações</span>
            </button>
          </Link>
        </div>
      </MenuOptions>

      <Separator />

      <div className="menu-item exit">
        <Link to={routesConfig.signIn.path}>
          <button
            type="button"
            className="menu-item_option"
            onClick={() => {
              auth.signOut();
              dispatch(clearCurrentUser());
            }}
          >
            <MdExitToApp className="menu-item_icon" size={24} color="#4D4C59" />
            <span className="menu-item_label">Sair</span>
          </button>
        </Link>
      </div>

      <footer className="sidebar-footer">made with 💚 by TechLab</footer>
    </Container>
  );
};

export default withRouter(Sidebar);
