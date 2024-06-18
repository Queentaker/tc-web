import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-grid-container",
  shadow: true,
  styleUrl: "tc-grid-container.css",
})
export class TcGridContainer {
  @Prop() columns: number = 2; // Default to 2 columns

  render() {
    const gridClasses = `grid ${this.getGridClasses()}`;
    return (
      <div class={gridClasses}>
        <slot></slot>
      </div>
    );
  }

  private getGridClasses(): string {
    switch (this.columns) {
      case 2:
        return 'grid-cols-2 gap-8 md:grid-cols-2 md:gap-16'; // Config for 2 columns
      case 3:
        return 'sm:grid-cols-2 gap-10 md:grid-cols-3 md:gap-12'; // Config for 3 columns
      case 4:
        return 'grid-cols-4 gap-12 md:grid-cols-4 md:gap-8 sm:grid-cols-3 sm:gap-2'; // Config for 4 columns
      case 5:
        return 'grid-cols-5 gap-14 md:grid-cols-5 md:gap-4'; // Config for 5 columns
      default:
        return `grid-cols-${this.columns} gap-8`; // Default config for other values
    }
  }
}
