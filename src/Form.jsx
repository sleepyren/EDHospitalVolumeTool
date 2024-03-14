import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('');
  const [searchValue, setSearchValue] = useState('');


  /*
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  */

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit([selectedValue, selectedValue2, selectedValue3, searchValue]); // Pass the selected value up to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedValue} onChange={e=> setSelectedValue(e.target.value)}>
        <option value="">Select a bed count</option>
        <option value="Jan-49">0-49</option>
        <option value="50-99">50-99</option>
        <option value="100-149">100-149</option>
        <option value="150-199">150-199</option>
        <option value="200-299">200-299</option>
        <option value="300-499">300-499</option>
        <option value="500+">500+</option>
      </select>

      <select value = {selectedValue2} onChange={e=> setSelectedValue2(e.target.value)}>
        <option value = "">Select Hospital Ownership</option>
        <option value = "Government">Government</option>
        <option value = "Nonprofit">Nonprofit</option>
        <option value = "InvestorOwned">Investor Owned</option>
      </select>

      <select value = {selectedValue3} onChange={e=> setSelectedValue3(e.target.value)}>
        <option value = "">Select City Designation</option>
        <option value = "Urban">Urban</option>
        <option value = "Rural">Rural</option>
        <option value = "Frontier">Frontier</option>
      </select>

      <input
      type = "text"
      value = {searchValue}
      onChange={e=> setSearchValue(e.target.value)}/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
