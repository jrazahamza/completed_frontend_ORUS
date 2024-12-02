import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

const Data = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Abdul Kareem', age: '20' },
    { id: 2, name: 'Hashiir', age: '25' },
    { id: 3, name: 'Agha', age: '46' },
    { id: 4, name: 'RehmatUllah', age: '30' },
    { id: 5, name: 'Sheryar', age: '25' },
  ]);
  
  const [formData, setFormData] = useState({ id: '', name: '', age: '' });
  const [editing, setEditing] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle adding new entry
  const handleAdd = () => {
    if (formData.name && formData.age) {
      setData((prevData) => [
        ...prevData,
        { id: data.length + 1, name: formData.name, age: formData.age },
      ]);
      setFormData({ id: '', name: '', age: '' });
    }
  };

  // Handle editing an existing row
  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setFormData({ ...itemToEdit });
    setEditing(true);
  };

  // Handle saving the updated row
  const handleUpdate = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === formData.id ? { ...item, ...formData } : item
      )
    );
    setFormData({ id: '', name: '', age: '' });
    setEditing(false);
  };

  // Handle deleting a row
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, age }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(id)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={editing ? handleUpdate : handleAdd}
        >
          {editing ? 'Update' : 'Add'}
        </Button>
      </Form>
    </>
  );
};

export default Data;
