// import { Breadcrumb, Button, Select, Table } from 'antd';
// import { Content } from 'antd/lib/layout/layout';
// import React from 'react';
// import Selection from '../../../../components/partial/Selection';

// const Category = (props) => {
//     const {
//         columns,
//         data,
//         onChange,
//         currentPage,
//         pageSize,
//         setPageSize,
//         redirectCreate
//     } = props;
//     return (
//         <>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//                 <Breadcrumb.Item>{"Home"}</Breadcrumb.Item>
//                 <Breadcrumb.Item>{"Categories"}</Breadcrumb.Item>
//             </Breadcrumb>
//             <Content
//                 className="site-layout-background"
//                 style={{
//                     padding: 24,
//                     margin: 0,
//                     minHeight: 280,
//                 }}
//             >
//                 <div className="w-max flex align-items-center mb-3 justify-content-between">
//                     <div className='flex align-items-center'>
//                         <span className="ml-6 pr-10 ant-form-item-label">
//                             <span className="text-danger font-bold">{data.length} </span>
//                             {"Record"}
//                         </span>
//                         <div className="w-max flex items-center">
//                             <Selection setPageSize={setPageSize} />
//                         </div>
//                     </div>
//                     <Button type="primary" size={"default"}
//                         onClick={() => redirectCreate()}
//                     >
//                         {"Create"}
//                     </Button>
//                 </div>
//                 <Table
//                     columns={columns}
//                     dataSource={data}
//                     onChange={onChange}
//                     pagination={{ pageSize: pageSize, total: data.length, current: currentPage }} />
//             </Content>
//         </>

//     );
// };

// export default Category;