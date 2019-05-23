import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-1234-5678',
      },
      {
        id: 1,
        name: '지성인',
        phone: '010-1224-3678',
      },
      {
        id: 2,
        name: '이진호',
        phone: '010-1274-3678',
      },
    ],

    keyword: '',
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = data => {
    const { information } = this.state; // 비구조 할당 문법 = 코드가 길어지는것도 막아주고 가독성을 높여줌
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      }),
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1,
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
