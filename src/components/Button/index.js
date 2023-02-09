import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);

function Button({
    to,
    target,
    href,
    className,
    primary,
    text,
    menuItem,
    sidebarItem,
    communityItem,
    communityTitle,
    communityTitleAction,
    join,
    children,
    separate,
    red,
    leftIcon,
    rightIcon,
    user,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.target = target;
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        separate,
        className,
        primary,
        text,
        sidebarItem,
        communityItem,
        communityTitle,
        communityTitleAction,
        menuItem,
        join,
        user,
        red,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
