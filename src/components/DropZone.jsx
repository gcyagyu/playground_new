import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class OnDrop extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            multiple={false}
            style={{ width: '100%', height: '200', borderWidth: '2', borderColor: 'rgb(102, 102, 102)', borderStyle: 'dashed', borderRadius: '5' }}
          >
            <img src={this.state.files.length === 1 ? this.state.files[0].preview : ""} alt="ここに画像をDrop" />
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f =>
                <li
                  key={f.name}
                >
                  {f.name} - {f.size} bytes
                </li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default OnDrop;
