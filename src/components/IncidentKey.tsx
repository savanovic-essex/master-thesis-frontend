import { FunctionComponent } from 'preact';
import { FormGroup, Input, Label } from 'reactstrap';

// Type definition for the props that IncidentKey component will receive
type IncidentKeyProps = {
	IM_INCIDENT_KEY: string; // Current value of the incident key
	setIncidentKey: (key: string) => void; // Function to update the incident key
};

// Definition of the IncidentKey component as a functional component using IncidentKeyProps
export const IncidentKey: FunctionComponent<IncidentKeyProps> = ({ IM_INCIDENT_KEY, setIncidentKey }) => {
	return (
		<FormGroup>
			<Label for="IM_INCIDENT_KEY">Incident Key</Label>

			<Input
				type="text"
				name="IM_INCIDENT_KEY"
				value={IM_INCIDENT_KEY} // The current value of the input field
				onChange={(e: Event) => setIncidentKey((e.currentTarget as HTMLInputElement).value)}
			/>
		</FormGroup>
	);
};
