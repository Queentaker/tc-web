// segment-container.tsx
import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "segment-container",
  styleUrl: "tc-segment-container.css",
  shadow: true,
})
export class SegmentContainer {
  @Prop() segTitle: string;
  @Prop() backgroundColor: string;

  render() {
    const style = this.backgroundColor
      ? { "background-color": this.backgroundColor }
      : {};

    return (
      <Host style={style}>
        <div class="px-2 py-4 p-8  md:px-4 md:py-8 md:p-16 border-0 border-t border-white border-solid font-sans font-normal">
          <div class="m-auto max-w-[90rem]">
            {this.segTitle && (
              <h3 class="mb-12 text-2xl md:text-4xl text-center font-semibold">
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
