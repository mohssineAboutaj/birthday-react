import React, { useState } from "react"

// import bootstrap style & compoments
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  Row,
  Col,
} from "react-bootstrap"

// import helpers
import { orderBy } from "lodash"

// logo
import logo from "./logo.svg"

// custom style
import "./App.css"

// import data
import data from "./data"

// import userList component
import UserList from "./components/user-list"

// export
export default () => {
  const [friends, setFriends] = useState(() => {
    return data
  })
  const [sortOptions] = useState(() => {
    return ["name", "id", "dob", "age"]
  })

  // sayHappy
  function sayHappy() {
    setFriends([])
  }

  return (
    <div className="App">
      <Container>
        <Card style={{ width: "500px" }} className="mx-auto">
          <Card.Header className="p-4 pb-0 card-top">
            <img src={logo} className="App-logo" alt="logo" />
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-capitalize">
              <b>{friends.length}</b> friends has birthday today
            </Card.Title>
            <Card.Title>
              <Row>
                <Col className="text-capitalize">sorting by:</Col>
                {sortOptions.map((s, i) => {
                  return (
                    <Col key={i} className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setFriends(orderBy(data, [s]))
                        }}
                        className="mx-2 my-1 text-capitalize"
                      >
                        {s}
                      </a>
                    </Col>
                  )
                })}
              </Row>
            </Card.Title>
            <Card.Text>
              <ListGroup>
                {friends.map((f) => {
                  const { id } = f
                  return (
                    <ListGroupItem key={id}>
                      <UserList user={f} />
                    </ListGroupItem>
                  )
                })}
              </ListGroup>
            </Card.Text>
            <Button
              variant="primary"
              block
              className="p-2 text-capitalize"
              onClick={sayHappy}
            >
              say <b>happy birthday</b> to all
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
