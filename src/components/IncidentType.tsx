import {FormGroup, Label} from "reactstrap";
import AsyncSelect from "react-select/async";
import INCIDENT_TYPES from "../assets/INCIDENT_TYPE_DESC.json";
import {FunctionComponent} from "preact";

// Type definition for a IncidentType option with 'label' and 'value' properties
type IncidentTypeOption = { label: string; value: string | number };

// Type definition for the props that the IncidentType component will receive
type IncidentTypeProps = {
	incidentType: IncidentTypeOption | null;
	setIncidentType: (incidentType: IncidentTypeOption | null) => void;
	loadOptions: (data: IncidentTypeOption[], inputValue: string, callback: (options: IncidentTypeOption[]) => void) => void;
};

// The IncidentType component definition, a functional component using the IncidentTypeProps
export const IncidentType: FunctionComponent<IncidentTypeProps> = ({incidentType, setIncidentType, loadOptions}) => {
	return (
		<FormGroup>
			<Label for="INCIDENT_TYPE_DESC">Incident Type</Label>
			<AsyncSelect
				isClearable
				isSearchable
				value={incidentType}
				cacheOptions
				onChange={(incidentType) => setIncidentType(incidentType)}
				loadOptions={(inputValue, callback) => loadOptions(INCIDENT_TYPES, inputValue, callback)}
				defaultOptions />
		</FormGroup>
	)
}
