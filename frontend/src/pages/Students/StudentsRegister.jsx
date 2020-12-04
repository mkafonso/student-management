import React, { useState } from "react";
import { Link } from "react-router-dom";

// import styles
import {
  Container,
  MainContent,
  DocumentContent,
  StudiesContent,
  HealthContent,
} from "./styles";

// import libs
import { routesConfig } from "../../lib/routes";

const StudentsRegister = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [passportExpireDate, setPassportExpireDate] = useState("");
  const [visa, setVisa] = useState("");
  const [visaExpireDate, setVisaExpireDate] = useState("");
  const [hometown, setHometown] = useState("");
  const [course, setCourse] = useState("");
  const [studentStatus, setstudentStatus] = useState("");
  const [university, setUniversity] = useState("");
  const [period, setPeriod] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [allergies, setAllergies] = useState("");
  const [personWithDisability, setPersonWithDisability] = useState("");
  const [historyDisease, setHistoryDisease] = useState("");

  return (
    <Container>
      <h1 className="page_title">Cadastrar novo estudante</h1>

      <MainContent>
        <h2 className="section_title">Dados pessoais</h2>

        <div className="form-group">
          <div className="input-group">
            <input
              value={name}
              type="text"
              placeholder="Nome completo"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              value={nickname}
              type="text"
              placeholder="Apelido"
              onChange={(e) => setNickname(e.target.value)}
            />

            <input
              value={birthday}
              type="text"
              placeholder="Nascimento"
              onChange={(e) => setBirthday(e.target.value)}
            />

            <input
              value={gender}
              type="text"
              placeholder="Sexo"
              onChange={(e) => setGender(e.target.value)}
            />

            <input
              value={contact}
              type="text"
              placeholder="WhatsApp"
              onChange={(e) => setContact(e.target.value)}
            />

            <input
              value={email}
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="upload">
              <div className="upload-img"></div>
              <Link className="upload-link" to="#">
                Adicionar Foto
              </Link>
            </div>

            <input
              value={hometown}
              type="text"
              placeholder="Cidade Natal"
              onChange={(e) => setHometown(e.target.value)}
            />

            <input
              value={studentStatus}
              type="text"
              placeholder="Status"
              onChange={(e) => setstudentStatus(e.target.value)}
            />
          </div>
        </div>
      </MainContent>

      <DocumentContent>
        <h2 className="section_title">Documentos</h2>

        <div className="form-group">
          <div className="input-group">
            <input
              value={passport}
              type="text"
              placeholder="Passaporte"
              onChange={(e) => setPassport(e.target.value)}
            />

            <input
              value={passportExpireDate}
              type="text"
              placeholder="Vencimento do Passaporte"
              onChange={(e) => setPassportExpireDate(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              value={visa}
              type="text"
              placeholder="Visto"
              onChange={(e) => setVisa(e.target.value)}
            />

            <input
              value={visaExpireDate}
              type="text"
              placeholder="Vencimento do Visto"
              onChange={(e) => setVisaExpireDate(e.target.value)}
            />
          </div>
        </div>
      </DocumentContent>

      <StudiesContent>
        <h2 className="section_title">Dados acadêmicos</h2>

        <div className="form-group">
          <div className="input-group">
            <input
              value={course}
              type="text"
              placeholder="Curso"
              onChange={(e) => setCourse(e.target.value)}
            />

            <input
              value={university}
              type="text"
              placeholder="Instituição"
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              value={studentStatus}
              type="text"
              placeholder="Status"
              onChange={(e) => setstudentStatus(e.target.value)}
            />

            <input
              value={period}
              type="text"
              placeholder="Período na faculdade"
              onChange={(e) => setPeriod(e.target.value)}
            />
          </div>
        </div>
      </StudiesContent>

      <HealthContent>
        <h2 className="section_title">Dados de saúde</h2>

        <div className="form-group">
          <div className="input-group">
            <input
              value={bloodGroup}
              type="text"
              placeholder="Grupo Sanguíneo"
              onChange={(e) => setBloodGroup(e.target.value)}
            />

            <input
              value={allergies}
              type="text"
              placeholder="Possui alguma alergia"
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              value={personWithDisability}
              type="text"
              placeholder="Pessoa com deficiência?"
              onChange={(e) => setPersonWithDisability(e.target.value)}
            />

            <input
              value={historyDisease}
              type="text"
              placeholder="Algum problema de saúde que precisa nos contar?"
              onChange={(e) => setHistoryDisease(e.target.value)}
            />
          </div>
        </div>
      </HealthContent>

      <div className="buttons-container">
        <Link to={routesConfig.students.path}>
          <button className="salvar-student">Cadastrar</button>
        </Link>

        <Link to={routesConfig.students.path}>
          <button className="cancel-student">Cancelar</button>
        </Link>
      </div>
    </Container>
  );
};

export default StudentsRegister;
