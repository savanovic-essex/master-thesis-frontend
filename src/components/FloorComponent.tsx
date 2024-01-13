import {FormGroup, Input, Label} from "reactstrap";
import { FunctionComponent } from 'preact';

// Type definition for the props the FloorComponent will receive
type FloorProps = {
	floor: string;
	setFloor: (floor: string) => void;
};

// Definition of the FloorComponent, a functional component using the FloorProps
export const FloorComponent: FunctionComponent<FloorProps> = ({floor, setFloor}) => {
	return (
		<FormGroup>
			<Label for="FLOOR">Floor</Label>
			<Input type={'text'}
				   name={'FLOOR'}
				   value={floor}
				   onChange={(e: Event) => setFloor((e.currentTarget as HTMLInputElement).value)}
			/>
		</FormGroup>
	)
}
