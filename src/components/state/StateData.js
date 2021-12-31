import React, { useState, useEffect } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";

const StateData = () => {
  const [data, setdata] = useState([]);

  // fetch api data here
  const getCoviddate = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualdata = await res.json();
    // console.log(actualdata.statewise);
    setdata(actualdata.statewise);
  };

  useEffect(() => {
    getCoviddate();
  }, []);

  return (
    <>
      <Container fluid>
        <div className="d-grid gap-2 mt-4 mb-4">
          <Button variant="danger" size="lg">
            <span>India</span> Covid-19 tracker by Government API
          </Button>
        </div>

        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>SR No</th>
              <th>State</th>
              <th>Confirm</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* show data in row */}
            {data.map((curElem, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{curElem.state}</td>
                  <td>{curElem.confirmed}</td>
                  <td>{curElem.recovered}</td>
                  <td>{curElem.deaths}</td>
                  <td>{curElem.active}</td>
                  <td>{curElem.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default StateData;
