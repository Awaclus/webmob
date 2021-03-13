import React from 'react';
import logo from '../media/logoja/necama_logo_lightblue.png';
import { Image, Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import '../App.js';

class Home extends React.Component {
    render() {
        return <>
        <Container>
            <Row>
                <Col lg="2" md="1"></Col>
                <Col>


                <Image
                    src={ logo }
                    fluid
                    alt="Birds of Necama logo"
                    id="biglogo"
                />

                <h6>
                Birds of Necama is an indie folkcore band from Finland. Our music is Creative Commons licensed and you can get it on <a href="https://birdsofnecama.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a> as a free, DRM-free high quality download or stream it on <a href="https://www.youtube.com/channel/UC0n3Y9PFqw_f1J2HweSbFSw" target="_blank" rel="noopener noreferrer">YouTube</a> or <a href="https://open.spotify.com/artist/1dcUtE5pu67QJ64TcHsqTP" target="_blank" rel="noopener noreferrer">Spotify</a>.
                </h6>

                <ResponsiveEmbed aspectRatio="16by9" id="thrall">
                    <iframe title="thrall" width="560" height="315" src="https://www.youtube.com/embed/KHHpzvVntl8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </ResponsiveEmbed>
                    
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem eaque architecto at quisquam. Molestias labore magnam nostrum possimus quo adipisci distinctio ad beatae consectetur. Perferendis fugiat modi iste, debitis quae amet, consectetur incidunt, doloremque veniam itaque accusantium aut soluta! Architecto reprehenderit illum alias est fuga! Atque odit incidunt, amet facere temporibus, ducimus eaque molestiae natus voluptate sapiente dignissimos? Qui asperiores labore deleniti repudiandae iure cupiditate totam unde similique ipsa illo nam recusandae, voluptates est porro at, sit possimus dolore error. Sapiente quo nemo commodi architecto distinctio repellendus quos dignissimos, non minus, harum nisi libero voluptas? Ipsam facilis saepe deserunt, earum voluptates laboriosam eligendi, a hic nostrum doloremque dicta dolorem, quam ratione possimus impedit aperiam. Nisi inventore vel voluptate earum, libero officiis reprehenderit fugiat dolorem voluptas sapiente quis similique sequi incidunt quia odit illo, vitae quam, dolores ipsum eaque excepturi provident dolore dolorum? Repellat accusantium ipsa perferendis in quisquam architecto, aliquam eaque incidunt! Animi corrupti quasi qui ducimus aliquam voluptatem quibusdam autem officiis? Perspiciatis deserunt maxime voluptas tempore quisquam nam ipsa atque dolor perferendis sint, odit maiores quo totam, officiis cumque cum, illo incidunt eius sequi hic vitae omnis veritatis repellat? Molestiae officiis fuga error nulla dolore. Qui, blanditiis ipsam!
                </p>
                <p>
                Earum laudantium totam iusto est voluptas nulla alias laboriosam, recusandae ducimus libero quasi assumenda et vitae facere sed tempora voluptate quam asperiores corrupti maxime vel numquam minima nihil? Quibusdam nisi ex ducimus incidunt rem natus repellat enim itaque soluta sunt, deserunt excepturi impedit laborum distinctio illo reprehenderit blanditiis, cumque reiciendis. Ullam impedit illo doloribus eum unde odit dolores explicabo nam animi fuga delectus adipisci at nihil, quos voluptatibus facere laudantium error repudiandae minima. Quam fugiat repudiandae, doloribus cum, dolorum est ex sapiente, minus quas sit ut. Quibusdam consequuntur culpa animi esse quos!
                </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores ad similique, doloremque illum fuga itaque necessitatibus ducimus non quidem cumque temporibus deleniti magnam exercitationem nesciunt tempora reiciendis sint? Deleniti, quibusdam! Quidem delectus iste quae sed distinctio, nihil, quos doloremque iusto architecto itaque nostrum debitis iure, ad et fugit! Incidunt fugit deserunt animi quod tempore a voluptatem obcaecati dolore exercitationem nesciunt impedit qui quia sit repellat accusantium quae, similique et nihil? Ullam voluptatem minus unde? Minus unde pariatur, praesentium, distinctio delectus placeat quod corporis nemo modi qui provident vel aut quas fuga magni hic cupiditate neque id. Quas, alias iusto.</p>
                <br/>
                
                </Col>
                <Col lg="2" md="1">
                </Col>
            </Row>
        

        </Container>
        </>
    }
}

export default Home;