import React, { Component } from 'react';
import 'whatwg-fetch';

const qiitaurl = 'https://api.gc-port.gemcook.com/qiita/organization/gemcook/members';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qiitas: [],
    };
  }
  componentDidMount() {
    fetch(qiitaurl)
      .then(response => {
        // ここでPromiseオブジェクトを返す
        // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: Array(13)}
        // この時、returnでPromiseオブジェクトを返すことによって
        // resolve(Array(13))が実行されていることと同値。なので、thenが動く。
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({
          qiitas: jsonData,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const qiita = this.state.qiitas.map((e, index) => (
      <div key={index}>
        <li>{e.id}{e.articles}{e.contributions}</li>
      </div>
    ));
    return (
      <div id="fetch">
          qiita情報は{qiita}です。
      </div>
    );
  }
}

export default Fetch;
