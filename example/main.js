import san from 'san';

// style
require('./main.less');


// route
import App from './App';
import Article from './pages/article/Article';


import {router} from 'san-router';

router.add({rule: '/', Component: App, target: '#container'});
router.add({rule: '/article', Component: Article, target: '#container'});

// start
router.start();
