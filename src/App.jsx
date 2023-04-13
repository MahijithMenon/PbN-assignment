import './index.css';
import { useState } from 'react';
import HeroImage from './assets/hero-img.png';
import Button from './components/Button';
import data from './data/table.json';
import Task from './components/Task';
import actionData from './data/actions.json';
import notificationData from './data/notifications.json';
function App() {
  const buttonRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '0px',
    width: '80%',
  };
  const [filteredActionData, setfilteredActionData] = useState(
    actionData.filter((item) => item.status === 'pending')
  );
  const [filteredNotificationData, setfilteredNotificationData] = useState(
    notificationData.filter((item) => item.status === 'unread')
  );
  const { categories } = data;
  const [actionStatus, setActionStatus] = useState('pending');
  const [tableData, setTableData] = useState(data.values);
  const [selectedCategory, setSelectedCategory] = useState('paytype_id');
  console.log(filteredNotificationData);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  function actionStatusUpdate(status) {
    if (status === 'all') {
      setfilteredActionData(actionData);
      return;
    }
    setActionStatus(status);
    setfilteredActionData(actionData.filter((item) => item.status === status));
  }

  return (
    <div className="page">
      <div className="profile">
        <div className="left-div">
          <h2>Welcome back, Chris.</h2>
          <p>
            Let's take a look at your day today! You have 0 patients scheduled
            and 0 new patients. You are scheduled to produce $0.00. You need to
            produce $0.00 stay on track this month.<a>View Huddle</a>
          </p>
          <div style={buttonRowStyle}>
            <Button name="Create a Custom Campaign"></Button>
            <Button name="Work on My Task"></Button>
            <Button name="Find Revenue Oppurtunities"></Button>
          </div>
        </div>
        <div className="right-div">
          <img src={HeroImage} />
        </div>
      </div>
      <h2>Activity</h2>
      <div className="activity-container">
        <div className="filter">
          Filter Activity
          <p>Appt Request</p>
        </div>
        <div className="actions">
          <div className="actions-top">
            <h2 style={{ display: 'inline-block' }}>Action Needed</h2>
            <p
              style={{ display: 'inline-block' }}
              onClick={() => actionStatusUpdate('pending')}
            >
              Pending
            </p>
            <p
              style={{ display: 'inline-block' }}
              onClick={() => actionStatusUpdate('ignored')}
            >
              Ignored
            </p>
            <p
              style={{ display: 'inline-block' }}
              onClick={() => actionStatusUpdate('completed')}
            >
              Completed
            </p>
            <p
              style={{ display: 'inline-block' }}
              onClick={() => actionStatusUpdate('all')}
            >
              All
            </p>
          </div>
          <div className="actions-bottom">
            {filteredActionData.map((item) => (
              <div key={item.id}>
                <p>
                  {item.patient_first_name} {item.patient_last_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="notifications">
          <div className="notifications-top">
            <h2 style={{ display: 'inline-block' }}>Notifications</h2>
          </div>
          <div className="notifications-bottom">
            {filteredNotificationData.map((item) => (
              <div key={item.id}>
                <p>
                  {item.patient_first_name} {item.patient_last_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2>Data Table</h2>
      <div className="table-container">
        <button onClick={() => handleCategoryChange('paytype_id')}>
          Paytype ID
        </button>
        <button onClick={() => handleCategoryChange('provider_id')}>
          Provider ID
        </button>
        <button onClick={() => handleCategoryChange('employee_type_id')}>
          Employee Type ID
        </button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>
                {selectedCategory === 'paytype_id'
                  ? 'PayType'
                  : selectedCategory === 'employee_type_id'
                  ? 'Employee Type ID'
                  : selectedCategory === 'provider_id'
                  ? 'Provider ID'
                  : ''}
              </th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>
                  {console.log(
                    categories[selectedCategory][item[selectedCategory]]
                  )}
                  {selectedCategory === 'paytype_id' ||
                  selectedCategory === 'employee_type_id'
                    ? categories[selectedCategory][item[selectedCategory]]
                    : categories[selectedCategory][item[selectedCategory]]}
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
