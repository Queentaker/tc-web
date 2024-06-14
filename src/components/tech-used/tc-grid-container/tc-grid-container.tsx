import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-grid-container",
  shadow: true,
  styleUrl: "tc-grid-container.css",
})
export class TcGridContainer {
  @Prop() columns: number = 2; // Default to 2 columns
  @Prop() mdColumns: number = 3; // Default to 3 columns on medium screens
  @Prop() gap: number = 8; // Default gap
  @Prop() mdGap: number = 16; // Default gap on medium screens

  render() {
    const gridClasses = `grid grid-cols-${this.columns} gap-${this.gap} md:gap-${this.mdGap} md:grid-cols-3`;
    return (
      <div class={gridClasses}>
        <slot></slot>
      </div>
    );
  }
}
