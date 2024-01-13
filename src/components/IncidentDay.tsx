import {FormGroup, Label} from "reactstrap";
import Select from "react-select";
import INCIDENT_DAY_OF_WEEK from "../assets/INCIDENT_DAY_OF_WEEK.json";
import {FunctionComponent} from "preact";

// Type definition for a IncidentDay option with 'label' and 'value' properties
type IncidentDayOption = { label: string; value: string | number };

// Type definition for the props that the IncidentDay component will receive
type IncidentDayProps = {
	day: IncidentDayOption | null;
	setDay: (day: IncidentDayOption | null) => void;
};

// The IncidentDay component definition, a functional component using the IncidentDayProps
export const IncidentDay: FunctionComponent<IncidentDayProps> = ({day, setDay}) => {
	return (
		<FormGroup>
			<Label for="INCIDENT_DAY_OF_WEEK">Incident Day of Week</Label>
			<Select
				isClearable // Allows the option to clear the selection
				isSearchable // Allows the input to be searchable
				options={INCIDENT_DAY_OF_WEEK.sort((a, b) => a.value - b.value)}
				value={day} // The current value of the select input
				onChange={(day) => setDay(day)}
			/>
		</FormGroup>
	)
}
