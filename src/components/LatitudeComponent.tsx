import { FormGroup, Input, Label } from "reactstrap";
import { FunctionComponent } from "preact";

// Type definition for the props that LatitudeComponent will receive
type LatitudeComponentProps = {
	latitude: number; // Current value of the latitude input
	setLatitude: (latitude: number) => void; // Function to update the latitude value
};

// Definition of the LatitudeComponent, a functional component using the LatitudeComponentProps
export const LatitudeComponent: FunctionComponent<LatitudeComponentProps> = ({ latitude, setLatitude }) => {
	return (
		<FormGroup>
			<Label for="LATITUDE">Latitude</Label>

			<Input
				type={'number'}
				name={'LATITUDE'}
				value={latitude} // The current value of the input
				onChange={(e: Event) => setLatitude(parseFloat((e.currentTarget as HTMLInputElement).value))} // Function to handle input changes and convert the string to a floating number
			/>
		</FormGroup>
	);
}
