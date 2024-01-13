import {FunctionComponent} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import {Button, Col, Row} from "reactstrap";
import {IncidentKey} from "./IncidentKey";
import {IncidentType} from "./IncidentType";
import {PropertyType} from "./PropertyType";
import {FireBox} from "./FireBox";
import {StreetHighway} from "./StreetHighway";
import {ZipCode} from "./ZipCode";
import {Borough} from "./Borough";
import {FloorComponent} from "./FloorComponent";
import {IncidentMonth} from "./IncidentMonth";
import {IncidentDay} from "./IncidentDay";
import {IncidentHour} from "./IncidentHour";
import {IncidentYear} from "./IncidentYear";
import {ResponseTime} from "./ResponseTime";
import {ResponseTimeMinutes} from "./ResponseTimeMinutes";
import dummyData from "../assets/testData.json";
import {DummyDataItem} from "../types/DummyDataItem";
import {LatitudeComponent} from "./LatitudeComponent";
import {LongitudeComponent} from "./LongitudeComponent";

// Type definitions for props
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


type SearchComponentProps = {
    predict: (data: PredictProps) => void; // Function to handle prediction logic
};

type DummyDataType = DummyDataItem[]; // Type for an array of dummy/test data

type OptionType = {
    label: string;
    value: string | number;
};

// ParameterComponent definition
const ParameterComponent: FunctionComponent<SearchComponentProps> = ({predict}) => {
    // State hooks for each parameter
    const [incidentType, setIncidentType] = useState<{ value: string | number, label: string } | null>(null);
    const [propertyType, setPropertyType] = useState<{ value: string | number, label: string } | null>(null);
    const [IM_INCIDENT_KEY, setIncidentKey] = useState('');
    const [fireBox, setFireBox] = useState<{ value: string | number, label: string } | null>(null);
    const [street, setStreet] = useState<{ value: string | number, label: string } | null>(null);
    const [zip, setZip] = useState<{ value: string | number, label: string } | null>(null);
    const [borough, setBorough] = useState<{ value: string | number, label: string } | null>(null);
    const [floor, setFloor] = useState('');
    const [month, setMonth] = useState<{ value: string | number, label: string } | null>(null);
    const [day, setDay] = useState<{ value: string | number, label: string } | null>(null);
    const [hour, setHour] = useState<{ value: string | number, label: string } | null>(null);
    const [responseTime, setResponseTime] = useState<number>(0);
    const [selectedYear, setSelectedYear] = useState<{ value: string | number, label: string } | null>(null);
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    // Function to populate fields with test data
    const useTestData = () => {
        // Selecting a random data point from the dummy data
        const randomIndex = Math.floor(Math.random() * (dummyData as DummyDataType).length);
        const randomData = (dummyData as DummyDataType)[randomIndex];

        // Setting state for each parameter with values from the selected data point
        setIncidentKey(randomData.IM_INCIDENT_KEY.toString());
        setIncidentType({value: randomData.INCIDENT_TYPE_DESC, label: randomData.INCIDENT_TYPE_DESC});
        setPropertyType({value: randomData.PROPERTY_USE_DESC, label: randomData.PROPERTY_USE_DESC});
        setFireBox({value: randomData.FIRE_BOX, label: randomData.FIRE_BOX.toString()});
        setStreet({value: randomData.STREET_HIGHWAY, label: randomData.STREET_HIGHWAY});
        setZip({value: randomData.ZIP_CODE, label: randomData.ZIP_CODE.toString()});
        setBorough({value: randomData.BOROUGH_DESC, label: randomData.BOROUGH_DESC});
        setFloor(randomData.FLOOR);
        setMonth({value: randomData.INCIDENT_MONTH, label: randomData.INCIDENT_MONTH.toString()});
        setDay({value: randomData.INCIDENT_DAY_OF_WEEK, label: randomData.INCIDENT_DAY_OF_WEEK.toString()});
        setHour({value: randomData.INCIDENT_HOUR, label: randomData.INCIDENT_HOUR.toString()});
        setResponseTime(randomData.RESPONSE_TIME);
        setSelectedYear({value: randomData.YEAR, label: randomData.YEAR.toString()});
        setLatitude(randomData.LATITUDE);
        setLongitude(randomData.LONGITUDE);
    }

    // Function to handle the predict button click
    const handlePredict = () => {
        // Collecting all the state values and passing them to the predict function
        predict({
            IM_INCIDENT_KEY: IM_INCIDENT_KEY,
            INCIDENT_TYPE_DESC: incidentType ? { value: incidentType.value.toString() } : { value: '' },
            PROPERTY_USE_DESC: propertyType ? { value: propertyType.value.toString() } : { value: '' },
            FIRE_BOX: fireBox ? { value: fireBox.value.toString() } : { value: '' },
            STREET_HIGHWAY: street ? { value: street.value.toString() } : { value: '' },
            ZIP_CODE: zip ? { value: zip.value.toString() } : { value: '' },
            FLOOR: floor,
            BOROUGH_DESC: borough ? { value: borough.value.toString() } : { value: '' },
            INCIDENT_MONTH: month ? { value: month.value.toString() } : { value: '' },
            INCIDENT_DAY_OF_WEEK: day ? { value: day.value.toString() } : { value: '' },
            INCIDENT_HOUR: hour ? { value: hour.value.toString() } : { value: '' },
            YEAR: selectedYear ? { value: selectedYear.value.toString() } : { value: '' },
            RESPONSE_TIME: responseTime,
            RESPONSE_TIME_MINUTES: responseTime / 60,
            LATITUDE: latitude ?? 0, // Default to 0 if null
            LONGITUDE: longitude ?? 0 // Default to 0 if null
        });
    };

    // useEffect to enable or disable the predict button based on the completeness of the form
    useEffect(() => {
        // Checks if any of the required fields are empty
        // Updates 'isDisabled' state accordingly
        const checkEmptyValues = () => {
            return (
                !incidentType ||
                !propertyType ||
                IM_INCIDENT_KEY.trim() === '' ||
                !fireBox ||
                !street ||
                !zip ||
                !borough ||
                floor.trim() === '' ||
                !month ||
                !day ||
                !hour ||
                responseTime === 0 ||
                !selectedYear ||
                latitude === 0 ||
                longitude === 0
            );
        };

        setIsDisabled(checkEmptyValues());
    }, [
        incidentType,
        propertyType,
        IM_INCIDENT_KEY,
        fireBox,
        street,
        zip,
        borough,
        floor,
        month,
        day,
        hour,
        responseTime,
        selectedYear,
        latitude,
        longitude
    ]);

    // Function to filter options for AsyncSelect components based on the input value
    const loadOptions = (
        data: OptionType[],
        inputValue: string,
        callback: (options: OptionType[]) => void
    ) => {
        setTimeout(() => {
            const filteredData = data.filter(item =>
                item.label.toLowerCase().includes(inputValue.toLowerCase())
            );
            callback(filteredData);
        }, 500);
    };


    return (
        <>
            <Row className={'border-top border-bottom pt-2 pb-2 bg-white mb-3'}>
                <Col className={'d-flex align-items-center justify-content-center'}>
                    <Button onClick={useTestData}>Use Test Data</Button>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    {/*Incident Key*/}
                    <IncidentKey IM_INCIDENT_KEY={IM_INCIDENT_KEY} setIncidentKey={setIncidentKey}/>
                </Col>
                <Col lg={4}>
                    {/*INCIDENT_TYPE_DESC*/}
                    <IncidentType incidentType={incidentType} setIncidentType={setIncidentType} loadOptions={loadOptions}/>
                </Col>
                <Col lg={4}>
                    {/*PROPERTY_USE_DESC*/}
                    <PropertyType propertyType={propertyType} setPropertyType={setPropertyType} loadOptions={loadOptions}/>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    {/*FIRE_BOX*/}
                    <FireBox fireBox={fireBox} setFireBox={setFireBox} loadOptions={loadOptions}/>
                </Col>
                <Col lg={6}>
                    {/*STREET_HIGHWAY*/}
                    <StreetHighway street={street} setStreet={setStreet} loadOptions={loadOptions}/>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    {/*ZIP_CODE*/}
                    <ZipCode zip={zip} setZip={setZip} loadOptions={loadOptions}/>
                </Col>
                <Col lg={4}>
                    {/*BOROUGH_DESC*/}
                    <Borough borough={borough} setBorough={setBorough} loadOptions={loadOptions}/>
                </Col>
                <Col lg={4}>
                    {/*FLOOR*/}
                    <FloorComponent floor={floor} setFloor={setFloor}/>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                    {/*INCIDENT_MONTH*/}
                    <IncidentMonth month={month} setMonth={setMonth}/>
                </Col>
                <Col lg={3}>
                    {/*INCIDENT_DAY_OF_WEEK*/}
                    <IncidentDay day={day} setDay={setDay}/>
                </Col>
                <Col lg={3}>
                    {/*INCIDENT_HOUR*/}
                    <IncidentHour hour={hour} setHour={setHour}/>
                </Col>
                <Col lg={3}>
                    {/*YEAR*/}
                    <IncidentYear selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
                </Col>
            </Row>

            <Row>
                <Col lg={8}>
                    {/*RESPONSE_TIME*/}
                    <ResponseTime responseTime={responseTime} setResponseTime={setResponseTime}/>
                </Col>
                <Col lg={4}>
                    {/*RESPONSE_TIM_MINUTES*/}
                    <ResponseTimeMinutes responseTime={responseTime}/>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    {/*LATITUDE*/}
                    <LatitudeComponent latitude={latitude} setLatitude={setLatitude} />
                </Col>
                <Col lg={6}>
                    {/*LONGITUDE*/}
                    <LongitudeComponent longitude={longitude} setLongitude={setLongitude} />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Button
                        disabled={isDisabled}
                        onClick={handlePredict}
                        block
                        className={'mb-4'}
                    >
                        Predict
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default ParameterComponent;
