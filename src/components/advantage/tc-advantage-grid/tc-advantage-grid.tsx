import { Component, h } from "@stencil/core";

@Component({
  tag: "tc-advantage-grid",
  styleUrl: "tc-advantage-grid.css",
  shadow: true,
})
export class PrequisiteContainer {
  render() {
    return (
      <div class="grid grid-cols-4 gap-4 md:gap-16 md:grid-cols-4">
        <slot> </slot>
      </div>
    );
  }
}
