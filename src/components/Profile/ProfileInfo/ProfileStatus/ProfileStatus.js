import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const onBlurInput = () => {
    setEditMode(false);
    if (status) {
      props.updateUserStatus(status);
    }
  }

  const onChangeInput = (evt) => {
    setStatus(evt.target.value);
  }

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  return (
      editMode ?
          <div>
            <input autoFocus={true}
                   onBlur={onBlurInput}
                   type="text" value={status}
                   onChange={onChangeInput}
            />
          </div>
          :
          <div>
            <p onDoubleClick={() => setEditMode(true)} >{props.status || "_______"}</p>
          </div>
  )
}


export default ProfileStatus;