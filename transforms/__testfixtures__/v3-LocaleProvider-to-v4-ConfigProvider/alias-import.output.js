import { ConfigProvider as MyProvider } from 'antd';

const App = () => {
  return (
    <MyProvider {...yourConfig}>
      <Main />
    </MyProvider>
  );
}
