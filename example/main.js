import san from 'san';

// style
require('./main.less');


// route
import App from './App';
import Article from './pages/article/Article';
import Flex from './pages/flex/Flex';
import Icon from './pages/icons/Icon';


import {router} from 'san-router';

router.add({rule: '/', Component: App, target: '#container'});
router.add({rule: '/article', Component: Article, target: '#container'});
router.add({rule: '/flex', Component: Flex, target: '#container'});
router.add({rule: '/icons', Component: Icon, target: '#container'});

// start
router.start();
