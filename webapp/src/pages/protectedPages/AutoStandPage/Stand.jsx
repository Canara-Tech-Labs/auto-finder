import { Table } from 'antd';
import { Link } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'SL.No',
    dataIndex: 'slno',
    key: 'slno',
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: 'Autostand Name',
    dataIndex: 'autostandname',
    key: 'autostandname',
  },
  {
    title: ' Near By Address',
    dataIndex: 'nearbyaddress',
    key: 'nearbyaddress',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a href='/'>Invite {record.name}</a>
  //       <a href='/'>Delete</a>
  //     </Space>
  //   ),
  // },
];
const data = [
  {
    key: '1',
    slno: '1',
    autostandname: 'bargi auto stand',
    nearbyaddress: 'near bargi bus stop',
    // tags: ['nice', 'developer'],
  },
  // {
  //   key: '2',
  //   slno: 'Jim Green',
  //   autostandname: 42,
  //   nearaddress: 'London No. 1 Lake Park',
  //   // tags: ['loser'],
  // },
  // {
  //   key: '3',
  //   slno: 'Joe Black',
  //   autostandname: 32,
  //   nearaddress: 'Sydney No. 1 Lake Park',
  //   // tags: ['cool', 'teacher'],
  // },
];
function AutostandTable() {
  return (
    <>
      <div>
        <Link to="/autostand"><div className='Notification-Section-Top-Layout-Exit'>
          <ArrowLeftOutlined style={{ fontSize: '25px', color: 'black' , marginRight: '400px'}} />
        </div></Link>
        {/* <div className='Notification-Section-Top-Layout-Subsection'>
          <div className='Notification-Top-Layout-Subsection-Title'>
            <h2>Notification</h2>
          </div>
        </div> */}

        <Table columns={columns} dataSource={data} /></div></>
  );
}
export default AutostandTable;