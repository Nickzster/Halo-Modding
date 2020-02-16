import React from "react";
import TextInput from "../TextInput";

interface Field {
  label: string;
  name: string;
  state: any;
  input: string;
  placeholder?: string;
  required: boolean;
  cb: Function;
}

interface Props {
  form: Array<Field>;
}

const InputContainer: React.FC<Props> = props => {
  const { form } = props;
  return (
    <React.Fragment>
      {form.map(formItem => {
        return (
          <section key={formItem.name} className="text-input-container">
            <label>{formItem.label}</label>
            <TextInput
              required={true}
              type={
                formItem.input === "text"
                  ? "text"
                  : formItem.input === "textarea"
                  ? "textarea"
                  : "text"
              }
              name={formItem.name}
              value={formItem.state}
              placeholder={
                formItem && formItem.placeholder
                  ? formItem.placeholder
                  : formItem.label
              }
              onChange={formItem.cb}
            ></TextInput>
          </section>
        );
      })}
    </React.Fragment>
  );
};

export default InputContainer;

// {/* <div className='container mx-auto text-center bg-primary-blue p-5 md:flex md:items-center md:justify-center flex-col'>
//   <div className='md:flex flex-col md:items-center'>
//     <label className='pr-5 text-font-color mr-auto'>Username</label>
//     <input
//       required
//       className='background-black p-1 rounded'
//       type='text'
//       name='username'
//       value={form.username}
//       placeholder='Username'
//       onChange={e => changeField(e)}
//     ></input>
//   </div>
//   <br />
//   <div className='md:flex flex-col md:items-center'>
//     <label className='pr-5 text-font-color mr-auto'>Email</label>
//     <input
//       required
//       className='background-black p-1 rounded'
//       type='text'
//       placeholder='Email'
//       name='email'
//       value={form.email}
//       onChange={e => changeField(e)}
//     ></input>
//   </div>
// </div> */}

{
  /* <div className='container mx-auto text-center bg-primary-blue p-5 md:flex md:items-center md:justify-center flex-col'>
          <div className='md:flex flex-col md:items-center'>
            <label className='pr-5 text-font-color mr-auto'>Username</label>
            <input
              required
              className='background-black p-1 rounded'
              type='text'
              name='projecttitle'
              value={form.projecttitle}
              onChange={e => changeField(e)}
              placeholder='Project Name'
            ></input>
          </div>
          <br />
          <div className='md:flex flex-col md:items-center'>
            <label className='pr-5 text-font-color mr-auto'>
              Project Description
            </label>
            <textarea
              required
              className='background-black p-1 rounded'
              placeholder='Project Description'
              name='projectdescription'
              value={form.projectdescription}
              onChange={e => changeField(e)}
            ></textarea>
          </div>
        </div> */
}
