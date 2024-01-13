import {FormGroup, Label} from "reactstrap";
import AsyncSelect from "react-select/async";
import PROPERTY_TYPES from "../assets/PROPERTY_TYPE_DESC.json";
import {FunctionComponent} from "preact";

// Type definition for a PropertyType option with 'label' and 'value' properties
type PropertyTypeOption = { label: string; value: string | number };

// Type definition for the props that the PropertyType component will receive
type PropertyTypeProps = {
	propertyType: PropertyTypeOption | null;
	setPropertyType: (propertyType: PropertyTypeOption | null) => void;
	loadOptions: (data: PropertyTypeOption[], inputValue: string, callback: (options: PropertyTypeOption[]) => void) => void;
};

// The PropertyType component definition, a functional component using the PropertyTypeProps
export const PropertyType: FunctionComponent<PropertyTypeProps> = ({propertyType, setPropertyType, loadOptions}) => {
	return (
		<FormGroup>
			<Label for="PROPERTY_USE_DESC">Property Type</Label>
			<AsyncSelect
				isClearable
				isSearchable
				value={propertyType}
				cacheOptions
				onChange={(propertyType) => setPropertyType(propertyType)}
				loadOptions={(inputValue, callback) => loadOptions(PROPERTY_TYPES, inputValue, callback)}
				defaultOptions />
		</FormGroup>
	)
}
