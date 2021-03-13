import React from 'react';
import kuva1 from '../media/valokuvia/ArtsyJone.jpg';
import kuva3 from '../media/valokuvia/IMG_3067.JPG';
import kuva4 from '../media/valokuvia/IMG_3083.JPG';
import kuva5 from '../media/valokuvia/IMG_3111.JPG';
import kuva6 from '../media/valokuvia/IMG_8889.JPG';
import kuva7 from '../media/valokuvia/IMG_8896.JPG';
import kuva8 from '../media/valokuvia/IMG_9148.JPG';
import kuva9 from '../media/valokuvia/IMG_9157.JPG';
import kuva10 from '../media/valokuvia/IMG_9210.JPG';
import kuva11 from '../media/valokuvia/IMG_9219.JPG';
import kuva12 from '../media/valokuvia/korppi ja portti.jpg';
import kuva13 from '../media/valokuvia/Korppi portilla neliö.jpg';
import kuva14 from '../media/valokuvia/portti.jpg';


import thumb1 from '../media/valokuvia/thumb1.jpg';
import thumb3 from '../media/valokuvia/thumb3.jpg';
import thumb4 from '../media/valokuvia/thumb4.jpg';
import thumb5 from '../media/valokuvia/thumb5.jpg';
import thumb6 from '../media/valokuvia/thumb6.jpg';
import thumb7 from '../media/valokuvia/thumb7.jpg';
import thumb8 from '../media/valokuvia/thumb8.jpg';
import thumb9 from '../media/valokuvia/thumb9.jpg';
import thumb10 from '../media/valokuvia/thumb10.jpg';
import thumb11 from '../media/valokuvia/thumb11.jpg';
import thumb12 from '../media/valokuvia/thumb12.jpg';
import thumb13 from '../media/valokuvia/thumb13.jpg';
import thumb14 from '../media/valokuvia/thumb14.jpg';

import { Image, Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import '../App.js';

class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            album: kuva1
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



                <h3 className="emptySpace">Behind the Scenes</h3>
                <p className="centered">Here are some behind the scenes photos from when we were shooting the footage for our upcoming music video for the song Maadu. The video was shot in Sulosaari, Savonlinna in 2020 and 2021.</p>
                <Container>
                    <Row className="emptySpace">
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva1);
                                this.setShow(true);
                            }}>
                                <Image src={thumb1} thumbnail/>
                            </div>
                            
                        </Col>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva3);
                                this.setShow(true);
                            }}>
                                <Image src={thumb3} thumbnail/>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva4);
                                this.setShow(true);
                            }}>
                                <Image src={thumb4} thumbnail/>
                            </div>
                        </Col>
                    </Row>
                
                </Container>

                <p className="emptySpace">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla facere perspiciatis officia dolore, reiciendis blanditiis expedita explicabo ipsam quasi nobis tenetur labore maxime eveniet ducimus. Assumenda accusamus harum hic, laboriosam alias delectus repudiandae ducimus modi sunt ab dicta inventore cum numquam error officiis nostrum est nam perferendis. Recusandae at cum quidem magnam exercitationem animi temporibus, voluptatum, nemo eius alias ex a. Odio rem, eveniet libero sunt velit delectus repellendus nostrum sit consectetur excepturi reiciendis? Tempora, rerum aperiam sit repudiandae consequuntur ab a deserunt pariatur reprehenderit rem culpa eaque maiores velit, voluptates quia numquam quas necessitatibus porro quae, nemo doloribus aspernatur sapiente laudantium. Quaerat eligendi ab velit sapiente porro sunt rem, facilis repellendus autem ipsum doloribus natus voluptates voluptatum! Perferendis at voluptas eligendi quod totam quae. Natus impedit nostrum, adipisci itaque minus aliquid, aperiam tempora maiores sit tenetur minima perferendis recusandae id! Consequatur et nesciunt accusantium architecto explicabo itaque maiores.
                </p>

                <Container>
                    <Row>
                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva5);
                                this.setShow(true);
                            }}>
                                <Image src={thumb5} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva6);
                                this.setShow(true);
                            }}>
                                <Image src={thumb6} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva7);
                                this.setShow(true);
                            }}>
                                <Image src={thumb7} thumbnail/>
                            </div>
                        </Col>

                    </Row>
                </Container>

                <p className="emptySpace">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iure facilis nam quod impedit soluta harum repellendus obcaecati necessitatibus, cupiditate velit, numquam dignissimos doloremque. Maiores, rem quis vitae repudiandae soluta numquam labore error excepturi. Non, iusto voluptatem maxime tempora minima, veniam provident distinctio est, nemo magni ratione beatae hic culpa deserunt amet corrupti repudiandae odit alias temporibus molestias! Exercitationem, quidem possimus eligendi at id perferendis cum. Minus libero, adipisci ea tenetur error nostrum provident debitis ut culpa ad laborum voluptatem.</p>

                <Container>
                    <Row>
                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva8);
                                this.setShow(true);
                            }}>
                                <Image src={thumb8} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva9);
                                this.setShow(true);
                            }}>
                                <Image src={thumb9} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva10);
                                this.setShow(true);
                            }}>
                                <Image src={thumb10} thumbnail/>
                            </div>
                        </Col>

                    </Row>
                </Container>

                <p className="emptySpace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt illo atque at accusamus enim ullam nisi nesciunt. Obcaecati hic libero porro aliquam, dolorem, voluptatum consequatur quod nostrum nemo culpa ex impedit quae, dignissimos perspiciatis expedita accusantium cupiditate natus rerum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores dolor provident similique nam culpa accusamus ab error numquam eaque expedita maxime inventore, eius sequi, aliquid quas sint labore corrupti id? Quidem, ea similique! Modi commodi natus eveniet aliquid quidem, totam error nobis autem nisi necessitatibus quisquam, esse vitae rem ducimus aliquam officiis culpa saepe hic fugit ratione distinctio repellat dolorum ex incidunt. Beatae modi fugiat iure non ullam eum aspernatur dolore, ipsa iste veritatis in necessitatibus fugit. Suscipit numquam explicabo fugit maiores, totam tempore autem veritatis ea, repellendus dicta error nobis placeat delectus aliquid laudantium officia illo tenetur debitis enim hic recusandae accusamus corporis assumenda! Et, at voluptatem libero corporis ut magnam quia atque a commodi illo inventore asperiores fugiat, aspernatur impedit. Ratione officiis minus iste soluta amet, vel odit natus eligendi recusandae dolorem, saepe doloremque id sequi, itaque ut molestias! Ipsa corporis quia rerum, sapiente debitis asperiores cupiditate repellendus tenetur doloremque velit omnis, eius atque reprehenderit ullam sit suscipit eligendi architecto sint fuga sequi incidunt. Fugiat, doloremque quos.</p>
                

                <Container>
                    <Row>
                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva11);
                                this.setShow(true);
                            }}>
                                <Image src={thumb11} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva12);
                                this.setShow(true);
                            }}>
                                <Image src={thumb12} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva13);
                                this.setShow(true);
                            }}>
                                <Image src={thumb13} thumbnail/>
                            </div>
                        </Col>

                        <Col>
                        <div className="imgLink" onClick={()=>{
                                this.setAlbum(kuva14);
                                this.setShow(true);
                            }}>
                                <Image src={thumb14} thumbnail/>
                            </div>
                        </Col>

                    </Row>
                </Container>

                <p className="emptySpace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia rem ratione maxime voluptates vel amet nesciunt debitis qui vero nulla error doloribus, accusamus ab laboriosam iusto eius, fuga perspiciatis? Pariatur reiciendis, hic sunt sequi neque porro eos maxime dicta sed at suscipit similique iste repellat magni velit qui? A eligendi aliquid, tempore libero voluptatibus iste odit perferendis voluptas amet sit ratione. Praesentium perspiciatis magnam laboriosam maxime dolorum, nam aliquam doloribus assumenda cupiditate repellat necessitatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta quasi molestiae vel similique illum doloremque saepe at dolorem, amet modi ad vero repellat alias!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum minima itaque repudiandae possimus quibusdam. Rem, modi aliquid, aspernatur provident error ipsa maiores eveniet maxime, quo aperiam atque dicta repellendus earum ex? Aspernatur at nihil unde reiciendis provident modi natus enim hic. Quos illo earum, nisi optio quod sint, eligendi consequuntur quibusdam harum voluptate nemo dolorum recusandae vero, soluta illum atque nihil necessitatibus enim fugit amet? Natus autem nemo facilis veniam dignissimos ea pariatur tempore totam vel soluta, iste, illum inventore eos voluptate quia qui laborum corrupti architecto perspiciatis ut alias animi voluptatibus. Quae distinctio earum labore illo recusandae ipsa?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis temporibus, veritatis beatae corrupti labore perspiciatis earum architecto assumenda, ut corporis. Adipisci soluta iste nulla sint dolore, velit labore quasi debitis accusantium fuga dicta tempore eos impedit atque beatae, amet ipsa. Enim aut aliquam doloremque eos unde doloribus sapiente. Placeat rerum fugit ipsam eveniet vel aut, ullam itaque adipisci ducimus ipsum voluptas nemo iure magnam praesentium voluptates, delectus, fugiat ipsa maiores! Non consequuntur et dicta libero similique doloribus voluptate, quaerat nobis cumque ipsa eos dolorum facere? Maiores obcaecati placeat, quia officia odit quam doloribus. Ipsam ratione id nostrum blanditiis possimus voluptates officia error doloremque iusto alias ea, deserunt quidem consequuntur, illum nesciunt eaque placeat aspernatur, labore accusamus dolore cupiditate quo. Numquam molestiae doloribus voluptatibus repellat nisi itaque accusamus cum in consequuntur illum libero quaerat, similique eius nulla maxime, tempora, sunt delectus dolorem. Itaque earum sed ipsam id veritatis commodi consequatur.</p>
                
                <Carousel className="emptySpace">
                    <Carousel.Item>
                        <Image src={kuva5} fluid/>
                        <Carousel.Caption>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={kuva3} fluid/>
                        <Carousel.Caption>
                            <p>Non quia rem ratione maxime voluptates.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={kuva4} fluid/>
                        <Carousel.Caption>
                            <p>Consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={kuva6} fluid/>
                        <Carousel.Caption>
                            <p>At nihil unde reiciendis provident.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={kuva7} fluid/>
                        <Carousel.Caption>
                            <p>Modi commodi natus eveniet aliquid quidem.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <p className="emptySpace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt nesciunt temporibus odio aspernatur illo similique unde vitae, tempora nobis earum repellendus, explicabo enim dignissimos optio animi eius doloremque porro assumenda! Obcaecati quo harum maxime nesciunt aliquid consequatur odio eligendi officiis totam. Quo officia quibusdam laudantium repellendus. Beatae mollitia ab nihil aut odio accusantium officiis fuga dolorem voluptatum dignissimos, impedit earum molestiae! Odio praesentium, vitae non impedit architecto dignissimos nobis exercitationem. Quidem, officia minima optio atque culpa, molestiae vero veniam expedita aut illum delectus provident voluptatibus excepturi. Perspiciatis.</p>

                </Col>
                <Col lg="2" md="1">
                </Col>
            </Row>
        

        </Container>
        
        <div onClick={this.handleClose} onWheel={this.handleClose} onKeyDown={this.handleClose}>
        <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-90w" centered>
            
            <Modal.Body>
                <div className="photoModal">
                    <Image src={this.state.album} fluid></Image>
                </div>
            </Modal.Body>
            

        </Modal>
        </div>
        </>
    }
}

export default Photos;