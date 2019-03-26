import React, { Component } from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';
import './Website.css';

export default class Website extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} className="banner" id="home"></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div id="about">
                                <Row >
                                    <Col xs={6} md={6} className="storeLogo">
                                        <Row>
                                            <Col xs={6} md={{ span: 6, offset: 5 }} className="StoreLogo">
                                                <a href="https://itunes.apple.com/us/app/icelandic-nouns-and-verbs/id1441344800?ls=1&mt=8" target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        width={300}
                                                        height={100}
                                                        className="align-self-start mr-1"
                                                        src="./assets/AppStore.svg"
                                                        alt="Download on the app store"
                                                    />
                                                </a>
                                            </Col>
                                            <Col xs={6} md={{ span: 6, offset: 5 }} className="storeLogo">
                                                <a href='https://play.google.com/store/apps/details?id=is.habby.IcelandicNounsAndVerbsFullVersion&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        width={300}
                                                        height={100}
                                                        className="align-self-end mr-1"
                                                        src="./assets/GooglePlay.svg"
                                                        alt="Get it on Google Play"
                                                    />
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6} sm={6} md={4}>
                                        <div className="aboutText">
                                            <h2>Icelandic nouns and verbs</h2>
                                            <h5>A flash card system intended to support learners of Icelandic.</h5>
                                            <p>The flash cards consist of verb conjugation and noun declension paradigms, 
                                                organised in a systematic manner to allow the learner to practise and 
                                                memorise the conjugations and declensions in manageable steps.</p>
                                        </div>
                                    </Col>
                                    
                                </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col xs={12} sm={12} md={12}>
                    <div id="features">
                            <Row className="justify-content-md-center">
                                <Col xs={6} sm={6} md={4}>
                                    <div className="featuresText">
                                        <h2>What will you find?</h2>
                                        <ul>
                                            <li>Over a 100 common verbs and their present, past tense and past participle conjugations</li>
                                            <li>150+ nouns from the 6 main declension groups</li>
                                            <li>A translation testing feature (Icelandic to English) for the learner to check (s)he understands the meaning of the verbs and nouns</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div id="phone">
                                        <video loop width="214" autoPlay>
                                            <source src="./assets/appVideo2.webm" type="video/webm" />
                                        </video>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}