import React, {useEffect, useState} from 'react';

// class ProfileStatus1 extends React.Component {
//
//   state = {
//     editMode: false,
//     status: this.props.status
//   }
//
//   setEditMode = (boolean) => {
//      this.setState({
//       editMode: boolean
//     })
//   }
//
//   onChangeInput= (evt) => {
//     this.setState({
//       status: evt.target.value
//     })
//   }
//
//   onBlurInput = () => {
//     this.setEditMode(false);
//     if (this.state.status) {
//       this.props.updateUserStatus(this.state.status);
//     }
//   }
//
//   componentDidUpdate = (prevProps, prevState, snapshot) => {
//
//     if (this.props.status !== prevProps.status) {
//       this.setState({
//         status: this.props.status
//       })
//     }
//
//   }
//
//   render() {
//
//     return (
//         this.state.editMode ?
//
//           <div>
//             <input autoFocus={true}
//                    onBlur={this.onBlurInput}
//                    type="text" value={this.state.status}
//                    onChange={(evt) => this.onChangeInput(evt)}
//             />
//           </div>
//
//           :
//
//           <div>
//             <p onDoubleClick={() => this.setEditMode(true)} >{this.props.status || "_______"}</p>
//           </div>
//
//     )
//   }
//}

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