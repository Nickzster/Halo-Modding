import React from "react";
import Option from "./Option";

interface Select {
  value: string;
  display: string;
  query: string;
}

interface Props {
  title: string;
  select: {
    name: string;
    cb: (e: any) => void;
  };
  options: Array<Select>;
  useQuery?: boolean;
}

const Selector: React.FC<Props> = props => {
  const { select, options, title, useQuery } = props;
  return (
    <div className="dropdown-container">
      <p>{title}</p>
      <select
        style={{ color: "black" }}
        name={select.name}
        onChange={e => select.cb(e)}
      >
        {options.map(o => {
          return (
            <Option
              key={o.value}
              value={!!useQuery ? o.query : o.value}
              display={o.display}
            />
          );
        })}
      </select>
    </div>
  );
};

export default Selector;

/* <div className='bg-primary-blue p-3'>
<p className='text-xl text-font-color'>
  What game does your project belong to?
</p>
<select
  required
  name='game'
  onChange={e => {
    changeField(e);
  }}
>
  <option value=''>--SELECT ONE--</option>
  <option value='halo-custom-edition'>halo-custom-edition</option>
  <option value='halo-2-vista'>halo-2-vista</option>
  <option value='halo-ce'>halo-combat-evolved</option>
  <option value='master-chief-collection'>
    master-chief-collection
  </option>
</select>
</div>
<br />
<br />
<div className='bg-primary-blue p-3'>
<p className='text-xl text-font-color'>
  What category does your project belong to?
</p>
<select
  required
  name='projecttype'
  onChange={e => {
    changeField(e);
  }}
>
  <option value=''>--SELECT ONE--</option>
  <option value='custom-map'>custom-map</option>
  <option value='mod'>mod</option>
  <option value='utility'>utility</option>
  <option value='video'>video</option>
</select>
</div> */
