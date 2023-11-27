import React from "react";
import "./Home.css";

import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div>
      <div className="homebg">
        <div className="mainheading">
          <h1 className="headingstyle text-light">
            Travel, enjoy<br></br>
            and live a new<br></br>and full life.
          </h1>
        </div>
      </div>
          <div className="mt-5 mb-5 pt-5">

            <h5>CATEGORY</h5>
            <h1>We Offer Best Services</h1>
        
          </div>
      <Container className="mt-20 mb-20 pt-5 pb-5 ">
        <div className="category">
          <div className="mb-3 mx-2">
            <Card className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/QNzScdc8/7941d3ccf2ed7dcc24021ce667201022.png"
              />
              <Card.Body>
                <Card.Title>Local Events</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-3 mx-2">
            <Card className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/WzFWFKTV/1000-F-203808724-x-Ob-Mbfee-QLhs-P6w-ETz7a5-Myn9nfe7x-Pv.jpg"
              />
              <Card.Body>
                <Card.Title>Best Flight</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-3 mx-2">
            <Card className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/vZV4qvHm/1000-F-459490528-a2-Pn-Bt1-OJfle8y-Zj-XEZO5-Wyai-B15-Xoau.jpg"
              />
              <Card.Body>
                <Card.Title>Calculated Weather</Card.Title>
                <Card.Text>
                Built Wicket longer admire do barton vantity itself do in it.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-2 mx-2">
            <Card className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/zGCJH2GT/kisscc0-spanners-computer-icons-tool-icon-design-socket-wr-gear-wrench-icon-5b743493549699-939939601.png"
              />
              <Card.Body>
                <Card.Title>Customizition</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

 
        </div>
      </Container>
     

      <div className="mt-5 mb-5">

            <h5>Top Selling</h5>
            <h1>Top Destinations</h1>
        
          </div>
          <Container className="mt-20 mb-20">
        <div className="category">
          <div className="mb-3 mx-2">
            <Card  className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/tRMRMw12/pexels-chait-goli-1797161.jpg"
              />
              <Card.Body>
                <Card.Title>Rome italy</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-3 mx-2">
            <Card  className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/bYGX7Vkp/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand-1.jpg"
              />
              <Card.Body>
                <Card.Title>Bali</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-3 mx-2">
            <Card className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/65w7jZ4V/merlion-statue-cityscape-singapore.jpg"
              />
              <Card.Body>
                <Card.Title>Singapore</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-3 mx-2">
            <Card className="card__style" id="t1">
              <Card.Img
                variant="top"
                className="image__style"
                src="https://i.postimg.cc/Y2g4pRwB/big-ben-westminster-bridge-sunset-london-uk.jpg"
              />
              <Card.Body>
                <Card.Title>Australia</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

 
        </div>
      </Container>
      
      <div>
             <Container>

                  <div>



                  </div>
                  <div>




                  </div>







             </Container>






      </div>

           <div className="review-img mt-4 mx-4">


          </div>

      
    </div>
  );
}

export default Home;
