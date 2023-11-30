import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlertMessage({title, body, successOrDanger}) {
const [show, setShow] = useState(true);

if (show) {
    return (
    <Alert variant={successOrDanger} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
            {body}
        </p>
    </Alert>
    );
}

}

export default AlertMessage;