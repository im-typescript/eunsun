import { IUserWithImg } from "./IUserWithImg";
import { Button, Card } from "react-bootstrap";

export const CardComponent: React.FC<{
  user: IUserWithImg;
  click: () => void;
}> = ({ user, click }) => {
  const { name, email, sentence, profession, birthday, img } = user;
  const b = new Date(birthday);

  return (
    <Card
      body={true}
      style={{ width: " 22rem", padding: "5px", margin: "5px" }}
    >
      <Card.Img src={img}></Card.Img>
      <Card.Body>
        <Card.Title>
          <h5>
            {name} ({email})
          </h5>
        </Card.Title>
        <Card.Subtitle>
          <h6 className="mb-2 text-muted">
            {profession} birthday:{b.getFullYear()}
          </h6>
        </Card.Subtitle>
        <Card.Text>
          <p>{sentence}</p>
        </Card.Text>

        <a href="#">
          <Button variant="primary" onClick={click}>
            more data...
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};
