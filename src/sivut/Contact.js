import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.js';

class Contact extends React.Component {
    render() {
        return <>
        <Container>
            <Row>
                <Col lg="2" md="1"></Col>
                <Col>

                <h6 className="emptySpace">
                Send us a message:
                </h6>

                <p>(tämä ei oikeasti lähetä mitään)</p>

                <Form className="centered">
                    <Row>
                        <Col><Form.Control placeholder="Name"/></Col>
                        <Col><Form.Control type="email" placeholder="E-mail"/></Col>
                    </Row>
                    <Form.Control as="textarea" rows={4} placeholder="Message" className="lessEmptySpace"/>
                    <Button variant="primary" type="submit">
                        SUBMIT
                    </Button>
                </Form>

                <p className="emptySpace"></p>
                <p className="centered">Follow us on social media: 
                <br/> 
                <a href="https://www.facebook.com/birdsofnecama" target="_blank" rel="noopener noreferrer">www.facebook.com/birdsofnecama</a>
                <br/>
                <a href="https://www.twitter.com/BirdsofNecama" target="_blank" rel="noopener noreferrer">www.twitter.com/BirdsofNecama</a>
                
                </p>
                <p className="centered">Contact us:
                <br/>
                <a href="mailto:birdsofnecama@gmail.com" target="_blank" rel="noopener noreferrer">birdsofnecama@gmail.com</a>
                </p>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti nihil soluta eius suscipit rerum dignissimos distinctio cum itaque illum iusto placeat, at molestiae quas maiores, eum quos facilis inventore pariatur voluptatibus expedita totam minus sequi voluptate. Eligendi incidunt qui optio. Ipsum minima assumenda ullam nobis pariatur ipsam accusantium nam sequi iste mollitia odit voluptatum, fugit repellat aut maiores doloremque asperiores sunt libero sapiente voluptatibus a velit beatae adipisci. Ea ut, pariatur cupiditate odit deserunt possimus officiis temporibus repellendus mollitia. Officia et eos illo molestias.
                </p>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est repellendus error facere velit in eos vel ad! Maxime vero nobis ducimus mollitia sed voluptatum nostrum ipsum quod, sunt ipsa quas necessitatibus molestias nam nisi doloremque magnam itaque quo velit, sapiente, eum odio quam excepturi error. Iure ipsum quasi non iusto neque alias quaerat tempora.
                </p>

                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a! Nemo temporibus excepturi ipsa? Perferendis culpa, sunt similique voluptatem architecto doloremque tempore iure. Magnam laboriosam similique natus magni itaque, inventore, blanditiis id temporibus deserunt sunt minima reprehenderit, maxime distinctio rem aspernatur nihil rerum nostrum consequatur culpa! Consequuntur corrupti quam dolorum, exercitationem facere eius perferendis est necessitatibus animi incidunt sed ullam, repudiandae architecto pariatur saepe nobis fuga. Distinctio placeat soluta laboriosam odio unde vero doloremque ab esse delectus commodi, voluptate aspernatur ea explicabo voluptatibus quam at. Excepturi quis temporibus exercitationem eveniet provident non animi incidunt, earum velit magni veniam, natus minus omnis quae vitae perspiciatis aliquam quisquam harum accusamus culpa possimus rem corrupti vero nisi. Quae consequuntur amet adipisci earum maxime, velit, debitis nihil itaque, quibusdam nobis et. Qui, error velit?
                </p>

                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minus hic expedita, eveniet asperiores facere dolores earum repudiandae esse et deserunt ratione aliquam amet neque eligendi corrupti quaerat autem velit eaque rerum dicta. Debitis sunt in accusamus quibusdam consequatur maiores veniam perspiciatis numquam quod a quaerat dolor ipsum deserunt itaque porro, alias nulla aperiam aut. Voluptates id aliquam dignissimos iure.
                </p>

                
                </Col>
                <Col lg="2" md="1">
                </Col>
            </Row>
        

        </Container>
        </>
    }
}

export default Contact;