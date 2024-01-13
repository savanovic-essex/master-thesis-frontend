import { FormGroup, Input, Label } from "reactstrap";
import { FunctionComponent } from "preact";

// Type definition for the props that LongitudeComponent will receive
type LongitudeComponentProps = {
	longitude: number; // Current value of the longitude input
	setLongitude: (longitude: number) => void; // Function to update the longitude value
};

// Definition of the LongitudeComponent, a functional component using the LongitudeComponentProps
export const LongitudeComponent: FunctionComponent<LongitudeComponentProps> = ({ longitude, setLongitude }) => {
	return (
		<FormGroup>
			<Label for="LONGITUDE">Longitude</Label>

			<Input
				type={'number'}
				name={'LONGITUDE'}
				value={longitude} // The current value of the input
				onChange={(e: Event) => setLongitude(parseFloat((e.currentTarget as HTMLInputElement).value))} // Function to handle input changes and convert the string to a floating number
			/>
		</FormGroup>
	);
}
