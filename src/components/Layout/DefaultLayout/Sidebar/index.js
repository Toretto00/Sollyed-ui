import Styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import Button from '@/components/Button';
import {
    CreatePlaylistIcon,
    DownloadIcon,
    HomeIcon,
    LibraryIcon,
    LikedSongsIcon,
} from '@/components/icons';

const cx = classNames.bind(Styles);

const sideBarItemLink = [
    { title: 'Home', icon: <HomeIcon />, to: '/' },
    { title: 'Your Library', icon: <LibraryIcon />, to: '/library' },
    { title: 'Shazamm', to: '/listening' },
    { title: 'Newfeeds', to: '/news' },
    { title: 'myCommunity', to: '/mycommunity' , target:'_blank'},
];

const sideBarItemAction = [
    {
        title: 'Create Playlist',
        icon: <CreatePlaylistIcon />,
        to: '/playlist',
    },
    {
        title: 'Liked Songs',
        icon: <LikedSongsIcon />,
        to: '/collection',
        separate: true,
    },
];

const sideBarItemPlayList = [{ title: 'Chill Vibes', to: '/playlist' }];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-item')}>
                {sideBarItemLink.map((item, index) => (
                    <Button sidebarItem to={item.to} leftIcon={item.icon} target={item.target}>
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className={cx('sidebar-item')}>
                {sideBarItemAction.map((item, index) => (
                    <Button
                        sidebarItem
                        to={item.to}
                        leftIcon={item.icon}
                        separate={item.separate}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className={cx('sidebar-playlists')}>
                {sideBarItemPlayList.map((item, index) => (
                    <Button sidebarItem to={item.to} leftIcon={item.icon}>
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className={cx('sidebar-installapp')}>
                <Button sidebarItem to="/download" leftIcon={<DownloadIcon />}>
                    Install App
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;
