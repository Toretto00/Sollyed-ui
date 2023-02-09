import * as React from 'react';
import classNames from 'classnames/bind';
import Styles from './SearchResult.module.scss';

import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Collapse } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const cx = classNames.bind(Styles);

function SearchResult() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <Grid container spacing={4}>
                <Grid xs={4}>
                    <h2>Top result</h2>
                    <Card className={cx('result-container')}>
                        <CardActionArea
                            className={cx('top-result-card')}
                            onMouseEnter={handleChange}
                            onMouseLeave={handleChange}
                        >
                            <CardContent
                                className={cx('top-result-card-container')}
                            >
                                <img
                                    alt="JustaTee"
                                    src={require('@/assets/images/JustaTee.jpg')}
                                />
                                <Typography variant="h3" component="div">
                                    JustaTee
                                </Typography>
                                <Typography variant="h5">ARTIST</Typography>
                            </CardContent>
                            <Collapse in={checked} className={cx('playbtn')}>
                                <IconButton size="large">
                                    <PlayArrowIcon></PlayArrowIcon>
                                </IconButton>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={8}>
                    <h2>Songs</h2>
                    <div className={cx('song-container')} direction="row">
                        <div className={cx('play-btn-container')}>
                            <PlayArrowIcon
                                className={cx('play-btn')}
                            ></PlayArrowIcon>
                        </div>
                        <img
                            alt="Just the Two of Us (feat. Bill Withers)"
                            src={require('@/assets/images/ab67616d00004851472fbc1d5743c7d3c75b9ec0.jpg')}
                        />
                        <div className={cx('song-title-container')}>
                            <span className={cx('title-song')}>
                                Just the Two of Us (feat. Bill Withers)
                            </span>
                            <span className={cx('song-describe')}>
                                Grover Washington, Jr., Bill Withers
                            </span>
                        </div>
                        <div className={cx('like-container')}>
                            <FavoriteBorderIcon className={cx('like-btn')} />
                            <FavoriteIcon
                                className={cx('liked-btn')}
                            ></FavoriteIcon>
                        </div>
                        <span className={cx('song-time')}>7:18</span>
                    </div>
                    <div className={cx('song-container')} direction="row">
                        <div className={cx('play-btn-container')}>
                            <PlayArrowIcon
                                className={cx('play-btn')}
                            ></PlayArrowIcon>
                        </div>
                        <img
                            alt="Đi về nhà"
                            src={require('@/assets/images/ab67616d000048512a8efe3bfa6a605fcf863237.jpg')}
                        />
                        <div className={cx('song-title-container')}>
                            <span className={cx('song-title-song')}>
                                Đi Về Nhà
                            </span>
                            <span className={cx('song-describe')}>
                                Đen, JustaTee
                            </span>
                        </div>
                        <div className={cx('like-container')}>
                            <FavoriteBorderIcon className={cx('like-btn')} />
                            <FavoriteIcon
                                className={cx('liked-btn')}
                            ></FavoriteIcon>
                        </div>
                        <span className={cx('song-time')}>3:20</span>
                    </div>
                    <div className={cx('song-container')} direction="row">
                        <div className={cx('play-btn-container')}>
                            <PlayArrowIcon
                                className={cx('play-btn')}
                            ></PlayArrowIcon>
                        </div>
                        <img
                            alt="Just A Dream"
                            src={require('@/assets/images/ab67616d00004851a533111c913b4945e9f647b7.jpg')}
                        />
                        <div className={cx('song-title-container')}>
                            <span className={cx('title-song')}>
                                Just A Dream
                            </span>
                            <span className={cx('song-describe')}>
                                Joshep Vincent, Jason Chen
                            </span>
                        </div>
                        <div className={cx('like-container')}>
                            <FavoriteBorderIcon className={cx('like-btn')} />
                            <FavoriteIcon
                                className={cx('liked-btn')}
                            ></FavoriteIcon>
                        </div>
                        <span className={cx('song-time')}>2:28</span>
                    </div>
                    <div className={cx('song-container')} direction="row">
                        <div className={cx('play-btn-container')}>
                            <PlayArrowIcon
                                className={cx('play-btn')}
                            ></PlayArrowIcon>
                        </div>
                        <img
                            alt="Thằng Điên"
                            src={require('@/assets/images/ab67616d0000485102dc41ad81138aa3c53d2b98.jpg')}
                        />
                        <div className={cx('song-title-container')}>
                            <span className={cx('title-song')}>Thằng Điên</span>
                            <span className={cx('song-describe')}>
                                JustaTee, Phuong Ly
                            </span>
                        </div>
                        <div className={cx('like-container')}>
                            <FavoriteBorderIcon className={cx('like-btn')} />
                            <FavoriteIcon
                                className={cx('liked-btn')}
                            ></FavoriteIcon>
                        </div>
                        <span className={cx('song-time')}>3:54</span>
                    </div>
                </Grid>
            </Grid>
            <h2 className={cx('title-container')}>Featuring JustaTee</h2>
            <Grid container spacing={2}>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Hot Hits Vietnam"
                                src={require('@/assets/images/ab67706f00000002458bdfdbdfbbaac8382e6a1e.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Hot Hits Vietnam</p>
                                <p className={cx('description')}>By Spotify</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Hip-hop Việt"
                                src={require('@/assets/images/ab67706f0000000239908113fab34ef76aa17c78.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Hip-hop Việt</p>
                                <p className={cx('description')}>By Spotify</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="This Is JustaTee"
                                src={require('@/assets/images/37i9dQZF1DZ06evO1ZSiIg-default.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>This Is JustaTee</p>
                                <p className={cx('description')}>By Spotify</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* artist */}
            <h2 className={cx('title-container')}>Artist</h2>
            <Grid container spacing={2}>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="JustaTee"
                                src={require('@/assets/images/JustaTee.jpg')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>JustaTee</p>
                                <p className={cx('description')}>Artist</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="JustinBieber"
                                src={require('@/assets/images/JustinBieber.jpg')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Justin Bieber</p>
                                <p className={cx('description')}>Artist</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Charlie Puth"
                                src={require('@/assets/images/ab6761610000f1784e2e2c78de847c4d9b12d32f.jpg')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Charlie Puth</p>
                                <p className={cx('description')}>Artist</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Justin Timberlake"
                                src={require('@/assets/images/JustinTimberlake.jpg')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Justin Timberlake</p>
                                <p className={cx('description')}>Artist</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Justine Skye"
                                src={require('@/assets/images/JustineSkype.jpg')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Justine Skype</p>
                                <p className={cx('description')}>Artist</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* album */}
            <h2 className={cx('title-container')}>Album</h2>
            <Grid container spacing={2}>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Đi về nhà"
                                src={require('@/assets/images/ab67616d00001e022a8efe3bfa6a605fcf863237.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Đi Về Nhà</p>
                                <p className={cx('description')}>
                                    2020 * Đen, JustaTee
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Thằng điên"
                                src={require('@/assets/images/ab67616d00001e0202dc41ad81138aa3c53d2b98.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Thằng Điên</p>
                                <p className={cx('description')}>
                                    2022 * JustaTee, Phuong Ly
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Làm gì phải hốt"
                                src={require('@/assets/images/ab67616d00001e020420755aab39355af7745398.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Làm Gì Phải Hốt</p>
                                <p className={cx('description')}>
                                    2020 * JustaTee, Hoang Thuy Linh, Đen
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Justice"
                                src={require('@/assets/images/ab67616d00001e02e6f407c7f3a0ec98845e4431.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Justice</p>
                                <p className={cx('description')}>
                                    2021 * Justin Bieber
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Purpose (Deluxe)"
                                src={require('@/assets/images/ab67616d00001e02f46b9d202509a8f7384b90de.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Purpose (Deluxe)</p>
                                <p className={cx('description')}>
                                    2015 * Justin Bieber
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Changes"
                                src={require('@/assets/images/ab67616d00001e027fe4a82a08c4f0decbeddbc6.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Changes</p>
                                <p className={cx('description')}>
                                    2020 * Justin Bieber
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* Playlists */}
            <h2 className={cx('title-container')}>Playlists</h2>
            <Grid container spacing={2}>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="This is Justin Bieber"
                                src={require('@/assets/images/ab67706f000000029cf2e21a96f217de5d3abf60.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>
                                    This Is Justin Bieber
                                </p>
                                <p className={cx('description')}>By Spotify</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="This is JustaTee"
                                src={require('@/assets/images/37i9dQZF1DZ06evO1ZSiIg-default.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>This Is JustaTee</p>
                                <p className={cx('description')}>By Spotify</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="just hits"
                                src={require('@/assets/images/ab67706f00000002841a75cd939361e5cc327df9.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>just hits</p>
                                <p className={cx('description')}>By Spotify</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* Youtube */}
            <div className={cx('title-container')}>
                <img
                    alt="This is Justin Bieber"
                    src={require('@/assets/images/317714_video_youtube_icon.png')}
                    className={cx('square')}
                />
                <h2>Youtube</h2>
            </div>
            <Grid container spacing={2}>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Just Believe"
                                src={require('@/assets/images/ab67656300005f1f45e81135152fe271e26249a5.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Just Believe</p>
                                <p className={cx('description')}>
                                    JUSTIN BAILEY
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="This Justin"
                                src={require('@/assets/images/ab67656300005f1f30cc8129ab70db7f9fc13ec6.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>This Justin</p>
                                <p className={cx('description')}>
                                    Justin Miller
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* Spotify */}
            <div className={cx('title-container')}>
                <img
                    alt="This is Justin Bieber"
                    src={require('@/assets/images/1298766_spotify_music_sound_icon.png')}
                    className={cx('square')}
                />
                <h2>Spotify</h2>
            </div>
            <Grid container spacing={2}>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Justin Timberlake"
                                src={require('@/assets/images/JustinTimberlake.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Justin Timberlake</p>
                                <p className={cx('description')}></p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Jusuf Reinhard"
                                src={require('@/assets/images/ab6775700000ee8544dd77fa5064a73e308b5178.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Jusuf Reinhard</p>
                                <p className={cx('description')}></p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Just Dance"
                                src={require('@/assets/images/ab6775700000ee8523b57af9116aba0886d15700.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Just Dance</p>
                                <p className={cx('description')}></p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="Justin Grant"
                                src={require('@/assets/images/13083201_10153786702953645_4239420479666557992_n.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>Justin Grant</p>
                                <p className={cx('description')}></p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="jus"
                                src={require('@/assets/images/ab6775700000ee85e1cda65c781512bde4b40169.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>jus</p>
                                <p className={cx('description')}></p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid sx={4}>
                    <Card className={cx('result-container')}>
                        <CardActionArea className={cx('card')}>
                            <img
                                alt="JustMe"
                                src={require('@/assets/images/ab6775700000ee85cecdd39b367f3993310df76c.jpg')}
                                className={cx('square')}
                            />
                            <CardContent className={cx('card-content')}>
                                <p className={cx('name')}>JustMe</p>
                                <p className={cx('description')}></p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchResult;
