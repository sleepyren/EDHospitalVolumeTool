import React, { useState } from 'react';
import Form from './Form';
import { buildDataArray, starterData } from './grid';
import * as alasql from 'alasql';

 
function DisplayValue({ value }) {
    if (!value) return null; // Don't display anything if no value is provided
  
    return <div>Selected Value: {value.join(" ")}</div>;
  }
  
  

function ParentComponent() {
  const [value, setValue] = useState('');
  const [tableData, setTableData] = useState(starterData);

  const handleFormSubmit = async (selectedValue) => {
    setValue(selectedValue); // Update the state with the selected option
    console.log("SV", selectedValue);
    alasql.promise(`SELECT * FROM CSV("/data.csv", {headers: true}) WHERE
    LICENSED_BED_SIZE LIKE "%${selectedValue[0]}%"
    AND HospitalOwnership LIKE "%${selectedValue[1]}%" 
    AND UrbanRuralDesi LIKE "%${selectedValue[2]}%"
    AND FacilityName2 LIKE "%${selectedValue[3]}%"`)
  .then(function(data){
    //const divData = []
    
    setTableData(buildDataArray(data));
    console.log('Data loaded from CSV:', data);
  })
  .catch(function(err){
    console.error('Error loading CSV:', err);
  });

    
    //console.log(selectedValue);
    //console.log(buildDataArray(selectedValue));
    
  };
  return (
    <div>
      
      {tableData}
      <Form onSubmit={handleFormSubmit} />
      <DisplayValue value={value} />
    </div>
  );
}

export default ParentComponent;
