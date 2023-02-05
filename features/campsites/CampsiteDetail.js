import { Card } from "reactstrap";
import {CardImg} from 'reactstrap';
import {CardText} from 'reactstrap';
import {CardBody} from 'reactstrap';
import {Col} from 'reactstrap';
import { useSelector } from "react-redux";


const CampsiteDetail = ({ campsite }) => {
        const { image, name, description } = campsite;
     
 
            return (
                <Col md='5' className="m-1">
                        <Card>
                                <CardImg top src={image} alt={name}/>
                                        <CardBody>
                                                  <CardText> {description} </CardText>
                                        </CardBody>
                               
                        </Card>
                </Col>
            )

}


export default CampsiteDetail;