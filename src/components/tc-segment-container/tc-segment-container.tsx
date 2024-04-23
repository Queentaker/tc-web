// segment-container.tsx
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'segment-container',
  styleUrl: 'tc-segment-container.css', // Your CSS file for styles
  shadow: true // Use Shadow DOM for style encapsulation
})
export class SegmentContainer {
  @Prop() id: string;
  @Prop() segTitle: string;
  @Prop() backgroundColor?: string;

  render() {
    const style = this.backgroundColor ? { 'background-color': this.backgroundColor } : {};

    return (
      <Host id={this.id} style={style}>
        <div class="px-4 py-8 md:p-16 border-0 border-t border-gray-200 border-solid">
          <div class="m-auto max-w-[90rem]">
            {this.segTitle && (
              <h3 class="mb-12 text-3xl md:text-4xl text-center font-bold">
                {this.segTitle}
              </h3>
            )}
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
