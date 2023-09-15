import React, { FC } from "react";
import { Input } from "../components/input";
import { Rating } from "../components/rating";
import { Select } from "../components/select";
import { FormInterface } from "./form.interface";

const MENU_ITEMS = [
  "La reputación de la marca",
  "Las opciones de financiamiento",
  "El desempeño al manejarlo",
  "Recomendaciones de amigos o familiares",
  "Otros",
];

const Form: FC<FormInterface> = ({ data, setData }: any) => {
  return (
    <div>
      <Input
        title="Identificacion cliente"
        value={data?.identity_client}
        onChange={(e) => setData({ ...data, identity_client: e.target.value })}
      />
      <Input
        title="Modelo del vehiculo"
        value={data?.model_car}
        onChange={(e) => setData({ ...data, model_car: e.target.value })}
      />
      <Select
        menuItems={MENU_ITEMS}
        title="Factores que tuvo en cuenta al comprar el automóvil"
        onChange={(e: any) =>
          setData({ ...data, factors_purchasing: e.target.value })
        }
        value={data?.factors_purchasing}
      />
      <Rating
        title="Calificacion prueba de manejo"
        value={data?.drive_rating}
        setValue={(e) => setData({ ...data, drive_rating: e })}
      />
      <Rating
        title="Calificación de satisfacción."
        value={data?.satisfaction_rating}
        setValue={(e) => setData({ ...data, satisfaction_rating: e })}
      />
    </div>
  );
};

export default Form;
