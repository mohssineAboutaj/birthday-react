import React from "react"
import { Row, Col, Image } from "react-bootstrap"

// export
export default ({ user: { name, avatar, dob, age } }) => (
  <Row>
    <Col xs={3}>
      <Row className="justify-content-center align-items-center">
        <Image
          src={avatar}
          alt={name}
          className="rounded-circle"
          style={{
            maxHeight: "100px",
          }}
        />
      </Row>
    </Col>
    <Col xs={9}>
      <Row className="justify-content-center align-items-center">
        <Col>
          <h4>{name}</h4>
          <h6>
            {dob.d}-{dob.m}-{dob.y}
          </h6>
          <h6>Age: {age}</h6>
        </Col>
      </Row>
    </Col>
  </Row>
)
