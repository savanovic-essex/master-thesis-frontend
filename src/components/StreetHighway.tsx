import {FormGroup, Label} from "reactstrap";
import AsyncSelect from "react-select/async";
import STREET_HIGHWAY from "../assets/STREET_HIGHWAY.json";
import {FunctionComponent} from "preact";

// Type definition for a StreetHighway option with 'label' and 'value' properties
type StreetHighwayOption = { label: string; value: string | number };

// Type definition for the props that the StreetHighway component will receive
type StreetHighwayProps = {
	street: StreetHighwayOption | null;
	setStreet: (street: StreetHighwayOption | null) => void;
	loadOptions: (data: StreetHighwayOption[], inputValue: string, callback: (options: StreetHighwayOption[]) => void) => void;
};

// The StreetHighway component definition, a functional component using the StreetHighwayProps
export const StreetHighway: FunctionComponent<StreetHighwayProps> = ({street, setStreet, loadOptions}) => {
	return (
		<FormGroup>
			<Label for="STREET_HIGHWAY">Street / Highway</Label>
			<AsyncSelect
				isClearable // Allows the option to clear the selection
				isSearchable // Allows the input to be searchable
				value={street} // The current value of the select input
				cacheOptions // Caches the loaded options for efficiency
				onChange={(street) => setStreet(street)}
				loadOptions={(inputValue, callback) => loadOptions(STREET_HIGHWAY, inputValue, callback)}
				defaultOptions={STREET_HIGHWAY.slice(0, 50)} />
		</FormGroup>
	)
}
