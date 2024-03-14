import React, {useState} from "react";


    const properties = ["oshpd_id" , "FacilityName2", "CountyName", "system" ,
    "LICENSED_BED_SIZE",	"HospitalOwnership",	
         "UrbanRuralDesi",	"TEACHINGDesignation",	"Category",	
         "Tot_ED_NmbVsts",	"EDStations",	"EDDXCount",
         "LATITUDE",	"LONGITUDE",	"PrimaryCareShortageArea",
         "MentalHealthShortageArea"];
    const propertiesShortened = ["ID" , "Name", "CountyName", "System" ,
    "BedCount",	"HospitalOwnership",	
         "UrbanRuralDesi",	"TEACHINGDesignation",	"Category",	
         "EmergencyVisits",	"EmergencyStations",	"SpecificED",
         "Latitude",	"Longitude",	"PrimaryShortage",
         "MentalHealthShortage"];

  const sampleObj = {"oshpd_id" :"106010735", "FacilityName2":"Alameda Hospital", "CountyName" : "Alameda", "system" : "Alameda Health System" ,
  "LICENSED_BED_SIZE":"149",	"HospitalOwnership" :"Government",	
       "UrbanRuralDesi" : "Urban",	"TEACHINGDesignation" : "Non-teaching",	"Category" : "Active COVID-19",	
       "Tot_ED_NmbVsts" : "11185",	"EDStations" :"12",	"EDDXCount" : "262",
       "LATITUDE" : "37.76266",	"LONGITUDE" : "-122.253991",	"PrimaryCareShortageArea": "No",
       "MentalHealthShortageArea" : "No"}

function headerRow(properties)
{
  const elements = []
  for (const i in properties)
    elements.push(  <div className="cell">{propertiesShortened[i]}</div> );
  return (
    <div className="rowElement">
      {elements}
    </div>);
}

function singleRow(dataBlock)
{

    //div key = {counter}
const itemsToRender = [];
for (const i in properties)
    {
      //console.log(properties[i]);
        itemsToRender.push(<div  className="cell">{dataBlock[properties[i]]}</div>);}
return (
  <div className="rowElement">
    {itemsToRender}
    </div>);
}

//export const headerExample = headerRow(properties);
//export const lineExample = singleRow(sampleObj);
export const exampleData = <div className="grid">
{headerRow(properties)}
{singleRow(sampleObj)}
{singleRow(sampleObj)}
{singleRow(sampleObj)}
{singleRow(sampleObj)}
</div>

export const starterData = 
headerRow(properties);

export function buildDataArray(data)  {
const ans = [headerRow(properties)];
console.log("ans", ans, headerRow(properties));
for (const i in data)
  {
    console.log(data[i]);
    ans.push(singleRow(data[i]));}
return ans;
};


//[headerRow(properties), singleRow(sampleObj)];
