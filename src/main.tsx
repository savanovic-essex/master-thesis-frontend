import "preact/debug";
import { render } from 'preact'
import App from './app.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.css';
import 'mapbox-gl/dist/mapbox-gl.css';

render(<App />, document.getElementById('app')!)
