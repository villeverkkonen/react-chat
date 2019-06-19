import React from 'react';

export class UserList extends React.Component {
  render() {
    return (
      <div>
        <p style={{fontWeight: 'bold'}}>Users online:</p>
        <ul className="user-list" id="user-list"></ul>
      </div>
    );
  };
}

export default UserList;