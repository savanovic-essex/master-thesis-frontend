import {FormGroup, Label} from "reactstrap";
import Select from "react-select";
import INCIDENT_HOUR from "../assets/INCIDENT_HOUR.json";
import {FunctionComponent} from "preact";

// Type definition for a IncidentHour option with 'label' and 'value' properties
type IncidentHourOption = { label: string; value: string | number };

// Type definition for the props that the IncidentHour component will receive
type IncidentHourProps = {
	hour: IncidentHourOption | null;
	setHour: (hour: IncidentHourOption | null) => void;
};

// The IncidentHour component definition, a functional component using the IncidentHourProps
export const IncidentHour: FunctionComponent<IncidentHourProps> = ({hour, setHour}) => {
	return (
		<FormGroup>
			<Label for="INCIDENT_HOUR">Incident Hour</Label>
			<Select
				isClearable // Allows the option to clear the selection
				isSearchable // Allows the input to be searchable
				options={INCIDENT_HOUR.sort((a, b) => {
					// Ensure both values are treated as numbers
					const valueA = typeof a.value === 'number' ? a.value : parseInt(a.value);
					const valueB = typeof b.value === 'number' ? b.value : parseInt(b.value);
					return valueA - valueB;
				})}
				value={hour} // The current value of the select input
				onChange={(hour: IncidentHourOption) => setHour(hour)}
			/>
		</FormGroup>
	)
}
