import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import ButtonReset from '../Buttons/ButtonReset';

import logo from "../../image/Logo-2.jpg"

import {
  filterByTemperament,
  filterByOrigin,
  filterByOrder,
  filterByWeight,
  resetFilters,
} from "../../redux/actions"

import styles from "./FilterBar.module.css"

const FilterBar = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperament)
  
  const handleTemperamentFilterChange = (event)=>{
    const selectedOption = event.target.value;
    if(selectedOption !=="Select dog temperament"){
      dispatch(filterByTemperament(selectedOption))
    }
  }
  const handleOriginFilterChange = (event)=>{
    const selectedOption = event.target.value;
      dispatch(filterByOrigin(selectedOption))
  }

  const handleOrderFilterChange = (event)=>{
    const selectedOption = event.target.value;
    if(selectedOption === "asc" || selectedOption === "desc")
      dispatch(filterByOrder(selectedOption))

  }

  const handleWeightFilterChange = (event)=>{
    const selectedOption = event.target.value;
      dispatch(filterByWeight(selectedOption))

  }

  const handleReset = () => {
    dispatch(resetFilters());
    // dispatch(getAllDogs());
  };


  return (

    <div className={styles.filterBar}>

      <img src={logo} alt="" className={styles.imageLeft}/>
      <ButtonReset onClick={handleReset}/>

      {/* Temperamento */}
      <label>Temperament:</label>
      <select onChange={handleTemperamentFilterChange}>
      <option value="">Select dog temperament</option>
      {allTemperaments && (allTemperaments.map((temperament) => (
     <option key={temperament.id} value={temperament.name} >
        {temperament.name}
      </option>
      )))}  
      </select>


      {/* Origen */}
      <label>Origin:</label>
      <select
        onChange={handleOriginFilterChange}>
        <option value="all">All</option>
        <option value="api">API</option>
        <option value="db">Database</option>
      </select>


      {/* Orden */}
      <label>Order:</label>
      <select
        onChange={handleOrderFilterChange}>
        <option value="sel">Select order </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>


       {/* Peso */}
       <label>Weight:</label>
      <select
        onChange={handleWeightFilterChange}>
        <option value="sel">Select order </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>


      <img src={logo} alt="" className={styles.imageRight}/>

    </div>
  );
};

export default FilterBar;
