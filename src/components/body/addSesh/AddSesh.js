import React, { useState } from "react";
import api from "../../../api";
import Title from "./Title";
import SetList from "./SetList";
import Image from "./Image";
import Submit from "./Submit";
import Sesh from "../sesh/Sesh";

const initialForm = {
  title: "",
  sets: [""],
  file: null,
};
const initialErrors = {
  title: "",
  sets: [
    {
      index: 0,
      message: "",
    },
  ],
};

function AddSesh() {
  const [form, setForm] = useState(initialForm);
  const [fileUrl, setFileUrl] = useState("");
  const [errors, setErrors] = useState(initialErrors);
  const [addedSesh, setAddedSesh] = useState(null);

  const errorHandler = ({ title, sets }) => {
    let errorsTmp = null;
    // title error handler
    if (!title) {
      errorsTmp = { title: "Title is required" };
    }

    // set error handler
    let setsErrorArr = [];
    sets.forEach(async (set, index) => {
      if (set === "") {
        const error = {
          index,
          message: "Set can't be empty",
        };
        setsErrorArr.push(error);
      }
    });
    if (setsErrorArr.length !== 0)
      errorsTmp = { ...errorsTmp, sets: setsErrorArr };

    return errorsTmp;
  };

  let addedSeshJSX = !addedSesh ? null : <Sesh sesh={addedSesh} />;

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors(initialErrors);

    const errors = errorHandler({ title: form.title, sets: form.sets });
    if (errors) {
      setErrors(errors);
      return;
    }

    let data = new FormData();
    data.append("title", form.title);
    data.append("sets", JSON.stringify(form.sets));
    data.append("file", form.file);

    const res = await api.addSesh(data);
    const sesh = res.data;
    setForm(initialForm);
    setFileUrl("");
    setAddedSesh(sesh);
  };

  return (
    <div className="w-full flex flex-col space-y-5">
      <div className="w-full bg-gray-100 text-black rounded-lg border-2 border-gray-300">
        <form onSubmit={formOnSubmitHandler}>
          <Title
            value={form.title}
            onChangeHandler={(e) => setForm({ ...form, title: e.target.value })}
            error={errors.title}
          />
          <div className="flex flex-row">
            <SetList
              sets={form.sets}
              errors={errors.sets}
              onChangeHandler={(setIndex, value) => {
                const sets = [...form.sets];
                sets[setIndex] = value;
                setForm({ ...form, sets });
              }}
              addSeshHandler={() => {
                if (form.sets.length >= 15) return;
                setForm({ ...form, sets: [...form.sets, ""] });
              }}
              delSeshHandler={() => {
                let sets = form.sets;
                if (sets.length <= 1) return;
                sets.pop();
                setForm({ ...form, sets: sets });
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
      {addedSeshJSX}
    </div>
  );
}

export default AddSesh;
