import {FormGroup, Label} from "reactstrap";
import Select from "react-select";
import INCIDENT_MONTH from "../assets/INCIDENT_MONTH.json";
import {FunctionComponent} from "preact";

// Type definition for a IncidentMonth option with 'label' and 'value' properties
type IncidentMonthOption = { label: string; value: string | number };

// Type definition for the props that the IncidentMonth component will receive
type IncidentMonthProps = {
	month: IncidentMonthOption | null;
	setMonth: (month: IncidentMonthOption | null) => void;
};

// The IncidentMonth component definition, a functional component using the IncidentMonthProps
export const IncidentMonth: FunctionComponent<IncidentMonthProps> = ({month, setMonth}) => {
	return (
		<FormGroup>
			<Label for="INCIDENT_MONTH">Incident Month</Label>
			<Select
				isSearchable
				isClearable
				options={INCIDENT_MONTH.sort((a, b) => a.value - b.value)}
				value={month}
				onChange={(month) => setMonth(month)}
			/>
		</FormGroup>
	)
}
