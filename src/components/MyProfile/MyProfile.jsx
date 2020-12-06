import React from 'react'
import classes from './MyProfile.module.css'
import { Card, CardBody, CardTitle, Row, Col, CardSubtitle, CardHeader, Container, CardFooter } from 'shards-react'
import { Redirect } from 'react-router-dom'


const MyProfile = ({ currentUser, isAuth }) => {

    if (!isAuth) return <Redirect to={'/login'} />

    return (
        <div className={classes.profileWrapper}>
            <div></div>
            <Card style={{ maxWidth: "700px" }} className={classes.profileInformation}>
                <CardHeader>
                    <Container>
                        <Row>
                            <Col>
                                <CardTitle>YOUR PROFILE INFORMATION:</CardTitle>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>
                <CardBody>
                    <Container>
                        <Row>
                            <Col>
                                <CardTitle>Name:</CardTitle>
                                <CardSubtitle>{currentUser.name}</CardSubtitle>
                            </Col>
                            <Col>
                                <CardTitle>Surname</CardTitle>
                                <CardSubtitle>{currentUser.surname}</CardSubtitle>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <CardTitle>Location:</CardTitle>
                                <CardSubtitle>{currentUser.country}</CardSubtitle>
                            </Col>
                            <Col>
                                <CardTitle>Email</CardTitle>
                                <CardSubtitle>{currentUser.email}</CardSubtitle>
                            </Col>
                        </Row>
                    </Container>
                    <CardFooter>Currently authorized</CardFooter>
                </CardBody>
            </Card>
            <div></div>
        </div>
    )
}

export default MyProfile;
