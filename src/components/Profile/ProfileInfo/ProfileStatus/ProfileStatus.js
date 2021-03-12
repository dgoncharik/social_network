import React from 'react';

class ProfileStatus extends React.Component {

  constructor(props) {
    super(props);
    this.setEditMode = this.setEditMode.bind(this);
  }

  state = {
    editMode: false
  }

  setEditMode(boolean) {
    return () => this.setState({
      editMode: boolean
    })
  }

  render() {

    return (
        this.state.editMode ?

          <div>
            <input autoFocus={true} onBlur={this.setEditMode(false)} type="text" value={this.props.status}/>
          </div>

          :

          <div>
            <p onDoubleClick={this.setEditMode(true)} >{this.props.status}</p>
          </div>
    )
  }
}

export default ProfileStatus;