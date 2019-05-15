import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";


function Article({ author, title, description, url }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h4 className="font-italic">{title}</h4>

          {author && <h6 className="font-italic">{author}</h6>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
              View
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p className="font-italic small">Description: {description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Article;
