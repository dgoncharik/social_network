import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  setEditMode = (boolean) => {
     this.setState({
      editMode: boolean
    })
  }

  onChangeInput= (evt) => {
    this.setState({
      status: evt.target.value
    })
  }

  onBlurInput = () => {
    this.setEditMode(false);
    if (this.state.status) {
      console.log("updateUserStatus...");
      this.props.updateUserStatus(this.state.status);
    }
  }

  render() {
    console.log("render status component");
    console.log(`props - ${this.props.status}`);
    console.log(`Lstate - ${this.state.status}`);

    return (
        this.state.editMode ?

          <div>
            <input autoFocus={true}
                   onBlur={this.onBlurInput}
                   type="text" value={this.state.status}
                   onChange={(evt) => this.onChangeInput(evt)}
            />
          </div>

          :

          <div>
            <p onDoubleClick={() => this.setEditMode(true)} >{this.props.status || "_______"}</p>
          </div>

    )
  }
}

export default ProfileStatus;