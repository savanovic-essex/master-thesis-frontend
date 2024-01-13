import {FormGroup, Label} from "reactstrap";
import AsyncSelect from "react-select/async";
import BOROUGH_DESC from "../assets/BOROUGH_DESC.json";
import {FunctionComponent} from "preact";

// Type definition for a borough option, with 'label' and 'value' properties
type BoroughOption = { label: string; value: string | number };

// Type definition for the props that the Borough component will receive
type BoroughProps = {
	borough: BoroughOption | null;
	setBorough: (borough: BoroughOption | null) => void;
	loadOptions: (data: BoroughOption[], inputValue: string, callback: (options: BoroughOption[]) => void) => void;
};

// The Borough component definition, a functional component using the BoroughProps
export const Borough: FunctionComponent<BoroughProps> = ({borough, setBorough, loadOptions}) => {
	return (
		<FormGroup>
			<Label for="BOROUGH_DESC">Borough</Label>
			<AsyncSelect
				isClearable // Allows the option to clear the selection
				isSearchable // Allows the input to be searchable
				value={borough} // The current value of the select input
				cacheOptions // Caches the loaded options for efficiency
				onChange={(selectedOption: BoroughOption) => setBorough(selectedOption)}
				loadOptions={(inputValue: string, callback: (options: BoroughOption[]) => void) => loadOptions(BOROUGH_DESC, inputValue, callback)}
				defaultOptions={BOROUGH_DESC.slice(0, 50)} />
		</FormGroup>
	)
}
