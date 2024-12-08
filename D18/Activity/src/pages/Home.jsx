import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'

const Home = () => {
    const { categ } = useParams();
    const [category, setCategory] = useState(null);
    
    const fetchCategory = async () =>{
        const response = await fetch(`https://fakestoreapi.com/products/categories`);
        const data = await response.json();
        setCategory(data || []);
    };

    useEffect(() => {
        fetchCategory();  // Call fetchCategory when the component mounts
    }, []); 
    console.log(categ);
  return (
  <>
    <div className="text-center mt-5">
        <h1>Product Showcase</h1>
        <p>Search and discover your favorite Product!</p>
    </div>
    <div className="container">
        <div className='filter-section d-flex justify-content-between px-3'>
            <DropdownButton id="dropdown-basic-button" title={categ ? categ.toUpperCase() : "Select Category"} >
                {
                    category ? (
                        category.map((categ) => (
                            <Dropdown.Item href={`/${categ}`} key={`${categ}`}>{`${categ.toUpperCase()}`}</Dropdown.Item>
                        ))
                    ) : (
                        <Dropdown.Item href='#'>No Category</Dropdown.Item>
                    )
                }
            </DropdownButton>
            <Form className='d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
            </Form>
        </div>
        <Outlet/>
    </div>
  </> 
  )
};

export default Home