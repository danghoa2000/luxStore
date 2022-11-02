// import { Breadcrumb, Button, Form } from 'antd';
// import { Content } from 'antd/lib/layout/layout';
// import React from 'react';

// const CategoryUpdate = () => {
//     return (
//         <>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//                 <Breadcrumb.Item>{"Home"}</Breadcrumb.Item>
//                 <Breadcrumb.Item>{"Categories"}</Breadcrumb.Item>
//                 <Breadcrumb.Item>{"Create"}</Breadcrumb.Item>
//             </Breadcrumb>
//             <Content
//                 className="site-layout-background"
//                 style={{
//                     padding: 24,
//                     margin: 0,
//                     minHeight: 280,
//                 }}
//             >
//                 <Form
//                     name="basic"
//                     labelCol={{ span: 8 }}
//                     wrapperCol={{ span: 16 }}
//                     autoComplete="off"
//                 >
//                     <Form.Item
//                         label="Name Category"
//                         name="catName"
//                         rules={[{ required: true, message: 'Please input your name category!' }]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Button type="primary" htmlType="submit">
//                         {"Create"}
//                     </Button>
//                     <Button type="default" htmlType="button">
//                         {"Cancel"}
//                     </Button>
//                 </Form>
//             </Content>
//         </>
//     );
// };

// export default CategoryUpdate;