import { Layout, Avatar, Space, Typography } from 'antd';
import theme from '../style/theme';
import { UserOutlined } from '@ant-design/icons';

import Board from './components/Board';

const { Header, Content } = Layout;
const { Text } = Typography;

const Home = () => {
  return (
    <Layout className="layout">
      <Header>
        <Space wrap>
          <Avatar icon={<UserOutlined />} />
          <Text style={{ color: theme.color.white }}>@soyoon</Text>
        </Space>
      </Header>
      <Content>
        <Board />
      </Content>
    </Layout>
  );
};

export default Home;
