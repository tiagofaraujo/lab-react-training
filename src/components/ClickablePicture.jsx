import { useState } from 'react';

const ClickablePicture = (props) => {
  console.log(props)
  const [image, setImage] = useState(false);

  function handleClick (){
    setImage (!image)
  }
    return (
    <div>
    <img onMouseOver={handleClick} src={image ? props.img : props.imgClicked} alt="Men without glasses"/>
       </div>
  );
};

export default ClickablePicture