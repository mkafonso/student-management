import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

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

const countriesValues = [
  { value: "argentina", label: "Argentina" },
  { value: "brasil", label: "Brasil" },
  { value: "china", label: "China" },
];

const statusValues = [
  { value: "ativo", label: "Ativo" },
  { value: "desistente", label: "Desistente" },
  { value: "finalista", label: "Finalista" },
];

const personWithDisabilityValues = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
];

const courseValues = [
  { value: "engenharia-da-computacao", label: "Engenharia da computação" },
  { value: "engenharia-da-producao", label: "Engenharia da produção" },
];

const universityValues = [
  { value: "unasp-ec", label: "UNASP-EC" },
  { value: "unasp-sp", label: "UNASP-SP" },
];

const periodValues = [
  { value: "1", label: "1° período" },
  { value: "2", label: "2° período" },
  { value: "3", label: "3° período" },
  { value: "4", label: "4° período" },
];

const bloodGroupValues = [
  { value: "a+", label: "A+" },
  { value: "a-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

const genderValues = [
  { value: "masculino", label: "Masculino" },
  { value: "feminino", label: "Feminino" },
  { value: "outro", label: "Outro" },
];

const StudentsRegister = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://img.pngio.com/the-boss-baby-art-boss-baby-em-2049-aniversario-do-chefe-boss-baby-transparent-400_657.png"
  );
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [passportExpireDate, setPassportExpireDate] = useState("");
  const [visa, setVisa] = useState("");
  const [visaExpireDate, setVisaExpireDate] = useState("");
  const [hometown, setHometown] = useState("");
  const [course, setCourse] = useState("");
  const [studentStatus, setStudentStatus] = useState(null);
  const [university, setUniversity] = useState("");
  const [period, setPeriod] = useState("");
  const [countryAbroad, setCountryAbroad] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [personWithDisability, setPersonWithDisability] = useState("");
  const [historyDisease, setHistoryDisease] = useState("");

  const profileImageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log(
      name,
      nickname,
      profileImage,
      birthday,
      gender,
      contact,
      email,
      passport,
      passportExpireDate,
      visa,
      visaExpireDate,
      hometown,
      course,
      studentStatus,
      university,
      period,
      bloodGroup,
      personWithDisability,
      historyDisease
    );
  };

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

            <DatePicker
              placeholderText="Nascimento"
              className="birthday-input"
              selected={birthday}
              maxDate={new Date()}
              locale="pt-BR"
              onChange={(date) => setBirthday(date)}
            />

            <Select
              defaultValue={gender}
              onChange={(e) => setGender(e.value)}
              options={genderValues}
              placeholder="Sexo"
              className="gender-input"
            />

            <input
              value={contact}
              type="text"
              placeholder="WhatsApp + DDI"
              onChange={(e) => setContact(e.target.value)}
            />

            <input
              value={email}
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="upload">
              <div className="upload-img">
                {profileImage && <img src={profileImage} alt="user profile" />}
              </div>
              <input
                type="file"
                name="image-upload"
                id="image-upload"
                accept="image/*"
                onChange={profileImageHandler}
              />
              <label className="upload-link" htmlFor="image-upload">
                Adicionar Foto
              </label>
            </div>

            <input
              value={hometown}
              type="text"
              placeholder="Cidade Natal"
              onChange={(e) => setHometown(e.target.value)}
              className="hometown"
            />

            <Select
              defaultValue={studentStatus}
              onChange={(e) => setStudentStatus(e.value)}
              options={statusValues}
              placeholder="Status do estudante"
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
            <Select
              defaultValue={course}
              onChange={(e) => setCourse(e.value)}
              options={courseValues}
              placeholder="Curso"
              className="course"
            />

            <Select
              defaultValue={university}
              onChange={(e) => setUniversity(e.value)}
              options={universityValues}
              placeholder="Instituição"
            />
          </div>

          <div className="input-group">
            <Select
              defaultValue={countryAbroad}
              onChange={(e) => setCountryAbroad(e.value)}
              options={countriesValues}
              placeholder="País no estrangeiro"
            />

            <Select
              defaultValue={period}
              onChange={(e) => setPeriod(e.value)}
              options={periodValues}
              placeholder="Período na faculdade"
              className="period"
            />
          </div>
        </div>
      </StudiesContent>

      <HealthContent>
        <h2 className="section_title">Dados de saúde</h2>

        <div className="form-group">
          <div className="input-group">
            <Select
              defaultValue={bloodGroup}
              onChange={(e) => setBloodGroup(e.value)}
              options={bloodGroupValues}
              placeholder="Grupo Sanguíneo"
            />
          </div>

          <div className="input-group">
            <Select
              defaultValue={personWithDisability}
              onChange={(e) => setPersonWithDisability(e.value)}
              options={personWithDisabilityValues}
              placeholder="Pessoa com deficiência?"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="textarea-group">
            <textarea
              value={historyDisease}
              onChange={(e) => setHistoryDisease(e.target.value)}
              className="historyDisease"
              placeholder="Algum problema de saúde que precisa nos contar?"
            />
          </div>
        </div>
      </HealthContent>

      <div className="buttons-container">
        <Link to={routesConfig.students.path}>
          <button className="salvar-student" onClick={handleSubmit}>
            Cadastrar
          </button>
        </Link>

        <Link to={routesConfig.students.path}>
          <button className="cancel-student">Cancelar</button>
        </Link>
      </div>
    </Container>
  );
};

export default StudentsRegister;
