import { Component, h } from '@stencil/core';

@Component({
    tag: 'tc-prerequisite-container', 
    styleUrl: 'tc-prerequisite-container.css',
    shadow: true 
})
export class PrequisiteContainer {
render() {
    return (
    <div class="grid grid-cols-2 gap-8 md:gap-16 md:grid-cols-2">
        <slot> </slot>
    </div>
    )
}
}