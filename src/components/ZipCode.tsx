import { FunctionComponent } from 'preact';
import { FormGroup, Label } from 'reactstrap';
import AsyncSelect from 'react-select/async';
import ZIP_CODE from '../assets/ZIP_CODE.json';

// Type definition for a ZipCode option with 'label' and 'value' properties
type ZipCodeOption = { label: string; value: string | number };

// Type definition for the props that the ZipCode component will receive
type ZipCodeProps = {
	zip: ZipCodeOption | null;
	setZip: (zip: ZipCodeOption | null) => void;
	loadOptions: (data: ZipCodeOption[], inputValue: string, callback: (options: ZipCodeOption[]) => void) => void;
};

// The ZipCode component definition, a functional component using the ZipCodeProps
export const ZipCode: FunctionComponent<ZipCodeProps> = ({ zip, setZip, loadOptions }) => {
	return (
		<FormGroup>
			<Label for="ZIP_CODE">ZIP Code</Label>
			<AsyncSelect
				isClearable // Allows the option to clear the selection
				isSearchable // Allows the input to be searchable
				value={zip} // The current value of the select input
				cacheOptions // Caches the loaded options for efficiency
				onChange={(selectedOption: ZipCodeOption) => setZip(selectedOption)}
				loadOptions={(inputValue: string, callback: (options: ZipCodeOption[]) => void) => loadOptions(ZIP_CODE, inputValue, callback)}
				defaultOptions={ZIP_CODE.slice(0, 50)} />
		</FormGroup>
	);
};
