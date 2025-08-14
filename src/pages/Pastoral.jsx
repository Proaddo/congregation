import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import pastoralImage1 from '../assets/pastoral1.jpg';
import pastoralImage2 from '../assets/pastoral2.jpg';
import founderImage from '../assets/founder.jpg';
import blaImage from '../assets/bla.jpg';

const Pastoral = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pastoralImage1}
            alt="Pastoral Ministry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
        </div>
        
        {/* Hero Content */}
        <Container className="relative h-full flex flex-col justify-center">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Pastoral Apostolate
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Partners in the mission of Jesus, preaching the Gospel to all creation
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="relative">
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/20 border-dashed"></div>
              <blockquote className="bg-gray-50 p-8 md:p-12 rounded-xl relative shadow-md">
                <div className="absolute -top-6 left-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21V12.3C14.017 9.162 16.697 7.2 19.817 7.2H21.017V3.6H18.617C13.697 3.6 9.617 7.08 9.617 12.3V21H14.017ZM3.617 21V12.3C3.617 9.162 6.297 7.2 9.417 7.2H10.617V3.6H8.217C3.297 3.6 -0.783 7.08 -0.783 12.3V21H3.617Z"/>
                  </svg>
                </div>
                <p className="text-2xl italic text-gray-800 mb-6 px-4">
                  "Look deep in your heart, look into your own depths and ask yourself – Am I restless for God, 
                  to announce Him, to make Him known and be compelled to 'go out' to others?"
                </p>
                <footer className="text-lg text-gray-600 text-end pe-4">
                  Pope Francis in <cite className="text-blue-600">Rejoice</cite>
                </footer>
              </blockquote>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-500/20 border-dashed"></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              The Vision of Our Founder
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
            </h2>
          </div>
          
          <Row className="items-center">
            <Col lg={5} className="flex justify-center mb-10 lg:mb-0">
              <div className="relative max-w-md">
                <div className="p-3 bg-white rounded-xl shadow-lg">
                  <img 
                    src={founderImage} 
                    alt="Servant of God R F C Mascarenhas" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="pl-0 lg:pl-10">
                <p className="text-xl text-gray-600 mb-8">
                  The Servant of God R F C Mascarenhas, the Founder of Bethany, being a zealous and compassionate 
                  pastor had a foresight of the Synodal Church in his time and was obsessed with the desire of 
                  preaching the good news including everyone, excluding none.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                          <path d="M12 6C11.45 6 11 6.45 11 7V12.41L15.3 15.71C15.69 16.01 16.22 15.92 16.51 15.53C16.8 15.14 16.72 14.61 16.32 14.32L12.5 11.58V7C12.5 6.45 12.05 6 11.5 6H12Z"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Modern Vision</h4>
                      <p className="text-gray-600">
                        Bethany is commissioned to listen, journey and reflect together with the people of God.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                          <path d="M12 6C11.45 6 11 6.45 11 7V12.41L15.3 15.71C15.69 16.01 16.22 15.92 16.51 15.53C16.8 15.14 16.72 14.61 16.32 14.32L12.5 11.58V7C12.5 6.45 12.05 6 11.5 6H12Z"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Pandemic Response</h4>
                      <p className="text-gray-600">
                        The outbreak of Covid pandemic has created new opportunities and posed new challenges for works 
                        of evangelization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BLA Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              Bethany Lay Association
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Empowering the laity in the mission to collaborate in the ministry of preaching the 'good news'
            </p>
          </div>
          
          <Row className="mb-16">
            <Col lg={6} className="mb-10 lg:mb-0">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[300px]">
                <img 
                  src={blaImage} 
                  alt="Bethany Lay Association" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
              </div>
            </Col>
            <Col lg={6} className="flex items-center">
              <div className="bg-gray-50 p-8 rounded-xl h-full border-l-4 border-blue-500">
                <p className="text-lg text-gray-600 mb-6">
                  In furtherance of the Charism of the Servant of God RFC Mascarenhas and to empower the laity in the mission, 
                  the XIV General Chapter of the Congregation in 2004, decided to start Bethany Lay Association to collaborate 
                  in the ministry of preaching the 'good news'.
                </p>
                <p className="text-lg text-gray-600">
                  Vatican II document of the Church, 'The light of the Nations' (Lumen Gentium) invites the laity to be the 
                  leaven in the world through the fulfillment of their own duties, and the witness of life and by their 
                  manifestation of Christ to others through faith hope and charity.
                </p>
              </div>
            </Col>
          </Row>
          
          {/* Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion defaultActiveKey="0" alwaysOpen>
              {/* Vision & Mission */}
              <Accordion.Item eventKey="0" className="mb-6 rounded-xl overflow-hidden shadow-md border-0">
                <Accordion.Header className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center w-full">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                        <path d="M12 18C11.72 18 11.5 17.78 11.5 17.5V12C11.5 11.72 11.72 11.5 12 11.5C12.28 11.5 12.5 11.72 12.5 12V17.5C12.5 17.78 12.28 18 12 18Z"/>
                        <path d="M12 8C11.59 8 11.25 7.66 11.25 7.25C11.25 6.84 11.59 6.5 12 6.5C12.41 6.5 12.75 6.84 12.75 7.25C12.75 7.66 12.41 8 12 8Z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Vision & Mission</h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="p-0">
                  <div className="p-6 pt-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Vision Card */}
                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                            <path d="M12 6C11.45 6 11 6.45 11 7V12.41L15.3 15.71C15.69 16.01 16.22 15.92 16.51 15.53C16.8 15.14 16.72 14.61 16.32 14.32L12.5 11.58V7C12.5 6.45 12.05 6 11.5 6H12Z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-center text-gray-900 mb-2">Vision</h4>
                        <p className="text-gray-600 text-center">
                          To promote the glory of God by the holiness of the members through prayer and service.
                        </p>
                      </div>
                      
                      {/* Goal Card */}
                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                            <path d="M12 6C11.45 6 11 6.45 11 7V12.41L15.3 15.71C15.69 16.01 16.22 15.92 16.51 15.53C16.8 15.14 16.72 14.61 16.32 14.32L12.5 11.58V7C12.5 6.45 12.05 6 11.5 6H12Z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-center text-gray-900 mb-2">Goal</h4>
                        <p className="text-gray-600 text-center">
                          To build vibrant and faith-filled catholic and humane communities after the example of Jesus
                        </p>
                      </div>
                      
                      {/* Mission Card */}
                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                            <path d="M12 6C11.45 6 11 6.45 11 7V12.41L15.3 15.71C15.69 16.01 16.22 15.92 16.51 15.53C16.8 15.14 16.72 14.61 16.32 14.32L12.5 11.58V7C12.5 6.45 12.05 6 11.5 6H12Z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-center text-gray-900 mb-2">Mission</h4>
                        <p className="text-gray-600 text-center">
                          As handmaids of the Lord strive towards fullness of life through the compassionate love of Jesus to all.
                        </p>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* Objectives */}
              <Accordion.Item eventKey="1" className="mb-6 rounded-xl overflow-hidden shadow-md border-0">
                <Accordion.Header className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center w-full">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                        <path d="M12 18C11.72 18 11.5 17.78 11.5 17.5V12C11.5 11.72 11.72 11.5 12 11.5C12.28 11.5 12.5 11.72 12.5 12V17.5C12.5 17.78 12.28 18 12 18Z"/>
                        <path d="M12 8C11.59 8 11.25 7.66 11.25 7.25C11.25 6.84 11.59 6.5 12 6.5C12.41 6.5 12.75 6.84 12.75 7.25C12.75 7.66 12.41 8 12 8Z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Objectives</h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="p-6 pt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Objective 1 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <p className="text-gray-600 pl-8">
                        To grow in Trinitarian life by sharing the Charism and Spirituality of the Congregation of the 
                        Sisters of the Little Flower of Bethany through prayer and service
                      </p>
                    </div>
                    
                    {/* Objective 2 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <p className="text-gray-600 pl-8">
                        To promote the values of Christ in one's own personal life, in the family and in the society.
                      </p>
                    </div>
                    
                    {/* Objective 3 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <p className="text-gray-600 pl-8">
                        To bring the compassionate love of Jesus to all especially the poor and the needy by supporting 
                        and participating in the mission of the Congregation.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* Current Status */}
              <Accordion.Item eventKey="2" className="rounded-xl overflow-hidden shadow-md border-0">
                <Accordion.Header className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center w-full">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                        <path d="M12 18C11.72 18 11.5 17.78 11.5 17.5V12C11.5 11.72 11.72 11.5 12 11.5C12.28 11.5 12.5 11.72 12.5 12V17.5C12.5 17.78 12.28 18 12 18Z"/>
                        <path d="M12 8C11.59 8 11.25 7.66 11.25 7.25C11.25 6.84 11.59 6.5 12 6.5C12.41 6.5 12.75 6.84 12.75 7.25C12.75 7.66 12.41 8 12 8Z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Current Status</h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="p-6 pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Growth Timeline */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Growth Timeline</h4>
                      <p className="text-gray-600 mb-6">
                        In the spirit of the teachings of Vatican II and the thrust of the subsequent General Chapters, 
                        the Bethany Lay Association was launched on 16.07.2007. It further gained momentum and branched 
                        out within and outside the country.
                      </p>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                          101
                        </div>
                        <p className="text-gray-600">
                          Units of BLA with 1604 members (as on September 2021)
                        </p>
                      </div>
                    </div>
                    
                    {/* Monthly Animation */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly Animation</h4>
                      <p className="text-gray-600 mb-6">
                        Every monthly animation session becomes for every Bethany Lay Associate, a time of rejuvenating one's spirits 
                        and deepening of one's faith, so that in turn they become good news to bring good news by being the 'salt to 
                        the earth' and 'light to the world'.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium">Prayer</span>
                        <span className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium">Reflection</span>
                        <span className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium">Community</span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Mission Call */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={pastoralImage2}
            alt="Mission background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <Container className="relative">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission Call
                </h2>
                <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  "Each of us is sent-forth into this world for a particular purpose. Mission is to live with that awareness 
                  that I am on this earth to do God's work, and to commit myself to it with a willing heart."
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                  Join Our Mission
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Pastoral;