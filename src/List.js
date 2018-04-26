import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li onClick={() => this.delete(item)}
               key={index}>{index} - {item} - {item.key}</li>)
    }
  </ul>
);

export default List;
