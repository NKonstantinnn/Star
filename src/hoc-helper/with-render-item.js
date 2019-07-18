import React from 'react';

const withRenderItem = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped { ...props } renderItem={ fn }>
            </Wrapped>
        );
    };
};

export default withRenderItem;