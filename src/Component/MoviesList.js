import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import movieimg from './Assets/SL-121019-25870-14.jpg';

const movies = [
  {
    id: 1,
    movename: 'Movie 1',
    language: 'Telugu',
    price: '180rs',
    img:movieimg,
  },
  {
    id: 2,
    movename: 'Movie 2',
    language: 'English',
    price: '200rs',  img:movieimg,
  },
  {
    id: 3,
    movename: 'Movie 3',
    language: 'Hindi',
    price: '150rs',  img:movieimg,
  },
  {
    id: 4,
    movename: 'Movie 1',
    language: 'Telugu',
    price: '180rs',  img:movieimg,
  },
  {
    id: 5,
    movename: 'Movie 2',
    language: 'English',
    price: '200rs',  img:movieimg,
  },
  {
    id: 6,
    movename: 'Movie 3',
    language: 'Hindi',
    price: '150rs',  img:movieimg,
  },
];


const MoviesList = () => {
  const navigate = useNavigate()
  const handleMovieSelect = (data) => {
    sessionStorage.setItem('movie', data)
    // console.log('Signing up with:', { username, password });
    navigate('/timeslot')
  };
  return (
    <section id='movies'>
      <Container style={{marginTop:'20px'}}>
        <Row>
          <Col xs='12'>
            <Card className="mb-5" style={{border:0}}>
              <p>Tagline</p>
              <h3>Movies</h3>
              <div  className="d-flex justify-content-between align-items-center">
              <p>Software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Button style={{border:'1px solide black',borderRadius:'13px',background:'white', color:'black',fontWeight:'500',outline:'none'}}>View All</Button>
              </div>
            </Card>
          </Col>
          <Col xs='12'>
            <Row>
              {movies.map((movie) => (
                <Col key={movie.id} md={4} className="mb-4">
                  <Card onClick={()=>handleMovieSelect(movie.movename)} style={{cursor:'pointer'}}>
                  <Card.Img variant="top" src={movie.img} />
                    <Card.Body>
                      <Card.Title>{movie.movename}</Card.Title>
                      <Card.Text>
                        <strong>Language:</strong> {movie.language}
                        <br />
                        <strong>Price:</strong> {movie.price}
                      </Card.Text>
                     
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MoviesList;
