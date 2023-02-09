import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Slider from '@mui/material/Slider';

import classNames from 'classnames/bind';
import Styles from './MusicPlayer.module.scss';

const cx = classNames.bind(Styles);

const MusicPlayer = ({ audioSrc }) => {
    const [play, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = React.useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });
    }, []);

    const togglePlay = () => {
        setPlay(!play);
        if (play) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleSliderChange = (event, newValue) => {
        setCurrentTime(newValue);
        audioRef.current.currentTime = newValue;
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.currentTime = currentTime;
    }, [currentTime]);

    useEffect(() => {
        const audio = audioRef.current;
        if (play) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [play]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('musicPlayerContainer')}>
                <img
                    alt="This is Justin Bieber"
                    src={require('@/assets/images/ab67616d0000b273f909731198469e69f5809083.jpg')}
                />
                <audio ref={audioRef} src={audioSrc} />
                <div className={cx('musicPlayerAction')}>
                    <IconButton
                        aria-label="Previous"
                        className={cx('playButton')}
                    >
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton
                        aria-label="play/pause"
                        onClick={togglePlay}
                        className={cx('playButton')}
                    >
                        {play ? (
                            <PauseCircleFilledIcon />
                        ) : (
                            <PlayCircleFilledIcon />
                        )}
                    </IconButton>

                    <IconButton aria-label="next" className={cx('playButton')}>
                        <SkipNextIcon />
                    </IconButton>
                </div>
                <div className={cx('musicTitleContainer')}>
                    <span className={cx('musicTitle')}>Waitting for you</span>
                    <span className={cx('musicSubTitle')}>MONO, Onionn.</span>
                </div>
                <div className={cx('sliderContainer')}>
                    <span className={cx('timeDisplay')}>0:00</span>
                    <Slider
                        value={currentTime}
                        onChange={handleSliderChange}
                        max={duration}
                        aria-labelledby="continuous-slider"
                        className={cx('slider')}
                    />
                    <span className={cx('timeDisplay')}>0:00</span>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
