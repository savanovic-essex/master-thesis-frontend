import {FormGroup, Label} from "reactstrap";
import Select from "react-select";
import YEAR from "../assets/YEAR.json";
import {FunctionComponent} from "preact";

// Type definition for a IncidentYear option with 'label' and 'value' properties
type IncidentYearOption = { label: string; value: string | number };

// Type definition for the props that the IncidentYear component will receive
type IncidentYearProps = {
	selectedYear: IncidentYearOption | null;
	setSelectedYear: (selectedYear: IncidentYearOption | null) => void;
};

// The IncidentYear component definition, a functional component using the IncidentYearProps
export const IncidentYear: FunctionComponent<IncidentYearProps> = ({selectedYear, setSelectedYear}) => {
	return (
		<FormGroup>
			<Label for="YEAR">Year</Label>
			<Select
				isClearable // Allows the option to clear the selection
				options={YEAR.sort((a, b) => a.value - b.value)}
				value={selectedYear} // The current value of the select input
				onChange={(selectedYear) => setSelectedYear(selectedYear)}
			/>
		</FormGroup>
	)
}