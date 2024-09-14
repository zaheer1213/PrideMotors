import React from "react";
import { Card } from "react-bootstrap";
import "./TeamMember.css"; // Import your CSS file if using external styles

const TeamMember = ({ member }) => {
  return (
    <>
      <Card className="team-member-card">
        <Card.Img src={member.image} />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {member.role}
          </Card.Subtitle>
          {/* <Card.Text>{member.bio}</Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default TeamMember;
