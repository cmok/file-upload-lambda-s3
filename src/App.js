import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    selectedFile: null,
    fileUploadedSuccessfully: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  }

  onFileUpload = () => {
    if (this.setState.selectedFile) {
      const formData = new FormData();
      formData.append(
        "demo file",
        this.state.selectedFile,
        this.state.selectedFile.name
      )
      // Call API to upload the file
      console.log(formData)
      this.setState({selectedFile: null})
      this.setState({fileUploadedSuccessfully: true})
    }
  }

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>Fiule Type: {this.state.selectedFile.type}</p>
          <p>Last Modified: {" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      )
    } else if (this.state.fileUploadedSuccessfully) {
      return (
        <div>
          <br />
          <h4>Your file has been successfully uploaded</h4>
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h4>Choose a file and then press the Upload button</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <h2>File Upload</h2>
        <h3>File upload with React and a Servicelss API</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}

export default App;
