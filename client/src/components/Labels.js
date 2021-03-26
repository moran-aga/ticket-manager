import React from 'react';

function Labels({labels}) {
    return (
        <div className = "labels">
            {labels&&labels.map(label => <span key = {`${label}-label`} className = "label">{label}</span>)}
        </div>
    );
}

export default Labels;