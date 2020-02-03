import React, { useState } from "react";
import { Link } from "../../types/Post";
import StateArray from "../../utils/classes/StateArray";

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
    <div className="p-2 mt-8 mb-8 bg-primary-blue">
      <p className="text-font-color text-center text-xl m-5">{title}</p>
      <p className="text-font-color text-center">{directions}</p>
      <div className="mb-5 flex flex-col">
        {state.map((l, i) => {
          return (
            <div key={i} className="text-font-color bg-primary-blue mt-2">
              <a
                href={l.url}
                target="_blank"
                className="p-1 m-1 bg-primary-blue"
              >
                {l.source}
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center p-3 sm:overflow-x-auto">
        <input
          className="background-black p-1 rounded ml-1 mr-1"
          type="text"
          placeholder="Website Name"
          name="source"
          value={form.source}
          onChange={e => changeForm(e)}
        ></input>
        <input
          className="background-black p-1 rounded ml-1 mr-1"
          type="text"
          placeholder="Website URL"
          name="url"
          value={form.url}
          onChange={e => changeForm(e)}
        ></input>
        <button
          className="bg-blue-700 text-font-color rounded pl-4 pr-4 pt-1 pb-1 ml-1 mr-1"
          onClick={e => {
            e.preventDefault();
            console.log("Adding something!!");
            setstate([{ source: form.source, url: form.url }]);
          }}
        >
          Add
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            removestate();
          }}
          className="bg-red-700 text-font-color rounded p-1 ml-3 mr-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Links;

/* <div>
          <p className='text-font-color text-center text-xl'>
            Project still WIP? Where will you be updating it at?
          </p>
          <input
            className='background-black p-1 rounded ml-1 mr-1'
            type='text'
            placeholder='Source'
            name='projectmirrorSource'
            value={form.projectmirrorSource}
            onChange={e => changeField(e)}
          ></input>
          <input
            className='background-black p-1 rounded ml-1 mr-1'
            type='text'
            placeholder='URL'
            name='projectmirrorURL'
            value={form.projectmirrorURL}
            onChange={e => changeField(e)}
          ></input>
          <button className='bg-blue-700 text-font-color rounded p-1'>
            Add More
          </button> 
        </div>
        <br />
        <br />
        <div>
          <p className='text-font-color text-center text-xl'>
            Project ready for play? Insert some download links!
          </p>
          <input
            className='background-black p-1 rounded ml-1 mr-1'
            type='text'
            placeholder='Source'
            name='downloadmirrorSource'
            value={form.downloadmirrorSource}
            onChange={e => changeField(e)}
          ></input>
          <input
            className='background-black p-1 rounded ml-1 mr-1'
            type='text'
            placeholder='URL'
            name='downloadmirrorURL'
            value={form.downloadmirrorURL}
            onChange={e => changeField(e)}
          ></input> } */

//   <div>
//   <p className='text-font-color text-center text-xl'>Images</p>
//   <input
//     required
//     className='background-black p-1 rounded ml-1 mr-1'
//     name='images'
//     value={form.images}
//     type='text'
//     placeholder='URL'
//     onChange={e => changeField(e)}
//   ></input>
//   {/* <button className='bg-blue-700 text-font-color rounded p-1 m-1'>
//     Add Images
//   </button>
//   <br />
//   <input
//     className='background-black p-1 rounded ml-1 mr-1'
//     type='text'
//     placeholder='URL'
//   ></input>
//   <button className='bg-red-700 text-font-color rounded p-1 m-1'>
//     Remove
//   </button>
//   <br /> */}
// </div>
