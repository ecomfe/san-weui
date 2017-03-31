import san from 'san'

// style
require('./main.css')

// route
import App from './App'

import {router} from 'san-router'

router.add({rule: '/', Component: App, target: '#app'});

// start
router.start()
