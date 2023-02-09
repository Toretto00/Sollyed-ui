import * as React from 'react';

import { useState } from 'react';

import classNames from 'classnames/bind';
import Styles from './MyCommunity.module.scss';

import Button from '@/components/Button';
import { MenuItemIcon } from '@/components/icons';

import Grid from '@mui/material/Unstable_Grid2';
import Popover from '@mui/material/Popover';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TextsmsIcon from '@mui/icons-material/Textsms';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Avatar from '@mui/material/Avatar';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { IconButton } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { green, pink, deepOrange, deepPurple } from '@mui/material/colors';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import ChatBox from '@/page/Chat';
import MusicPlayer from '@/page/Stream';

const cx = classNames.bind(Styles);

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function MyCommunity() {
    const [messages, setMessages] = useState([]);

    const handleSubmit = (message) => {
        setMessages([...messages, message]);
    };

    const [value, setValue] = React.useState('1');

    const handleChange1 = (event, newValue) => {
        newValue = '1';
        setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        newValue = '2';
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openTextChannel, setOpenTextChannel] = React.useState(true);

    const handleClickTextChannel = () => {
        setOpenTextChannel(!openTextChannel);
    };

    const [openVoiceChannel, setOpenVoiceChannel] = React.useState(true);

    const handleClickVoiceChannel = () => {
        setOpenVoiceChannel(!openVoiceChannel);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const menuItems = [
        {
            title: 'Sever Boost',
            icon: <MenuItemIcon />,
            separate: true,
        },
        {
            title: 'Invite People',
            separate: true,
        },
        {
            title: 'Notification Settings',
            icon: <MenuItemIcon />,
        },
        {
            title: 'Privacy Settings',
            icon: <MenuItemIcon />,
            separate: true,
        },
        {
            title: 'Edit Server Profile',
            icon: <MenuItemIcon />,
        },
        {
            title: 'Hide Muted Channels',
            separate: true,
        },
        {
            title: 'Leave Server',
            red: true,
        },
    ];

    const renderMenuItem = () => {
        return menuItems.map((item, index) => (
            <Button
                communityTitleAction
                rightIcon={item.icon}
                separate={item.separate}
                red={item.red}
                to={item.to}
            >
                {item.title}
            </Button>
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <Grid container spacing={2}>
                <Grid sx={1}>
                    <div className={cx('community-container')}>
                        <Button communityItem to="/">
                            <img
                                alt="logo"
                                src="https://img.icons8.com/ios-glyphs/30/null/spotify.png"
                            />
                        </Button>
                        <div className={cx('seperate')} />
                        <Button communityItem>Uhc</Button>
                        <Button communityItem>
                            <img
                                alt="plus"
                                src={require('@/assets/images/icons8-plus-math-50.png')}
                            />
                        </Button>
                    </div>
                </Grid>
                <Grid sx={3}>
                    <div className={cx('community-action')}>
                        <Button
                            aria-describedby={id}
                            variant="contained"
                            onClick={handleClick}
                            communityTitle
                        >
                            LOL
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <div
                                tabIndex="-1"
                                className={cx('communityTitle-action')}
                            >
                                {renderMenuItem()}
                            </div>
                        </Popover>
                        <div className={cx('community-content')}>
                            <Stack>
                                <ListItemButton
                                    onClick={handleClickTextChannel}
                                >
                                    <ListItemText primary="TEXT CHANNEL" />
                                    {openTextChannel ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openTextChannel}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <TextsmsIcon
                                                    className={cx(
                                                        'communityIcon',
                                                    )}
                                                />
                                            </ListItemIcon>
                                            <Tab
                                                label="General"
                                                value={1}
                                                onClick={handleChange1}
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton
                                    onClick={handleClickVoiceChannel}
                                >
                                    <ListItemText primary="VOICE CHANNEL" />
                                    {openVoiceChannel ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openVoiceChannel}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <VolumeUpIcon
                                                    className={cx(
                                                        'communityIcon',
                                                    )}
                                                />
                                            </ListItemIcon>
                                            <Tab
                                                label="General"
                                                value={2}
                                                onClick={handleChange2}
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </Stack>
                        </div>
                        <div className={cx('userContainer')}>
                            <div className={cx('userInfo')}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{
                                            bgcolor: deepOrange[500],
                                        }}
                                    />
                                </StyledBadge>
                                <div className={cx('userDescription')}>
                                    <span>Toretto</span>
                                    <span>#9913</span>
                                </div>
                            </div>
                            <IconButton className={cx('userAction')}>
                                <KeyboardVoiceIcon />
                            </IconButton>
                            <IconButton className={cx('userAction')}>
                                <HeadphonesIcon />
                            </IconButton>
                            <IconButton className={cx('userAction')}>
                                <SettingsIcon />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid sx={5}>
                    <div className={cx('communityContent')}>
                        <TabContext value={value}>
                            <TabPanel value="1">
                                <ChatBox
                                    messages={messages}
                                    onSubmit={handleSubmit}
                                />
                            </TabPanel>
                            <TabPanel value="2">
                                <MusicPlayer/>
                            </TabPanel>
                        </TabContext>
                    </div>
                </Grid>
                <Grid sx={3}>
                    <div className={cx('memberContainer')}>
                        <span>ONLINE - 3</span>
                        <List>
                            <div className={cx('memberInfo')}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt="Hades"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{
                                            bgcolor: pink[500],
                                        }}
                                    />
                                </StyledBadge>
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        Hades
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        Sollyed/Ngỡ
                                    </span>
                                </div>
                            </div>
                            <div className={cx('memberInfo')}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt="Jeajer"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{
                                            bgcolor: green[500],
                                        }}
                                    />
                                </StyledBadge>
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        Jeajer
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        Sollyed/Ngỡ
                                    </span>
                                </div>
                            </div>
                            <div className={cx('memberInfo')}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt="RFT DMdarealest"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                </StyledBadge>
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        RFT DMdarealest
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        Community
                                    </span>
                                </div>
                            </div>
                        </List>
                        <span>OFFLINE - 2</span>
                        <List>
                            <div className={cx('memberInfoDisable')}>
                                <Avatar
                                    alt=".-."
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ bgcolor: green[500] }}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        .-.
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        1 day ago
                                    </span>
                                </div>
                            </div>
                            <div className={cx('memberInfoDisable')}>
                                <Avatar
                                    alt="An"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{
                                        bgcolor: deepPurple[500],
                                    }}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>An</span>
                                    <span className={cx('memberStatus')}>
                                        3 days ago
                                    </span>
                                </div>
                            </div>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default MyCommunity;
