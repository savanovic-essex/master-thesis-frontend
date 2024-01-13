import {FunctionComponent} from 'preact';

import {Col, Container, Row} from "reactstrap";
import ParameterComponent from "./components/ParameterComponent";
import Map from "./components/Map";
import api from "./utils/api";
import {useState} from "preact/hooks";

// Definition of props structure for the PredictProps type
export type PredictProps = {
    IM_INCIDENT_KEY: string;
    INCIDENT_TYPE_DESC: { value: string };
    PROPERTY_USE_DESC: { value: string };
    FIRE_BOX: { value: string };
    STREET_HIGHWAY: { value: string };
    ZIP_CODE: { value: string };
    FLOOR: string;
    BOROUGH_DESC: { value: string };
    INCIDENT_MONTH: { value: string };
    INCIDENT_DAY_OF_WEEK: { value: string };
    INCIDENT_HOUR: { value: string };
    YEAR: { value: string };
    RESPONSE_TIME: number;
    RESPONSE_TIME_MINUTES: number;
    LATITUDE: number;
    LONGITUDE: number;
};



const App: FunctionComponent = () => {
    // State hooks for managing latitude, longitude, firebox, and units
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0);
    const [firebox, setFirebox] = useState<string>('');
    const [units, setUnits] = useState<number>(0);

    // Function 'predict' takes in 'props' of type 'PredictProps'
    // Makes an API call to '/predict' endpoint with the incident data
    const predict = (props: PredictProps) => {

        setLongitude(props.LONGITUDE);
        setLatitude(props.LATITUDE);
        setFirebox(props.FIRE_BOX.value);

        // Sending a POST request to the '/predict' endpoint with the incident data
        // Handling the API response and potential errors
        api.post('/predict', {
            'IM_INCIDENT_KEY': props.IM_INCIDENT_KEY,
            'INCIDENT_TYPE_DESC': props.INCIDENT_TYPE_DESC?.value,
            'PROPERTY_USE_DESC': props.PROPERTY_USE_DESC.value,
            'FIRE_BOX': props.FIRE_BOX.value,
            'STREET_HIGHWAY': props.STREET_HIGHWAY.value,
            'ZIP_CODE': parseFloat(props.ZIP_CODE?.value),
            'FLOOR': props.FLOOR,
            'BOROUGH_DESC': props.BOROUGH_DESC?.value,
            'INCIDENT_MONTH': parseInt(props.INCIDENT_MONTH?.value),
            'INCIDENT_DAY_OF_WEEK': parseInt(props.INCIDENT_DAY_OF_WEEK?.value),
            'INCIDENT_HOUR': parseInt(props.INCIDENT_HOUR?.value),
            'YEAR': parseFloat(props.YEAR?.value),
            'RESPONSE_TIME': props.RESPONSE_TIME,
            'RESPONSE_TIME_MINUTES': props?.RESPONSE_TIME_MINUTES / 60,
            'LATITUDE': props.LATITUDE,
            'LONGITUDE': props.LONGITUDE,
        })
            .then((response) => {
                setUnits(response.data[0]);

            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    };


    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col lg={8} className={'bg-light scrollable-col'}>
                        <h3 className={'pt-3 pb-2 text-center'}>Firefighter Unit Prediction App</h3>
                        <ParameterComponent
                            predict={predict}
                        />
                    </Col>
                    <Col className={'no-gutters h-100'}>
                        <Map latitude={latitude} longitude={longitude} firebox={firebox} />
                        <div className={'p-3'}>
                            <h4>{`Predicted amount of units needed on scene: ${units}`}</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
