import React, {useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Products = () => {
  const { categ } = useParams();
  const [ Products, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const response = await fetch(`https://www.omdbapi.com/?i=${categ}&apikey=7468ab06`);
//       const data = await response.json();
//       setMovie(data);
//     };

//     fetchMovieDetails();
//   },[categ]);

  console.log(categ);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">With supporting text.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">With supporting some more text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">lead-in to additional content.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content and more spporting text below ... content. additional content.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">With more more more supporting text.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="card border-primary">
                <div className="card-body">
                    <h3 className="card-title">Card</h3>
                    <p className="card-text">With supporting text.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Products
