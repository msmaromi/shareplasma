import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import qs from "querystring";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";
import { Section, Container } from "@components/global";
import Footer from "@sections/Footer";
import { provinsiList } from "@utils/administrative";

import "@styles/form.css";
import { kotaList } from "../utils/administrative";

const DonorPage = () => {
  const [provinsiData, setProvinsiData] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedNamaProvinsi, setSelectedNamaProvinsi] = useState("");
  const [kotaData, setKotaData] = useState([]);
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedNamaKota, setSelectedNamaKota] = useState("");
  const [submitTitle, setSubmitTitle] = useState("Simpan");
  const [message, setMessage] = useState("");
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = async (data) => {
    const { name, wa } = data;

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwBHRh6isGI9ehFWT_XuY6VKHanQCIPSB5-boeOh7ctq5uHaxhMlFvkag/exec";
    try {
      setSubmitTitle("Menyimpan data..");
      await axios.get(
        `${scriptUrl}?${qs.stringify({
          nama: name,
          wa,
          provinsi: selectedNamaProvinsi,
          kota: selectedNamaKota,
        })}`
      );
      setMessage(
        "Terimakasih, kami akan segera menghubungi Kamu jika terdapat pendonor yang cocok."
      );
    } catch (error) {
      setMessage("Mohon maaf, terdapat kesalahan.");
    } finally {
      setSubmitTitle("Simpan");
      reset();
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    setProvinsiData(provinsiList());
  }, []);

  useEffect(() => {
    setKotaData(kotaList(selectedProvinsi));
  }, [selectedProvinsi]);

  const handleProvinsiChange = (e) => {
    setSelectedProvinsi(e.target.value);

    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const selectedNamaProvinsi = selectedOption.getAttribute("name");
    setSelectedNamaProvinsi(selectedNamaProvinsi);
  };

  const handleKotaChange = (e) => {
    setSelectedKota(e.target.value);

    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const selectedNamaKota = selectedOption.getAttribute("name");
    setSelectedNamaKota(selectedNamaKota);
  };

  return (
    <Layout>
      <Navbar />
      <Section accent="secondary">
        <Container
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "3rem" }}>Butuh Plasma</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", width: "40rem" }}
          >
            <div className="form-group">
              <label>Nama</label>
              <input
                type="text"
                className="form-control"
                name="name"
                ref={register({ required: "Wajib di isi" })}
              />
              <small className="form-text text-danger">
                {errors.name?.message}
              </small>
            </div>
            <div className="form-group">
              <label>Nomor WhatsApp</label>
              <input
                type="number"
                className="form-control"
                name="wa"
                ref={register({ required: "Wajib di isi" })}
              />
              <small className="form-text text-danger">
                {errors.name?.message}
              </small>
            </div>
            <div className="form-group">
              <label>Provinsi</label>
              <select
                className="form-control"
                name="provinsi"
                ref={register({ required: "Wajib di isi" })}
                onChange={handleProvinsiChange}
              >
                <option value="">-- Pilih Provinsi --</option>
                {provinsiData.map(({ id, nama }) => (
                  <option key={`provinsi-${id}`} value={id} name={nama}>
                    {nama}
                  </option>
                ))}
              </select>
              <small className="form-text text-danger">
                {errors.name?.message}
              </small>
            </div>
            <div className="form-group">
              <label>Kota/Kabupaten</label>
              <select
                className="form-control"
                name="city"
                ref={register({ required: "Wajib di isi" })}
                onChange={handleKotaChange}
              >
                <option>-- Pilih Kota --</option>
                {kotaData.map(({ id, nama }) => (
                  <option key={`kota-${id}`} value={id} name={nama}>
                    {nama}
                  </option>
                ))}
              </select>
              <small className="form-text text-danger">
                {errors.name?.message}
              </small>
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: "center", width: "20rem" }}
              value={submitTitle}
            />
          </form>
          <span
            style={{ marginTop: "1rem", color: "chocolate" }}
            className={`${message ? "visible success" : ""} message`}
          >
            {message}
          </span>
        </Container>
      </Section>
      <Footer />
    </Layout>
  );
};

export default DonorPage;
