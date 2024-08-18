const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile