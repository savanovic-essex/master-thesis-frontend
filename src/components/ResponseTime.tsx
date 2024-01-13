import { FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import { FunctionComponent } from "preact";

// Type definition for the props that ResponseTime component will receive
type ResponseTimeProps = {
	responseTime: number;
	setResponseTime: (responseTime: number) => void;
};

// Definition of the ResponseTime component, a functional component using the ResponseTimeProps
export const ResponseTime: FunctionComponent<ResponseTimeProps> = ({ responseTime, setResponseTime }) => {
	return (
		<FormGroup row>
			<Label for="RESPONSE_TIME">Response Time</Label>
			<InputGroup>
				<Input
					type={'number'}
					name={'RESPONSE_TIME'}
					value={responseTime} // The current value of the input
					onChange={(e: Event) => setResponseTime(parseInt((e.currentTarget as HTMLInputElement).value))} // Function to handle input changes and convert the string to an integer
				/>

				<InputGroupText>
					seconds
				</InputGroupText>
			</InputGroup>
		</FormGroup>
	);
}
