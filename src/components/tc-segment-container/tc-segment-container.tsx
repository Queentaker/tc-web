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
        <div class="px-4 py-8 md:p-16 border-0 border-t border-gray-200 border-solid font-sans font-semibold">
          <div class="m-auto max-w-[90rem] font-semibold">
            {this.segTitle && (
              <h3 class="mb-12 text-3xl md:text-4xl text-center font-sans font-semibold">
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
