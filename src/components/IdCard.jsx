import React from 'react';

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture} = props;
  return (
    <div>
      <img src={picture} alt="profile" />
      <p>
        <b>First Name:</b> {firstName}
      </p>
      <p>
        <b>Last Name:</b> {lastName}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Height:</b> {height}cm
      </p>
     <p><b>Birthday:</b> {birth.toDateString()}</p>
      <br></br>
    </div>
  );
}

export default IdCard;
