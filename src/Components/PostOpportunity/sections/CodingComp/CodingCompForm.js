import React, { Component } from 'react';
import axios from 'axios';
import { Form, Col, Row } from 'react-bootstrap';
import styles from '../../../../CSS/PostForm.module.css';

class CodingCompForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      title: '',
      url: '',
      date: '',
      description: '',
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: false,
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('From handleSubmit', this.state.title);
    axios
      .post('https://opportunity-calendar.herokuapp.com/opportunity', {
        opportunityTitle: this.state.title,
        opportunityType: this.state.type,
        opportunityURL: this.state.url,
        opportunityDate: this.state.date,
        opportunityDescription: this.state.description,
        opportunityLocation: this.state.location,
        opportunityEligibility: this.state.eligibility,
        opportunityRegistrationDeadline: this.state.deadline,
        organisationLogoURL: this.state.image,
        onlyForFemale: this.state.onlyForFemale,
      })
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
          console.log(error);
        }
      );
    this.setState({
      type: '',
      title: '',
      url: '',
      date: '',
      description: '',
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: '',
    });
  };

  render() {
    const {
      type,
      title,
      url,
      date,
      description,
      location,
      eligibility,
      deadline,
      image,
    } = this.state;

    return (
      <div style={{ marginBottom: '80px' }}>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col xs={12} sm={8}>
              <Form.Label
                className={styles.form_header}
                style={{ marginBottom: '40px' }}
              >
                Post a Coding Competition
              </Form.Label>
            </Col>
            <Col md={4} sm={4} style={{ padding: '0 30px' }}>
              <Form.Control
                as="select"
                size="lg"
                style={{ marginBottom: '40px' }}
                name="type"
                value={type}
                onChange={this.handleChange}
              >
                <option>Opportunity type</option>
                <option value="JOB" selected>
                  Job
                </option>
                <option value="INTERNSHIP">Internship</option>
                <option value="HACKATHON">Hackathon</option>
                <option value="SCHOLARSHIP">Scholarship</option>
                <option value="CONFERENCE">Conferencne</option>
                <option value="CODINGCOMPETITION">Coding Competition</option>
                <option value="OTHERS">Others</option>
              </Form.Control>
            </Col>
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="title">
                  Coding Competition Name
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Coding Competition Name"
                  onChange={this.handleChange}
                  id="title"
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="logo">
                  logo URL
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  id="logo"
                  value={image}
                  onChange={this.handleChange}
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>
                  Date of Competition
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="date"
                  value={date}
                  placeholder="Date of Competition"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="location">
                  Location
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="location"
                  value={location}
                  placeholder="Location"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>
                  Last Date to Apply
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="deadline"
                  value={deadline}
                  placeholder="Last Date to Apply"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>Eligibility</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="eligibility"
                  value={eligibility}
                  placeholder="Eligibility"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>Website</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="url"
                  value={url}
                  placeholder="Website"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="description">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{ marginTop: '5px' }}
                  name="description"
                  value={description}
                  placeholder="Short Description"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Check
                  type="switch"
                  className={styles.switch}
                  id="custom-switch"
                  label="Female specific"
                  onChange={(event) =>
                    this.setState({ onlyForFemale: event.target.checked })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default CodingCompForm;
