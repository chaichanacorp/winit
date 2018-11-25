import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 5,
    },
    bigAvatar: {
        width: 60,
        height: 60,
        marginBottom: 15,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div className={classes.row}>
            <Avatar
                alt="Adelle Charles"
                src="https://image.dek-d.com/contentimg/2017-2/ratt/content/meetstar/4/pic3.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
        </div>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);