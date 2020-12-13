import React from "react";

import { Button } from "@material-ui/core";

const ThirdStep = ({ upperMargin, testData }) => {
    return (
        <>
            <Button
                className={upperMargin}
                onClick={() => console.log(testData)}
                size='large'
                color='primary'
                variant='contained'>
                Publish
            </Button>
        </>
    );
};

export default ThirdStep;
