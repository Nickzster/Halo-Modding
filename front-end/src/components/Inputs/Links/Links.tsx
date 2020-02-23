import React, { useState } from "react";
import { Link } from "../../../types/Post";
import StateArray from "../../../utils/classes/StateArray";
import Selector from "../Selector";
import TextInput from "../TextInput";
import ActionButton from "../../Inputs/ActionButton";

interface Props {
  title: string;
  directions: string;
  state: Array<Link>;
  setstate: Function;
  removestate: Function;
}

const Links: React.FC<Props> = props => {
  const { title, setstate, removestate, state, directions } = props;
  const [form, updateForm] = useState({ source: "", url: "" });
  const changeForm = (e: any) => {
    updateForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section className="modify-link-container">
      <p className="text-font-color text-center text-xl m-5">{title}</p>
      <p className="text-font-color text-center">{directions}</p>
      {state.map((l, i) => {
        return (
          <section key={i} className="links">
            <input type="text" value={l.source} disabled={true} />
            <input type="text" value={l.url} disabled={true} />
          </section>
        );
      })}
      <section className="links">
        <TextInput
          type="text"
          placeholder="Website Name"
          name="source"
          value={form.source}
          onChange={changeForm}
        ></TextInput>
        <input
          type="text"
          placeholder="Website URL"
          name="url"
          value={form.url}
          onChange={e => changeForm(e)}
        ></input>
      </section>
      <section className="action-buttons">
        <ActionButton
          id="add"
          cb={(e: any) => {
            e.preventDefault();
            setstate([{ source: form.source, url: form.url }]);
          }}
          title="Add"
        />
        <ActionButton
          id="remove"
          cb={(e: any) => {
            e.preventDefault();
            removestate();
          }}
          title="Remove"
        />
      </section>
    </section>
  );
};

export default Links;
