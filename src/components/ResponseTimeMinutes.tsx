import { FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import { FunctionComponent } from "preact";

// Type definition for the props that ResponseTimeMinutes component will receive
type ResponseTimeMinutesProps = {
	responseTime: number; // The response time value in seconds passed to the component
};

// Definition of the ResponseTimeMinutes component, a functional component using the ResponseTimeMinutesProps
export const ResponseTimeMinutes: FunctionComponent<ResponseTimeMinutesProps> = ({ responseTime }) => {
	return (
		<FormGroup row>
			<Label for="RESPONSE_TIME">Minutes</Label>
			<InputGroup>
				<Input
					type={'number'}
					value={(responseTime / 60).toFixed(2)} // Converting response time from seconds to minutes and formatting to two decimal places
					disabled // Disabling the input field to make it read-only
				/>

				<InputGroupText>
					minutes
				</InputGroupText>
			</InputGroup>
		</FormGroup>
	);
}
