import React, { useState } from "react";
import api from "../../../api";
import Title from "./Title";
import SetList from "./SetList";
import Image from "./Image";
import Submit from "./Submit";

const initialForm = {
  title: "",
  sets: [""],
  file: null,
};

function AddSesh(props) {
  const [form, setForm] = useState(initialForm);
  const [fileUrl, setFileUrl] = useState("");
  const [numberOfSets, setNumberofSets] = useState(1);

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();

    // error handling
    // im too lazy

    let data = new FormData();
    data.append("title", form.title);
    data.append("sets", JSON.stringify(form.sets));
    data.append("file", form.file);

    try {
      const res = await api.addSesh(data);
      console.log("Sesh added successfully");
      setForm(initialForm);
      setFileUrl("");
      setNumberofSets(1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-gray-100 text-black rounded-lg border-2 border-gray-300">
      <form onSubmit={formOnSubmitHandler}>
        <Title
          value={form.title}
          onChangeHandler={(e) => setForm({ ...form, title: e.target.value })}
        />
        <div className="flex flex-row">
          <SetList
            sets={form.sets}
            numberOfSets={numberOfSets}
            onChangeHandler={(setIndex, value) => {
              const sets = [...form.sets];
              sets[setIndex] = value;
              setForm({ ...form, sets });
            }}
            addSeshHandler={(e) => {
              e.preventDefault();
              setNumberofSets(numberOfSets + 1);
            }}
          />
          <Image
            onChangeHandler={(e) => {
              const file = e.target.files[0];
              const fileUrl = URL.createObjectURL(file);
              setFileUrl(fileUrl);
              setForm({ ...form, file });
            }}
            fileUrl={fileUrl}
          />
        </div>
        <Submit />
      </form>
    </div>
  );
}

export default AddSesh;
