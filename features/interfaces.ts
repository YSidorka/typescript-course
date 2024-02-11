interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  model: 'honda'
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(`
  name: ${vehicle.name}
  year: ${vehicle.year}
  broken: ${vehicle.broken}
  `);
};

printVehicle(oldCivic);
