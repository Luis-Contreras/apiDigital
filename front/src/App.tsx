import React, { useState } from "react";
import Header from "./components/header";
import "./global.css";
import Table from "./components/table";
import { Layout } from "./components/layout";
import { ListSurvey } from "./services";
import { Fab } from "./components/fab";
import deleteSurvey from "./services/deleteSurvey";
import { SurveyInterface } from "./types/survey.interface";
import Modal from "./components/modal";
import Form from "./modules/form";
import saveSurvey from "./services/saveSurvey";
import Notify from "./components/notify";
import UpdateSurvey from "./services/updateSurvey";

const DEFAULT = {
  identity_client: "",
  model_car: "",
  factors_purchasing: "",
  drive_rating: 0,
  satisfaction_rating: 0,
};

function App() {
  const { data, isLoading, meta, getData, setData } = ListSurvey();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<SurveyInterface>(DEFAULT);
  const [message, setMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const handleChangePage = async (event: unknown, newPage: number) => {
    await getData(newPage + 1, meta.per_page);
  };

  const handleChangeRowsPerPage = async (e: any) => {
    await getData(1, e.target.value);
  };

  if (isLoading || data.length === 0) return <>Loading...</>;

  const deleteItem = async (id: number) => {
    const res = await deleteSurvey(id);
    if (res.id) {
      const freshData: any = [];
      // eslint-disable-next-line array-callback-return
      data.map((item: any) => {
        if (item.id !== res.id) {
          freshData.push(item);
        }
      });
      setData(freshData);
    }
  };

  const saveData = async () => {
    const res: SurveyInterface = await saveSurvey(formData);
    if (res.id) {
      setMessage("creado correctamente");
      setOpenAlert(true);
      setOpen(false);
      setFormData(DEFAULT);
    }
  };

  const updateData = async () => {
    const res: SurveyInterface = await UpdateSurvey(formData);
    if (res.id) {
      setMessage("actualizado correctamente");
      setOpenAlert(true);
      setOpen(false);
      setFormData(DEFAULT);
    }
  };

  return (
    <>
      <Header title="i4digital" />
      <div
        style={{
          display: "flex",
          width: "98%",
          justifyContent: "end",
          margin: "15px 0px 15px 0px",
        }}
      >
        <Fab onClick={() => setOpen(true)}>+</Fab>
      </div>
      <Layout>
        <Table
          total={meta?.total}
          page={meta?.current_page - 1}
          rowsPerPage={meta.per_page}
          rows={data}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          onDelete={(id) => deleteItem(id)}
          onEdit={(item) => {
            setFormData(item);
            setOpen(true);
          }}
          headers={[
            "Identificacion del cliente",
            "Modelo",
            "Factores al comprar",
            "Calificación de prueba de manejo",
            "Calificación de satisfacción",
          ]}
        />
      </Layout>
      <Modal
        open={open}
        setOpen={setOpen}
        setFormData={setFormData}
        title="Crear"
        action={() => saveData()}
        content={<Form data={formData} setData={setFormData} />}
      />
      <Modal
        open={open}
        setOpen={setOpen}
        setFormData={setFormData}
        title="Editar"
        action={() => updateData()}
        content={<Form data={formData} setData={setFormData} />}
      />
      <Notify
        message={message}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
    </>
  );
}

export default App;
