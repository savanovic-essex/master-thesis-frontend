import {FormGroup, Label} from "reactstrap";
import AsyncSelect from "react-select/async";
import FIRE_BOX from "../assets/FIRE_BOX.json";
import {FunctionComponent} from "preact";

// Type definition for a FireBox option with 'label' and 'value' properties
type FireBoxOption = { label: string; value: string | number };

// Type definition for the props that the FireBox component will receive
type FireBoxProps = {
	fireBox: FireBoxOption | null;
	setFireBox: (fireBox: FireBoxOption | null) => void;
	loadOptions: (data: FireBoxOption[], inputValue: string, callback: (options: FireBoxOption[]) => void) => void;
};

// The FireBox component definition, a functional component using the FireBoxProps
export const FireBox: FunctionComponent<FireBoxProps> = ({fireBox, setFireBox, loadOptions}) => {
	return (
		<FormGroup>
			<Label for="FIRE_BOX">Firebox</Label>
			<AsyncSelect
				isClearable // Allows the option to clear the selection
				isSearchable // Allows the input to be searchable
				value={fireBox} // The current value of the select input
				cacheOptions // Caches the loaded options for efficiency
				onChange={(fireBox) => setFireBox(fireBox)}
				loadOptions={(inputValue, callback) => loadOptions(FIRE_BOX, inputValue, callback)}
				defaultOptions={FIRE_BOX.slice(0, 50)} />
		</FormGroup>
	)
}
