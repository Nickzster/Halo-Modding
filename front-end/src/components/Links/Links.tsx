import React from "react";
import { Link } from "../../types/Post";
import StateArray from "../../utils/classes/StateArray";

interface Props {
  title: string;
  linkstate: StateArray<Link>;
}

const Links: React.FC<Props> = props => {
  const { title, linkstate } = props;
  return (
    <div className="p-2 mt-8 mb-8 bg-primary-blue">
      <p className="text-font-color text-center text-xl m-5">{title}</p>
      <div className="mb-5">
        {linkstate.get().map(l => {
          return (
            <React.Fragment>
              <input
                className="background-black p-1 rounded ml-1 mr-1"
                type="text"
                placeholder="Source"
                name="projectmirrorSource"
                value=""
              ></input>
              <input
                className="background-black p-1 rounded ml-1 mr-1"
                type="text"
                placeholder="URL"
                name="projectmirrorURL"
                value=""
              ></input>
              <button className="bg-red-700 text-font-color rounded p-1">
                Remove
              </button>
            </React.Fragment>
          );
        })}
      </div>
      <button
        className="bg-blue-700 text-font-color rounded p-1"
        onClick={e => {
          e.preventDefault();
          console.log("Adding something!!");
          linkstate.push({ source: "", url: "" });
        }}
      >
        Add More
      </button>
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
