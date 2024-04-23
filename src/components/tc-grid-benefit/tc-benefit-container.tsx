import { Component, h } from "@stencil/core";

@Component({
  tag: "tc-k-container",
  shadow: true,
  styleUrl: "tc-benefit-container.css",
})
export class TcContainer {
  render() {
    return (
      <div class="flex flex-col gap-8 md:flex-row">
        <slot></slot>
      </div>
    );
  }
}
