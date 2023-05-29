import { useState, useEffect } from 'react';

const CarList = ({ cars, updateCar, deleteCar }) => {
  const [editedCars, setEditedCars] = useState([]);

  useEffect(() => {
    setEditedCars(cars);
  }, [cars]);

  const handleChange = (e, carIndex) => {
    const { name, value } = e.target;
    setEditedCars((prevCars) => {
      const updatedCars = prevCars.map((car, index) => {
        if (index === carIndex) {
          return {
            ...car,
            [name]: value
          };
        }
        return car;
      });
      return updatedCars;
    });
  };

  const handleUpdate = (carId) => {
    const updatedCar = editedCars.find((car) => car._id === carId);
    if (updatedCar) {
      updateCar(carId, updatedCar); // Call the updateCar function with the carId and updatedCar
    }
  };

  return (
    <div className='carInfo'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Make</th>
            <th>Model</th>
            <th>Registration</th>
            <th>Colour</th>
            <th>Owner</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {editedCars.map((car, index) => (
            <tr key={car._id}>
              <td>{car.name}</td>
              <td>
                <input
                  type="text"
                  name="make"
                  value={car.make}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="model"
                  value={car.model}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="registration"
                  value={car.registration}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="colour"
                  value={car.colour}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="owner"
                  value={car.owner}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={car.address}
                  onChange={(e) => handleChange(e, index)}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(car._id)}>Update</button>
                <button onClick={() => deleteCar(car._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
