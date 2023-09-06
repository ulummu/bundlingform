import React, { useState } from "react";
import logo from "../logo.png";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import "./CardForm.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  capitalFirstWord,
  handleFormInput,
  handleSubmit,
} from "../helper/FormHelpers";
import {
  bahasaPackages,
  filterPackages,
  fotoPackages,
  framePackages,
  initialValues,
  namaPertama,
  pakaiFilterPackages,
  undanganPackages,
  videoPackages,
  videoThemes,
  webThemes,
} from "../helper/FormConstants";
import SelectFormComponent from "./forms/SelectFormComponent";
import TextInputFormComponent from "./forms/TextInputFormComponent";
import SelectWithClass from "./forms/SelectWithClass";
import FormTutorial from "./forms/FormTutorial";
import DataWeddingGift from "./DataWeddingGift";
import DataAcara from "./DataAcara";
import DataMempelai from "./DataMempelai";

export default function CardForm(props) {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [visible, setVisible] = useState(false);
  const [visibleBarcode, setVisibleBarcode] = useState(false);
  const [visibleGold, setVisibleGold] = useState(false);
  const [visibleAkad, setVisibleAkad] = useState(false);
  const [visibleResepsi, setVisibleResepsi] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(false);
  // const capitalize = (s) =>
  //   s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const [data, setData] = useState("");
  const [lBarcode, setLBarcode] = useState("");
  const [noCatin, setNoCatin] = useState("");
  const [dataResepsi, setDataResepsi] = useState("");
  const [dataGold, setDataGold] = useState(0);
  const [temp, setTemp] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) =>
    handleFormInput(
      event,
      values,
      temp,
      filter,
      visible,
      dataGold,
      data,
      dataResepsi,
      noCatin,
      visibleAkad,
      visibleBarcode,
      visibleFilter,
      visibleGold,
      visibleResepsi,
      setFilter,
      setValues,
      setVisibleAkad,
      setVisibleBarcode,
      setVisibleResepsi,
      setVisibleGold,
      setVisible,
      setVisibleFilter,
      setDataGold,
      setDataResepsi,
      setData,
      setNoCatin,
      setTemp,
      lBarcode,
      setLBarcode
    );
  const handleInputSubmit = (event) =>
    handleSubmit(
      event,
      values,
      temp,
      dataGold,
      data,
      dataResepsi,
      noCatin,
      filter,
      lBarcode,
      setValidated
    );
  // useEffect(() => {}, [dataGold]);

  const checkSpecialChar = (e) => {
    var key = e.keyCode;
    if (key === 53 || key === 55) {
      e.preventDefault();
      e.stopPropagation();
    }
    // if (/[$%&*?#@^]/.test(e.key)) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className="m-auto mt-5 mb-5 align-self-center Card ">
            <Card.Header as="h3" className="card-header">
              <img src={logo} alt="logo" className="logo me-2" />
              Form Undangan Bundling
            </Card.Header>
            <Card.Body>
              <Form.Label className="judul">
                Silakan Isi Data Secara Lengkap
              </Form.Label>
              <Form
                className="form"
                noValidate
                validated={validated}
                onSubmit={handleInputSubmit}
              >
                <SelectFormComponent
                  validasi={true}
                  name="temVideo"
                  label="Tema Undangan Video/Jpeg"
                  defaultValue={values.temaVideo}
                  optionsTitle="Silakan Pilih Tema"
                  options={videoThemes}
                  errorText="Tema Belum Dipilih"
                  onChange={handleInputChange}
                />
                <SelectFormComponent
                  validasi={true}
                  name="paketVideo"
                  label="Paket Undangan Video/Jpeg"
                  defaultValue={values.paketVideo}
                  optionsTitle="Silakan Pilih Paket"
                  options={videoPackages}
                  errorText="Paket Belum Dipilih"
                  onChange={handleInputChange}
                />
                <SelectFormComponent
                  validasi={true}
                  name="temaWebsite"
                  label="Tema Undangan Website"
                  defaultValue={values.temaWebsite}
                  optionsTitle="Silakan Pilih Tema"
                  options={webThemes}
                  errorText="Tema Belum Dipilih"
                  onChange={handleInputChange}
                />

                <SelectFormComponent
                  validasi={true}
                  name="paketWebsite"
                  label="Paket Undangan"
                  defaultValue={values.paketWebsite}
                  optionsTitle="Silakan Pilih Paket"
                  options={undanganPackages}
                  errorText="Paket Belum Dipilih"
                  onChange={handleInputChange}
                />

                <SelectFormComponent
                  validasi={true}
                  name="bahasa"
                  label="Bahasa Undangan Website"
                  defaultValue={values.bahasa}
                  optionsTitle="Silakan Pilih Bahasa"
                  options={bahasaPackages}
                  errorText="Bahasa Belum Dipilih"
                  onChange={handleInputChange}
                />

                <SelectFormComponent
                  validasi={true}
                  label="Foto Undangan"
                  name="foto"
                  value={values.foto}
                  optionsTitle="Silakan Pilih"
                  options={fotoPackages}
                  errorText="Foto Belum Dipilih"
                  onChange={handleInputChange}
                />

                <Form.Group>
                  <Form.Label className="mb-0">Filter Instagram</Form.Label>
                  <Form.Label className="labelFormFilter">
                    Dengan tambahan biaya.
                  </Form.Label>
                  <SelectWithClass
                    validasi={true}
                    name="pakaiFilter"
                    defaultValue={values.pakaiFilter}
                    optionsTitle="Silakan Pilih"
                    options={pakaiFilterPackages}
                    errorText="Belum Dipilih"
                    onChange={handleInputChange}
                  />
                  <FormTutorial
                    label="Contoh Filter Bisa Dilihat"
                    linkTutorial="https://undangandigimo.com/katalog-filter/"
                  />
                </Form.Group>
                {visibleFilter && (
                  <>
                    <SelectFormComponent
                      validasi={true}
                      label="Tema Filter Instagram"
                      name="filterig"
                      defaultValue={values.filterig}
                      optionsTitle="Silakan Pilih Filter"
                      options={filterPackages}
                      errorText="Filter Belum Dipilih"
                      onChange={handleInputChange}
                    />

                    <SelectFormComponent
                      validasi={true}
                      label="Pilih Frame"
                      name="frame"
                      value={values.frame}
                      optionsTitle="Silakan Pilih Frame"
                      options={framePackages}
                      errorText="Frame Belum Dipilih"
                      onChange={handleInputChange}
                    />
                  </>
                )}

                <SelectFormComponent
                  validasi={true}
                  name="namaAwal"
                  label="Nama yang Didahulukan"
                  defaultValue={values.namaAwal}
                  optionsTitle="Silakan Pilih"
                  options={namaPertama}
                  errorText="Nama Belum Dipilih"
                  onChange={handleInputChange}
                />

                <SelectFormComponent
                  validasi={true}
                  label="Tambahkan Barcode"
                  name="barcode"
                  value={values.barcode}
                  optionsTitle="Silakan pilih"
                  options={pakaiFilterPackages}
                  errorText="Barcode belum dipilih"
                  onChange={handleInputChange}
                />

                {visibleBarcode && (
                  <>
                    <TextInputFormComponent
                      className="formTambah mt-3"
                      validasi={true}
                      name="linkBarcode"
                      value={values.linkBarcode}
                      label="Silakan Pilih"
                      placeholder="Masukkan Link Barcode"
                      errorText="Link Belum Diisi"
                      onChange={handleInputChange}
                    />
                    <FormTutorial
                      label="Tutorial Salin Barcode"
                      linkTutorial="https://www.youtube.com/watch?v=07ihVwltHvQ"
                    />
                  </>
                )}

                <SelectFormComponent
                  validasi={true}
                  label="Tambahkan Denah"
                  name="denah"
                  value={values.denah}
                  optionsTitle="Silakan pilih"
                  options={pakaiFilterPackages}
                  errorText="Denah belum dipilih"
                  onChange={handleInputChange}
                />

                <DataMempelai
                  panggilanWanita={values.panggilanWanita}
                  lengkapWanita={values.lengkapWanita}
                  wanitaAnakKe={values.wanitaAnakKe}
                  namaBapakWanita={values.namaBapakWanita}
                  namaIbuWanita={values.namaIbuWanita}
                  panggilanPria={values.panggilanPria}
                  lengkapPria={values.lengkapPria}
                  priaAnakKe={values.priaAnakKe}
                  namaBapakPria={values.namaBapakPria}
                  namaIbuPria={values.namaIbuPria}
                  handleInputChange={handleInputChange}
                />

                <DataAcara
                  hariAkad={values.hariAkad}
                  akad={values.akad}
                  pukulAkad={values.pukulAkad}
                  zonaWaktuAkad={values.zonaWaktuAkad}
                  namaAcaraAkad={values.namaAcaraAkad}
                  tempatAkad={values.tempatAkad}
                  mapsAkad={values.mapsAkad}
                  visiblAkad={visibleAkad}
                  lainnyaAkad={values.lainnyaAkad}
                  hariResepsi={values.hariResepsi}
                  resepsi={values.resepsi}
                  pukulResepsi={values.pukulResepsi}
                  zonaWaktuResepsi={values.zonaWaktuResepsi}
                  namaAcaraResepsi={values.namaAcaraResepsi}
                  tempatResepsi={values.tempatResepsi}
                  mapsResepsi={values.mapsResepsi}
                  visiblResepsi={visibleResepsi}
                  lainnyaResepsi={values.lainnyaResepsi}
                  handleInputChange={handleInputChange}
                />

                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-music-note-beamed me-2"></i>
                      <div className="labelForm">Musik</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <TextInputFormComponent
                        className="musik"
                        validasi={true}
                        label="Masukkan Link Youtube"
                        name="musik"
                        value={values.musik}
                        placeholder="Masukkan Link Youtube"
                        errorText="Musik Belum Diisi"
                        onChange={handleInputChange}
                      />

                      <FormTutorial
                        label="Tutorial Salin Backsound"
                        linkTutorial="https://www.youtube.com/watch?v=DmWVqg3mfps"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {visibleGold && (
                  <DataWeddingGift
                    loveStory={values.loveStory}
                    live={values.live}
                    nomorRek={values.nomorRek}
                    namaBank={values.namaBank}
                    atasNama={values.atasNama}
                    nomorRek2={values.nomorRek2}
                    namaBank2={values.namaBank2}
                    atasNama2={values.atasNama2}
                    namaPenerima={values.namaPenerima}
                    alamat={values.alamat}
                    waKonfirmasi={values.waKonfirmasi}
                    daftarHadir={values.daftarHadir}
                    visibl={visible}
                    nomorCatin={values.nomorCatin}
                    checkSpecialChar={checkSpecialChar}
                    capitalFirstWord={capitalFirstWord}
                    handleInputChange={handleInputChange}
                  />
                )}
                {/* <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi bi-qr-code me-2"></i>
                          <div>QR Code RSVP</div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form.Group className="mb-2">
                            <Form.Label>QR Code RSVP</Form.Label>
                            <Form.Select
                              name="rsvp"
                              value={values.rsvp}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" hidden>
                                Silakan Pilih
                              </option>
                              <option value="Iya">Iya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              RSVP Belum Dipilih
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion> */}

                <Form.Label className="nb">
                  <strong>NB</strong> : Jika ada tambahan data atau yang
                  lainnya, silakan hubungi admin
                </Form.Label>
                <Button type="submit" className="Button mb-2">
                  <i className="bi bi-whatsapp me-2"></i>
                  Kirim
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
