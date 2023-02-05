import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId} from "./commentsSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import Error  from "../../components/Error";
import Loading from "../../components/Loading";


const CommentsList = ( { campsiteId}) => {
        const comments =  useSelector(selectCommentsByCampsiteId(campsiteId));
        const isLoading = useSelector((state) => state.partners.isLoading);
        const errMsg = useSelector((state) => state.partners.errMsg)

        if(comments && comments.length > 0 ){
            return isLoading ? (
                < Loading/>
            ) : errMsg ? (
                            <Error errMsg={errMsg} />
                    ) : 
                (
                <Col md='5' className="m-1">
                        <h4> Comments </h4>
                            {comments.map((comments) => {
                                    return <Comment key={comments.id} comment={comments} />
                                   
                            })}
                         <CommentForm campsiteId={campsiteId}> </CommentForm>
                </Col>
            )
        }

        return(
                <Col md='5' className="m-1">
                        There are no comments for this website yet
                </Col>
        )
    
};


export default CommentsList;