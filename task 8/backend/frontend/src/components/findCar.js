import React, { useState, useEffect } from "react";
import axios from "axios";

const FindCar = ({cars, updateCar, deleteCar}) => {
  const [carAge, setCarAge] = useState([]);

  useEffect(() => {
    const findCarByAge = async () => {
      try {
        const response = await axios.get('/getCars/api/cars5');
        const { carObj } = response.data;
        console.log(response.data);
        setCarAge(carObj);
      } catch (error) {
        console.log(error);
      }
    };

    findCarByAge(cars);
  }, [cars]);

  return (
    <div className="cars5">
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Registration</th>
            <th>Colour</th>
            <th>Owner</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {carAge.map((car) => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.registration}</td>
              <td>{car.colour}</td>
              <td>{car.owner}</td>
              <td>{car.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FindCar;
