export { Components, JSX } from './components';
import { defineCustomElements } from '@ionic/core/loader'; // Import from '@ionic/core/loader' instead of '@ionic/core'
import 'ionicons';

defineCustomElements(window);