//montar tudo
import React from "react";
import Display from "./display";
import Comands from "./comands";

export default () => {
    return (
        <div class="calculator">
            <div class='border-top'></div>
            <Display></Display>
            <Comands />
        </div>
    )
}

