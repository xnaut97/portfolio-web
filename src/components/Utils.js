import React from 'react';

class Utils extends React.Component {
    static openURL = (url) => {
        if (url)
            window.open(url, "_blank", "noreferrer");
    }
}

export default Utils