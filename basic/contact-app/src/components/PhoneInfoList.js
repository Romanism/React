import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  // Defalt값을 설정해줄땐 항상 앞에 static을 붙여야 함
  static defaultProps = {
    data: [],
  };

  render() {
    const { data, onRemove, onUpdate } = this.props;

    console.log('rendering list');

    // Key를 사용하는 이유는 배열을 추가하거나 삭제시 효율적으로 하기 위함
    const list = data.map(info => (
      <PhoneInfo
        onRemove={onRemove}
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
