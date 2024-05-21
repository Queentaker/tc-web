import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'tc-open-positions',
  styleUrl: 'tc-open-positions.css',
  shadow: true
})
export class OpenPositions {
  @Prop() positionTitle: string;  // Corrected the property name spelling.

  render() {
    return (
      <div class="mt-8 md:mt-0">
        <h4 class="text-xl font-bold font-sans">
          Open Positions as {this.positionTitle}
        </h4>
        <div class="slot-container">
          <slot> </slot>
        </div>
      </div>
    );
  }

  private handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const nodes = slot.assignedNodes({flatten: true});
    if (nodes.length === 0) {
      this.renderFallbackMessage();
    }
  }

  private renderFallbackMessage() {
    const container = document.querySelector('.slot-container');
    container.innerHTML = `
      <div class="p-4 border-2 border-gray-200 border-solid rounded">
        <h5 class="text-lg font-normal font-sans">
          Currently no positions advertised
        </h5>
      </div>
    `;
  }
}