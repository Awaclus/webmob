import React from 'react';
import apt from '../media/levynkannet/antipuppet.png';
import misanthropy from '../media/levynkannet/misanthropy.png';
import fractures from '../media/levynkannet/fractures.png';
import serenity from '../media/levynkannet/serenity.png';
import flock from '../media/levynkannet/flock.png';
import essence from '../media/levynkannet/essence.png';
import { Image, Container, Row, Col, Modal } from 'react-bootstrap';
import '../App.js';

class Releases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            album: apt
        };

    }

    setShow(a) {
        this.setState({
            show: a
        });
    }

    setAlbum(a) {
        this.setState({
            album: a
        });
    }

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    

    render() {

        
        return <>
        
        <Container>
            <Row>
                <Col lg="2" md="1"></Col>
                <Col>



                <h3 className="emptySpace">Releases</h3>
                <p className="centered">We have released the following albums and EPs:</p>
                
                <p className="centered">
                2015 - Anti-Puppet Theory, EP
                <br/>
                2016 - Misanthropy, album
                <br/>
                2017 - Fractures, album
                <br/>
                2019 - Serenity, EP
                <br/>
                2020 - Flock, album
                <br/>
                2021 - Essence, album
                </p>
                <Container>
                    <Row className="emptySpace">
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(apt);
                                this.setShow(true);
                            }}>
                                <Image src={apt} thumbnail/>
                            </div>
                            
                        </Col>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(misanthropy);
                                this.setShow(true);
                            }}>
                                <Image src={misanthropy} thumbnail/>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(fractures);
                                this.setShow(true);
                            }}>
                                <Image src={fractures} thumbnail/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(serenity);
                                this.setShow(true);
                            }}>
                                <Image src={serenity} thumbnail/>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(flock);
                                this.setShow(true);
                            }}>
                                <Image src={flock} thumbnail/>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(essence);
                                this.setShow(true);
                            }}>
                                <Image src={essence} thumbnail/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <p className="emptySpace">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla facere perspiciatis officia dolore, reiciendis blanditiis expedita explicabo ipsam quasi nobis tenetur labore maxime eveniet ducimus. Assumenda accusamus harum hic, laboriosam alias delectus repudiandae ducimus modi sunt ab dicta inventore cum numquam error officiis nostrum est nam perferendis. Recusandae at cum quidem magnam exercitationem animi temporibus, voluptatum, nemo eius alias ex a. Odio rem, eveniet libero sunt velit delectus repellendus nostrum sit consectetur excepturi reiciendis? Tempora, rerum aperiam sit repudiandae consequuntur ab a deserunt pariatur reprehenderit rem culpa eaque maiores velit, voluptates quia numquam quas necessitatibus porro quae, nemo doloribus aspernatur sapiente laudantium. Quaerat eligendi ab velit sapiente porro sunt rem, facilis repellendus autem ipsum doloribus natus voluptates voluptatum! Perferendis at voluptas eligendi quod totam quae. Natus impedit nostrum, adipisci itaque minus aliquid, aperiam tempora maiores sit tenetur minima perferendis recusandae id! Consequatur et nesciunt accusantium architecto explicabo itaque maiores.
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla facere perspiciatis officia dolore, reiciendis blanditiis expedita explicabo ipsam quasi nobis tenetur labore maxime eveniet ducimus. Assumenda accusamus harum hic, laboriosam alias delectus repudiandae ducimus modi sunt ab dicta inventore cum numquam error officiis nostrum est nam perferendis. Recusandae at cum quidem magnam exercitationem animi temporibus, voluptatum, nemo eius alias ex a. Odio rem, eveniet libero sunt velit delectus repellendus nostrum sit consectetur excepturi reiciendis? Tempora, rerum aperiam sit repudiandae consequuntur ab a deserunt pariatur reprehenderit rem culpa eaque maiores velit, voluptates quia numquam quas necessitatibus porro quae, nemo doloribus aspernatur sapiente laudantium. Quaerat eligendi ab velit sapiente porro sunt rem, facilis repellendus autem ipsum doloribus natus voluptates voluptatum! Perferendis at voluptas eligendi quod totam quae. Natus impedit nostrum, adipisci itaque minus aliquid, aperiam tempora maiores sit tenetur minima perferendis recusandae id! Consequatur et nesciunt accusantium architecto explicabo itaque maiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla facere perspiciatis officia dolore, reiciendis blanditiis expedita explicabo ipsam quasi nobis tenetur labore maxime eveniet ducimus. Assumenda accusamus harum hic, laboriosam alias delectus repudiandae ducimus modi sunt ab dicta inventore cum numquam error officiis nostrum est nam perferendis. Recusandae at cum quidem magnam exercitationem animi temporibus, voluptatum, nemo eius alias ex a. Odio rem, eveniet libero sunt velit delectus repellendus nostrum sit consectetur excepturi reiciendis? Tempora, rerum aperiam sit repudiandae consequuntur ab a deserunt pariatur reprehenderit rem culpa eaque maiores velit, voluptates quia numquam quas necessitatibus porro quae, nemo doloribus aspernatur sapiente laudantium. Quaerat eligendi ab velit sapiente porro sunt rem, facilis repellendus autem ipsum doloribus natus voluptates voluptatum! Perferendis at voluptas eligendi quod totam quae. Natus impedit nostrum, adipisci itaque minus aliquid, aperiam tempora maiores sit tenetur minima perferendis recusandae id! Consequatur et nesciunt accusantium architecto explicabo itaque maiores.</p>

                </Col>
                <Col lg="2" md="1">
                </Col>
            </Row>
        

        </Container>
        
        <div onClick={this.handleClose} onWheel={this.handleClose} onKeyDown={this.handleClose}>
        <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-90w" centered>
            
            <Modal.Body>
                <Image src={this.state.album} fluid></Image>
            </Modal.Body>
            

        </Modal>
        </div>
        </>
    }
}

export default Releases;