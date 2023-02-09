import Collection from '@/page/Collection';
import Download from '@/page/Download';
import Home from '@/page/Home';
import Library from '@/page/Library';
import Playlist from '@/page/Playlist';
import Listening from '@/page/Listening';
import SearchResult from '@/page/SearchResult';
import News from '@/page/News';
// import MyCommunity from '@/page/MyCommunity';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
    { path: '/playlist', component: Playlist },
    { path: '/collection', component: Collection },
    { path: '/download', component: Download },
    { path: '/listening', component: Listening },
    { path: '/result', component: SearchResult },
    { path: '/news', component: News },
    // { path: '/mycommunity', component: MyCommunity },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
