// motorInsurance.js
const motorInsuranceData = [
  {
    category: "Motor Private",
    subCategory: "Private vehicles",
    details: {
      "Minimum Premium Flat Rate": "1.50%",
      "Minimum Premium Rate": "1.01%",
      "Compulsory Excess - Own Damage": "7.5% to 10% or Min. Birr 1,000",
      "Compulsory Excess - Theft": "10% or Min Birr 2,000"
    }
  },
  {
    category: "Motor Private",
    subCategory: "Electric Private vehicles",
    details: {
      "Minimum Premium Flat Rate": "1.50%",
      "Minimum Premium Rate": "2.50%",
      "Compulsory Excess - Own Damage": "Refer To URBCo. Dept.",
      "Compulsory Excess - Theft": "Refer To URBCo. Dept."
    }
  },
  {
    category: "Motor Private",
    subCategory: "Motor Cycles including three wheelers",
    details: {
      "Minimum Premium Flat Rate": "1.75%",
      "Minimum Premium Rate": "1.14%",
      "Compulsory Excess - Own Damage": "5% or Min. Birr 1,000",
      "Compulsory Excess - Theft": "10% or Min Birr 2,000"
    }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Pick-ups",
    details: { "Minimum Premium Flat Rate": "1.60%", "Minimum Premium Rate": "1.09%", "Compulsory Excess - Own Damage": "7.5% to 10% or Min. Birr 2,000", "Compulsory Excess - Theft": "10% to 12.5% or Min Birr 4,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Truck & Truck Trailers",
    details: { "Minimum Premium Flat Rate": "1.75%", "Minimum Premium Rate": "1.12%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Water Tanker",
    details: { "Minimum Premium Flat Rate": "1.75%", "Minimum Premium Rate": "1.12%", "Compulsory Excess - Own Damage": "7.5% or Min. Birr 5,000", "Compulsory Excess - Theft": "12.5% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Fuel Tanker and Trailers",
    details: { "Minimum Premium Flat Rate": "2%", "Minimum Premium Rate": "1.39%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Tipper",
    details: { "Minimum Premium Flat Rate": "2%", "Minimum Premium Rate": "1.25%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Isuzu FSR",
    details: { "Minimum Premium Flat Rate": "N/A", "Minimum Premium Rate": "1.12%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 15,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (Own goods)",
    subCategory: "Isuzu NPR",
    details: { "Minimum Premium Flat Rate": "N/A", "Minimum Premium Rate": "1.12%", "Compulsory Excess - Own Damage": "10% or Min. Birr 7,500", "Compulsory Excess - Theft": "15% or Min Birr 15,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Pick-ups & Vans",
    details: { "Minimum Premium Flat Rate": "1.75%", "Minimum Premium Rate": "1.36%", "Compulsory Excess - Own Damage": "10% or Min. Birr 3,000", "Compulsory Excess - Theft": "12.5% or Min Birr 6,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Truck & Truck Trailers",
    details: { "Minimum Premium Flat Rate": "2%", "Minimum Premium Rate": "1.29%", "Compulsory Excess - Own Damage": "10% or Min. Birr 7,500", "Compulsory Excess - Theft": "15% or Min Birr 15,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Water Tanker",
    details: { "Minimum Premium Flat Rate": "2%", "Minimum Premium Rate": "1.29%", "Compulsory Excess - Own Damage": "7.5% or Min. Birr 7,500", "Compulsory Excess - Theft": "10% or Min Birr 15,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Fuel Tanker and Trailers",
    details: { "Minimum Premium Flat Rate": "2.50%", "Minimum Premium Rate": "1.60%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "20% or Min Birr 20,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Tipper",
    details: { "Minimum Premium Flat Rate": "2.50%", "Minimum Premium Rate": "1.43%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "15% or Min Birr 20,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Isuzu FSR",
    details: { "Minimum Premium Flat Rate": "N/A", "Minimum Premium Rate": "1.29%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "15% or Min Birr 15,000" }
  },
  {
    category: "Motor Commercial",
    group: "Good Carrying (General Cartage)",
    subCategory: "Isuzu NPR",
    details: { "Minimum Premium Flat Rate": "N/A", "Minimum Premium Rate": "1.29%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "15% or Min Birr 15,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Own Service All seats",
    details: { "Minimum Premium Flat Rate": "1.60%", "Minimum Premium Rate": "1.30%", "Compulsory Excess - Own Damage": "7.5% or Min. Birr 3,000", "Compulsory Excess - Theft": "10% or Min Birr 6,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Public Service (Seat upto 16)",
    details: { "Minimum Premium Flat Rate": "4.00%", "Minimum Premium Rate": "2.86%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "20% or Min Birr 20,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Public Service (Seat 17-30)",
    details: { "Minimum Premium Flat Rate": "3.10%", "Minimum Premium Rate": "1.80%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "20% or Min Birr 20,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Public Service (Seat above 30)",
    details: { "Minimum Premium Flat Rate": "2.50%", "Minimum Premium Rate": "1.74%", "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", "Compulsory Excess - Theft": "20% or Min Birr 20,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Taxi",
    details: { "Minimum Premium Flat Rate": "2.50%", "Minimum Premium Rate": "1.77%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Car hire / Ride taxi / Tour & Travel",
    details: { "Minimum Premium Flat Rate": "2.75%", "Minimum Premium Rate": "1.58%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "12.5% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Learner",
    details: { "Minimum Premium Flat Rate": "2.50%", "Minimum Premium Rate": "1.77%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "12.5% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Passengers",
    subCategory: "Motor Cycles (Three Wheelers)",
    details: { "Minimum Premium Flat Rate": "2.00%", "Minimum Premium Rate": "1.70%", "Compulsory Excess - Own Damage": "10% or Min. Birr 1,500", "Compulsory Excess - Theft": "15% or Min Birr 3,000" }
  },
  {
    category: "Motor Commercial",
    group: "Agricultural Vehicles / Ambulances",
    subCategory: "Agricultural vehicles",
    details: { "Minimum Premium Flat Rate": "2.50%", "Minimum Premium Rate": "1.58%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Agricultural Vehicles / Ambulances",
    subCategory: "Ambulance",
    details: { "Minimum Premium Flat Rate": "2.00%", "Minimum Premium Rate": "1.70%", "Compulsory Excess - Own Damage": "10% or Min. Birr 5,000", "Compulsory Excess - Theft": "15% or Min Birr 10,000" }
  },
  {
    category: "Motor Commercial",
    group: "Special Vehicles",
    subCategory: "Specialized Trucks & Equipment",
    details: { 
      "Minimum Premium Flat Rate": "2.50%", 
      "Minimum Premium Rate": "1.43%", 
      "Compulsory Excess - Own Damage": "10% or Min. Birr 10,000", 
      "Compulsory Excess - Theft": "20% or Min Birr 20,000",
      "Includes": "Fire trucks, mixers, forklifts, mobile cranes, airport vehicles, etc."
    }
  },
  {
    category: "Motor Trade",
    subCategory: "Garages and Maintenance workshop",
    details: {
      "Premises Risk": "1% of Sum Insured",
      "Road Risk": "Birr 2,000.00 per Driver",
      "Maximum Sum Insured": "Limit Birr 200,000.00 per vehicle",
      "Deductible": "Birr 5,000.00 per loss"
    }
  },
  {
    category: "Motor Trade",
    subCategory: "Car dealers and other",
    details: {
      "Premises Risk": "0.9% of Sum Insured",
      "Road Risk": "Birr 2,000.00 per Driver",
      "Maximum Sum Insured": "Limit Birr 200,000.00 per vehicle",
      "Deductible": "Birr 5,000.00 per loss"
    }
  }
];

export default motorInsuranceData;