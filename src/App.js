import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getList } from './services/data';

export default function App() {
  const [employeeInfo, setEmployeeInfo] = useState();
  const [employeeName, setEmployeeName] = useState('');
  const [selectLineManager, setSelectLineManager] = useState('');
  const [selectTeam, setSelectTeam] = useState('');
  const [selectSubTeam, setSelectSubTeam] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  // Add Employee to SubTeam
  const [addEmployeeToSubTeam, setAddEmployeeToSubTeam] = useState({
    id: 1,
    name: 'xxxx',
    desc: 'xxxx',
  });

  // 1st ONLOAD
  useEffect(() => {
    getDefaultData();
  }, []);

  //2nd ONLOAD
  useEffect(() => {
    // Callback
  }, [employeeInfo]);

  const getDefaultData = () => {
    const data = getList();
    setEmployeeInfo([data]);
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();

    // VALUES ENTERED:
    console.log(
      'Employee Name: ' +
        employeeName +
        '\n' +
        'Line Manager : ' +
        selectLineManager +
        '\n' +
        'Team Name: ' +
        selectTeam +
        '\n' +
        'Sub Team Name (desc): ' +
        selectSubTeam +
        '\n'
    );

    // console.log('You clicked submit.');
    let tempData = employeeInfo[0];

    const tempMainTeam = tempData.mainTeams;

    // Identify Selected Team - Team name (eg. 'Finance')
    const teamSelected = selectTeam;
    const filterValue = (obj, key, value) => obj.find((v) => v[key] === value);

    const filterTeam = filterValue(tempMainTeam, 'teamName', teamSelected);
    const found = filterTeam.subTeam.some(
      (el) => el.desc === addEmployeeToSubTeam.desc
    );

    if (found) {
      setErrorMsg(true);
    } else {
      filterTeam.subTeam.push(addEmployeeToSubTeam);
      setErrorMsg(false);
      setEmployeeInfo([tempData]);
    }
  };

  const handleOnChangeLineManger = (value) => {
    setSelectLineManager(value);
  };

  const handleOnchangeTeam = (value) => {
    setSelectTeam(value);
  };

  const handleOnChangeSubTeam = (value) => {
    setSelectSubTeam(value);
    setAddEmployeeToSubTeam({ ...addEmployeeToSubTeam, desc: value });
  };

  const hanldeonChangeEmployeeName = (value) => {
    setEmployeeName(value);

    //RANDOM ID SUBTEAM
    let generateRandomId = Math.floor(Math.random() * 1000) + 1;
    // console.log("generateRandomId : " +generateRandomId);

    setAddEmployeeToSubTeam({
      ...addEmployeeToSubTeam,
      name: value,
      id: generateRandomId,
    });
  };

  return (
    <div className="container">
      <br />
      <h3>People Management Application</h3>
      <div className="col-sm-12 col-md-6">
        <form onSubmit={handleSubmitProfile}>
          <div className="form-group">
            <label>Employee Name:</label>
            <input
              type="text"
              className="form-control"
              id="employeeNameInput"
              onBlur={(e) => hanldeonChangeEmployeeName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Line Manager:</label>
            <select
              className="form-control"
              value={selectLineManager}
              onChange={(e) => handleOnChangeLineManger(e.target.value)}
              id="lineManagerFormControlSelect"
            >
              <option value=""> - </option>
              <option value="Sonny">Sonny</option>
            </select>
          </div>
          <div className="form-group">
            <label>Team(s):</label>
            <select
              className="form-control"
              value={selectTeam}
              onChange={(e) => handleOnchangeTeam(e.target.value)}
              id="teamFormControlSelect"
            >
              <option value=""> - </option>
              <option value="Finance">Finance</option>
              <option value="Research">Research</option>
            </select>
          </div>
          <div className="form-group">
            <label>SubTeam(s):</label>
            <select
              className="form-control"
              value={selectSubTeam}
              onChange={(e) => handleOnChangeSubTeam(e.target.value)}
              id="subTeamFormControlSelect"
            >
              <option value=""> - </option>
              <option value="Data">Data</option>
              <option value="Web">Web</option>
            </select>
          </div>

          <div className="col-md-3 btn-submit">
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          {errorMsg && (
            <p className="error-style">
              Sub-team is already exist in this team.
            </p>
          )}
        </form>
      </div>

      <br />
      <hr />
      <h5>Report</h5>
      <div>
        {employeeInfo &&
          employeeInfo.map((info, idx) => (
            <div key={idx}>
              <h4>Line Manager: {info.lineManager}</h4>

              {info.mainTeams.map((team, idx) => (
                <div className="team-profile" key={idx}>
                  <h5>{team.teamName}</h5>

                  <div className="subteam-profile">
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <td>id</td>
                          <td>name</td>
                          <td>subteam</td>
                        </tr>
                      </thead>
                      <tbody>
                        {team.subTeam.map((subTeam, idx) => (
                          <tr key={idx}>
                            <td>{subTeam.id}</td>
                            <td>{subTeam.name}</td>
                            <td>{subTeam.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
