/** @format */

import React from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

const Main = () => {
  return (
    <>
      <section>
        <Section title={"Мобильные телефоны"} />
        <PhoneList phones={data.phones} />
      </section>
      <section>
        <Section title={"Ноутбуки"} />
        <LaptopList laptops={data.laptops} />
      </section>
    </>
  );
};

export default Main;
