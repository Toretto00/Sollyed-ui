import * as React from 'react';
import classNames from 'classnames/bind';
import Styles from './News.module.scss';

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import Button from '@/components/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';

const cx = classNames.bind(Styles);

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function News() {
    return (
        <div className={cx('wrapper')}>
            <Grid container spacing={2}>
                <Grid xs={4} display="flex" justifyContent="center">
                    <div>
                        <Card className={cx('newfeedContainer')}>
                            <div className={cx('newfeedTitle-container')}>
                                <Avatar
                                    alt="Hades"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ bgcolor: green[500] }}
                                    className={cx('memberAva')}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        Hades
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        7 tháng 2 lúc 19:57
                                    </span>
                                </div>
                                <Button join>Join</Button>
                            </div>
                            <div className={cx('newfeedStatus')}>
                                <span>Bài hát này thật tuyệt!!!</span>
                            </div>
                            <div className={cx('newfeedContent')}>
                                <img
                                    alt="This is Justin Bieber"
                                    src={require('@/assets/images/ab67706f000000029cf2e21a96f217de5d3abf60.jpg')}
                                    className={cx('square')}
                                />
                            </div>
                            <div className={cx('newfeedAction')}>
                                <Checkbox
                                    //{...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <span>587</span>
                                <IconButton>
                                    <ChatBubbleOutlineIcon
                                        className={cx('newfeedActionIcon')}
                                    />
                                </IconButton>
                                <span>0</span>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center">
                    <div>
                        <Card className={cx('newfeedContainer')}>
                            <div className={cx('newfeedTitle-container')}>
                                <Avatar
                                    alt="ST Sơn Thạch"
                                    src={require('@/assets/images/7b7b6edb8801aa6e8373b5e3eff04000_1492685306.jpg')}
                                    sx={{ bgcolor: green[500] }}
                                    className={cx('memberAva')}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        ST Sơn Thạch
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        16 tháng 11 lúc 14:14
                                    </span>
                                </div>
                                <Button join>Join</Button>
                            </div>
                            <div className={cx('newfeedStatus')}>
                                <span>
                                    Được ngày nghỉ, mà cũng ko nghỉ💪🏻💪🏻💪🏻💪🏻💪🏻💪🏻
                                </span>
                            </div>
                            <div className={cx('newfeedContent')}>
                                <img
                                    alt="This is Justin Bieber"
                                    src={require('@/assets/images/0fb9c3bae4ff0da154ee&quot.png')}
                                    className={cx('square')}
                                />
                            </div>
                            <div className={cx('newfeedAction')}>
                                <Checkbox
                                    //{...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <span>587</span>
                                <IconButton>
                                    <ChatBubbleOutlineIcon
                                        className={cx('newfeedActionIcon')}
                                    />
                                </IconButton>
                                <span>0</span>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center">
                    <div>
                        <Card className={cx('newfeedContainer')}>
                            <div className={cx('newfeedTitle-container')}>
                                <Avatar
                                    alt="Như Hexi"
                                    src={require('@/assets/images/ab67706f000000029cf2e21a96f217de5d3abf60.jpg')}
                                    sx={{ bgcolor: green[500] }}
                                    className={cx('memberAva')}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        Như Hexi
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        16 tháng 11 lúc 19:57
                                    </span>
                                </div>
                                <Button join>Join</Button>
                            </div>
                            <div className={cx('newfeedStatus')}>
                                <span>
                                    Vẻ đẹp không nằm trên gò má của người thiếu
                                    nữ
                                    <br />
                                    Mà nó nằm trong ánh mắt của kẻ si tình ♥️
                                </span>
                            </div>
                            <div className={cx('newfeedContent')}>
                                <img
                                    alt="This is Justin Bieber"
                                    src={require('@/assets/images/2766ea65cd20247e7d31&quot.png')}
                                    className={cx('square')}
                                />
                            </div>
                            <div className={cx('newfeedAction')}>
                                <Checkbox
                                    //{...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <span>587</span>
                                <IconButton>
                                    <ChatBubbleOutlineIcon
                                        className={cx('newfeedActionIcon')}
                                    />
                                </IconButton>
                                <span>0</span>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center">
                    <div>
                        <Card className={cx('newfeedContainer')}>
                            <div className={cx('newfeedTitle-container')}>
                                <Avatar
                                    alt="LyLy"
                                    src={require('@/assets/images/ec5bdfdb1d3be658e037c8fbb2c27624.jpg')}
                                    sx={{ bgcolor: green[500] }}
                                    className={cx('memberAva')}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        LyLy
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        16 tháng 11 lúc 14:13
                                    </span>
                                </div>
                                <Button join>Join</Button>
                            </div>
                            <div className={cx('newfeedStatus')}>
                                <span>
                                    CaCa và LyLy cùng 2 bạn khán giả nhí dễ
                                    thương 😝
                                </span>
                            </div>
                            <div className={cx('newfeedContent')}>
                                <img
                                    alt="This is Justin Bieber"
                                    src={require('@/assets/images/25abf9a8deed37b36efc&quot.png')}
                                    className={cx('square')}
                                />
                            </div>
                            <div className={cx('newfeedAction')}>
                                <Checkbox
                                    //{...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <span>587</span>
                                <IconButton>
                                    <ChatBubbleOutlineIcon
                                        className={cx('newfeedActionIcon')}
                                    />
                                </IconButton>
                                <span>0</span>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center">
                    <div>
                        <Card className={cx('newfeedContainer')}>
                            <div className={cx('newfeedTitle-container')}>
                                <Avatar
                                    alt="Trương Thế Vinh"
                                    src={require('@/assets/images/f5cb17d56f01c8c6658e30cebb0a3c45_1513829288.jpg')}
                                    sx={{ bgcolor: green[500] }}
                                    className={cx('memberAva')}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        Trương Thế Vinh
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        16 tháng 11 lúc 00:06
                                    </span>
                                </div>
                                <Button join>Join</Button>
                            </div>
                            <div className={cx('newfeedStatus')}>
                                <span>Diện đồ đi chơi thôi</span>
                            </div>
                            <div className={cx('newfeedContent')}>
                                <img
                                    alt="This is Justin Bieber"
                                    src={require('@/assets/images/c4fe1bfe3cbbd5e58caa&quot.png')}
                                    className={cx('square')}
                                />
                            </div>
                            <div className={cx('newfeedAction')}>
                                <Checkbox
                                    //{...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <span>587</span>
                                <IconButton>
                                    <ChatBubbleOutlineIcon
                                        className={cx('newfeedActionIcon')}
                                    />
                                </IconButton>
                                <span>0</span>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center">
                    <div>
                        <Card className={cx('newfeedContainer')}>
                            <div className={cx('newfeedTitle-container')}>
                                <Avatar
                                    alt="Huỳnh James"
                                    src={require('@/assets/images/3eefd9309082ed0bba93b88c39d8ffee_1512529942.jpg')}
                                    sx={{ bgcolor: green[500] }}
                                    className={cx('memberAva')}
                                />
                                <div className={cx('memberDescription')}>
                                    <span className={cx('memberName')}>
                                        Huỳnh James
                                    </span>
                                    <span className={cx('memberStatus')}>
                                        16 tháng 11 lúc 00:06
                                    </span>
                                </div>
                                <Button join>Join</Button>
                            </div>
                            <div className={cx('newfeedStatus')}>
                                <span>
                                    Tú từng nói là .......... Phan Thiết zính
                                    lắm, zính ngay bà Diệu Nhi ❤🤵👰
                                </span>
                            </div>
                            <div className={cx('newfeedContent')}>
                                <img
                                    alt="This is Justin Bieber"
                                    src={require('@/assets/images/31deebdecc9b25c57c8a&quot.png')}
                                    className={cx('square')}
                                />
                            </div>
                            <div className={cx('newfeedAction')}>
                                <Checkbox
                                    //{...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                                <span>587</span>
                                <IconButton>
                                    <ChatBubbleOutlineIcon
                                        className={cx('newfeedActionIcon')}
                                    />
                                </IconButton>
                                <span>0</span>
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default News;
