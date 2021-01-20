import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { HView, VView, Layout } from '../src/index';
import './style.less';

const { Header, Footer, Content, Sider } = Layout;

export default class Demo extends PureComponent {
    render() {
        return (
            <div className="demo">
                <Layout>
                    <Header>header</Header>
                    <Layout hasSider>
                        <Sider>sider</Sider>
                        <Content>
                            <HView gap={50}>
                                <HView width={100} height="100px" bgColor="red" hAlign="center">100</HView>
                                <VView width={200} height={200} padding={20} bgColor="blue" gap={10}>
                                    <div>a</div>
                                    <div>b</div>
                                </VView>
                                <HView width={300} height={300} bgColor="green">300</HView>
                            </HView>
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Demo />, domContainer);