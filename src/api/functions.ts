import { Client, Product } from '../interfaces/datatypes';

const HOST: string = 'http://localhost:3004';

type DataType = Client | Product;

export const login = async (user: string, pass: string): Promise<boolean> => {
  const fetchedData = await fetch(`${HOST}/auth`);

  const parsedData: {
    username: string;
    password: string;
  } = await fetchedData.json();

  return user === parsedData.username && pass === parsedData.password;
};

export const fetchData = async (datatype: string): Promise<DataType> => {
  const data = await fetch(`${HOST}/${datatype}`);
  return data.json();
};

export const createData = async (
  dataArray: DataType[],
  datatype: string,
  data: DataType
): Promise<DataType> => {
  data.id = Math.max(...dataArray.map((item) => item.id)) + 1;

  const newItem = await fetch(`${HOST}/${datatype}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return newItem.json();
};

export const updateData = async (
  datatype: string,
  id: number,
  data: DataType
): Promise<DataType> => {
  data.id = id;

  const updatedItem = await fetch(`${HOST}/${datatype}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return updatedItem.json();
};

export const deleteData = (datatype: string, id: number): Promise<Response> => {
  return fetch(`${HOST}/${datatype}/${id}`, {
    method: 'DELETE',
  });
};
