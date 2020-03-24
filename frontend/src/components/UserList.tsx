import React from 'react';
import { connect } from 'react-redux';

interface UserListState {
  userReducer: {
    usernames: string[];
  }
}

interface UserListProps {
  usernames: string[];
}

export class UserList extends React.Component<UserListProps> {
  render() {
    const { usernames } = this.props as UserListProps;
    return (
      <div>
        <p style={{fontWeight: 'bold'}}>Users online:</p>
        <ul className="user-list" id="user-list">
          {usernames.map(username => (
            <li key={username}>{username}</li>
          ))}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = (state: UserListState) => ({
  usernames: state.userReducer.usernames
});

export default connect(mapStateToProps)(UserList);