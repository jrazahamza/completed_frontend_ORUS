import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Nav, Navbar, Image } from 'react-bootstrap';
import Avatar from '../Images/avatar.png'
import NavigationalHeader from './NavigationalHeader';
import Header from './header';



const ChatbotInterface = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const exampleData = [
    { id: 1, title: 'Paris Vacation', description: 'Explore the romantic city of Paris with guided tours and gourmet dining.' },
    { id: 2, title: 'Tropical Beaches in Maldives', description: 'Relax on white sand beaches with crystal-clear waters in the Maldives.' },
    { id: 3, title: 'Adventure in New Zealand', description: 'Enjoy bungee jumping, hiking, and stunning landscapes in New Zealand.' },
    { id: 4, title: 'Cultural Experience in Japan', description: 'Dive into Japanese traditions with temple visits, tea ceremonies, and sushi making.' },
    { id: 5, title: 'Road Trip Across the USA', description: 'Experience iconic landmarks and scenic routes across the United States.' },
    { id: 5, title: 'Good and fine rate vacation', description: 'Plan a budget for my vacation.' }, 
  ];

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    const filteredSuggestions = exampleData.filter((item) =>
      item.title.toLowerCase().includes(prompt.toLowerCase()) ||
      item.description.toLowerCase().includes(prompt.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleButtonClick = (newPrompt) => {
    setPrompt(newPrompt);
    const filteredSuggestions = exampleData.filter((item) =>
      item.title.toLowerCase().includes(newPrompt.toLowerCase()) ||
      item.description.toLowerCase().includes(newPrompt.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <>

<div className='m-5'>
<Header/>
</div>
    
      <Container fluid className="vh-100 d-flex flex-column">
        <Row className="h-100">
          {/* Sidebar */}
          <Col md={3} className="bg-white border-end p-3">
            {/* Logo */}
            <div className="text-center mb-4">
              <div
                className="d-inline-block"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(to right, #ffb347, #ffcc33)',
                }}
              />
            </div>
            {/* Navigation */}
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-dark fw-bold py-2">
                Chat
              </Nav.Link>
              <Nav.Link href="#" className="text-dark fw-bold py-2">
                Explore
              </Nav.Link>
              <Nav.Link href="#" className="text-dark fw-bold py-2">
                History
              </Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={9} className="d-flex flex-column">
            {/* Header */}
            <Navbar className="px-4 py-3 border-bottom">
              <Navbar.Brand className="fw-bold">Your Travel AI Assistant</Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <div className="d-flex align-items-center">
                  <Image
                    src={Avatar}
                    roundedCircle
                    className="me-2"
                    alt="User"
                  />
                  <span>ORUS</span>
                </div>
              </Navbar.Collapse>
            </Navbar>

            {/* Main Chat Area */}
            <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
              <h5 className="mb-4">Your Travel AI Assistant</h5>

              {/* Prompt Buttons */}
              <div className="d-flex gap-3 mb-4">
                <Button variant="outline-warning" onClick={() => handleButtonClick('Plan a budget for my vacation')}>
                  Plan a budget for my vacation
                </Button>
                <Button variant="outline-warning" onClick={() => handleButtonClick('Tropical Beaches in Maldives')}>
                  Tropical Beaches in Maldives
                </Button>
                <Button variant="outline-warning" onClick={() => handleButtonClick('Adventure in New Zealand')}>
                  Adventure in New Zealand
                </Button>
                <Button variant="outline-warning" onClick={() => handleButtonClick('Explore the romantic city of Paris')}>
                  Explore the romantic city of Paris
                </Button>
              </div>

              {/* Chat Input */}
              <Form className="w-75" onSubmit={handlePromptSubmit}>
                <Form.Group className="d-flex align-items-center">
                  <Form.Control
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter a prompt here..."
                    className="me-2"
                  />
                  <Button variant="warning">
                    <i className="bi bi-send"></i> Send
                  </Button>
                </Form.Group>
              </Form>

              {/* Suggestions Area */}
              <div className="w-full max-w-2xl mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggestions:</h2>
                {suggestions.length > 0 ? (
                  <div className="grid gap-4">
                    {suggestions.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                      >
                        <h3 className="text-lg font-bold text-indigo-700">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center">No suggestions available. Try another prompt!</p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatbotInterface;
