import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Post, Mirror } from '../../types/Post';
import { sendData } from '../../utils/SendData';
import InputContainer from '../../components/InputContainer';
import Selector from '../../components/Selector';

const NewPost = () => {
  const [form, updateForm] = useState({
    username: '',
    email: '',
    game: '',
    projecttype: '',
    projecttitle: '',
    projectdescription: '',
    images: '',
    projectmirrorSource: '',
    projectmirrorURL: '',
    downloadmirrorSource: '',
    downloadmirrorURL: ''
  });
  const [success, updateSuccess] = useState(false);
  const [pending, updatePending] = useState(false);
  const [err, updateErrors] = useState({ errors: [] as Array<string> });
  const submitForm = (e: any) => {
    e.preventDefault();
    let newPM = new Array<Mirror>();
    let newDM = new Array<Mirror>();
    console.log('Form was submitted!');
    if (form.projectmirrorSource !== '' && form.projectmirrorURL !== '')
      newPM.push({
        Source: form.projectmirrorSource,
        URL: form.projectmirrorURL
      });

    if (form.downloadmirrorSource !== '' && form.downloadmirrorURL !== '')
      newDM.push({
        Source: form.downloadmirrorSource,
        URL: form.downloadmirrorURL
      });

    let submission: Post = {
      userinfo: { username: form.username, email: form.email },
      projecttitle: form.projecttitle,
      description: form.projectdescription,
      game: form.game,
      projecttype: form.projecttype,
      images: new Array<string>(form.images),
      projectmirrors: newPM,
      downloadmirrors: newDM
    };
    updatePending(true);
    sendData(submission)
      .then(response => {
        if (
          response &&
          response.code &&
          response.code === 'TOXICITY_DETECTED'
        ) {
          console.log('TOXICITY DETECTED!');
          let newErrors = new Array<string>();
          newErrors.push(response.message);
          updateErrors({ errors: newErrors });
          updatePending(false);
          return;
        }
        updateSuccess(true);
      })
      .catch(err => {
        console.log(err);
        updatePending(false);
      });
  };
  const changeField = (e: any) => {
    console.log(`Updating: ${e.target.name} to ${e.target.value}`);
    updateForm({ ...form, [e.target.name]: e.target.value });
  };
  if (success) return <Redirect to='/feed' />;
  if (pending)
    return (
      <React.Fragment>
        <h1 className='container mx-auto text-center text-font-color text-2xl'>
          Submitting post...
        </h1>
      </React.Fragment>
    );
  return (
    <div className='container mx-auto text-center'>
      <h1 className='text-3xl text-font-color'>Share Your Project</h1>
      {err.errors.map((error: string) => (
        <p className='text-red-500 bg-primary-blue p-5 m-3'>{error}</p>
      ))}
      <form
        onSubmit={e => {
          console.log('Form is being submitted!');
          submitForm(e);
        }}
        className='text-black'
      >
        <InputContainer
          form={[
            {
              label: 'Username',
              input: 'text',
              name: 'username',
              state: form.username,
              cb: changeField
            },
            {
              label: 'Email',
              input: 'text',
              name: 'email',
              state: form.email,
              cb: changeField
            }
          ]}
        />
        <br />
        <Selector
          title='What game does your project belong to?'
          select={{ name: 'game', cb: changeField }}
          options={[
            { value: '', display: '--SELECT GAME---' },
            { value: 'halo-custom-edition', display: 'Halo Custom Edition' },
            { value: 'halo-2-vista', display: 'Halo 2 Vista' },
            { value: 'halo-ce', display: 'Halo Combat Evolved' },
            {
              value: 'master-chief-collection',
              display: 'Master Chief Collection'
            }
          ]}
        />
        <Selector
          title='What category does your project belong to?'
          select={{ name: 'projecttype', cb: changeField }}
          options={[
            { value: '', display: '--SELECT PROJECT TYPE--' },
            { value: 'custom-map', display: 'Custom Map' },
            { value: 'mod', display: 'Mod' },
            { value: 'utility', display: 'Utility' },
            { value: 'video', display: 'Video' }
          ]}
        />
        <InputContainer
          form={[
            {
              label: 'Project Name',
              input: 'text',
              name: 'projecttitle',
              state: form.projecttitle,
              cb: changeField
            },
            {
              label: 'Project Description',
              input: 'textarea',
              name: 'projectdescription',
              state: form.projectdescription,
              cb: changeField
            }
          ]}
        />
        <br />
        <br />
        <div>
          <p className='text-font-color text-center text-xl'>Images</p>
          <input
            required
            className='background-black p-1 rounded ml-1 mr-1'
            name='images'
            value={form.images}
            type='text'
            placeholder='URL'
            onChange={e => changeField(e)}
          ></input>
          {/* <button className='bg-blue-700 text-font-color rounded p-1 m-1'>
            Add Images
          </button>
          <br />
          <input
            className='background-black p-1 rounded ml-1 mr-1'
            type='text'
            placeholder='URL'
          ></input>
          <button className='bg-red-700 text-font-color rounded p-1 m-1'>
            Remove
          </button>
          <br /> */}
        </div>
        <br />
        <br />
        <div>
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
          {/* <button className='bg-blue-700 text-font-color rounded p-1'>
            Add More
          </button> */}
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
          ></input>
          {/* <button className='bg-blue-700 text-font-color rounded p-1'>
            Add More
          </button> */}
        </div>
        <br />
        <br />
        <input
          type='submit'
          className='bg-blue-700 text-white rounded p-2 text-3xl cursor-pointer'
          value='Create New Post'
          disabled={pending}
        />
      </form>
    </div>
  );
};

export default NewPost;
