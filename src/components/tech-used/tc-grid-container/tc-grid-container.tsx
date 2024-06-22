import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-grid-container",
  shadow: true,
  styleUrl: "tc-grid-container.css",
})
export class TcGridContainer {
  @Prop() mdColumns: number = 3;
  @Prop() columns: number = 2;
  @Prop() gap: string ="m"


   // Default to 2 columns

  render() {
    const gridClasses = `grid ${this.getMdColumns()} ${this.getColumns()} ${this.getGap()}`;
    return (
      <div class={gridClasses}>
        <slot></slot>
      </div>
    );
  }

  private getMdColumns(): string {
    switch (this.mdColumns) {
      case 2:
        return 'md:grid-cols-2';
      case 3:
        return 'md:grid-cols-3 '; 
      case 4:
        return 'md:grid-cols-4 '; 
      case 5:
        return 'md:grid-cols-5 ';
      case 6:
        return 'md:grid-cols-6';
      default:
        return `grid-cols-${this.mdColumns}`; 
    }
  }
  
  private getColumns(): string {
    switch (this.columns) {
      case 2:
        return 'grid-cols-2 ';
      case 3:
        return 'grid-cols-3'; 
      case 4:
        return 'grid-cols-4';
      case 5:
        return 'grid-cols-5';
      case 6:
        return 'grid-cols-6';
      default:
        return `grid-cols-${this.columns}`; 
    }
  }

  private getGap(): string {
    switch (this.gap) {
      case 's':
        return 'gap-2 md:gap-4';
      case 'm':
        return 'gap-4 md:gap-8';
      case 'l':
        return 'gap-8 md:gap-12';
      case 'xl':
        return 'gap-12 md:gap-16';
      default:
        return `gap-4 md:gap-8`;
    }
  }
}
