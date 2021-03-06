import mockData from "./../../../mock-data/mock-data-manager";

const handleGetMock = (endpoint, callback) => {
  switch(endpoint) {
    case "users/":
      callback(mockData.arrayUsers);
      break;
    case "persons/":
      callback(mockData.arrayPersons);
      break;
    default:
      callback(mockData.arrayUsers);
  }
};

export default handleGetMock;
