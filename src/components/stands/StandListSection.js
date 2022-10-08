import {Container, Row} from "react-bootstrap";

export function StandListSection(props) {
    const {children} = props;
    return (<>
        <div style={{width:"80%", marginTop:"20px", marginBottom:"20px", padding:"10px", backgroundColor:"#f7f7f7", textAlign:"center"}}>
            <Container style={{padding: "5%"}}>
                <Row style={{justifyContent: "center"}}>
                    {children}
                </Row>
            </Container>
        </div>
    </>)
}