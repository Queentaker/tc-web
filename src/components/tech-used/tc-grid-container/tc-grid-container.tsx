import { Component, h } from "@stencil/core";

@Component({
  tag: "tc-grid-container",
  shadow: true,
  styleUrl: "tc-grid-container.css",
})
export class TcContainer {
  render() {
    return (
      <div class="grid grid-cols-2 gap-8 md:gap-8 md:grid-cols-3">
        <slot> </slot>
      </div>
    );
  }
}
