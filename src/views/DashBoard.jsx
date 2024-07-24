import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "../css/dashboard.scss"
import { FaChartArea } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { FaPercentage } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";


const DashBoard = ({ children }) => {

    const data = {
        test:140,
        newTest:10,
        points:940,
        performance:60
    }

    return (
        <div id='dashboard'>
            <div className="nav">
                {children}
            </div>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body">
                        {/* Card stats */}
                        <Row>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle
                                                    tag="h5"
                                                    className="text-uppercase text-muted mb-0"
                                                >
                                                    test
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">
                                                    {data.test}
                                                </span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-danger p-2 text-white rounded-circle shadow">
                                                    <FaChartArea size="30px" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className="text-success mr-2">
                                            <FaLongArrowAltUp /> 3.48%
                                            </span>{" "}
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle
                                                    tag="h5"
                                                    className="text-uppercase text-muted mb-0"
                                                >
                                                    New Test
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{data.newTest}</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape p-2 bg-warning text-white rounded-circle shadow">
                                                    <FaChartPie size="30px" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className="text-danger mr-2">
                                             <FaLongArrowAltDown/>3.48%
                                            </span>{" "}
                                            <span className="text-nowrap">Since last week</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle
                                                    tag="h5"
                                                    className="text-uppercase text-muted mb-0"
                                                >
                                                    Points
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{data.points}</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape p-2 text-green rounded-circle shadow">
                                                    <RiPoliceBadgeFill size="30px" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className="text-warning mr-2">
                                                <FaLongArrowAltDown/> 1.10%
                                            </span>{" "}
                                            <span className="text-nowrap">Since yesterday</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle
                                                    tag="h5"
                                                    className="text-uppercase text-muted mb-0"
                                                >
                                                    Performance
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{data.performance}%</span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-info p-2 text-white rounded-circle shadow">
                                                   <FaPercentage size="30px"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className="text-success mr-2">
                                                <FaLongArrowAltDown /> 12%
                                            </span>{" "}
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default DashBoard