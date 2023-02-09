import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/IconButton';
import HearingIcon from '@mui/icons-material/Hearing';
import Fade from '@mui/material/Fade';

import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import Styles from './Listening.module.scss';
import { Collapse, Grow } from '@mui/material';

const cx = classNames.bind(Styles);

function Listening() {
    const navigate = useNavigate();

    function wait(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }

    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    async function goToPage() {
        setChecked((prev) => !prev);
        await wait(5000);
        navigate(`/result`);
    }

    return (
        <div className={cx('wrapper')}>
            <Fade in={checked}>
                <h1>Discover, search, and play any song</h1>
            </Fade>
            <Collapse in={!checked}>
                <div className={cx('is-animetion')}>
                    <span>L</span>
                    <span>i</span>
                    <span>s</span>
                    <span>t</span>
                    <span>e</span>
                    <span>n</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </Collapse>
            <Collapse in={checked}>
                <IconButton
                    className={cx('hearingbtn')}
                    size="large"
                    onClick={goToPage}
                >
                    <HearingIcon className={cx('hearingicon')} />
                </IconButton>
            </Collapse>
            <Collapse in={!checked}>
                <div className={cx('container')}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </Collapse>
            <Fade in={checked}>
                <h3>Tap to identify music or sing/hum</h3>
            </Fade>
            <Grow in={!checked}>
                <div>
                    <Button
                        className={cx('cancle-hearing-btn')}
                        onClick={handleChange}
                    >
                        Cancle
                    </Button>
                </div>
            </Grow>
        </div>
    );
}

export default Listening;
