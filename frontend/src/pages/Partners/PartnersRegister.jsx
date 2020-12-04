import React, { useState } from "react";
import { Link } from "react-router-dom";

// import styles
import { Container, Content } from "./styles";

// import libs
import { routesConfig } from "../../lib/routes";

const PartnersRegister = () => {
  const [name, setName] = useState("");
  const [site, setSite] = useState("");
  const [type, setType] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  const handlePartnerSubmit = (e) => {
    e.preventDefault();

    console.log(name, site, type, contact);
  };

  return (
    <Container>
      <h1 className="page_title">Cadastrar nova instituição</h1>

      <Content>
        <form
          action=""
          onSubmit={handlePartnerSubmit}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        >
          <div className="form-group">
            <div className="input-group">
              <input
                value={name}
                type="text"
                placeholder="Nome da instituição"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                value={site}
                type="text"
                placeholder="Website"
                onChange={(e) => setSite(e.target.value)}
              />

              <input
                value={address}
                type="text"
                placeholder="Endereço"
                onChange={(e) => setAddress(e.target.value)}
              />

              <input
                value={location}
                type="text"
                placeholder="Estado"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                value={name}
                type="text"
                placeholder="Nome da instituição"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                value={contact}
                type="text"
                placeholder="Contato"
                onChange={(e) => setContact(e.target.value)}
              />

              <input
                value={city}
                type="text"
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />

              <input
                value={country}
                type="text"
                placeholder="País"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </form>
      </Content>

      <div className="buttons-container">
        <Link to={routesConfig.partners.path}>
          <button className="salvar-partner">Entrar</button>
        </Link>

        <Link to={routesConfig.partners.path}>
          <button className="cancel-partner">Cancelar</button>
        </Link>
      </div>
    </Container>
  );
};

export default PartnersRegister;
