import React from 'react';
import { Tabs, Layout, Button, Cascader } from 'element-react';
import 'element-theme-default';
import { tsConstructorType } from '@babel/types';

function Header() {
    const options = [{
        value: 'Lop 1',
        label: 'Lop 1',
        children: [{
          value: 'toan',
          label: 'Toan',
        }, {
            value: 'tiengviet',
            label: 'Tieng Viet'
        }]
        },
        {
            value: 'Lop 2',
            label: 'Lop 2',
            children: [{
              value: 'toan',
              label: 'Toan',
            }, {
                value: 'tiengviet',
                label: 'Tieng Viet'
            }]
            },
    ]
    return (
        <div>
            <Layout.Row type="flex" className="row-bg" justify="center">
            <Layout.Col sm="18">
            <Tabs type="border-card" activeName="1">
            <Tabs.Pane label="Tieu hoc" name="1">
                <Layout.Row>
                    <Layout.Col sm={6}>
                        <h1>vuihoc.vn</h1>
                    </Layout.Col>
                    <Layout.Col sm={6}>
                    <div className="block">
        <span className="demonstration">Child options expand when hovered</span>
        <Cascader
          options={options}
          expandTrigger="hover"
          value='Goc hoc tap'
        //   onChange={this.handleChange.bind(this, 'selectedOptions2')} />
        />
      </div>
                    </Layout.Col>
                </Layout.Row>
            </Tabs.Pane>
            <Tabs.Pane label="THCS" name="2">THCS</Tabs.Pane>
           <Tabs.Pane label={<Button type="success">Khoa hoc cua toi</Button>} name="3"></Tabs.Pane>
           <Tabs.Pane label={<><a>Dang nhap</a> <a>Dang ky</a></>} name="4"></Tabs.Pane>
        </Tabs>
        </Layout.Col>
            </Layout.Row>
        </div>
    )
}

export default Header;