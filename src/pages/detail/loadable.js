import React from 'react';
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>111</div>
  }
});

export default class App extends React.Component {
  render() {
    return <LoadableBar/>;
  }
}
